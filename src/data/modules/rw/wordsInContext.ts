import { ModuleData } from '../../../types';

export const wordsInContextModule: ModuleData = {
  id: 'words-in-context',
  title: 'Words in Context',
  domain: 'reading_writing',
  description: 'Penguasaan kosakata tingkat lanjut, analisis petunjuk konteks (sinonim, kontras, sebab-akibat), nuansa makna (connotation), dan eliminasi distraktor kata dekat.',
  targetPacingSeconds: 71,
  entryTicket: [
    {
      id: 'wic-entry-1',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Despite initial skepticism regarding the viability of deep-sea geothermal vents as energy sources, recent oceanographic surveys have provided ______ data, convincing previously hesitant engineers that sustained power generation is feasible.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['compelling', 'ambiguous', 'preliminary', 'superfluous'],
      correctAnswer: 'A',
      explanation: 'Teks menyatakan bahwa para insinyur yang sebelumnya ragu kini menjadi yakin ("convincing previously hesitant engineers"). Oleh karena itu, data yang ditemukan harus bersifat kuat, meyakinkan, dan berbobot. Kata "compelling" berarti sangat meyakinkan dan menuntut persetujuan secara logis.',
      distractorAnalysis: {
        B: '"Ambiguous" (bermakna ganda/samar) justru akan menambah keraguan, bertolak belakang dengan konteks.',
        C: '"Preliminary" (tahap awal) menggoda siswa karena survei baru dilakukan, namun data awal belum tentu mampu meyakinkan pihak yang ragu.',
        D: '"Superfluous" (berlebihan/tidak diperlukan) memiliki konotasi negatif yang tidak cocok.'
      },
      subtopic: 'Tone and Conviction Context',
      difficulty: 'medium',
      hint: 'Cari petunjuk di kalimat: kata apa yang sejalan dengan "convincing previously hesitant engineers"?'
    },
    {
      id: 'wic-entry-2',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'The archival preservationist handled the fourteenth-century parchment with ______ care, knowing that the slightest errant touch or sudden fluctuation in relative humidity could irreparably fracture the brittle vellum.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['meticulous', 'cursory', 'perfunctory', 'indifferent'],
      correctAnswer: 'A',
      explanation: 'Teks menjelaskan bahwa sentuhan salah sekecil apa pun ("slightest errant touch") dapat merusak naskah kuno yang rapuh. Oleh sebab itu, perlakuan yang dibutuhkan harus sangat cermat, teliti, dan hati-hati. Kata "meticulous" berarti sangat teliti dan detail.',
      distractorAnalysis: {
        B: '"Cursory" berarti sepintas lalu atau tergesa-gesa tanpa ketelitian.',
        C: '"Perfunctory" berarti dilakukan secara formalitas tanpa perhatian tulus.',
        D: '"Indifferent" berarti acuh tak acuh.'
      },
      subtopic: 'Extreme Care & Precision Adjectives',
      difficulty: 'easy',
      hint: 'Naskah kuno rapuh butuh perlakuan yang amat teliti dan berhati-hati.'
    },
    {
      id: 'wic-entry-3',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Unlike traditional polymers that degrade predictably when exposed to ultraviolet radiation, this novel synthetic composite proved remarkably ______ to photodegradation, retaining its structural integrity even after months of intense simulated sunlight.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['resilient', 'vulnerable', 'impervious', 'susceptible'],
      correctAnswer: 'C',
      explanation: 'Perhatikan frasa kontras "Unlike traditional polymers that degrade... retaining its structural integrity even after months". Frasa "even after months" mengindikasikan bahwa material ini sama sekali tidak terpengaruh atau kebal terhadap fotodegradasi. Kata "impervious" (kebal/tidak dapat ditembus atau dipengaruhi) sangat presisi. Opsi "resilient" juga positif, namun "impervious" atau "resilient"? Mari periksa: "resilient" berarti mampu pulih setelah rusak, sedangkan "impervious" berarti sama sekali tidak terpengaruh. Di sini komposit mempertahankan integritas tanpa degradasi. "Impervious to" adalah kolokasi baku ilmiah.',
      distractorAnalysis: {
        A: '"Resilient" sering menggoda siswa karena bermakna kuat/tahan banting, namun resilient mengimplikasikan kemampuan pulih (bounce back) setelah mengalami tekanan, bukan ketidaktembusan mutlak.',
        B: '"Vulnerable" bertentangan dengan konteks retaining integrity.',
        D: '"Susceptible" (rentan) adalah kebalikan dari yang dibutuhkan.'
      },
      subtopic: 'Scientific Collocations & Degrees of Meaning',
      difficulty: 'hard',
      hint: 'Frasa "retaining structural integrity even after months" menandakan material kebal dan tidak terpengaruh.'
    },
    {
      id: 'wic-entry-4',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'The economist noted that while consumer confidence indices appeared robust on the surface, underlying wage stagnation threatened to ______ long-term household discretionary expenditure.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['stifle', 'bolster', 'augment', 'reconcile'],
      correctAnswer: 'A',
      explanation: 'Kata hubung konsesif "while... robust on the surface" memberi sinyal kontras: meskipun tampak kuat di luar, masalah stagnasi upah akan menekan atau menghambat ("stifle") pengeluaran rumah tangga.',
      distractorAnalysis: {
        B: '"Bolster" (memperkuat/mendorong) bertentangan dengan tanda kontras pelemahan.',
        C: '"Augment" (meningkatkan) berlawanan dengan dampak negatif dari "stagnation".',
        D: '"Reconcile" (mendamaikan) tidak masuk akal dalam relasi ekonomi ini.'
      },
      subtopic: 'Contrast Signal Words',
      difficulty: 'medium',
      hint: 'Frasa "while... robust" menandakan klausa berikutnya memuat dampak negatif: menghambat/menekan.'
    },
    {
      id: 'wic-entry-5',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Rather than issuing a sweeping prohibition that might spark public backlash, the municipal council adopted a more ______ strategy, introducing subtle micro-regulations phased in over several quarters.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['circumspect', 'belligerent', 'draconian', 'precipitous'],
      correctAnswer: 'A',
      explanation: 'Teks membedakan pendekatan dewan dengan "sweeping prohibition" (larangan menyeluruh yang gegabah). Mereka memilih peraturan halus bertahap untuk menghindari reaksi publik. Ini menunjukkan sikap yang sangat berhati-hati, bijaksana, dan memperhitungkan risiko politik. Kata "circumspect" berarti sangat berhati-hati dan waspada.',
      distractorAnalysis: {
        B: '"Belligerent" (agresif/suka berperang) bertolak belakang dengan penghindaran konflik.',
        C: '"Draconian" (sangat kejam/keras) adalah sinonim dari sweeping prohibition yang dihindari.',
        D: '"Precipitous" (terburu-buru/curam) bertentangan dengan strategi bertahap (phased in over several quarters).'
      },
      subtopic: 'Political Strategy and Nuance',
      difficulty: 'hard',
      hint: 'Dewan menghindari penolakan publik dengan langkah halus dan bertahap = sangat berhati-hati (circumspect).'
    }
  ],
  conceptSections: [
    {
      id: 'wic-c1',
      title: 'Tiga Kategori Petunjuk Konteks (Context Clues)',
      summary: 'Soal Words in Context Digital SAT tidak sekadar menguji hafalan kamus, melainkan ketepatan logika membaca arsitektur kalimat.',
      formulaBox: [
        'Petunjuk Keselarasan (Agreement/Elaboration): and, furthermore, that is, similarly, colon (:)',
        'Petunjuk Kontras (Contrast/Pivot): however, despite, although, whereas, rather than, yet',
        'Petunjuk Kausalitas (Cause/Effect): because, consequently, thus, thereby, led to'
      ],
      commonMistakes: [
        'Siswa memilih kata hanya karena kata tersebut terdengar "canggih" atau "akademik", padahal definisinya melenceng dari konteks kalimat.',
        'Siswa terjebak pada definisi primer kata dalam kamus sehari-hari, padahal SAT sering menguji definisi sekunder (misal: "qualify" = membatasi klausa, bukan lolos seleksi).'
      ],
      proTips: [
        'Teknik "Blind Fill": Tutup pilihan A-D dengan tangan, baca teks, dan isi bagian kosong dengan kata bahasa Inggris/Indonesia sederhana buatan sendiri (misal: "cautious" atau "strengthen"). Lalu cari opsi yang paling cocok dengan prediksi Anda.',
        'Waspadai "Distraktor Dekat": Jika ada dua kata berkonotasi positif, perhatikan kolokasi preposisi (misal: "impervious to" vs "resilient against").'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering mengira mereka harus mengetahui arti 100% kosakata di opsi. Faktanya, eliminasi berdasarkan konotasi (positif vs negatif) dan arah sinyal (searah vs berlawanan) sering kali menyisakan tepat 1 opsi yang masuk akal.'
        ],
        alternativeApproaches: [
          {
            name: 'Metode Polarisasi (+ / - / Netral)',
            description: 'Minta siswa memberi tanda plus (+) jika kalimat membutuhkan kata bermakna positif, minus (-) jika negatif, atau (0) jika deskriptif objektif.'
          }
        ],
        classroomAnalogy: 'Words in Context seperti potongan puzzle kunci: meskipun warnanya mirip, jika tepi lekukannya tidak cocok dengan potongan sekitarnya, potongan itu salah.',
        sparkQuestions: [
          'Mengapa dalam kalimat ilmiah, kata "impervious" lebih tepat daripada "tough" saat mendeskripsikan ketahanan bahan terhadap zat kimia?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'wic-ex-1',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Although the playwright’s early comedies were celebrated for their lively, ebullient wit, her later historical dramas struck a distinctly ______ tone, meditating somberly on the catastrophic costs of political factionalism.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['lugubrious', 'frivolous', 'sanguine', 'pedantic'],
      correctAnswer: 'A',
      explanation: 'Teks menggunakan kata sinyal "Although" untuk mengontraskan karya awal yang "lively, ebullient wit" (riang gembira) dengan karya drama sejarah berikutnya yang "meditating somberly on catastrophic costs" (merenung dengan suram). Oleh karena itu, kata yang dibutuhkan harus bermakna suram, sedih, atau penuh duka. Kata "lugubrious" berarti murung, suram, atau berduka cita.',
      distractorAnalysis: {
        B: '"Frivolous" (sepele/ringan) sejalan dengan komedi awal, bukan drama sejarah yang suram.',
        C: '"Sanguine" (optimis/penuh harapan) adalah lawan kata dari suram.',
        D: '"Pedantic" (kaku terpaku aturan teori) tidak menangkap nuansa kesedihan emosional.'
      },
      subtopic: 'Literary Tone Contrast',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Pemetaan Antonim Kontekstual',
          steps: [
            '1. Identifikasi kata sinyal kontras: "Although".',
            '2. Cari petunjuk langsung di klausa kedua: "meditating somberly".',
            '3. Cocokkan: somber = lugubrious (suram/murung).'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa mengabaikan klausa penjelas "meditating somberly" dan terjebak memilih sanguine karena mengira tone drama sejarah selalu heroik.'
    },
    {
      id: 'wic-ex-2',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'In the nineteenth century, geologists lacked radiometric dating methods and thus had to rely on ______ principles, determining whether one rock stratum was older or younger than another solely based on their relative superposition.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['relative', 'absolute', 'provisional', 'tangential'],
      correctAnswer: 'A',
      explanation: 'Teks menyatakan bahwa para geolog menentukan apakah suatu lapisan batu "older or younger than another solely based on their relative superposition". Konsep membandingkan usia satu batuan terhadap batuan lain tanpa angka tahun pasti adalah penanggalan "relatif" (relative dating).',
      distractorAnalysis: {
        B: '"Absolute" (mutlak) merujuk pada penanggalan radiometrik dengan angka tahun pasti yang justru TIDAK dimiliki oleh geolog saat itu.',
        C: '"Provisional" (bersifat sementara) tidak menangkap istilah teknis penanggalan geologi komparatif.',
        D: '"Tangential" (menyimpang/tidak relevan) tidak masuk akal dalam metodologi sains.'
      },
      subtopic: 'Scientific Domain Precision',
      difficulty: 'medium',
      methods: [
        {
          title: 'Metode Pengulangan Definisi Teks',
          steps: [
            '1. Amati frasa kunci: "whether one rock was older or younger than another... relative superposition".',
            '2. Definisi tersebut secara langsung mencerminkan kata "relative".'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa memilih absolute karena terbiasa mengasosiasikan sains dengan kepastian numerik.'
    },
    {
      id: 'wic-ex-3',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Far from presenting a unified ideological front, the delegates at the constitutional convention expressed ______ views on federal taxation, debating contentious proposals for weeks before reaching an uneasy compromise.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['disparate', 'homogeneous', 'unanimous', 'immutable'],
      correctAnswer: 'A',
      explanation: 'Frasa pembuka "Far from presenting a unified ideological front" (jauh dari pandangan yang bersatu) mengindikasikan bahwa pandangan para delegasi sangat berbeda-beda, beragam, dan bertentangan. Kata "disparate" berarti sangat berbeda dan tidak sejalan.',
      distractorAnalysis: {
        B: '"Homogeneous" (seragam) adalah sinonim dari unified front yang dibantah.',
        C: '"Unanimous" (aklamasi/semua sepakat) bertentangan total dengan "debating contentious proposals for weeks".',
        D: '"Immutable" (tidak dapat diubah) tidak menggambarkan variasi sudut pandang.'
      },
      subtopic: 'Idiomatic Inversion "Far from"',
      difficulty: 'medium',
      methods: [
        {
          title: 'Metode Pembalikan Frasa "Far from"',
          steps: [
            '1. Frasa "Far from X" berarti kenyataannya adalah "Lawan dari X".',
            '2. Lawan dari "unified" adalah berbeda/beragam = "disparate".'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa salah memahami "Far from" sebagai "Sangat dekat dengan" dan memilih kata yang berarti bersatu.'
    }
  ],
  practiceQuestions: [
    {
      id: 'wic-pr-1',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'The professor cautioned that the historical treaty was not a definitive declaration of peace, but merely a ______ cessation of hostilities designed to give both exhausted armies time to reorganize.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['temporary', 'perpetual', 'binding', 'retroactive'],
      correctAnswer: 'A',
      explanation: 'Teks mengontraskan "not a definitive declaration" dengan jeda peperangan yang dirancang hanya untuk memberi waktu reorganisasi. Oleh karena itu jeda tersebut bersifat sementara ("temporary").',
      distractorAnalysis: {
        B: '"Perpetual" (abadi) berlawanan dengan konteks.',
        C: '"Binding" (mengikat secara hukum) tidak menjelaskan sifat jeda waktu.',
        D: '"Retroactive" (berlaku surut) tidak relevan.'
      },
      subtopic: 'Duration and Scope Clues',
      difficulty: 'easy',
      hint: 'Bukan perdamaian definitif melainkan jeda sementara.'
    },
    {
      id: 'wic-pr-2',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Biologists were amazed to discover that certain desert beetles possess microscopic shell ridges that ______ atmospheric water, causing sparse morning fog to condense efficiently into drinkable droplets.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['harvest', 'repel', 'dissipate', 'evaporate'],
      correctAnswer: 'A',
      explanation: 'Alur kalimat: struktur cangkang mengumpulkan atau memanen uap air di udara sehingga mengembun menjadi tetesan yang bisa diminum. Kata "harvest" dalam konteks biologi berarti mengumpulkan atau memanen sumber daya.',
      distractorAnalysis: {
        B: '"Repel" (menolak/menolak air) akan mencegah terbentuknya air minum.',
        C: '"Dissipate" (menghamburkan/melenyapkan) berlawanan dengan proses kondensasi.',
        D: '"Evaporate" berarti menguapkan, bukan mengembunkan.'
      },
      subtopic: 'Biological Function Precision',
      difficulty: 'medium',
      hint: 'Cangkang mengumpulkan air untuk diminum: harvest.'
    },
    {
      id: 'wic-pr-3',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'While the previous CEO was notorious for his verbose speeches, his successor was remarkably ______, delivering strategic directives in crisp, five-minute executive briefings.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['laconic', 'garrulous', 'loquacious', 'diffuse'],
      correctAnswer: 'A',
      explanation: 'Kontras antara mantan CEO yang "verbose" (bertele-tele/panjang lebar) dengan penggantinya yang berbicara singkat, padat, dalam pengarahan 5 menit. Kata "laconic" berarti berbicara sangat ringkas dan to the point.',
      distractorAnalysis: {
        B: '"Garrulous" (cerewet/suka mengoceh) adalah sinonim dari verbose.',
        C: '"Loquacious" (suka berbicara banyak) juga sinonim verbose.',
        D: '"Diffuse" (melebar/tidak fokus) berlawanan dengan pengarahan ringkas.'
      },
      subtopic: 'Personality and Speech Contrasts',
      difficulty: 'hard',
      hint: 'Lawan dari bertele-tele (verbose) adalah ringkas dan padat (laconic).'
    },
    {
      id: 'wic-pr-4',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'The committee found the candidate’s proposal thoroughly researched and logically sound; nevertheless, they deemed the budget requirements too ______ to implement within their current fiscal limitations.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['exorbitant', 'modest', 'nominal', 'judicious'],
      correctAnswer: 'A',
      explanation: 'Sinyal "nevertheless" dan kendala "fiscal limitations" mengindikasikan bahwa anggaran yang diajukan terlalu mahal atau berlebihan ("exorbitant") sehingga tidak sanggup dibiayai.',
      distractorAnalysis: {
        B: '"Modest" (sederhana/rendah) tidak akan memberatkan anggaran.',
        C: '"Nominal" (sangat sedikit) justru sangat mudah didanai.',
        D: '"Judicious" (bijaksana) berkonotasi positif dan tidak menjelaskan penolakan dana.'
      },
      subtopic: 'Financial Context and Limitation Signals',
      difficulty: 'medium',
      hint: 'Anggaran melebihi batas fiskal = exorbitant (terlalu mahal/berlebihan).'
    },
    {
      id: 'wic-pr-5',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Anthropologists emphasize that oral storytelling traditions are not ______ artifacts frozen in antiquity; rather, they are dynamic narrative systems continually adapted by contemporary bards to reflect current societal realities.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['static', 'mutable', 'ephemeral', 'cohesive'],
      correctAnswer: 'A',
      explanation: 'Kalimat membandingkan dengan frasa "not... frozen in antiquity; rather, they are dynamic". Lawan dari "dynamic" (dinamis/berubah) dan padanan dari "frozen" (beku/diam) adalah "static" (statis).',
      distractorAnalysis: {
        B: '"Mutable" (dapat berubah) adalah karakteristik dynamic, bukan sesuatu yang dinegasikan dengan "not".',
        C: '"Ephemeral" (berumur pendek/sementara) tidak setara dengan frozen in antiquity.',
        D: '"Cohesive" (padu) tidak relevan dengan dikotomi diam vs bergerak.'
      },
      subtopic: 'Dynamic vs Frozen Binary',
      difficulty: 'easy',
      hint: 'Lawan dari dynamic dan sinonim dari frozen in antiquity adalah static.'
    },
    {
      id: 'wic-pr-6',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Despite fierce competition from newer digital streaming platforms, the independent cinema’s loyal patronage has remained remarkably ______, consistently filling weekend screenings for classic film retrospectives.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['steadfast', 'wavering', 'intermittent', 'precarious'],
      correctAnswer: 'A',
      explanation: 'Meskipun ada kompetisi sengit ("Despite fierce competition"), pelanggan setia bioskop tetap konsisten mengisi kursi setiap akhir pekan. Kata yang dibutuhkan harus bermakna setia, kokoh, dan tidak goyah: "steadfast".',
      distractorAnalysis: {
        B: '"Wavering" (ragu-ragu/goyah) bertolak belakang dengan loyalitas konsisten.',
        C: '"Intermittent" (kadang-kadang/putus-putus) tidak cocok dengan frasa "consistently filling".',
        D: '"Precarious" (rawan/tidak aman) tidak menggambarkan kesetiaan.'
      },
      subtopic: 'Loyalty and Constancy Adjectives',
      difficulty: 'medium',
      hint: 'Tetap setia dan konsisten mengisi penonton = steadfast.'
    },
    {
      id: 'wic-pr-7',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Critics argued that the novelist’s attempt to synthesize six unrelated subplots into a cohesive finale was largely ______, resulting in an unwieldy narrative that left several major character arcs unresolved.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['unsuccessful', 'triumphant', 'ingenious', 'spontaneous'],
      correctAnswer: 'A',
      explanation: 'Hasil dari upaya penulis adalah "an unwieldy narrative that left several major character arcs unresolved" (alur yang kacau dan alur karakter tidak tuntas). Ini membuktikan bahwa upaya penggabungan tersebut tidak berhasil ("unsuccessful").',
      distractorAnalysis: {
        B: '"Triumphant" (berjaya) bertolak belakang dengan kritik negatif.',
        C: '"Ingenious" (sangat cerdas) tidak cocok dengan hasil alur yang kacau.',
        D: '"Spontaneous" (spontan) tidak mengevaluasi keberhasilan atau kegagalan struktur novel.'
      },
      subtopic: 'Narrative Failure Evaluation',
      difficulty: 'easy',
      hint: 'Alur cerita berantakan dan tidak tuntas membuktikan upaya tersebut gagal (unsuccessful).'
    },
    {
      id: 'wic-pr-8',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'To prevent cognitive biases from skewing experimental outcomes, the neuroscientist implemented double-blind protocols, thereby ensuring that observers remained strictly ______ during data collection.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['impartial', 'partisan', 'complacent', 'inquisitive'],
      correctAnswer: 'A',
      explanation: 'Tujuan dari protokol double-blind adalah mencegah bias kognitif agar pengamat tetap netral, objektif, dan tidak berpihak. Kata yang tepat adalah "impartial" (tidak memihak / netral).',
      distractorAnalysis: {
        B: '"Partisan" (berpihak/bias) adalah kondisi yang justru ingin dicegah.',
        C: '"Complacent" (puas diri secara ceroboh) tidak relevan dengan objektivitas ilmiah.',
        D: '"Inquisitive" (ingin tahu) adalah sifat umum ilmuwan namun bukan tujuan spesifik double-blind.'
      },
      subtopic: 'Scientific Objectivity Terms',
      difficulty: 'medium',
      hint: 'Mencegah bias kognitif = menjaga agar pengamat tetap netral/tidak memihak (impartial).'
    },
    {
      id: 'wic-pr-9',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'The historian demonstrated that the king’s outward display of benevolence toward peasant grievances was entirely ______; confidential diplomatic dispatches revealed that he had already mobilized military garrisons to suppress the uprising.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['disingenuous', 'altruistic', 'magnanimous', 'transparent'],
      correctAnswer: 'A',
      explanation: 'Kebaikan raja di depan publik ("outward display of benevolence") berbanding terbalik dengan surat rahasia yang menunjukkan ia telah menyiapkan pasukan militer untuk menumpas rakyat. Kebaikan palsu atau munafik ini paling tepat dideskripsikan sebagai "disingenuous" (tidak jujur / berpura-pura tulus).',
      distractorAnalysis: {
        B: '"Altruistic" (tulus mementingkan orang lain) bertentangan dengan persiapan represi militer.',
        C: '"Magnanimous" (berjiwa besar/murah hati) adalah pujian yang salah konteks.',
        D: '"Transparent" (terbuka) bertolak belakang dengan adanya dokumen rahasia tersembunyi.'
      },
      subtopic: 'Hypocrisy and False Appearances',
      difficulty: 'hard',
      hint: 'Kebaikan pura-pura yang bertentangan dengan aksi militer rahasia = disingenuous.'
    },
    {
      id: 'wic-pr-10',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Because urban infrastructure in the arid valley was originally constructed during an era of anomalous rainfall, current municipal planners find the existing aqueducts woefully ______ during persistent droughts.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['inadequate', 'abundant', 'redundant', 'flourishing'],
      correctAnswer: 'A',
      explanation: 'Infrastruktur dibangun saat era hujan lebat yang tidak biasa. Ketika terjadi kekeringan berkepanjangan ("persistent droughts"), saluran air yang ada terbukti sangat tidak memadai ("woefully inadequate").',
      distractorAnalysis: {
        B: '"Abundant" (berlimpah) bertentangan dengan kondisi kekurangan air.',
        C: '"Redundant" (berlebih/mubazir) tidak cocok saat air sedang langka.',
        D: '"Flourishing" tidak masuk akal untuk mendeskripsikan pipa air saat kekeringan.'
      },
      subtopic: 'Deficiency in Environmental Crises',
      difficulty: 'easy',
      hint: 'Saluran air tidak mampu mencukupi kebutuhan saat kemarau panjang = inadequate.'
    },
    {
      id: 'wic-pr-11',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Although early reviewers dismissed the composer’s dissonant harmonies as an unlistenable cacophony, later musicologists recognized that these jarring intervals were a deliberate and ______ innovation designed to convey psychological anguish.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['calculated', 'haphazard', 'fortuitous', 'inadvertent'],
      correctAnswer: 'A',
      explanation: 'Kata "deliberate" (disengaja) digabungkan dengan kata penghubung "and" memerlukan kata yang sejalan maknanya. Harmoni tersebut bukan ketidaksengajaan acak melainkan inovasi yang terencana dan diperhitungkan secara matang ("calculated").',
      distractorAnalysis: {
        B: '"Haphazard" (sembarangan/asal-asalan) bertolak belakang dengan deliberate.',
        C: '"Fortuitous" (kebetulan membawa untung) mengimplikasikan ketidaksengajaan.',
        D: '"Inadvertent" (tidak sengaja) adalah lawan kata langsung dari deliberate.'
      },
      subtopic: 'Parallelism with "deliberate and..."',
      difficulty: 'medium',
      hint: 'Sejajar dengan "deliberate" (disengaja): terencana matang (calculated).'
    },
    {
      id: 'wic-pr-12',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'The research team noted that although the rare fungal extract displayed potent antimicrobial efficacy in vitro, its high toxicity in human cell cultures would severely ______ its potential as an ingestible pharmaceutical.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['constrain', 'enhance', 'substantiate', 'catalyze'],
      correctAnswer: 'A',
      explanation: 'Toksisitas yang tinggi pada sel manusia akan sangat membatasi atau menghambat ("constrain") potensi ekstrak jamur tersebut untuk dijadikan obat minum.',
      distractorAnalysis: {
        B: '"Enhance" (meningkatkan) berlawanan dengan dampak buruk toksisitas.',
        C: '"Substantiate" (membuktikan kebenaran) tidak cocok.',
        D: '"Catalyze" (mempercepat reaksi) bertentangan dengan efek membatasi.'
      },
      subtopic: 'Pharmacological Limitations',
      difficulty: 'medium',
      hint: 'Racun tinggi akan membatasi (constrain) potensi obat.'
    }
  ],
  exitTicket: [
    {
      id: 'wic-exit-1',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Rather than offering a dogmatic manifesto, the philosopher’s final treatise was remarkably ______; she posed open-ended inquiries and readily acknowledged the valid counterarguments raised by her intellectual peers.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['nuanced', 'uncompromising', 'authoritarian', 'simplistic'],
      correctAnswer: 'A',
      explanation: 'Teks mengontraskan dengan "dogmatic manifesto". Filsuf mengajukan pertanyaan terbuka dan mengakui argumen lawan. Ini mencerminkan pemikiran yang halus, berlapis, dan bijaksana ("nuanced").',
      distractorAnalysis: {
        B: '"Uncompromising" (tanpa kompromi) adalah sinonim dogmatis.',
        C: '"Authoritarian" (otoriter) bertentangan dengan keterbukaan pada kritik.',
        D: '"Simplistic" meremehkan kedalaman pemikiran.'
      },
      subtopic: 'Philosophical Openness Contrast',
      difficulty: 'medium',
      hint: 'Lawan dari dogmatis dan menghargai argumen tandingan = nuanced.'
    },
    {
      id: 'wic-exit-2',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Meteorologists warned that the tranquil morning conditions were merely a ______ prelude to the severe squall line developing rapidly along the western horizon.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['deceptive', 'catastrophic', 'permanent', 'superfluous'],
      correctAnswer: 'A',
      explanation: 'Kondisi pagi yang tenang ("tranquil") berlawanan dengan badai dahsyat yang sedang mendekat. Ketenangan tersebut menipu atau menyamarkan bahaya yang akan segera datang ("deceptive").',
      distractorAnalysis: {
        B: '"Catastrophic" (menghancurkan) menggambarkan badainya, bukan ketenangan pagi yang menjadi pembukanya.',
        C: '"Permanent" salah karena badai akan segera tiba.',
        D: '"Superfluous" (berlebih/sia-sia) tidak masuk akal dalam cuaca.'
      },
      subtopic: 'False Calm and Deception',
      difficulty: 'easy',
      hint: 'Ketenangan sebelum badai bersifat menipu: deceptive.'
    },
    {
      id: 'wic-exit-3',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'The architectural firm was lauded for its ability to ______ seemingly irreconcilable priorities, seamlessly integrating sleek modern aesthetics with strict municipal historic-preservation mandates.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['harmonize', 'disregard', 'intensify', 'obviate'],
      correctAnswer: 'A',
      explanation: 'Teks menyebutkan perusahaan dipuji karena berhasil memadukan estetika modern dengan mandat pelestarian sejarah yang tampak tidak dapat disatukan. Kata yang tepat untuk menyatukan perbedaan adalah "harmonize" (menyelaraskan / mendamaikan).',
      distractorAnalysis: {
        B: '"Disregard" (mengabaikan) bukan alasan mendapat pujian arsitektur.',
        C: '"Intensify" (memperkeruh konflik) berlawanan dengan integrasi mulus.',
        D: '"Obviate" (meniadakan kebutuhan) tidak tepat secara makna kata kerja.'
      },
      subtopic: 'Reconciling Competing Priorities',
      difficulty: 'hard',
      hint: 'Menyatukan dua tuntutan yang bertolak belakang menjadi selaras = harmonize.'
    },
    {
      id: 'wic-exit-4',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Ecologists observed that while mature forests can withstand localized fire outbreaks, repeated high-intensity blazes in close succession can ______ the ecosystem’s natural regenerative capacity.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['compromise', 'fortify', 'replicate', 'subsidize'],
      correctAnswer: 'A',
      explanation: 'Kebakaran hebat yang berulang-ulang akan membahayakan, melemahkan, atau merusak ("compromise") kemampuan regenerasi alami hutan.',
      distractorAnalysis: {
        B: '"Fortify" (memperkuat) bertentangan dengan kehancuran akibat api.',
        C: '"Replicate" (menggandakan) tidak masuk akal.',
        D: '"Subsidize" (mensubsidi) adalah istilah ekonomi.'
      },
      subtopic: 'Degradation of Natural Systems',
      difficulty: 'medium',
      hint: 'Definisi sekunder SAT: "compromise" sering berarti membahayakan/merusak integritas.'
    },
    {
      id: 'wic-exit-5',
      moduleId: 'words-in-context',
      type: 'multiple_choice',
      passage: 'Unlike the bombastic orators of the populist movement, the diplomat delivered her remarks with quiet understatements, relying on ______ reasoning rather than emotional hyperbole to persuade the assembly.',
      prompt: 'Which choice completes the text with the most logical and precise word or phrase?',
      options: ['cogent', 'specious', 'irrational', 'vehement'],
      correctAnswer: 'A',
      explanation: 'Teks mengontraskan dengan "bombastic orators" dan "emotional hyperbole". Diplomat menggunakan ketenangan dan penalaran yang meyakinkan, logis, dan berbobot ("cogent reasoning").',
      distractorAnalysis: {
        B: '"Specious" (tampak benar padahal menyesatkan/palsu) adalah kualitas negatif.',
        C: '"Irrational" (tidak masuk akal) tidak bisa meyakinkan dewan secara diplomatis.',
        D: '"Vehement" (penuh amarah/berapi-api) adalah gaya orator populis yang dihindari.'
      },
      subtopic: 'Logical Persuasion Vocabulary',
      difficulty: 'hard',
      hint: 'Penalaran logis yang kuat dan meyakinkan = cogent.'
    }
  ],
  discussionPrompts: [
    {
      id: 'wic-disc-1',
      topic: 'Menghindari Jebakan Sinonim Kamus',
      prompt: 'Mengapa siswa yang menghafal daftar sinonim 1-ke-1 sering gagal pada soal Words in Context Digital SAT?',
      targetInsight: 'Karena SAT menguji kolokasi spesifik dan derajat makna (nuance), bukan sekadar sinonim kamus kasar. Misalnya, "impervious" dan "resilient" sama-sama berarti kuat, tetapi mekanismenya bertolak belakang.'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Kosa Kata Berkonteks',
      activity: 'Siswa memprediksi kata kosong pada 5 kalimat pendek sebelum melihat opsi.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Teknik "Blind Fill" & Sinyal Arah Kalimat',
      activity: 'Guru mendemonstrasikan cara menandai kata sinyal pivot (although, whereas, despite) dan kata elaborasi (furthermore, that is).'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan 12 Soal Kosa Kata Sains, Sejarah & Sastra',
      activity: 'Siswa bekerja dalam pasangan untuk mengidentifikasi "kenapa opsi pengecoh menggoda" pada setiap soal latihan.'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Evaluasi',
      activity: 'Siswa mengisi refleksi mengenai kosa kata sekunder (misal: compromise, qualify).'
    }
  }
};
