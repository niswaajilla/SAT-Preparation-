import { ModuleData } from '../../../types';

export const standardEnglishConventionsModule: ModuleData = {
  id: 'standard-english-conventions',
  title: 'Standard English Conventions',
  domain: 'reading_writing',
  description: 'Tata bahasa baku SAT: pemisahan klausa independen (titik koma, titik dua, tanda hubung em-dash), kesesuaian subjek-kata kerja, dan modifier menggantung (dangling modifiers).',
  targetPacingSeconds: 71,
  entryTicket: [
    {
      id: 'sec-entry-1',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Examining the deep-sea core samples under a high-resolution electron microscope, ______ discovered microscopic fossilized shells that had remained preserved for millennia.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'the marine paleobiologist',
        'the microscopic fossilized shells were found by the marine paleobiologist, who',
        'it was easy for the marine paleobiologist to see that they',
        'the laboratory computer helped the marine paleobiologist, who'
      ],
      correctAnswer: 'A',
      explanation: 'Aturan Modifier Menggantung (Dangling Modifier): Frasa pembuka "Examining the deep-sea core samples under a high-resolution electron microscope" adalah modifier partisipial yang mendeskripsikan subjek yang melakukan tindakan "examining". Subjek logis yang memeriksa sampel harus langsung muncul setelah tanda koma, yaitu "the marine paleobiologist".',
      distractorAnalysis: {
        B: 'Menempatkan "shells" sebagai subjek; cangkang fosil tidak bisa memeriksa sampel sendiri di bawah mikroskop.',
        C: 'Menempatkan kata ganti "it" sebagai subjek (dangling).',
        D: 'Menempatkan "laboratory computer" sebagai subjek, yang tidak secara logis melakukan tindakan memeriksa di kalimat ini.'
      },
      subtopic: 'Dangling Modifiers',
      difficulty: 'easy',
      hint: 'Siapa yang melakukan tindakan "Examining the deep-sea core samples"? Orang tersebut harus langsung mengikuti tanda koma.'
    },
    {
      id: 'sec-entry-2',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'The delicate ecosystem of the coral reef, which supports thousands of interdependent marine species, ______ threatened by rising ocean temperatures and ocean acidification.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['is', 'are', 'were', 'have been'],
      correctAnswer: 'A',
      explanation: 'Aturan Subject-Verb Agreement: Subjek utama kalimat adalah "The delicate ecosystem" (tunggal / singular). Frasa di antara tanda koma ", which supports thousands of interdependent marine species," adalah klausa relatif non-esensial yang harus diabaikan saat mencocokkan kata kerja. Subjek tunggal membutuhkan kata kerja tunggal "is".',
      distractorAnalysis: {
        B: '"Are" adalah jamak, terdistraksi oleh kata "species" di dekatnya.',
        C: '"Were" adalah jamak bentuk lampau.',
        D: '"Have been" adalah jamak (plural verb).'
      },
      subtopic: 'Subject-Verb Agreement with Intervening Clauses',
      difficulty: 'easy',
      hint: 'Abaikan frasa di antara tanda koma. Subjeknya adalah "The delicate ecosystem" (tunggal).'
    },
    {
      id: 'sec-entry-3',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'During the Renaissance, Venetian glassmakers guarded their secret formulas with extreme ______ any artisan who attempted to flee the island of Murano faced severe legal penalties.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'vigilance; in fact,',
        'vigilance, in fact,',
        'vigilance in fact',
        'vigilance, in fact'
      ],
      correctAnswer: 'A',
      explanation: 'Kalimat ini terdiri dari dua klausa independen (independent clauses): "Venetian glassmakers guarded..." dan "any artisan... faced severe penalties". Dua klausa independen tidak boleh dipisahkan hanya dengan tanda koma (comma splice). Pilihan A menggunakan titik koma (semicolon) diikuti oleh conjunctive adverb ("in fact,") yang secara gramatikal benar memisahkan dua klausa utuh.',
      distractorAnalysis: {
        B: 'Comma splice klasik: tanda koma sebelum frasa transisi tidak sah memisahkan dua kalimat utuh.',
        C: 'Run-on sentence tanpa tanda baca pemisah klausa.',
        D: 'Kombinasi run-on dan penempatan koma yang salah.'
      },
      subtopic: 'Independent Clause Boundaries and Semicolons',
      difficulty: 'medium',
      hint: 'Dua klausa utuh (independent clauses) membutuhkan titik koma atau titik, bukan hanya tanda koma (comma splice).'
    },
    {
      id: 'sec-entry-4',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'In her comprehensive biography of Ada Lovelace, historian Miranda Chen analyzes Lovelace’s pioneering notes on Charles Babbage’s Analytical ______ Lovelace had conceptualized computer algorithms a century before the dawn of modern computing.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'Engine; showing that',
        'Engine, which shows that',
        'Engine, it shows that',
        'Engine: showing that'
      ],
      correctAnswer: 'B',
      explanation: 'Pilihan B menggunakan klausa relatif non-restriktif ("Engine, which shows that...") yang secara mulus menghubungkan observasi sejarawan dengan klausa isi subordinate. Pilihan C adalah comma splice ("Engine, it shows..."). Pilihan A salah karena setelah titik koma harus berupa klausa independen utuh (memiliki subjek dan verba terkonjugasi, bukan participle "showing").',
      distractorAnalysis: {
        A: 'Fragment error: setelah titik koma tidak ada klausa independen utuh.',
        C: 'Comma splice error antara klausa pertama dan klausa kedua.',
        D: 'Titik dua (colon) diikuti oleh participle phrase tanpa kelengkapan struktural.'
      },
      subtopic: 'Relative Clauses and Fragment Prevention',
      difficulty: 'hard',
      hint: 'Setelah titik koma wajib ada independent clause utuh. Gunakan klausa relatif ", which shows that".'
    },
    {
      id: 'sec-entry-5',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'The team’s robotic rover had to navigate harsh martian terrain, endure extreme diurnal temperature fluctuations, and ______ data transmission even during severe dust storms.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['maintain', 'maintaining', 'maintained', 'it maintained'],
      correctAnswer: 'A',
      explanation: 'Aturan Struktur Paralel (Parallel Structure): Frasa setelah "had to" menyusun daftar kata kerja infinitif tanpa "to": "navigate...", "endure...", and "[maintain]...". Bentuk kata kerja dasar (base form) "maintain" mempertahankan paralelisme sempurna.',
      distractorAnalysis: {
        B: '"Maintaining" (gerund/participle) merusak paralelisme kata kerja dasar.',
        C: '"Maintained" (lampau) tidak paralel dengan infinitif navigate dan endure.',
        D: '"It maintained" menyisipkan subjek dan kata kerja terkonjugasi di tengah rangkaian kata kerja.'
      },
      subtopic: 'Parallel Verb Series',
      difficulty: 'easy',
      hint: 'had to [navigate], [endure], and [maintain]. Bentuk kata kerja harus paralel.'
    }
  ],
  conceptSections: [
    {
      id: 'sec-c1',
      title: 'Hukum Batas Klausa (Sentence Boundaries & Punctuation)',
      summary: 'Dua Independent Clause (IC) hanya boleh dihubungkan dengan 4 cara yang sah menurut standar SAT: Titik (.), Titik Koma (;), Koma + FANBOYS (, and / , but), atau Titik Dua (:) jika klausa kedua menjelaskan klausa pertama.',
      formulaBox: [
        'SAH: [IC] . [IC]',
        'SAH: [IC] ; [IC]',
        'SAH: [IC] , + FANBOYS + [IC] (For, And, Nor, But, Or, Yet, So)',
        'SAH: [IC] : [IC atau frasa penjelas/daftar]',
        'HARAM (Comma Splice): [IC] , [IC]',
        'HARAM (Run-on): [IC] [IC] (tanpa tanda baca sama sekali)'
      ],
      commonMistakes: [
        'Siswa memperlakukan kata transisi seperti "however", "therefore", "in fact", "moreover" sebagai konjungsi FANBOYS. Menaruh tanda koma sebelum "however" di antara dua klausa adalah COMMA SPLICE!',
        'Siswa menaruh titik dua (:) setelah kata kerja seperti "includes:" atau "is:". Titik dua HANYA boleh ditaruh setelah sebuah Independent Clause yang sudah lengkap.'
      ],
      proTips: [
        'Aturan Titik Dua (:): Tutup bagian setelah titik dua. Jika bagian sebelum titik dua TIDAK bisa berdiri sendiri sebagai kalimat lengkap, titik dua tersebut 100% SALAH.',
        'Aturan Tanda Pisah Ganda (Em-dash / Parenthetical): Jika ada pembuka tanda hubung (—), penutupnya juga wajib tanda hubung (—), bukan tanda koma.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering memberi tanda koma berdasarkan "tempat mengambil napas" saat membaca nyaring. Ajarkan mereka bahwa tata bahasa SAT adalah aturan struktural arsitektur kalimat, bukan ritme pernapasan.'
        ],
        alternativeApproaches: [
          {
            name: 'Uji Potong Kalimat (The Full-Stop Test)',
            description: 'Minta siswa mengganti tanda baca dengan titik (.). Jika kedua sisi bisa berdiri sebagai kalimat terpisah yang utuh, maka menaruh tanda koma saja adalah Comma Splice.'
          }
        ],
        classroomAnalogy: 'Klausa independen seperti gerbong kereta bermesin: kamu tidak bisa menyambungkan dua lokomotif bermesin hanya dengan seutas tali rapuh (tanda koma); kamu butuh pengait baja (titik koma atau FANBOYS).',
        sparkQuestions: [
          'Mengapa kalimat "The weather was stormy, however, the flight took off." dianggap salah total oleh College Board? Bagaimana cara memperbaikinya?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'sec-ex-1',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Published in 1937, Zora Neale Hurston’s novel Their Eyes Were Watching God initially received mixed reviews from ______ only decades later did literary scholars widely acknowledge it as a masterpiece of American literature.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'critics, however,',
        'critics; however,',
        'critics however',
        'critics, however'
      ],
      correctAnswer: 'B',
      explanation: 'Bagian pertama "Published in 1937... mixed reviews from critics" adalah klausa independen pertama. Bagian kedua "only decades later did literary scholars widely acknowledge it..." adalah klausa independen kedua dengan inversi subjek-kata kerja. Kata "however" adalah conjunctive adverb, bukan coordinating conjunction. Oleh karena itu, pemisahan yang sah harus menggunakan titik koma sebelum "however" dan tanda koma setelahnya: "; however,".',
      distractorAnalysis: {
        A: 'Comma splice: menempatkan koma sebelum "however" di antara dua klausa independen melanggar kaidah Standard English.',
        C: 'Run-on tanpa tanda baca pemisah.',
        D: 'Koma tunggal tanpa titik koma adalah kesalahan batas klausa.'
      },
      subtopic: 'Conjunctive Adverbs & Semicolons',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Deteksi Klausa Independen Ganda',
          steps: [
            '1. Uji sisi kiri: "Zora Neale Hurston’s novel... received mixed reviews from critics" (Klausa Independen 1).',
            '2. Uji sisi kanan: "only decades later did literary scholars acknowledge it..." (Klausa Independen 2).',
            '3. Karena "however" adalah conjunctive adverb, rumus wajib adalah: [IC] ; however, [IC].'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa paling sering memilih opsi A (critics, however,) karena saat dibaca dalam hati terdengar mengalir mulus.'
    },
    {
      id: 'sec-ex-2',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'A key factor in the rapid proliferation of electric ______ their plummeting battery production costs, which dropped by more than 80 percent over the past decade.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['vehicles is', 'vehicles are', 'vehicles were', 'vehicles being'],
      correctAnswer: 'A',
      explanation: 'Subjek kalimat adalah "A key factor" (frasa benda tunggal / singular). Frasa preposisi "in the rapid proliferation of electric vehicles" hanyalah pengubah penjelas yang tidak mengubah sifat ketunggalan subjek. Subjek tunggal "A key factor" membutuhkan kata kerja tunggal "is". Opsi "are" dan "were" adalah jamak. Opsi "being" menghasilkan kalimat buntung tanpa kata kerja utama (fragment).',
      distractorAnalysis: {
        B: 'Distraktor kedekatan (proximity error): siswa melihat kata "vehicles" tepat sebelum kata kerja lalu memilih "are".',
        C: '"Were" jamak lampau.',
        D: '"Being" menyebabkan kalimat tidak memiliki finite verb (sentence fragment).'
      },
      subtopic: 'Subject-Verb Agreement and Prepositional Traps',
      difficulty: 'medium',
      methods: [
        {
          title: 'Metode Eliminasi Frasa Preposisi (Cross-out Prepositions)',
          steps: [
            '1. Coret "in the rapid proliferation" dan "of electric vehicles".',
            '2. Yang tersisa sebagai subjek: "A key factor" (tunggal).',
            '3. Pasangkan dengan kata kerja: "A key factor [is] their plummeting battery costs".'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa terkecoh oleh kata benda jamak "vehicles" yang terletak tepat sebelum titik-titik.'
    },
    {
      id: 'sec-ex-3',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'To determine whether ancient hominins controlled fire for cooking, ______ sediment samples from Wonderwerk Cave in South Africa, searching for microscopic traces of heated bone and ash.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'archaeologists analyzed',
        'analysis was conducted on',
        'it was necessary to analyze',
        'the laboratory examined'
      ],
      correctAnswer: 'A',
      explanation: 'Frasa infinitif di awal kalimat: "To determine whether ancient hominins controlled fire for cooking" adalah modifier yang menyatakan tujuan dari pelaku tindakan. Pelaku logis yang ingin menentukan dan mampu menganalisis sedimen adalah para arkeolog ("archaeologists analyzed"). Menempatkan "analysis", "it", atau "the laboratory" menciptakan dangling modifier.',
      distractorAnalysis: {
        B: '"Analysis" tidak bisa memiliki tujuan "to determine whether...".',
        C: '"It" adalah kata ganti kosong tanpa pelaku logis.',
        D: '"The laboratory" (laboratorium fisik) tidak dapat memiliki kehendak ilmiah manusia.'
      },
      subtopic: 'Infinitive Phrase Modifiers',
      difficulty: 'medium',
      methods: [
        {
          title: 'Uji Pelaku Logis (Logical Agent Test)',
          steps: [
            '1. Tanyakan: "Siapa yang ingin menentukan (to determine) apakah hominin purba mengendalikan api?"',
            '2. Jawab: Para arkeolog ("archaeologists").',
            '3. Pastikan kata "archaeologists" langsung berada di awal klausa utama.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa memilih opsi pasif B karena terdengar lebih ilmiah, tanpa menyadari itu menciptakan dangling modifier.'
    }
  ],
  practiceQuestions: [
    {
      id: 'sec-pr-1',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'The discovery of extremophile bacteria living in deep volcanic vents ______ astrobiologists who search for potential microbial life on icy moons such as Europa.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['has fascinated', 'have fascinated', 'are fascinating', 'were fascinating'],
      correctAnswer: 'A',
      explanation: 'Subjek kalimat adalah "The discovery" (tunggal). Kata kerja yang tepat adalah bentuk tunggal "has fascinated".',
      distractorAnalysis: {
        B: '"Have fascinated" adalah bentuk jamak, terdistraksi oleh "bacteria" atau "vents".',
        C: '"Are fascinating" jamak present continuous.',
        D: '"Were fascinating" jamak lampau.'
      },
      subtopic: 'Subject-Verb Agreement Singular Subject',
      difficulty: 'easy',
      hint: 'Subjek kalimat adalah "The discovery" (tunggal), bukan bacteria atau vents.'
    },
    {
      id: 'sec-pr-2',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Biochemist Jennifer Doudna has earned international acclaim for developing CRISPR gene-editing ______ a revolutionary biotechnology that enables precise modifications to genomic sequences.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['technology,', 'technology;', 'technology', 'technology: and'],
      correctAnswer: 'A',
      explanation: 'Frasa "a revolutionary biotechnology that enables..." adalah frasa aposisi (appositive) non-esensial yang mendefinisikan "CRISPR gene-editing technology". Frasa aposisi harus dipisahkan dengan tanda koma sederhana.',
      distractorAnalysis: {
        B: 'Titik koma salah karena bagian setelahnya bukan klausa independen yang memiliki subjek dan verba terkonjugasi.',
        C: 'Tanpa tanda baca membuat kalimat ambigu dan merusak struktur aposisi.',
        D: 'Kombinasi titik dua dan kata hubung "and" berlebihan dan salah.'
      },
      subtopic: 'Appositives and Comma Rules',
      difficulty: 'medium',
      hint: 'Frasa setelah tanda baca adalah appositive penjelas, cukup gunakan tanda koma (,).'
    },
    {
      id: 'sec-pr-3',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Having spent three years meticulously restoring the eighteenth-century oil painting, ______ finally unveiled it to the public in the museum’s central rotunda.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'the master conservator',
        'the public was thrilled when the master conservator',
        'the museum’s central rotunda was the place where the conservator',
        'the painting was so well preserved that the conservator'
      ],
      correctAnswer: 'A',
      explanation: 'Frasa partisipial pembuka "Having spent three years meticulously restoring..." memodifikasi orang yang menghabiskan waktu merestorasi. Pelaku tersebut adalah "the master conservator".',
      distractorAnalysis: {
        B: 'Menempatkan "the public" sebagai subjek (publik tidak merestorasi lukisan).',
        C: 'Menempatkan "central rotunda" sebagai subjek (dangling).',
        D: 'Menempatkan "the painting" sebagai subjek (lukisan tidak merestorasi dirinya sendiri).'
      },
      subtopic: 'Participial Phrase Subject Placement',
      difficulty: 'easy',
      hint: 'Siapa yang merestorasi lukisan selama 3 tahun? The master conservator.'
    },
    {
      id: 'sec-pr-4',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'In 2021, archaeologists excavating a subterranean tomb in Egypt unearthed several intact alabaster ______ vessels contained ancient ceremonial perfumes.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['jars; these', 'jars, these', 'jars these', 'jars, and these'],
      correctAnswer: 'A',
      explanation: '"In 2021... unearthed several intact alabaster jars" adalah klausa independen 1. "these vessels contained ancient ceremonial perfumes" adalah klausa independen 2. Dua klausa independen dipisahkan dengan titik koma (semicolon). Opsi B adalah comma splice.',
      distractorAnalysis: {
        B: 'Comma splice klasik memisahkan dua klausa independen dengan koma.',
        C: 'Run-on sentence tanpa jeda.',
        D: 'Opsi A lebih ringkas dan langsung menghubungkan demonstratif.'
      },
      subtopic: 'Semicolon between Independent Clauses',
      difficulty: 'medium',
      hint: 'Dua klausa independen utuh harus dipisahkan titik koma (; these).'
    },
    {
      id: 'sec-pr-5',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Each of the participants in the longitudinal sleep study ______ required to wear an actigraphy wrist monitor throughout the three-week observation window.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['was', 'were', 'are', 'have been'],
      correctAnswer: 'A',
      explanation: 'Subjek kalimat adalah kata ganti tak tentu "Each" yang selalu bersifat tunggal (singular). Frasa "of the participants..." diabaikan. Kata kerja tunggal yang tepat adalah "was".',
      distractorAnalysis: {
        B: '"Were" adalah jamak, terdistraksi oleh kata "participants".',
        C: '"Are" jamak.',
        D: '"Have been" jamak.'
      },
      subtopic: 'Indefinite Pronouns Singular Agreement',
      difficulty: 'medium',
      hint: '"Each" selalu tunggal (singular): Each was required.'
    },
    {
      id: 'sec-pr-6',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Astronomers can infer the chemical composition of exoplanet atmospheres by analyzing transmission ______ when starlight filters through the atmospheric haze, specific molecules absorb characteristic wavelengths.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['spectra:', 'spectra', 'spectra, and', 'spectra; and'],
      correctAnswer: 'A',
      explanation: 'Klausa pertama memperkenalkan metode umum ("analyzing transmission spectra"), dan klausa kedua memberikan penjelasan terperinci atau mekanisme kerja spesifik dari fenomena tersebut. Titik dua (colon) adalah tanda baca yang tepat untuk memperkenalkan penjelasan atau elaborasi setelah klausa independen utuh.',
      distractorAnalysis: {
        B: 'Run-on sentence tanpa tanda baca.',
        C: 'Penggunaan "spectra, and when..." membuat kalimat kehilangan keterkaitan logis penjelasan.',
        D: 'Titik koma sebelum "and" tidak sesuai kaidah penulisan standar.'
      },
      subtopic: 'Colon for Elaboration and Mechanism',
      difficulty: 'hard',
      hint: 'Titik dua (colon) digunakan setelah klausa independen utuh untuk memperkenalkan penjelasan mekanisme.'
    },
    {
      id: 'sec-pr-7',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'The conservationist noted that neither the deforestation of the lower valley nor the construction of artificial dams ______ the natural seasonal migration of the elk herd.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['has disrupted', 'have disrupted', 'were disrupting', 'are disrupting'],
      correctAnswer: 'A',
      explanation: 'Aturan "Neither... nor": Kata kerja harus mengikuti subjek yang paling dekat dengan kata kerja (Subject-Verb Proximity Rule). Subjek terdekat adalah "the construction of artificial dams". Di sini inti subjeknya adalah "the construction" (tunggal), sedangkan "of artificial dams" adalah frasa preposisi. Subjek tunggal membutuhkan kata kerja tunggal "has disrupted".',
      distractorAnalysis: {
        B: 'Siswa melihat kata "dams" yang jamak lalu memilih "have disrupted".',
        C: '"Were" jamak lampau.',
        D: '"Are" jamak.'
      },
      subtopic: 'Correlative Conjunctions Agreement',
      difficulty: 'hard',
      hint: 'Dalam neither/nor, ikuti subjek yang terdekat dengan verba: "the construction" (tunggal).'
    },
    {
      id: 'sec-pr-8',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'While working as a patent clerk in Bern, Albert Einstein developed four groundbreaking physics papers in ______ a remarkable intellectual achievement that revolutionized humanity’s understanding of space, time, and matter.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['1905—', '1905, and', '1905;', '1905: and'],
      correctAnswer: 'A',
      explanation: 'Tanda pisah tunggal (em-dash) berfungsi untuk menandai jeda dramatis atau menambahkan frasa penjelas/penekanan yang kuat di akhir kalimat ("in 1905—a remarkable intellectual achievement..."). Titik koma di opsi C salah karena bagian berikutnya bukan klausa independen.',
      distractorAnalysis: {
        B: 'Menambahkan "and" sebelum frasa benda membuat struktur kalimat terputus tanpa predikat.',
        C: 'Setelah titik koma wajib ada independent clause utuh.',
        D: 'Kombinasi tanda baca tidak valid.'
      },
      subtopic: 'Em-Dash for Dramatic Emphasis',
      difficulty: 'medium',
      hint: 'Gunakan em-dash (—) untuk memperkenalkan appositive penjelas yang dramatis.'
    },
    {
      id: 'sec-pr-9',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Before beginning the surgical procedure, the medical team reviewed the patient’s imaging scans, sanitized all sterile instruments, and ______ the dosage parameters with the attending anesthesiologist.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['verified', 'verifying', 'to verify', 'they verified'],
      correctAnswer: 'A',
      explanation: 'Struktur paralel kata kerja lampau sederhana (simple past tense series): "reviewed...", "sanitized...", and "[verified]...".',
      distractorAnalysis: {
        B: '"Verifying" (participle) merusak paralelisme kata kerja lampau.',
        C: '"To verify" (infinitive) tidak cocok.',
        D: '"They verified" menyisipkan subjek redundan di dalam daftar kata kerja.'
      },
      subtopic: 'Parallel Verb Past Tense',
      difficulty: 'easy',
      hint: 'Paralel: reviewed, sanitized, and verified.'
    },
    {
      id: 'sec-pr-10',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'The novel features two contrasting narrators: an elderly botanist who lives in secluded rural solitude and ______',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'a young journalist who investigates financial scandals in the city.',
        'in the city, financial scandals are investigated by a young journalist.',
        'investigating financial scandals in the city is what a young journalist does.',
        'a young journalist’s investigation of urban financial scandals.'
      ],
      correctAnswer: 'A',
      explanation: 'Paralelisme elemen komparatif: "an elderly botanist who lives in secluded rural solitude and [a young journalist who investigates financial scandals in the city]". Keduanya tersusun dari [noun phrase: a/an + adjective + noun] diikuti oleh [klausa relatif: who + verb].',
      distractorAnalysis: {
        B: 'Struktur klausa pasif merusak paralelisme.',
        C: 'Struktur gerund merusak paralelisme frasa benda.',
        D: 'Membandingkan orang (botanist) dengan investigasi (investigation), bukan sesama orang (journalist).'
      },
      subtopic: 'Faulty Comparison and Parallel Structure',
      difficulty: 'hard',
      hint: 'Bandingkan orang dengan orang: an elderly botanist who... and a young journalist who...'
    },
    {
      id: 'sec-pr-11',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'The geologist presented evidence that volcanic eruptions in the Siberian Traps released massive quantities of carbon dioxide ______ triggering severe ocean anoxia and precipitating the end-Permian mass extinction.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [', thereby', '; thereby', ', and thereby', '; and thereby'],
      correctAnswer: 'A',
      explanation: 'Frasa ", thereby triggering..." adalah participial phrase yang menyatakan konsekuensi atau akibat logis dari klausa utama. Tanda koma sebelum "thereby triggering" secara tepat menyambungkan klausa participle hasil.',
      distractorAnalysis: {
        B: 'Titik koma salah karena setelahnya tidak ada subjek dan kata kerja utama.',
        C: 'Penggunaan ", and thereby triggering" canggung dan redundan.',
        D: 'Kombinasi tanda baca salah.'
      },
      subtopic: 'Participle Clause of Result',
      difficulty: 'medium',
      hint: 'Gunakan tanda koma sebelum participle phrase: , thereby triggering...'
    },
    {
      id: 'sec-pr-12',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Although many urban planners have advocated for the expansion of municipal bike lanes, ______ remains skeptical about the long-term impact on vehicular traffic congestion.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'the city council',
        'the city council members, they',
        'it is the city council that',
        'there are city council members who'
      ],
      correctAnswer: 'A',
      explanation: 'Setelah klausa dependen pembuka "Although many urban planners have advocated...", klausa utama membutuhkan subjek yang jelas dan kata kerja terkonjugasi. Kata kerja utama di klausa kedua adalah "remains" (tunggal). Subjek tunggal yang bersih adalah "the city council".',
      distractorAnalysis: {
        B: 'Pengulangan subjek ganda (double subject redundancy: members, they).',
        C: 'Menghasilkan kalimat pembelah ("cleft sentence") yang tidak memiliki predikat utama untuk "remains".',
        D: 'Menghasilkan konstruksi kalimat bertele-tele yang terpotong.'
      },
      subtopic: 'Clear Subject Identification',
      difficulty: 'medium',
      hint: 'Klausa utama butuh subjek tunggal yang jelas untuk kata kerja "remains": the city council.'
    }
  ],
  exitTicket: [
    {
      id: 'sec-exit-1',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'The symphony orchestra’s dynamic performance of Stravinsky’s The Rite of Spring, which included thunderous percussive sequences and unconventional rhythmic cadences, ______ a standing ovation from the audience.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['elicited', 'eliciting', 'to elicit', 'having elicited'],
      correctAnswer: 'A',
      explanation: 'Subjek kalimat adalah "The symphony orchestra’s dynamic performance" (tunggal). Kalimat memerlukan kata kerja terkonjugasi utama (finite verb) dalam bentuk past tense untuk menyelesaikan klausa. Kata kerja yang tepat adalah "elicited".',
      distractorAnalysis: {
        B: '"Eliciting" adalah participle tanpa auxiliary verb (menghasilkan sentence fragment).',
        C: '"To elicit" adalah infinitif.',
        D: '"Having elicited" adalah participle lampau.'
      },
      subtopic: 'Sentence Fragment and Finite Verb Need',
      difficulty: 'easy',
      hint: 'Kalimat utama membutuhkan finite verb (kata kerja utuh): elicited.'
    },
    {
      id: 'sec-exit-2',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Stretching for over 1,500 miles along the northeastern coast of Australia, ______ is composed of billions of tiny coral polyps.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'the Great Barrier Reef',
        'scientists have determined that the Great Barrier Reef',
        'it is known that the Great Barrier Reef',
        'tourists from around the world visit the Great Barrier Reef, which'
      ],
      correctAnswer: 'A',
      explanation: 'Dangling modifier: Frasa pembuka "Stretching for over 1,500 miles..." mendeskripsikan terumbu karang. Oleh karena itu, subjek yang langsung mengikuti koma wajib "the Great Barrier Reef".',
      distractorAnalysis: {
        B: 'Ilmuwan tidak membentang 1500 mil.',
        C: 'Kata ganti "it" menciptakan konstruksi menggantung.',
        D: 'Turis tidak membentang 1500 mil di pesisir pantai.'
      },
      subtopic: 'Introductory Modifier Subject',
      difficulty: 'easy',
      hint: 'Apa yang membentang 1.500 mil? The Great Barrier Reef.'
    },
    {
      id: 'sec-exit-3',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'The archival collection includes three distinct categories of historical artifacts: handwritten letters, ceremonial textiles, ______',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: [
        'and hand-forged iron tools.',
        'and also tools made of iron.',
        'iron tools were hand-forged.',
        'as well as the inclusion of iron tools.'
      ],
      correctAnswer: 'A',
      explanation: 'Struktur paralel dalam daftar 3 unsur setelah titik dua: "handwritten letters", "ceremonial textiles", and "[hand-forged iron tools]". Semuanya berupa [adjective + noun].',
      distractorAnalysis: {
        B: 'Merusak pola kata sifat + kata benda.',
        C: 'Menyisipkan klausa independen ke dalam daftar frasa benda.',
        D: 'Bertele-tele dan tidak paralel.'
      },
      subtopic: 'Series Parallelism',
      difficulty: 'medium',
      hint: 'Pola paralel: adjective + noun (hand-forged iron tools).'
    },
    {
      id: 'sec-exit-4',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Neither the lead research climatologist nor the assisting data analysts ______ anticipated the unprecedented velocity of glacial retreat recorded in the satellite radar images.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['have', 'has', 'is having', 'was having'],
      correctAnswer: 'A',
      explanation: 'Aturan "Neither... nor": Subjek terdekat dengan verba adalah "the assisting data analysts" (jamak / plural). Oleh karena itu, kata kerja yang menyertainya harus berbentuk jamak "have anticipated".',
      distractorAnalysis: {
        B: '"Has" adalah tunggal, keliru jika disesuaikan dengan subjek pertama "climatologist".',
        C: 'Tenses continuous tidak cocok.',
        D: '"Was" tunggal.'
      },
      subtopic: 'Neither-Nor Agreement Proximity Rule',
      difficulty: 'hard',
      hint: 'Dalam neither/nor, sesuaikan dengan subjek terdekat: analysts (jamak) => have.'
    },
    {
      id: 'sec-exit-5',
      moduleId: 'standard-english-conventions',
      type: 'multiple_choice',
      passage: 'Renowned for its acoustic clarity, the newly constructed auditorium was designed with specialized sound-dampening panels ______ the venue’s reverberation time is precisely calibrated for symphonic concerts.',
      prompt: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
      options: ['; consequently,', ', consequently,', 'consequently', ', and; consequently,'],
      correctAnswer: 'A',
      explanation: 'Dua klausa independen utuh dihubungkan oleh kata transisi akibat ("consequently"). Format yang sah adalah titik koma sebelum "consequently" dan koma setelahnya: "; consequently,".',
      distractorAnalysis: {
        B: 'Comma splice klasik.',
        C: 'Run-on tanpa tanda baca.',
        D: 'Tanda baca tidak baku dan tidak valid.'
      },
      subtopic: 'Conjunctive Adverb Punctuation',
      difficulty: 'medium',
      hint: 'Dua independent clauses butuh titik koma: ; consequently,'
    }
  ],
  discussionPrompts: [
    {
      id: 'sec-disc-1',
      topic: 'Mengatasi Mitos "Koma = Jeda Bernapas"',
      prompt: 'Bagaimana cara terbaik membebaskan siswa dari kebiasaan meletakkan koma di sembarang tempat hanya karena mereka merasa perlu "bernafas" saat membaca kalimat panjang?',
      targetInsight: 'Latih siswa melakukan bedah subjek-predikat (Subject-Verb Anchor) dan memetakan apakah tanda baca menghubungkan kata, frasa, atau klausa independen.'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Deteksi Comma Splice & Modifiers',
      activity: '5 soal diagnostik cepat menguji tanda baca batas kalimat dan subjek yang tepat.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: '4 Pengikat Sah Klausa Independen & Aturan Dangling Modifier',
      activity: 'Bandingkan rumus IC; IC vs IC, FANBOYS IC. Lakukan demo langsung mengenali subjek partisipial di depan kalimat.'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan 12 Soal Tata Bahasa Digital SAT',
      activity: 'Siswa bekerja berpasangan mengeliminasi opsi dengan mencoret frasa preposisi dan mencari finite verb.'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Refleksi',
      activity: 'Evaluasi apakah akurasi batas klausa dan paralelisme sudah melampaui 80%.'
    }
  }
};
