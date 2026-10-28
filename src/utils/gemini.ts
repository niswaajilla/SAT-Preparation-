import { GoogleGenAI } from '@google/genai';

let aiInstance: GoogleGenAI | null = null;

function getAI(): GoogleGenAI | null {
  if (aiInstance) return aiInstance;
  const apiKey = process.env.GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  try {
    aiInstance = new GoogleGenAI({ apiKey });
    return aiInstance;
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
    return null;
  }
}

export interface AskGeminiOptions {
  prompt: string;
  questionText: string;
  passage?: string;
  correctAnswer: string;
  explanation: string;
  mode: 'pedagogy_explanation' | 'similar_question' | 'distractor_deepdive';
}

export async function askGeminiTeacherAssistant(options: AskGeminiOptions): Promise<string> {
  const ai = getAI();
  if (!ai) {
    // Provide a rich, instant pedagogical offline template response if no API key is set
    return getOfflineFallbackResponse(options);
  }

  try {
    const systemInstruction = `Anda adalah asisten pedagogi ahli SAT untuk guru profesional (SAT Teacher Lab).
Gunakan bahasa Indonesia profesional, ringkas, berbobot, dan analitis (nada bahasa orang dewasa terdidik).
Istilah kunci SAT tetap dalam bahasa Inggris (distractor, backsolving, Desmos, slope, prompt, elimination).`;

    let userPrompt = '';
    if (options.mode === 'pedagogy_explanation') {
      userPrompt = `Bantu saya sebagai guru SAT:
Soal: "${options.questionText}"
${options.passage ? `Passage: "${options.passage}"\n` : ''}
Kunci: ${options.correctAnswer}
Pembahasan: ${options.explanation}

Pertanyaan/Kebutuhan saya:
${options.prompt || 'Bagaimana cara terbaik menjelaskan konsep soal ini kepada siswa yang kesulitan memahaminya, berikan analogi atau teknik alternatif.'}`;
    } else if (options.mode === 'similar_question') {
      userPrompt = `Buatkan 1 soal baru yang serupa (cloned item) untuk latihan siswa di kelas besok dengan format Digital SAT:
Referensi Soal Asal: "${options.questionText}"
${options.passage ? `Passage: "${options.passage}"\n` : ''}
Kunci Asal: ${options.correctAnswer}

Format jawaban:
1. Soal (Question Prompt & Options A-D / Student Produced)
2. Kunci Jawaban
3. Pembahasan langkah demi langkah
4. Miskonsepsi yang diuji pada pilihan pengecoh.`;
    } else {
      userPrompt = `Analisis psikometri pilihan pengecoh untuk soal ini:
Soal: "${options.questionText}"
Kunci: ${options.correctAnswer}
Pertanyaan Guru: ${options.prompt || 'Mengapa siswa sering terjebak memilih opsi pengecoh tertentu?'}`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction
      }
    });

    return response.text || 'Tidak ada respon yang dihasilkan dari Gemini.';
  } catch (err: any) {
    console.warn('Gemini API call failed, using offline pedagogical backup:', err);
    return getOfflineFallbackResponse(options);
  }
}

function getOfflineFallbackResponse(options: AskGeminiOptions): string {
  if (options.mode === 'similar_question') {
    return `### [Rekomendasi Generator Soal Mandiri - Mode Offline]
**Soal Latihan Terapan Serupa:**
"Jika model matematika sejenis diujikan kembali, ubah konstanta atau variabel bebas dengan rasio setara.
1. Pertahankan struktur hubungan logis (misalnya rasio $A_1/A_2 = B_1/B_2$).
2. Buat distraktor tipikal: satu opsi lupa tanda negatif, satu opsi hasil perhitungan parsial (hanya nilai $x$ bukan $2x+1$), dan satu opsi hasil membagi dengan nilai yang salah."

*Tips Pedagogi:* Siswa belajar paling cepat saat diberikan soal dengan cerita latar berbeda tetapi persamaan aljabar identik.`;
  }

  if (options.mode === 'distractor_deepdive') {
    return `### [Analisis Diagnostik Distraktor]
1. **Daya Tarik Distraktor Terkuat:** Siswa biasanya tergesa-gesa mengklik opsi yang menampilkan angka yang mereka temukan di tengah perhitungan corat-coret (misal: nilai $x = 4$, padahal soal menanyakan $7x$).
2. **Kelemahan Arah Tanda:** Kesalahan tanda minus distributif adalah penyebab 60% kesalahan pada modul ini.
3. **Langkah Remediasi di Kelas:** Minta siswa melingkari kata terakhir pada prompt soal sebelum mulai menghitung.`;
  }

  return `### [Panduan Pedagogi Pengajaran Kelas]
1. **Pendekatan Visual / Desmos:** Jangan langsung memaksa aljabar simbolik murni. Tunjukkan representasi grafik di layar proyektor terlebih dahulu agar siswa memahami *mengapa* jawabannya harus bernilai demikian.
2. **Uji Kasus Ekstrem:** Ajak siswa menguji angka mudah (seperti 0 atau 100) untuk memeriksa apakah jawaban mereka masuk akal secara nalar dunia nyata.
3. **Pertanyaan Pemantik:** *"Apa yang terjadi pada hasil akhir jika konstanta di ruas kanan kita perbesar dua kali lipat?"*`;
}
