import { ModuleData } from '../../../types';

export const transitionsRhetoricalModule: ModuleData = {
  id: 'transitions-rhetorical-synthesis',
  title: 'Transitions & Rhetorical Synthesis',
  domain: 'reading_writing',
  description: 'Logika transisi antar kalimat (sebab-akibat, kontras, elaborasi, konsesi) dan sintesis retoris berbasis catatan poin (bullet points) sesuai tujuan spesifik pertanyaan.',
  targetPacingSeconds: 71,
  entryTicket: [
    {
      id: 'trs-entry-1',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'For over a century, standard incandescent lightbulbs converted less than five percent of consumed electrical energy into visible light, dissipating the rest as thermal waste. ______, modern solid-state light-emitting diodes (LEDs) convert over fifty percent of electrical energy directly into illumination, drastically curtailing global domestic power consumption.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['In contrast,', 'Consequently,', 'For example,', 'Furthermore,'],
      correctAnswer: 'A',
      explanation: 'Kalimat pertama menjelaskan lampu pijar lama yang sangat boros energi (hanya 5% jadi cahaya, 95% panas terbuang). Kalimat kedua memaparkan lampu LED modern yang sangat efisien (lebih dari 50% jadi cahaya). Hubungan kedua kalimat adalah kontras langsung antara dua generasi teknologi pencahayaan. Transisi yang tepat adalah "In contrast,".',
      distractorAnalysis: {
        B: '"Consequently," menandakan hubungan sebab-akibat (efisiensi LED bukan diakibatkan oleh pemborosan lampu lama).',
        C: '"For example," keliru karena LED bukan contoh dari lampu pijar (incandescent).',
        D: '"Furthermore," digunakan untuk menambahkan poin searah, bukan mengontraskan efisiensi.'
      },
      subtopic: 'Contrast Transitions',
      difficulty: 'easy',
      hint: 'Bandingkan efisiensi 5% (lama) dengan efisiensi 50% (modern) = hubungan kontras langsung (In contrast).'
    },
    {
      id: 'trs-entry-2',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• The Voynich Manuscript is an illustrated codex carbon-dated to the early fifteenth century.\n• It is handwritten in an unknown, undeciphered script known as "Voynichese."\n• The manuscript contains bizarre botanical illustrations of plants that do not correspond to any known terrestrial species.\n• Cryptographers, including Alan Turing and modern computational linguists, have failed to decode its text.\n\nThe student wants to emphasize the mystery surrounding the manuscript\'s content to a general audience. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'Featuring bizarre illustrations of unidentified plants and written in an undeciphered script that has baffled cryptographers for centuries, the Voynich Manuscript remains an unsolved enigma.',
        'The Voynich Manuscript, which was carbon-dated to the early fifteenth century, is a historical codex.',
        'Alan Turing and modern computational linguists are among the researchers who study fifteenth-century manuscripts.',
        'Botanical illustrations in historical manuscripts do not always correspond to actual terrestrial plant species.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik ("The student wants to emphasize the mystery surrounding the manuscript\'s content"): Pilihan A secara langsung merangkum unsur-unsur misteri isi naskah—tumbuhan tak teridentifikasi dan aksara tak terpecahkan yang membingungkan kriptografer selama berabad-abad, serta menyebutnya sebagai teka-teki yang belum terpecahkan (unsolved enigma).',
      distractorAnalysis: {
        B: 'Hanya menyatakan tanggal dan jenis naskah tanpa menonjolkan misteri isi.',
        C: 'Fokus pada profil para peneliti, mengabaikan isi naskah.',
        D: 'Pernyataan umum tentang ilustrasi botani yang tidak secara spesifik membahas Voynich Manuscript.'
      },
      subtopic: 'Rhetorical Synthesis Emphasizing Mystery',
      difficulty: 'medium',
      hint: 'Fokus pada tujuan: menonjolkan misteri isi naskah (tulisan tak terbaca, tumbuhan tak dikenal, kriptografer gagal).'
    },
    {
      id: 'trs-entry-3',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'In 1845, the ill-fated Franklin Expedition set sail from England with 129 crew members to navigate the last unchartered section of the Northwest Passage. Both ships became irrevocably trapped in pack ice off King William Island. ______, prolonged lead poisoning from poorly soldered food tins and severe scurvy incapacitated the crew, ensuring that not a single sailor survived.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['Compounding the crisis,', 'Similarly,', 'In contrast,', 'On the other hand,'],
      correctAnswer: 'A',
      explanation: 'Kapal yang terjebak di es adalah krisis besar pertama. Kalimat berikutnya menambahkan bencana lain yang memperburuk kondisi pelaut: keracunan timbal dari kaleng makanan dan penyakit scurvy. Frasa transisi "Compounding the crisis," secara tepat mencerminkan penambahan malapetaka yang memperparah keadaan.',
      distractorAnalysis: {
        B: '"Similarly," menandakan perbandingan analogi peristiwa terpisah, bukan eskalasi krisis yang sama.',
        C: '"In contrast," keliru karena penyakit dan es sama-sama malapetaka pembawa kematian (searah).',
        D: '"On the other hand," mengindikasikan pertimbangan alternatif berlawanan.'
      },
      subtopic: 'Escalation and Compound Transitions',
      difficulty: 'medium',
      hint: 'Krisis terjebak es diperparah oleh keracunan timbal dan scurvy = Compounding the crisis.'
    },
    {
      id: 'trs-entry-4',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• Quokkas are small marsupials endemic to Rottnest Island in Western Australia.\n• Pika are small, cold-adapted lagomorphs native to mountainous regions of North America and Asia.\n• Quokkas have virtually no natural predators on Rottnest Island, making them unusually fearless around human tourists.\n• Pikas are vulnerable to extreme heat stress and cannot survive temperatures exceeding 25°C for more than a few hours.\n\nThe student wants to contrast the native habitats of the two animals. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'While quokkas inhabit an island ecosystem off the coast of Western Australia, pikas reside in high-altitude mountain environments across North America and Asia.',
        'Quokkas and pikas are both small mammals that face environmental challenges in the wild.',
        'Unlike fearless quokkas on predator-free Rottnest Island, pikas suffer severe physiological heat stress above 25°C.',
        'Rottnest Island is home to quokkas, small marsupials that tourist visitors frequently photograph.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "contrast the native HABITATS of the two animals". Pilihan A secara langsung mengontraskan habitat kedua hewan: ekosistem pulau di lepas pantai Australia Barat (quokka) vs wilayah pegunungan dataran tinggi di Amerika Utara dan Asia (pika).',
      distractorAnalysis: {
        B: 'Hanya menyatakan kesamaan umum tanpa mengontraskan habitat spesifik.',
        C: 'Mengontraskan perilaku/fisiologi (ketakutan vs stres panas), BUKAN habitat seperti yang diminta tujuan soal.',
        D: 'Hanya menyebutkan quokka dan mengabaikan pika.'
      },
      subtopic: 'Targeted Goal Alignment in Synthesis',
      difficulty: 'medium',
      hint: 'Pertanyaan meminta kontras HABITAT. Pilih opsi yang fokus pada perbandingan tempat tinggal (island vs high-altitude mountains).'
    },
    {
      id: 'trs-entry-5',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'Many bird species synchronize their spring egg-laying with peak caterpillar emergence to ensure abundant food supplies for their nestlings. Over the past three decades, climate change has caused caterpillars in temperate forests to hatch nearly three weeks earlier. ______, migratory pied flycatchers arriving on fixed celestial schedules have experienced severe reproductive failures due to mismatched food timing.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['As a result,', 'Nevertheless,', 'Otherwise,', 'For instance,'],
      correctAnswer: 'A',
      explanation: 'Ulat menetas 3 minggu lebih awal akibat pemanasan iklim (sebab). Burung yang tiba dengan jadwal tetap mengalami gagal reproduksi karena kekurangan makanan (akibat). Hubungan logis yang terikat adalah sebab-akibat ("As a result,").',
      distractorAnalysis: {
        B: '"Nevertheless," menandakan kontras/konsesi yang berlawanan dengan hubungan logis sebab-akibat.',
        C: '"Otherwise," menandakan kondisi alternatif ("jika tidak").',
        D: '"For instance," keliru karena kalimat kedua adalah dampak konsekuensi nyata, bukan contoh ulat.'
      },
      subtopic: 'Cause-and-Effect Transitions',
      difficulty: 'easy',
      hint: 'Ulat menetas lebih cepat -> burung kehabisan makanan dan gagal bertelur = As a result.'
    }
  ],
  conceptSections: [
    {
      id: 'trs-c1',
      title: 'Keluarga Transisi & Metode "Goal Sniper" Rhetorical Synthesis',
      summary: 'Soal Transitions menguji logika jembatan semantik antar kalimat. Soal Rhetorical Synthesis menguji kemampuan memilah informasi relevan sesuai SATU tujuan instruksi.',
      formulaBox: [
        'Transisi Kontras: However, In contrast, Conversely, Nevertheless, Nonetheless, On the other hand',
        'Transisi Kausal: Therefore, Consequently, Thus, As a result, Accordingly, Hence',
        'Transisi Kelanjutan/Elaborasi: Furthermore, Moreover, In addition, Similarly, That is',
        'Transisi Penegasan/Contoh: Specifically, For example, For instance, Indeed, In fact',
        'Aturan Goal Sniper: Abaikan apakah kalimat terdengar indah; periksa apakah kalimat itu MENJAWAB KATA KUNCI PERINTAH (emphasize difference, introduce to new audience, present research goal).'
      ],
      commonMistakes: [
        'Pada transitions, siswa memilih kata hanya berdasarkan intonasi kalimat tanpa mengecek apakah hubungan logisnya adalah kontras atau kelanjutan.',
        'Pada rhetorical synthesis, siswa memilih opsi yang merangkum SEMUA bullet point padahal perintah soal hanya meminta satu detail spesifik (misal: "contrast their habitats"). Opsi yang merangkum semua poin sering kali merupakan jebakan!'
      ],
      proTips: [
        'Trik "Drop the Transition": Hapus kata transisi, baca kalimat 1 lalu kalimat 2. Tanyakan: "Apakah kalimat 2 melanjutkan ide kalimat 1, membalik ide kalimat 1, atau merupakan hasil dari kalimat 1?"',
        'Pada Rhetorical Synthesis, baca KALIMAT TERAKHIR lebih dulu untuk mengetahui GOAL sebelum membaca catatan bullet points!'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Banyak siswa mengira bahwa pada Rhetorical Synthesis, opsi yang paling lengkap mencakup seluruh fakta di bullet point adalah jawaban terbaik. Padahal SAT sengaja memasukkan fakta pengecoh yang tidak relevan dengan tujuan instruksi.'
        ],
        alternativeApproaches: [
          {
            name: 'Teknik "Prompt Highlight" (The Goal First Rule)',
            description: 'Latih siswa untuk menyoroti kalimat "The student wants to..." sebelum menyentuh opsi A-D. Jika perintahnya "emphasize a difference", langsung eliminasi opsi yang membicarakan kesamaan.'
          }
        ],
        classroomAnalogy: 'Rhetorical synthesis seperti koki di dapur pesanan: jika tamu memesan salad buah (tujuan), kamu tidak boleh menyajikan steak wagyu meskipun stik itu lezat dan ada di kulkas catatanmu.',
        sparkQuestions: [
          'Mengapa dalam soal transisi SAT, jika ada opsi "Furthermore" dan "Moreover" bersamaan, kemungkinan besar keduanya sama-sama SALAH?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'trs-ex-1',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'Traditional silicon-based solar photovoltaic cells have achieved commercial dominance due to their robust outdoor durability and well-established manufacturing supply chains. Their high production cost and mechanical rigidity, however, limit their deployment on flexible architectural surfaces. Organometallic perovskite solar cells, ______, can be printed from liquid inks onto lightweight, pliable plastics at a fraction of the manufacturing energy cost.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['by comparison', 'in conclusion', 'for this reason', 'likewise'],
      correctAnswer: 'A',
      explanation: 'Teks membandingkan sel surya silikon tradisional yang kaku dan mahal dengan sel surya perovskit yang fleksibel, ringan, dan murah diproduksi. Hubungan antara kedua teknologi ini adalah perbandingan kontras. Frasa "by comparison" secara tepat menghubungkan perbandingan alternatif ini.',
      distractorAnalysis: {
        B: '"in conclusion" menandakan rangkuman penutup akhir argumen.',
        C: '"for this reason" menandakan kesimpulan sebab-akibat.',
        D: '"likewise" digunakan jika karakteristik perovskit sama persis dengan silikon, padahal sifatnya berlawanan (fleksibel vs kaku).'
      },
      subtopic: 'Comparative Technology Transitions',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Pengujian Tiga Relasi (Compare vs Conclude vs Cause)',
          steps: [
            '1. Amati subjek: Sel silikon (kaku, mahal) vs Sel perovskit (fleksibel, murah).',
            '2. Karakteristik bertolak belakang menunjukkan relasi komparatif.',
            '3. Pilih "by comparison".'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa terkecoh oleh "likewise" karena mengira kedua kalimat sama-sama memuji sel surya, tanpa melihat sifat fisik yang berlawanan.'
    },
    {
      id: 'trs-ex-2',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• The Svalbard Global Seed Vault is a secure seed bank located on the Norwegian island of Spitsbergen in the Arctic.\n• It is buried 120 meters inside a permafrost mountain.\n• The vault acts as a global insurance policy against the catastrophic loss of crop diversity caused by war, natural disasters, or climate crises.\n• It currently stores duplicate backup samples of more than 1.1 million distinct agricultural crop varieties from around the world.\n\nThe student wants to emphasize the scale of the facility’s preservation efforts. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'Safeguarding more than 1.1 million distinct agricultural crop varieties from around the world, the Svalbard Global Seed Vault operates on an immense preservation scale.',
        'Buried 120 meters deep inside an Arctic permafrost mountain on Spitsbergen, the vault remains protected from catastrophic disasters.',
        'The Svalbard Global Seed Vault was established in Norway to serve as a secure agricultural insurance repository.',
        'War, climate crises, and natural disasters are global threats that can cause the irreparable loss of crop diversity.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "emphasize the SCALE of the facility’s preservation efforts". Skala diwakili oleh angka masif lebih dari 1.1 juta varietas tanaman dari seluruh penjuru dunia. Pilihan A secara langsung menonjolkan angka spektakuler ini dan secara eksplisit menyatakan "operates on an immense preservation scale".',
      distractorAnalysis: {
        B: 'Menonjolkan lokasi fisik dan keamanan permafrost, bukan skala kuantitas pelestarian.',
        C: 'Pernyataan umum tentang tujuan pendirian.',
        D: 'Membahas ancaman bencana global, bukan fasilitas Svalbard itu sendiri.'
      },
      subtopic: 'Rhetorical Goal "Emphasize Scale"',
      difficulty: 'medium',
      methods: [
        {
          title: 'Metode Pencocokan Kata Kunci Tujuan (Goal Match)',
          steps: [
            '1. Target: "SCALE".',
            '2. Data numerik skala: "more than 1.1 million distinct crop varieties from around the world".',
            '3. Cocokkan ke opsi A.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa memilih opsi B yang terdengar dramatis mengenai kedalaman gunung es, padahal bukan itu tujuan yang diminta instruksi.'
    },
    {
      id: 'trs-ex-3',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'In the eighteenth century, Swedish botanist Carl Linnaeus introduced the binomial nomenclature system, assigning each organism a formal two-part Latin name comprising genus and species. ______, the domestic wolf was designated Canis lupus, while the coyote was classified as Canis latrans, clarifying their close taxonomic relationship within the same genus.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['For instance,', 'Nevertheless,', 'Similarly,', 'Consequently,'],
      correctAnswer: 'A',
      explanation: 'Kalimat pertama menjelaskan sistem tata nama binomial secara umum (genus dan spesies). Kalimat kedua memberikan contoh konkret penerapan sistem tersebut pada serigala (Canis lupus) dan coyote (Canis latrans). Transisi yang tepat untuk memperkenalkan contoh spesifik adalah "For instance,".',
      distractorAnalysis: {
        B: '"Nevertheless," menandakan kontras/konsesi yang tidak ada di sini.',
        C: '"Similarly," digunakan jika ada dua konsep yang berdiri terpisah, bukan ilustrasi contoh dari konsep yang sama.',
        D: '"Consequently," menandakan dampak akibat kausal, bukan contoh klasifikasi.'
      },
      subtopic: 'Exemplification Transitions',
      difficulty: 'easy',
      methods: [
        {
          title: 'Deteksi Hubungan Konsep Umum -> Contoh Konkret',
          steps: [
            '1. Kalimat 1: Konsep umum sistem tata nama binomial Latin (genus + species).',
            '2. Kalimat 2: Contoh nyata serigala dan coyote (Canis lupus / Canis latrans).',
            '3. Hubungan adalah contoh ilustrasi -> "For instance,".'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa memilih consequently karena mengira contoh itu terjadi akibat diciptakannya sistem Linnaeus.'
    }
  ],
  practiceQuestions: [
    {
      id: 'trs-pr-1',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'Commercial jet engines operate at peak thermal efficiency when fuel burns at extremely elevated combustion temperatures. ______, these high temperatures accelerate the oxidation of metal turbine blades, forcing aviation engineers to coat components with specialized ceramic thermal barriers.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['However,', 'Therefore,', 'In addition,', 'Specifically,'],
      correctAnswer: 'A',
      explanation: 'Kalimat pertama memaparkan keuntungan suhu tinggi (efisiensi pembakaran puncak). Kalimat kedua memaparkan kerugian dan masalahnya (oksidasi bilah turbin logam). Hubungan kedua sisi adalah kontras antara keuntungan dan konsekuensi negatif. Transisi yang tepat adalah "However,".',
      distractorAnalysis: {
        B: '"Therefore," menandakan kesimpulan sebab-akibat searah.',
        C: '"In addition," digunakan untuk menambahkan keuntungan lain, bukan kendala.',
        D: '"Specifically," merinci contoh teknis, bukan memperkenalkan masalah kontras.'
      },
      subtopic: 'Advantage vs Drawback Contrast',
      difficulty: 'easy',
      hint: 'Keuntungan efisiensi tinggi VS masalah kerusakan logam = However.'
    },
    {
      id: 'trs-pr-2',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• Bioluminescence is the biochemical production and emission of light by living organisms.\n• Fireflies produce light through a chemical reaction between luciferin and the enzyme luciferase in their abdomens.\n• Anglerfish utilize bioluminescent bacterial symbionts inside an organic fishing-rod lure (the esca) dangling above their jaws.\n• Fireflies use bioluminescent flashing primarily to attract mates during summer nights.\n• Anglerfish use bioluminescence in pitch-black ocean depths primarily to lure unsuspecting prey.\n\nThe student wants to emphasize a difference in the functional purposes of bioluminescence in these two species. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'While fireflies emit bioluminescent light to attract prospective mates, anglerfish utilize bioluminescence as a predatory lure to capture prey in the deep ocean.',
        'Both fireflies and anglerfish generate bioluminescent light through biochemical reactions.',
        'Anglerfish possess an organic lure called an esca that dangles directly above their jaws.',
        'Bioluminescence occurs across terrestrial and deep-sea organisms through different physiological mechanisms.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "emphasize a difference in the FUNCTIONAL PURPOSES of bioluminescence in these two species". Pilihan A secara langsung mengontraskan tujuan fungsi kedua spesies: kunang-kunang untuk menarik pasangan kawin (mate attraction), sedangkan anglerfish untuk memikat mangsa (predatory lure).',
      distractorAnalysis: {
        B: 'Menyatakan kesamaan biokimia, bukan perbedaan tujuan fungsional.',
        C: 'Hanya membahas anglerfish tanpa menyertakan kunang-kunang.',
        D: 'Pernyataan umum fisiologi tanpa merinci tujuan fungsional kedua spesies.'
      },
      subtopic: 'Comparative Purpose Synthesis',
      difficulty: 'medium',
      hint: 'Cari opsi yang mengontraskan fungsi: menarik pasangan (mate attraction) vs memikat mangsa (predatory lure).'
    },
    {
      id: 'trs-pr-3',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'Early mechanical calculators, such as Blaise Pascal’s Pascaline, relied on intricate systems of interlocking metal gears and rotating wheels to execute addition and subtraction. ______, Charles Babbage’s proposed Analytical Engine integrated punch cards and conditional branching, introducing the conceptual foundation for programmable algorithmic computation.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['In contrast,', 'For example,', 'Likewise,', 'As a result,'],
      correctAnswer: 'A',
      explanation: 'Teks mengontraskan kalkulator mekanik awal yang kaku (hanya gear penambah dan pengurang) dengan mesin analitik Babbage yang dapat diprogram secara fleksibel menggunakan kartu berlubang dan percabangan logika. Transisi yang tepat adalah "In contrast,".',
      distractorAnalysis: {
        B: '"For example," keliru karena mesin Babbage bukan contoh dari Pascaline.',
        C: '"Likewise," menandakan kesamaan prinsip, padahal mesin Babbage memperkenalkan paradigma baru yang berbeda.',
        D: '"As a result," keliru karena desain Babbage bukan dampak langsung dari pembuatan Pascaline.'
      },
      subtopic: 'Historical Technological Shift Transitions',
      difficulty: 'medium',
      hint: 'Kalkulator mekanik kaku VS mesin analitik yang dapat diprogram = In contrast.'
    },
    {
      id: 'trs-pr-4',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• Mary Anning (1799–1847) was an English fossil collector and self-taught paleontologist.\n• She discovered the first correctly identified ichthyosaur skeleton along the cliffs of Lyme Regis when she was just twelve years old.\n• She later unearthed the first complete plesiosaur skeleton and the first British pterosaur.\n• Because of her working-class background and gender, the Geological Society of London refused to admit her as a member during her lifetime.\n\nThe student wants to highlight Mary Anning’s major scientific achievements to an audience unfamiliar with her. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'A pioneering self-taught paleontologist, Mary Anning made foundational scientific discoveries, including the first recognized ichthyosaur skeleton, the first complete plesiosaur, and the first British pterosaur.',
        'The Geological Society of London refused to admit Mary Anning because of her working-class background and gender.',
        'Mary Anning was twelve years old when she began fossil hunting along the cliffs of Lyme Regis in England.',
        'Ichthyosaurs and plesiosaurs were marine reptiles that lived millions of years before nineteenth-century fossil hunting began.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "highlight Mary Anning’s MAJOR SCIENTIFIC ACHIEVEMENTS to an audience unfamiliar with her". Pilihan A memperkenalkan siapa Mary Anning (pioneering self-taught paleontologist) dan merangkum prestasi ilmiah utamanya (penemuan ichthyosaur, plesiosaur lengkap pertama, dan pterosaur Inggris pertama).',
      distractorAnalysis: {
        B: 'Hanya membahas diskriminasi yang ia alami, bukan penemuan ilmiah besarnya.',
        C: 'Hanya menyebutkan usia awal tanpa menyebutkan besarnya kontribusi fosil.',
        D: 'Membahas reptil purba, bukan pencapaian Mary Anning.'
      },
      subtopic: 'Introduction and Major Achievements Synthesis',
      difficulty: 'medium',
      hint: 'Fokus pada pencapaian ilmiah: penemuan fosil ichthyosaur, plesiosaur, dan pterosaur.'
    },
    {
      id: 'trs-pr-5',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'Marine phytoplankton produce roughly fifty percent of the oxygen in Earth’s atmosphere through photosynthesis. ______, these microscopic organisms form the essential nutritional baseline for nearly all open-ocean pelagic food webs, sustaining krill, schooling fish, and apex marine predators.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['Furthermore,', 'Instead,', 'Consequently,', 'Nonetheless,'],
      correctAnswer: 'A',
      explanation: 'Kalimat pertama menyebutkan kontribusi penting fitoplankton (menghasilkan 50% oksigen atmosfer). Kalimat kedua menambahkan fungsi ekologis penting lainnya (menjadi dasar rantai makanan laut). Kedua ide bergerak searah menambahkan informasi positif, sehingga transisi yang tepat adalah "Furthermore,".',
      distractorAnalysis: {
        B: '"Instead," digunakan setelah kalimat negasi ("not X, instead Y").',
        C: '"Consequently," salah karena menjadi makanan paus bukan akibat logis dari produksi oksigen.',
        D: '"Nonetheless," menandakan kontras/konsesi yang berlawanan.'
      },
      subtopic: 'Additive and Elaboration Transitions',
      difficulty: 'easy',
      hint: 'Dua fakta penting yang saling melengkapi dan searah = Furthermore.'
    },
    {
      id: 'trs-pr-6',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• The James Webb Space Telescope (JWST) was launched in December 2021 as NASA’s flagship infrared space observatory.\n• Its primary mirror measures 6.5 meters across, compared to Hubble’s 2.4-meter mirror.\n• JWST orbits the Sun at the Second Lagrange Point (L2), approximately 1.5 million kilometers from Earth.\n• Hubble orbits in low Earth orbit, approximately 550 kilometers above the planet’s surface.\n\nThe student wants to emphasize the difference in the orbital locations of the two space telescopes. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'While the Hubble Space Telescope operates in low Earth orbit just 550 kilometers up, the James Webb Space Telescope orbits the Sun at L2, roughly 1.5 million kilometers from Earth.',
        'With a primary mirror measuring 6.5 meters across, JWST possesses significantly greater light-collecting area than Hubble.',
        'The James Webb Space Telescope was launched in December 2021 to succeed the Hubble Space Telescope as NASA’s flagship observatory.',
        'Lagrange points provide stable gravitational orbits for deep-space observatories like JWST.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "emphasize the difference in the ORBITAL LOCATIONS of the two space telescopes". Pilihan A secara langsung membandingkan lokasi orbit keduanya: 550 km di orbit rendah Bumi (Hubble) vs 1.5 juta km di L2 (JWST).',
      distractorAnalysis: {
        B: 'Membandingkan ukuran cermin (mirror diameter), bukan lokasi orbit.',
        C: 'Membahas tanggal peluncuran dan status misi.',
        D: 'Mendefinisikan Lagrange point tanpa mengontraskan lokasi orbit Hubble.'
      },
      subtopic: 'Orbital Comparison Synthesis',
      difficulty: 'easy',
      hint: 'Tujuan: beda lokasi orbit (low Earth orbit 550 km vs L2 1.5 million km).'
    },
    {
      id: 'trs-pr-7',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'Many modern consumers assume that organic agricultural practices completely prohibit the use of all pest-control pesticides. ______, federal organic certification guidelines explicitly permit the application of naturally derived non-synthetic chemicals, including copper sulfate and bacterial toxins such as Bacillus thuringiensis.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['In reality,', 'Likewise,', 'For example,', 'Accordingly,'],
      correctAnswer: 'A',
      explanation: 'Kalimat pertama memaparkan asumsi umum publik yang salah (mengira pestisida dilarang total). Kalimat kedua memaparkan fakta peraturan yang sebenarnya (pedoman memperbolehkan pestisida alami tertentu). Transisi yang tepat untuk meluruskan kesalahpahaman fakta adalah "In reality," (atau "In fact,").',
      distractorAnalysis: {
        B: '"Likewise," menandakan kesamaan analogi.',
        C: '"For example," keliru karena izin kimia bukan contoh dari pelarangan total.',
        D: '"Accordingly," menandakan kelanjutan yang konsisten.'
      },
      subtopic: 'Myth-Busting Clarification Transitions',
      difficulty: 'medium',
      hint: 'Meluruskan anggapan umum yang salah dengan fakta riil = In reality.'
    },
    {
      id: 'trs-pr-8',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• Graphene is a single two-dimensional layer of carbon atoms arranged in a hexagonal honeycomb lattice.\n• It was first isolated in 2004 by physicists Andre Geim and Konstantin Novoselov using ordinary Scotch tape.\n• Graphene conducts electricity more efficiently than copper at room temperature.\n• It is approximately 200 times stronger than structural steel while remaining exceptionally lightweight and flexible.\n\nThe student wants to present graphene’s exceptional mechanical and electrical properties. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'Graphene exhibits remarkable physical capabilities: it conducts electricity more efficiently than copper and is roughly 200 times stronger than structural steel.',
        'Isolated in 2004 using Scotch tape, graphene consists of a single two-dimensional honeycomb sheet of carbon atoms.',
        'Physicists Andre Geim and Konstantin Novoselov received international recognition for isolating graphene in 2004.',
        'Structural steel and copper are common industrial materials that have different mechanical and electrical properties than graphene.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "present graphene’s exceptional MECHANICAL AND ELECTRICAL properties". Pilihan A memadukan sifat listriknya (konduktivitas melampaui tembaga) dan sifat mekaniknya (200 kali lebih kuat dari baja struktural).',
      distractorAnalysis: {
        B: 'Membahas penemuan dan struktur atom, bukan sifat mekanik dan listrik.',
        C: 'Fokus pada fisikawan penemunya.',
        D: 'Pernyataan umum yang tidak menonjolkan keunggulan spesifik graphene.'
      },
      subtopic: 'Dual-Property Target Synthesis',
      difficulty: 'medium',
      hint: 'Cari opsi yang menggabungkan konduktivitas listrik (copper) dan kekuatan mekanik (200x stronger than steel).'
    },
    {
      id: 'trs-pr-9',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'In the arid Sonoran Desert, temperatures regularly exceed 45°C during summer afternoons, creating lethally dehydrating conditions for small mammals. ______, the kangaroo rat avoids heat stress entirely by remaining sealed inside humid subterranean burrows by day and foraging exclusively after midnight.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['To survive,', 'In conclusion,', 'Specifically,', 'Moreover,'],
      correctAnswer: 'A',
      explanation: 'Kalimat pertama mendeskripsikan ancaman mematikan dari suhu ekstrem gurun. Kalimat kedua menjelaskan adaptasi perilaku yang dilakukan tikus kanguru agar tidak mati dehidrasi. Transisi yang menyatakan tujuan dari adaptasi tersebut adalah "To survive,".',
      distractorAnalysis: {
        B: '"In conclusion," menandakan kesimpulan akhir argumen teoretis.',
        C: '"Specifically," keliru karena tikus kanguru bukan rincian dari suhu gurun.',
        D: '"Moreover," menandakan penambahan ancaman lain, bukan strategi menghadapinya.'
      },
      subtopic: 'Purpose and Behavioral Response Transitions',
      difficulty: 'medium',
      hint: 'Menjelaskan tindakan yang diambil untuk mengatasi ancaman maut = To survive.'
    },
    {
      id: 'trs-pr-10',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• Maya Lin is an American architect and sculptor.\n• In 1981, as a 21-year-old undergraduate student at Yale University, she won the national design competition for the Vietnam Veterans Memorial.\n• Her design consists of a minimalist V-shaped black granite wall cut into the ground, inscribed with the chronological names of over 58,000 fallen service members.\n• The memorial was initially controversial due to its non-traditional, non-heroic aesthetic, but it is now widely celebrated as a transformative masterpiece of public commemoration.\n\nThe student wants to explain the physical appearance and design of the memorial. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'The memorial consists of a minimalist V-shaped black granite wall cut into the earth, inscribed chronologically with the names of over 58,000 service members.',
        'Designed by 21-year-old undergraduate Maya Lin in 1981, the memorial was initially met with intense public controversy.',
        'Now celebrated as a public masterpiece, the Vietnam Veterans Memorial was designed by American architect Maya Lin.',
        'The Vietnam Veterans Memorial honors fallen service members through a non-traditional architectural philosophy.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "explain the PHYSICAL APPEARANCE and DESIGN of the memorial". Pilihan A secara eksklusif mendeskripsikan penampilan fisik dan desainnya: dinding granit hitam berbentuk huruf V yang tertanam di tanah dengan ukiran nama 58.000 prajurit secara kronologis.',
      distractorAnalysis: {
        B: 'Membahas usia Maya Lin dan kontroversi awal, bukan bentuk fisiknya.',
        C: 'Membahas pengakuan masa kini dan nama perancangnya.',
        D: 'Membahas filosofi umum tanpa menyebutkan wujud fisik dinding granit V-shaped.'
      },
      subtopic: 'Physical Description Synthesis',
      difficulty: 'easy',
      hint: 'Tujuan: bentuk fisik dan desain (V-shaped black granite wall cut into the ground).'
    },
    {
      id: 'trs-pr-11',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'Renewable wind energy production fluctuates unpredictably based on hourly atmospheric pressure gradients. Grid operators cannot simply command wind turbines to generate electricity during sudden evening demand surges. ______, utility companies must invest heavily in grid-scale battery storage and fast-ramping peaker plants to maintain continuous grid stability.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['Consequently,', 'Nevertheless,', 'Otherwise,', 'For example,'],
      correctAnswer: 'A',
      explanation: 'Karena tenaga angin berfluktuasi dan tidak bisa diperintah sesuka hati saat beban puncak (sebab/kendala), maka perusahaan utilitas harus berinvestasi pada baterai penyimpan daya skala besar (akibat/solusi yang harus diambil). Transisi yang tepat adalah "Consequently,".',
      distractorAnalysis: {
        B: '"Nevertheless," menandakan kontras/konsesi yang salah di sini.',
        C: '"Otherwise," menandakan kondisi alternatif bersyarat.',
        D: '"For example," keliru karena baterai bukan contoh dari fluktuasi angin.'
      },
      subtopic: 'Cause and Policy Response Transitions',
      difficulty: 'medium',
      hint: 'Masalah fluktuasi angin -> perusahaan wajib investasi baterai = Consequently.'
    },
    {
      id: 'trs-pr-12',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• The Rosetta Stone is an ancient Egyptian granodiorite stele inscribed in 196 BCE.\n• It features a single royal decree issued by King Ptolemy V.\n• The decree is inscribed in three distinct scripts: ancient Egyptian Hieroglyphic, Demotic Egyptian, and Ancient Greek.\n• Because Ancient Greek was well understood by European linguists, Jean-François Champollion was able to use the parallel texts to decipher ancient Egyptian hieroglyphs in 1822.\n\nThe student wants to explain how the Rosetta Stone enabled the decipherment of hieroglyphs. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'Because the Rosetta Stone contained the same royal decree written in known Ancient Greek alongside unknown Egyptian hieroglyphs, linguists could use the Greek text to decipher the hieroglyphs.',
        'The Rosetta Stone, an ancient granodiorite stele inscribed in 196 BCE, features a decree issued by King Ptolemy V.',
        'Jean-François Champollion was a nineteenth-century European linguist who deciphered Egyptian writing in 1822.',
        'Inscribed in three different scripts, the Rosetta Stone is one of the most famous archaeological artifacts in the world.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "explain HOW the Rosetta Stone enabled the decipherment of hieroglyphs". Pilihan A secara gamblang menjelaskan mekanismenya: teks memuat dekrit yang sama persis dalam bahasa Yunani Kuno yang sudah dikenal bersamaan dengan hieroglif, sehingga teks Yunani berfungsi sebagai kunci pembuka untuk menguraikan hieroglif.',
      distractorAnalysis: {
        B: 'Hanya menyatakan tanggal dan raja pembuatnya, tanpa menjelaskan bagaimana batu itu membantu pemecahan kode.',
        C: 'Fokus pada biografi Champollion tanpa menjelaskan mekanisme batu paralel.',
        D: 'Klaim ketenaran umum tanpa penjelasan teknis cara pemecahan kode.'
      },
      subtopic: 'Explanatory Mechanism Synthesis',
      difficulty: 'medium',
      hint: 'Jelaskan BAGAIMANA batu itu membantu: teks Yunani yang sudah dipahami menjadi kunci decoding teks hieroglif.'
    }
  ],
  exitTicket: [
    {
      id: 'trs-exit-1',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'Deep-sea hydrothermal vent communities do not rely on photosynthetic solar energy. ______, specialized chemosynthetic bacteria oxidize toxic hydrogen sulfide compounds emitted by geothermal vents, producing organic carbohydrates that sustain thriving ecosystems of giant tube worms and vent crabs.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['Instead,', 'Consequently,', 'Similarly,', 'For example,'],
      correctAnswer: 'A',
      explanation: 'Kalimat pertama menyatakan apa yang TIDAK digunakan (do not rely on solar energy). Kalimat kedua menjelaskan apa yang SEBENARNYA digunakan (bakteri kemosintesis memanfaatkan hidrogen sulfida). Pola "not X; instead, Y" adalah struktur transisi substitusi yang baku.',
      distractorAnalysis: {
        B: '"Consequently," menandakan akibat kausal, bukan pergantian mekanisme.',
        C: '"Similarly," menandakan perbandingan kesamaan.',
        D: '"For example," keliru karena kemosintesis bukan contoh dari energi matahari.'
      },
      subtopic: 'Negative-Replacement "Instead"',
      difficulty: 'easy',
      hint: 'Tidak memakai energi matahari (not X) -> Sebagai gantinya, memakai hidrogen sulfida (Instead, Y).'
    },
    {
      id: 'trs-exit-2',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• The Kepler Space Telescope operated from 2009 to 2018.\n• It surveyed more than 530,000 stars, discovering over 2,600 confirmed exoplanets.\n• The Transiting Exoplanet Survey Satellite (TESS) was launched in 2018 to succeed Kepler.\n• While Kepler focused on a single distant patch of the constellation Cygnus, TESS surveys nearly the entire sky, focusing on stars 30 to 100 times brighter than those observed by Kepler.\n\nThe student wants to emphasize a difference between the observational strategies of Kepler and TESS. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'Unlike Kepler, which monitored a single confined patch of sky, TESS surveys nearly the entire celestial sphere, targeting significantly brighter nearby stars.',
        'Launched in 2018, TESS succeeded the Kepler Space Telescope, which had operated for nearly a decade.',
        'During its nine-year mission, the Kepler Space Telescope confirmed the existence of over 2,600 exoplanets.',
        'Both Kepler and TESS are space telescopes designed by NASA to search for exoplanets outside our solar system.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "emphasize a difference between the OBSERVATIONAL STRATEGIES of Kepler and TESS". Pilihan A secara langsung mengontraskan strategi pengamatan keduanya: satu area sempit terkonsentrasi (Kepler) vs hampir seluruh penjuru langit menyasar bintang yang jauh lebih terang (TESS).',
      distractorAnalysis: {
        B: 'Membahas tanggal dan suksesi misi, bukan strategi observasi.',
        C: 'Hanya membahas pencapaian Kepler saja.',
        D: 'Menyatakan kesamaan tujuan umum, bukan perbedaan strategi.'
      },
      subtopic: 'Observational Strategy Contrast Synthesis',
      difficulty: 'medium',
      hint: 'Perbedaan strategi: satu petak langit sempit (Kepler) vs hampir seluruh langit (TESS).'
    },
    {
      id: 'trs-exit-3',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'During the 1920s Harlem Renaissance, visual artist Aaron Douglas developed a distinctive aesthetic synthesizing African tribal motifs with European Art Deco geometric modernism. ______, his celebrated mural series Aspects of Negro Life employed monochromatic silhouettes and concentric circles of light to depict the African American journey from ancestral Africa to the industrial urban North.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['Specifically,', 'In contrast,', 'Nevertheless,', 'Otherwise,'],
      correctAnswer: 'A',
      explanation: 'Kalimat pertama mendeskripsikan gaya estetika umum Douglas (sintesis motif Afrika dan Art Deco). Kalimat kedua memberikan contoh karya spesifik yang menerapkan gaya tersebut secara nyata (mural Aspects of Negro Life). Transisi yang tepat adalah "Specifically," (atau "For example,").',
      distractorAnalysis: {
        B: '"In contrast," keliru karena mural tersebut adalah contoh sejalan dari gaya yang dibahas.',
        C: '"Nevertheless," menandakan kontras/pertentangan.',
        D: '"Otherwise," menandakan kondisi alternatif.'
      },
      subtopic: 'Artistic Exemplification Transitions',
      difficulty: 'medium',
      hint: 'Konsep gaya umum -> contoh karya mural spesifik = Specifically.'
    },
    {
      id: 'trs-exit-4',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'While researching a topic, a student has taken the following notes:\n• The Alhambra is a palace and fortress complex in Granada, Spain.\n• It was originally constructed in the mid-thirteenth century by the Nasrid Dynasty, the last Muslim rulers of the Iberian Peninsula.\n• The palace is renowned for its Islamic architecture, featuring intricate plaster arabesques, carved wooden ceilings, and reflective courtyard pools.\n• In 1492, Catholic monarchs Ferdinand and Isabella conquered Granada and made the Alhambra their royal court.\n\nThe student wants to introduce the Alhambra’s architectural significance to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?',
      prompt: 'Which choice most effectively accomplishes this goal?',
      options: [
        'Built by the Nasrid Dynasty in Spain, the Alhambra is a celebrated palace complex renowned for its Islamic architecture, including intricate arabesques and reflective courtyard pools.',
        'In 1492, Catholic monarchs Ferdinand and Isabella took possession of the Alhambra following their conquest of Granada.',
        'The Nasrid Dynasty was the final Muslim ruling dynasty on the Iberian Peninsula before 1492.',
        'Reflective courtyard pools and wooden ceilings are features commonly found in medieval European palaces.'
      ],
      correctAnswer: 'A',
      explanation: 'Tujuan spesifik: "introduce the Alhambra’s ARCHITECTURAL SIGNIFICANCE to an audience unfamiliar with it". Pilihan A memperkenalkan apa itu Alhambra dan menyoroti signifikansi arsitektur Islamnya (arabesque rumit, kolam pemantul cahaya, istana Nasrid).',
      distractorAnalysis: {
        B: 'Membahas peristiwa penaklukan militer politik 1492, bukan arsitektur.',
        C: 'Membahas sejarah Dinasti Nasrid, bukan arsitektur Alhambra.',
        D: 'Klaim umum tanpa memperkenalkan Alhambra kepada audiens baru.'
      },
      subtopic: 'Introductory Architectural Significance Synthesis',
      difficulty: 'easy',
      hint: 'Perkenalkan ke audiens baru + soroti fitur arsitekturnya (intricate arabesques, reflective pools).'
    },
    {
      id: 'trs-exit-5',
      moduleId: 'transitions-rhetorical-synthesis',
      type: 'multiple_choice',
      passage: 'Proponents of universal basic income argue that direct, unconditional cash transfers empower low-income families to escape poverty without administrative bureaucracy. Skeptics, ______, argue that guaranteed unconditional stipends reduce labor market participation and strain national municipal budgets.',
      prompt: 'Which choice completes the text with the most logical transition?',
      options: ['however,', 'therefore,', 'similarly,', 'for example,'],
      correctAnswer: 'A',
      explanation: 'Kalimat pertama memaparkan pandangan pendukung (proponents). Kalimat kedua memaparkan pandangan penentang (skeptics) yang memiliki argumen berlawanan. Transisi di tengah klausa kedua yang menyatakan pertentangan sudut pandang adalah "however,".',
      distractorAnalysis: {
        B: '"therefore," menandakan kesimpulan sejalan, bukan pandangan pihak lawan.',
        C: '"similarly," menandakan kesepakatan, padahal skeptis menentang pendukung.',
        D: '"for example," keliru karena skeptis bukan contoh dari pendukung.'
      },
      subtopic: 'Inter-Perspective Contrast "However"',
      difficulty: 'easy',
      hint: 'Pendukung (proponents) VS skeptis (skeptics) = however.'
    }
  ],
  discussionPrompts: [
    {
      id: 'trs-disc-1',
      topic: 'Menghindari Jebakan Keringkasan pada Rhetorical Synthesis',
      prompt: 'Banyak siswa diajarkan aturan umum SAT: "pilihan terpendek biasanya benar". Mengapa aturan ini sering berakibat fatal pada soal Rhetorical Synthesis?',
      targetInsight: 'Karena pada Rhetorical Synthesis, pilihan terpendek sering kali mengabaikan tujuan spesifik (goal). Jawaban yang benar adalah pilihan yang paling presisi menjawab kata kunci instruksi, bukan yang paling pendek.'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Hubungan Logika Antar Kalimat',
      activity: 'Siswa menguji hubungan 5 pasangan kalimat (kontras, kausal, atau elaborasi).'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Keluarga Transisi & Metode "Goal Sniper" Bullet Points',
      activity: 'Demonstrasikan cara membaca instruksi "The student wants to..." sebelum membaca catatan bullet point untuk menghemat waktu hingga 30 detik.'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan 12 Soal Kombinasi Transisi & Sintesis',
      activity: 'Siswa membedah opsi yang memuat fakta benar tetapi salah target sasaran.'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Refleksi Guru',
      activity: 'Evaluasi apakah siswa sudah tidak lagi memilih transisi berdasarkan "rasa mengalir".'
    }
  }
};
