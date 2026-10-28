import { ModuleData } from '../../../types';

export const inferencesEvidenceModule: ModuleData = {
  id: 'inferences-evidence',
  title: 'Inferences & Evidence',
  domain: 'reading_writing',
  description: 'Inferensi logis yang tidak melompat terlalu jauh (conservative inference), evaluasi hipotesis ilmiah (support vs weaken), dan analisis bukti teks serta tabel data kuantitatif.',
  targetPacingSeconds: 71,
  entryTicket: [
    {
      id: 'inf-entry-1',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Neuroscientists hypothesized that REM sleep plays a vital role in consolidating emotional memories. In a controlled experiment, subjects who were selectively deprived of REM sleep showed significant impairments in recalling emotionally charged imagery compared to a control group that experienced uninterrupted REM sleep. However, both groups demonstrated identical retention rates when tested on neutral, factual word pairs. This experimental divergence suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'REM sleep is uniquely critical for processing emotional stimuli rather than all forms of cognitive memory.',
        'non-REM sleep is entirely useless for maintaining human neurological health.',
        'the human brain processes neutral factual information exclusively during waking daylight hours.',
        'depriving individuals of REM sleep enhances their general intellectual test performance.'
      ],
      correctAnswer: 'A',
      explanation: 'Eksperimen menunjukkan bahwa kekurangan REM sleep merusak memori emosional secara spesifik, namun tidak mengganggu memori kata-kata netral/faktual. Kesimpulan logis yang paling terukur (conservative inference) adalah bahwa REM sleep secara khusus penting untuk pemrosesan rangsangan emosional, bukan untuk semua jenis memori kognitif.',
      distractorAnalysis: {
        B: 'Lompatan ekstrem yang tidak berdasar: teks tidak menyatakan non-REM sleep tidak berguna.',
        C: 'Klaim absolut keliru ("exclusively during waking daylight hours").',
        D: 'Bertolak belakang dengan hasil penelitian yang menunjukkan gangguan (impairments).'
      },
      subtopic: 'Hypothesis Deduction',
      difficulty: 'medium',
      hint: 'Perhatikan pemisahan hasil: memori emosional terganggu, tetapi kata netral sama sekali tidak terganggu.'
    },
    {
      id: 'inf-entry-2',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Astrophysicists analyzing the orbital anomalies of trans-Neptunian objects hypothesized the existence of an undiscovered massive planet ("Planet Nine") on the outer fringes of the solar system. Critics countered that the observed clustering of orbits was merely an artifact of observational bias—astronomers preferentially point telescopes toward specific patches of sky. If a wide-field, unbiased sky survey were to identify dozens of additional trans-Neptunian objects exhibiting identical orbital clustering across unmonitored sectors, this finding would ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'undermine the observational bias critique and lend support to the Planet Nine hypothesis.',
        'definitively prove that trans-Neptunian objects cannot be influenced by planetary gravity.',
        'confirm that telescopes are incapable of detecting celestial bodies beyond Neptune.',
        'demonstrate that the original orbital anomalies were computational calculation errors.'
      ],
      correctAnswer: 'A',
      explanation: 'Kritik para penentang adalah bahwa pengelompokan orbit hanyalah akibat "observational bias" (arahan teleskop yang terbatas ke area tertentu). Jika survei langit yang objektif dan luas menemukan pengelompokan yang sama di sektor yang belum pernah dipantau sebelumnya, hal itu membantah kritik bias pengamatan dan memperkuat hipotesis keberadaan Planet Sembilan.',
      distractorAnalysis: {
        B: 'Bertentangan dengan tujuan pembuktian gravitasi planet.',
        C: 'Klaim absurd bahwa teleskop tidak bisa mendeteksi objek.',
        D: 'Teks membicarakan verifikasi pola fisik, bukan kesalahan komputasi matematika.'
      },
      subtopic: 'Support and Weaken Counter-Arguments',
      difficulty: 'hard',
      hint: 'Jika pengelompokan ditemukan di sektor acak lain, argumen "bias pengamatan" gugur dan hipotesis planet menguat.'
    },
    {
      id: 'inf-entry-3',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Archaeologists excavating an ancient Indus Valley settlement discovered that residential homes exhibited nearly uniform floor plans and dimensions across all neighborhood sectors. Unlike contemporaneous Mesopotamian and Egyptian cities, which featured grand imperial palaces and monumentally opulent elite tombs, the Indus site lacked any discernible architectural disparities in residential wealth. This archaeological pattern strongly suggests that the society ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'possessed a comparatively egalitarian social organization with minimal visible wealth stratification.',
        'was ruled by an absolute monarch who prohibited citizens from building stone foundations.',
        'lacked the masonry skills required to construct multi-story dwellings.',
        'was completely abandoned due to catastrophic tectonic earthquakes.'
      ],
      correctAnswer: 'A',
      explanation: 'Ketiadaan istana megah, makam mewah bangsawan, serta keseragaman ukuran rumah di semua sektor permukiman mengindikasikan bahwa peradaban Lembah Indus memiliki struktur sosial yang relatif egaliter dengan stratifikasi kekayaan yang minimal dibandingkan Mesir atau Mesopotamia.',
      distractorAnalysis: {
        B: 'Spekulasi tanpa bukti: tidak ada bukti monarki absolut yang melarang fondasi batu.',
        C: 'Teks tidak membahas kelemahan keterampilan teknis tukang batu.',
        D: 'Penyebab keruntuhan gempa tidak dibahas dalam passage.'
      },
      subtopic: 'Archaeological Inference',
      difficulty: 'easy',
      hint: 'Keseragaman ukuran rumah dan tiadanya istana megah menunjukkan masyarakat yang egaliter tanpa ketimpangan ekstrem.'
    },
    {
      id: 'inf-entry-4',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Biologist Dr. Thorne hypothesized that alpine marmots whistle alarm calls primarily as an act of kin selection, warning genetic relatives of approaching aerial predators rather than protecting unrelated peers. To test this, Thorne recorded predator attacks in colonies with varying kinship compositions. Which finding, if true, would most directly support Dr. Thorne’s hypothesis?',
      prompt: 'Which choice most directly supports the hypothesis?',
      options: [
        'Marmots issued alarm calls significantly more frequently when their immediate offspring or siblings were in the foraging group than when surrounded solely by unrelated individuals.',
        'Marmots produced louder alarm calls when confronted by ground predators such as coyotes than by golden eagles.',
        'Juvenile marmots were unable to distinguish between genuine predator warnings and accidental vocalizations.',
        'Colonies with larger total populations experienced higher rates of predatory attacks regardless of family structure.'
      ],
      correctAnswer: 'A',
      explanation: 'Hipotesis kin selection (seleksi kerabat) menyatakan bahwa panggilan bahaya dilakukan untuk menyelamatkan individu yang memiliki hubungan darah/genetik. Temuan bahwa marmot bersiul lebih sering saat ada anak atau saudara kandung dibandingkan saat hanya ada marmot asing yang tidak berkerabat secara langsung mendukung hipotesis kin selection.',
      distractorAnalysis: {
        B: 'Perbandingan predator darat vs udara tidak menguji faktor hubungan kekerabatan genetik.',
        C: 'Kemampuan membedakan suara pada marmot muda tidak membuktikan motivasi seleksi kerabat.',
        D: 'Ukuran populasi total tidak menguji variabel hubungan keluarga.'
      },
      subtopic: 'Direct Hypothesis Support',
      difficulty: 'medium',
      hint: 'Cari opsi yang secara langsung mengaitkan frekuensi panggilan bahaya dengan kehadiran kerabat dekat (offspring/siblings).'
    },
    {
      id: 'inf-entry-5',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Economists evaluated the implementation of an algorithmic price-optimization system across 200 competing retail pharmacies. Classical market theory predicts that algorithmic tools increase market efficiency and drive consumer prices down toward marginal costs. However, the researchers discovered that when multiple competing algorithms interacted over thousands of daily iterations, they autonomously converged on supra-competitive prices without any human communication. This unexpected result indicates that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'pricing algorithms can tacitly coordinate higher market prices without explicit human collusion.',
        'classical economic models have successfully eliminated price fixing in retail markets.',
        'human pharmacists are legally required to review all automated price adjustments.',
        'algorithmic software is technically incapable of determining supply and demand equilibriums.'
      ],
      correctAnswer: 'A',
      explanation: 'Hasil riset menunjukkan bahwa algoritma-algoritma yang bersaing secara mandiri menetapkan harga yang lebih tinggi di atas tingkat kompetitif normal ("supra-competitive prices") tanpa komunikasi manusia. Ini menunjukkan bahwa kecerdasan buatan dapat melakukan koordinasi diam-diam (tacit coordination/collusion) tanpa perlu persekongkolan manusia secara eksplisit.',
      distractorAnalysis: {
        B: 'Bertentangan: teori klasik memprediksi penurunan harga, padahal harga justru naik.',
        C: 'Kewajiban hukum regulasi tidak dibahas dalam teks riset.',
        D: 'Klaim teknis salah; algoritma justru sangat adaptif namun menguntungkan penjual secara bersama-sama.'
      },
      subtopic: 'Economic Empirical Inference',
      difficulty: 'hard',
      hint: 'Algoritma secara otomatis menyatu pada harga tinggi tanpa koordinasi manusia = tacit coordination.'
    }
  ],
  conceptSections: [
    {
      id: 'inf-c1',
      title: 'Hukum "Conservative Step" & Menguji Hipotesis',
      summary: 'Soal inferensi SAT tidak meminta imajinasi liar atau kesimpulan spekulatif. Jawaban yang benar selalu merupakan langkah logis terkecil dan paling tak terbantahkan dari premis teks (The Safe Step Rule).',
      formulaBox: [
        'Aturan Emas Inferensi: Jika P dan Q benar, maka kesimpulan HANYA boleh mencakup area irisan pasti P dan Q.',
        'Ciri Jawaban Benar: Frasa terukur (may, suggests, indicates, indicates a tendency, under certain conditions).',
        'Ciri Jawaban Jebakan: Frasa absolut/ekstrem (proves conclusively, guarantees, impossible, solely, completely useless).'
      ],
      commonMistakes: [
        'Siswa membuat lompatan kausalitas yang melampaui data (misal: "marmot bersiul pada saudara" disimpulkan "marmot adalah hewan paling cerdas di ekosistem").',
        'Pada soal "Support/Weaken", siswa memilih opsi yang hanya mengulang premis latar belakang teks alih-alih memberikan data observasi baru yang memperkuat atau melemahkan klaim.'
      ],
      proTips: [
        'Uji Negasi untuk Inferensi: Jika Anda menyangkal pilihan yang benar, premis teks akan runtuh atau menjadi kontradiksi yang mustahil.',
        'Pada soal "Which finding, if true...", carilah variabel independen (penyebab) dan variabel dependen (efek) yang disebutkan dalam hipotesis penulis.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering membawa pengetahuan luar (outside knowledge) dari kelas biologi atau sejarah mereka, lalu memilih opsi yang "benar di dunia nyata" padahal TIDAK BISA dibuktikan dari teks pendek tersebut.'
        ],
        alternativeApproaches: [
          {
            name: 'Aturan "Kamera Pengadilan" (Courtroom Evidence)',
            description: 'Katakan kepada siswa: "Kalian adalah hakim. Jika kalian tidak bisa menunjuk kalimat di passage yang membuktikan opsi tersebut, kalian tidak boleh menandatanganinya."'
          }
        ],
        classroomAnalogy: 'Inferensi logis SAT seperti melangkah di atas jembatan batu: kamu hanya boleh melangkah ke batu berikutnya yang terlihat jelas di bawah kakimu, bukan melompat ke seberang tebing di dalam kabut tebal.',
        sparkQuestions: [
          'Mengapa di Digital SAT, kata "proves" hampir selalu menandai jawaban yang salah, sedangkan kata "suggests" sering kali merupakan jawaban yang benar?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'inf-ex-1',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Paleontologists analyzing hadrosaur fossil tracks in Alaska noticed that juvenile tracks were consistently interspersed among adult footprints, with smaller stride lengths matching the herd’s travel pace. Previous hypotheses suggested that hadrosaur hatchlings were precocial and dispersed independently shortly after birth. However, the Alaskan trackway findings suggest instead that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'hadrosaurs exhibited prolonged social herd cohesion and parental care during juvenile growth.',
        'juvenile hadrosaurs were faster runners than adult hadrosaurs across snowy terrain.',
        'hadrosaur hatchlings fed exclusively on coniferous vegetation found in polar latitudes.',
        'adult hadrosaurs abandoned their herds during seasonal arctic blizzards.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks mengontraskan hipotesis lama (anak hadrosaur menyebar mandiri setelah lahir) dengan bukti baru di jejak fosil Alaska (jejak anak berbaur dengan jejak dewasa dan melangkah sesuai tempo rombongan). Bukti ini secara logis menunjukkan bahwa anak hadrosaur tetap bersama kelompoknya dalam ikatan sosial kawanan dan perawatan induk yang panjang.',
      distractorAnalysis: {
        B: 'Teks menyatakan panjang langkah anak menyesuaikan kecepatan kawanan, bukan berlari lebih cepat.',
        C: 'Pola makan konifer tidak disebutkan sama sekali dalam data jejak kaki.',
        D: 'Bertolak belakang dengan jejak kawanan yang berjalan berdampingan.'
      },
      subtopic: 'Fossil Evidence Logical Deduction',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Penggabungan Premis Fisik ke Perilaku',
          steps: [
            '1. Premis 1: Jejak anak berbaur di dalam jejak dewasa.',
            '2. Premis 2: Kecepatan anak seirama dengan kawanan dewasa.',
            '3. Kesimpulan: Mereka bergerak bersama sebagai kawanan sosial (parental care & herd cohesion).'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa berspekulasi tentang kecepatan lari atau cuaca es tanpa dasar bukti teks.'
    },
    {
      id: 'inf-ex-2',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Sociologists investigated whether automated resume-screening algorithms perpetuate gender bias in hiring. When the researchers submitted identical resumes where only the applicant’s first name was varied, masculine-coded names received 34 percent more interview invitations for technical leadership roles. However, when the resumes were modified to remove all candidate names and educational graduation dates, interview invitation rates across gender cohorts equalized. This finding suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'the disparity in interview invitations was driven by algorithmic or human reactions to demographic identifiers rather than applicant qualifications.',
        'male applicants inherently possessed superior credentials for technical leadership positions.',
        'anonymizing resumes completely eliminates all forms of workplace discrimination post-hiring.',
        'technical leadership resumes should never be reviewed by artificial intelligence systems.'
      ],
      correctAnswer: 'A',
      explanation: 'Ketika kualifikasi sama persis, pengubahan nama memunculkan disparitas 34%. Namun ketika nama dan tanggal dihapus, disparitas hilang. Ini membuktikan bahwa disparitas disebabkan oleh reaksi terhadap identitas demografis (nama), bukan oleh kualifikasi pelamar.',
      distractorAnalysis: {
        B: 'Resumae yang digunakan identik secara kualifikasi, sehingga opsi ini bertentangan dengan desain eksperimen.',
        C: 'Lompatan klaim berlebihan: anonimisasi hanya menyamakan undangan wawancara tahap awal, tidak menjamin diskriminasi setelah diterima kerja hilang total.',
        D: 'Rekomendasi kebijakan normatif yang melampaui fungsi kesimpulan empiris teks.'
      },
      subtopic: 'Experimental Disparity Deduction',
      difficulty: 'medium',
      methods: [
        {
          title: 'Metode Kontrol Variabel (Isolating the Root Cause)',
          steps: [
            '1. Variabel kualifikasi: dipegang konstan (identical).',
            '2. Variabel nama diubah -> hasil berbeda.',
            '3. Variabel nama dihapus -> hasil setara.',
            '4. Maka penyebab disparitas adalah pengenal demografis (nama).'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa memilih opsi C karena terdengar sangat positif, padahal melanggar batas cakupan bukti eksperimen (post-hiring tidak diuji).'
    },
    {
      id: 'inf-ex-3',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Plant physiological ecologist Dr. Al-Mansoor evaluated two competing explanations for why desert succulents open their stomata only at night (Crassulacean Acid Metabolism, or CAM). Hypothesis A attributes night-opening to minimizing transpirational water loss due to cooler nighttime air. Hypothesis B claims night-opening is primarily driven by avoiding daytime photoinhibition under high solar radiance. To test this, Al-Mansoor placed succulents in a climate chamber where daytime temperatures were chilled while keeping intense illumination high. Under these conditions, the plants continued opening stomata exclusively during the dark period. This outcome most directly ______',
      prompt: 'Which choice completes the text so that it conforms to the logic of the experiment?',
      options: [
        'challenges Hypothesis A and provides support for Hypothesis B.',
        'confirms that CAM photosynthesis cannot operate in artificially illuminated chambers.',
        'proves that daytime temperature is the sole regulator of succulent transpiration.',
        'demonstrates that succulents rely on soil moisture rather than atmospheric air.'
      ],
      correctAnswer: 'A',
      explanation: 'Dalam eksperimen, suhu siang hari didinginkan (sehingga jika suhu sejuk/kehilangan air adalah alasan utama menurut Hipotesis A, tanaman seharusnya membuka stomata di siang hari yang sejuk). Namun tanaman tetap membuka stomata di malam gelap saat tidak ada radiasi cahaya. Ini melemahkan Hipotesis A (yang mengaitkan dengan suhu/kehilangan air) dan mendukung Hipotesis B (terkait penghindaran radiasi cahaya).',
      distractorAnalysis: {
        B: 'Tanaman tetap berfungsi di ruang tersebut, tidak ada bukti fotosintesis macet total.',
        C: 'Bertolak belakang: tanaman tidak merespon pendinginan suhu siang.',
        D: 'Kelembaban tanah tidak diuji dalam manipulasi eksperimen ini.'
      },
      subtopic: 'Testing Competing Scientific Hypotheses',
      difficulty: 'hard',
      methods: [
        {
          title: 'Matriks Uji Hipotesis Kompetitif',
          steps: [
            '1. Kondisi uji: Siang hari dibuat dingin (menetralkan alasan Hipotesis A).',
            '2. Respon tanaman: Tetap membuka stomata hanya saat gelap (mendukung Hipotesis B tentang radiasi).',
            '3. Kesimpulan: Menentang Hipotesis A dan mendukung Hipotesis B.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa bingung membedakan antara variabel suhu dan variabel radiasi cahaya dalam desain eksperimen.'
    }
  ],
  practiceQuestions: [
    {
      id: 'inf-pr-1',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'A study comparing nocturnal predators in temperate forests found that owls hunt small rodents with equal hunting success in complete overcast darkness as during moonlit nights. Barn owls possess specialized facial disc feathers that funnel minute sound waves directly into asymmetrical ear canals, allowing them to pinpoint prey rustling under leaf litter without visual assistance. This evidence suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'barn owls can locate prey relying on auditory sensory perception rather than sight.',
        'rodents in temperate forests are active only during complete cloud cover.',
        'asymmetrical ear canals make owls vulnerable to auditory sensory overload.',
        'barn owls lose their hunting ability entirely during heavy snowstorms.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyatakan keberhasilan berburu burung hantu sama tingginya di kegelapan total, dibantu oleh bulu wajah dan telinga asimetris yang memfokuskan gelombang suara dari balik dedaunan tanpa bantuan penglihatan visual. Kesimpulan logisnya adalah burung hantu mengandalkan persepsi pendengaran daripada penglihatan saat berburu.',
      distractorAnalysis: {
        B: 'Asumsi salah tentang aktivitas tikus.',
        C: 'Spekulasi negatif tanpa bukti.',
        D: 'Badai salju tidak dibahas.'
      },
      subtopic: 'Sensory Adaptation Deduction',
      difficulty: 'easy',
      hint: 'Burung hantu berburu dengan sukses sama di kegelapan pekat berkat telinga asimetris = mengandalkan pendengaran.'
    },
    {
      id: 'inf-pr-2',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Economists analyzed productivity across 50 corporate firms following the adoption of mandatory four-day workweeks. While total weekly hours worked per employee decreased by 20 percent, overall firm output and revenue remained steady or increased slightly across 85 percent of participating companies. Furthermore, employee sick leave requests dropped by 35 percent. This data indicates that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'reduced work hours can be offset by higher hourly employee productivity and lower absenteeism.',
        'four-day workweeks inevitably lead to corporate bankruptcy in manufacturing sectors.',
        'employees worked longer unpaid overtime hours from home on the fifth day.',
        'revenue growth in companies is entirely independent of employee well-being.'
      ],
      correctAnswer: 'A',
      explanation: 'Meskipun jam kerja berkurang 20%, output tetap stabil dan cuti sakit turun 35%. Ini menunjukkan bahwa pengurangan jam kerja dapat diimbangi oleh peningkatan produktivitas per jam kerja dan penurunan absensi karyawan.',
      distractorAnalysis: {
        B: 'Bertolak belakang dengan pendapatan yang stabil atau meningkat.',
        C: 'Tuduhan kerja lembur tak dibayar tidak ada dalam teks.',
        D: 'Bertentangan dengan penurunan cuti sakit yang berkontribusi positif.'
      },
      subtopic: 'Economic Productivity Inference',
      difficulty: 'easy',
      hint: 'Jam berkurang tetapi hasil tetap stabil dan cuti sakit turun = produktivitas per jam naik.'
    },
    {
      id: 'inf-pr-3',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Glaciologists studying ice cores from Greenland noticed that atmospheric methane concentrations rose abruptly within decades following the end of the Younger Dryas cold period. Geochemical analysis of carbon isotopes in the trapped methane revealed that the isotopic ratio matched microbial methane produced in tropical wetlands rather than marine methane hydrates released from thawing seabeds. This isotopic finding suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'rapid post-glacial climate warming stimulated tropical wetland emissions before substantial marine hydrate destabilization occurred.',
        'marine methane hydrates have never influenced Earth’s historical atmospheric composition.',
        'tropical wetlands completely dried out during the warming period following the Younger Dryas.',
        'microbial organisms in wetlands cannot produce measurable levels of greenhouse gases.'
      ],
      correctAnswer: 'A',
      explanation: 'Karena rasio isotop karbon cocok dengan metana mikroba lahan basah tropis dan bukan hidrat laut, lonjakan metana atmosfer pasca-glasial didorong oleh emisi lahan basah tropis sebelum terjadinya destabilisasi hidrat laut dalam skala besar.',
      distractorAnalysis: {
        B: 'Kata absolut keliru ("have never influenced").',
        C: 'Bertolak belakang: lahan basah justru aktif memproduksi gas.',
        D: 'Bertentangan langsung dengan bukti ilmiah teks.'
      },
      subtopic: 'Geochemical Isotope Deduction',
      difficulty: 'hard',
      hint: 'Isotop cocok dengan lahan basah tropis, membuktikan pemanasan memicu emisi dari lahan basah tropis terlebih dahulu.'
    },
    {
      id: 'inf-pr-4',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Psychologists conducted an experiment evaluating memory retention when reading printed textbooks versus digital screens. Participants who read long expository texts in physical books scored significantly higher on chronological ordering questions, successfully reconstructing the sequence of historical events. Brain-imaging data showed that tactile sensory feedback—such as feeling physical page thickness and turning pages—provides spatial anchors that assist cognitive mental mapping. This suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'physical navigation cues can aid the cognitive organization of temporal information in complex texts.',
        'digital screens destroy the human brain’s capacity to process written language.',
        'students should never use computers for academic learning.',
        'chronological history is the only subject that benefits from printed reading materials.'
      ],
      correctAnswer: 'A',
      explanation: 'Umpan balik taktil (meraba tebal halaman fisik) berfungsi sebagai jangkar spasial yang membantu pemetaan mental urutan waktu peristiwa sejarah. Kesimpulan logis terukur: petunjuk navigasi fisik dapat membantu pengorganisasian kognitif informasi temporal dalam teks.',
      distractorAnalysis: {
        B: 'Klaim hiperbolik yang tidak masuk akal.',
        C: 'Rekomendasi ekstrem melampaui data studi.',
        D: 'Kata absolut yang salah ("the only subject").'
      },
      subtopic: 'Cognitive Science Evidence Deduction',
      difficulty: 'medium',
      hint: 'Petunjuk sentuhan fisik halaman buku membantu otak memetakan urutan kronologis waktu.'
    },
    {
      id: 'inf-pr-5',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Marine biologists recorded that killer whales (orcas) in the Pacific Northwest specialize exclusively in hunting chinook salmon, refusing to consume abundant harbor seals even during severe salmon scarcity. In contrast, an adjacent population of transient orcas in the same waters feeds strictly on marine mammals, ignoring salmon schools. Because both populations share the same geographic habitat but maintain distinct hunting traditions passed maternally, biologists deduce that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'foraging specializations in killer whales are culturally transmitted rather than dictated solely by prey availability.',
        'salmon-eating orcas lack the physical strength required to capture marine mammals.',
        'killer whales will eventually starve to death rather than adapt to ecological shifts.',
        'transient orcas are genetically incapable of digesting bony fish.'
      ],
      correctAnswer: 'A',
      explanation: 'Dua populasi hidup di habitat yang sama persis, tetapi memiliki menu makanan yang bertolak belakang dan tradisi berburu diturunkan dari induk ke anak. Ini membuktikan bahwa spesialisasi mangsa pada paus orca ditransmisikan secara budaya (cultural transmission), bukan semata-mata ditentukan oleh ketersediaan mangsa.',
      distractorAnalysis: {
        B: 'Orca pemakan salmon bertubuh besar dan kuat; teks menyebut ini tradisi kebiasaan, bukan kelemahan fisik.',
        C: 'Prediksi fatalistik tanpa dasar teks.',
        D: 'Klaim genetik palsu yang dibantah oleh faktor transmisi budaya maternal.'
      },
      subtopic: 'Cultural Transmission in Wildlife',
      difficulty: 'medium',
      hint: 'Hidup di air yang sama tapi beda makanan karena diajarkan induk = transmisi budaya (cultural transmission).'
    },
    {
      id: 'inf-pr-6',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'In a behavioral study on consumer choices, shoppers were presented with either a display of 6 gourmet jams or a display of 24 jams. While the 24-jam display attracted 60 percent of passing shoppers compared to 40 percent for the 6-jam display, shoppers who stopped at the 6-jam display were ten times more likely to make an actual purchase (30 percent vs. 3 percent). This divergence suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'large option sets may increase initial interest but can overwhelm decision-making and suppress final purchasing.',
        'retail consumers always prefer stores that stock fewer than ten total product varieties.',
        'gourmet jam is an unpopular grocery commodity among modern shoppers.',
        'consumers only purchase items when discounts are explicitly displayed.'
      ],
      correctAnswer: 'A',
      explanation: 'Pilihan yang banyak (24 selai) menarik lebih banyak perhatian awal (60%), tetapi tingkat pembelian akhir sangat rendah (3%) dibandingkan pilihan sedikit (6 selai yang menghasilkan 30% pembelian). Fenomena "choice overload" ini menunjukkan bahwa pilihan yang terlalu banyak bisa membuat konsumen kewalahan mengambil keputusan.',
      distractorAnalysis: {
        B: 'Kata absolut keliru ("always prefer stores that stock fewer than ten").',
        C: 'Teks tidak menyatakan selai tidak populer.',
        D: 'Diskon tidak diteliti dalam eksperimen ini.'
      },
      subtopic: 'Choice Overload Inference',
      difficulty: 'easy',
      hint: 'Pilihan banyak menarik perhatian di awal tapi melumpuhkan keputusan beli (choice overload).'
    },
    {
      id: 'inf-pr-7',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Biophysicists studying spider dragline silk noted its extraordinary tensile strength and elasticity, which exceeds high-grade steel and Kevlar by weight. However, attempts to commercially farm orb-weaver spiders in high-density facilities failed repeatedly because territorial spiders engaged in lethal cannibalism when confined together. To circumvent this behavioral bottleneck, geneticists engineered transgenic silkworms and goats carrying spider spidroin genes. This biotechnological strategy indicates that researchers ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'sought to synthesize spider silk proteins in host organisms better suited for domestic cultivation.',
        'concluded that natural spider silk possesses inferior mechanical properties to synthetic nylon.',
        'intended to exterminate wild orb-weaver spiders to harvest their natural web reserves.',
        'abandoned all research into recombinant structural biomaterials.'
      ],
      correctAnswer: 'A',
      explanation: 'Karena laba-laba kanibal dan tidak bisa diternakkan dalam fasilitas padat, peneliti menyisipkan gen sutra laba-laba ke ulat sutra dan kambing (organisme inang yang jinak dan mudah dibudidayakan secara domestik). Tujuannya adalah memproduksi protein sutra pada inang yang cocok untuk diternakkan.',
      distractorAnalysis: {
        B: 'Bertentangan langsung dengan teks yang memuji kekuatan luar biasa sutra laba-laba.',
        C: 'Pernyataan destruktif absurd.',
        D: 'Bertolak belakang: mereka justru merekayasa genetik (transgenic), bukan menghentikan riset.'
      },
      subtopic: 'Biotechnological Problem-Solving',
      difficulty: 'medium',
      hint: 'Memindahkan gen ke kambing dan ulat sutra agar bisa dibudidayakan secara massal tanpa kanibalisme.'
    },
    {
      id: 'inf-pr-8',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Astronomers observing the cosmic microwave background (CMB) radiation noticed that temperature fluctuations across the entire observable sky deviate by less than one part in 100,000, indicating an extraordinarily uniform thermal equilibrium. Under classical Big Bang expansion without cosmic inflation, widely separated regions of the early universe would have been too distant to exchange thermal energy or achieve temperature parity before expanding apart. The cosmic inflation theory addresses this paradox by proposing that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'all regions of the early universe were in direct causal and thermal contact before an exponential expansion separated them.',
        'the universe has existed in a static, unchanging thermal equilibrium for infinite time.',
        'cosmic microwave background radiation was emitted by distant supermassive black holes.',
        'thermal energy cannot travel across vacuum space.'
      ],
      correctAnswer: 'A',
      explanation: 'Paradoks horison diselesaikan oleh teori inflasi kosmik: sebelum terjadi ekspansi eksponensial super cepat, seluruh wilayah alam semesta sangat kecil dan berada dalam kontak termal langsung sehingga suhu merata sempurna sebelum terpisah jauh.',
      distractorAnalysis: {
        B: 'Ini adalah model Steady State yang sudah usang, bukan teori Big Bang dengan inflasi.',
        C: 'CMB bukan berasal dari black hole.',
        D: 'Fisika dasar salah: radiasi termal justru merambat di ruang hampa.'
      },
      subtopic: 'Astrophysical Horizon Problem Resolution',
      difficulty: 'hard',
      hint: 'Sebelum mengembang secara eksponensial, seluruh alam semesta berada dalam kontak termal langsung.'
    },
    {
      id: 'inf-pr-9',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Medical researchers tested a synthetic nanoparticle coating designed to prevent bacterial biofilm adhesion on titanium orthopedic implants. In in-vitro laboratory assays, the coating repelled 99 percent of Staphylococcus bacteria. However, in trials involving live animal hosts, immune proteins in the bloodstream rapidly coated the nanoparticles within hours, forming a protein "corona" that allowed bacteria to bind freely. This discrepancy highlights that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'in-vitro antibacterial efficacy may not translate directly to in-vivo biological environments with complex plasma proteins.',
        'titanium is an intrinsically toxic metal that should never be used in orthopedic prosthetics.',
        'Staphylococcus bacteria are completely immune to all synthetic nanotechnology treatments.',
        'live animal immune systems intentionally promote bacterial infections on prosthetic implants.'
      ],
      correctAnswer: 'A',
      explanation: 'Perbedaan tajam antara uji laboratorium kaca (in-vitro, 99% berhasil) dan uji dalam tubuh hewan hidup (in-vivo, gagal karena tertutup protein darah) membuktikan bahwa efikasi laboratorium tidak selalu bekerja sama persis di dalam lingkungan biologis hidup yang kompleks.',
      distractorAnalysis: {
        B: 'Teks tidak mempermasalahkan titanium, melainkan lapisan nanopartikelnya.',
        C: 'Kata absolut keliru ("completely immune to all").',
        D: 'Klaim biologis keliru bahwa sistem imun sengaja memicu infeksi.'
      },
      subtopic: 'In-Vitro vs In-Vivo Translational Gap',
      difficulty: 'medium',
      hint: 'Uji tabung reaksi (in vitro) tidak selalu sama dengan kondisi di dalam tubuh makhluk hidup (in vivo).'
    },
    {
      id: 'inf-pr-10',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Archaeogeneticists analyzing human skeletal remains from medieval plague cemeteries across Europe identified ancient strains of the bacterium Yersinia pestis. Comparing the medieval bacterial genomes with modern Yersinia strains responsible for sporadic twenty-first-century plague outbreaks, researchers found remarkably few functional mutations in virulence-determining genes. This genomic similarity implies that the catastrophic mortality of the Black Death was primarily facilitated by ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'historical host vulnerabilities, poor sanitation, and nutritional deficiencies rather than an intrinsically deadlier bacterial strain.',
        'modern humans losing all natural immunological antibodies against bacterial pathogens.',
        'the complete extinction of Yersinia pestis in the twenty-first century.',
        'medieval Europeans possessing superior genetic immunity compared to contemporary humans.'
      ],
      correctAnswer: 'A',
      explanation: 'Karena gen virulensi bakteri purba hampir sama persis dengan bakteri modern (tidak lebih mematikan secara genetik), tingkat kematian mengerikan pada wabah Black Death di abad pertengahan kemungkinan besar dipicu oleh faktor kerentanan inang manusia saat itu: sanitasi buruk, gizi buruk, dan ketiadaan antibiotik.',
      distractorAnalysis: {
        B: 'Manusia modern memiliki gizi dan medis lebih baik.',
        C: 'Bakteri belum punah (masih ada wabah sporadis di abad ke-21).',
        D: 'Bertolak belakang dengan kematian massal jutaan orang Eropa saat itu.'
      },
      subtopic: 'Historical Epidemiology Deduction',
      difficulty: 'hard',
      hint: 'Jika bakterinya sama secara genetik, tingginya kematian dulu disebabkan sanitasi dan gizi yang buruk.'
    },
    {
      id: 'inf-pr-11',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Ecosystem ecologists investigating mangrove forests discovered that mangroves sequester up to four times more carbon per hectare than terrestrial tropical rainforests. Most of this "blue carbon" is not stored in the trees’ woody trunks, but rather in subterranean waterlogged peat soils where anoxic (oxygen-depleted) conditions prevent microbial decomposition for centuries. Consequently, when coastal mangroves are cleared for aquaculture ponds, ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'exposure of the excavated soils to oxygen accelerates microbial respiration, releasing massive volumes of sequestered carbon into the atmosphere.',
        'the marine soil permanently absorbs additional atmospheric carbon dioxide.',
        'surrounding ocean waters become permanently devoid of microbial bacteria.',
        'terrestrial rainforests immediately expand to absorb the released soil nutrients.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menjelaskan bahwa karbon tersimpan ribuan tahun di tanah gambut bawah air karena kondisi tanpa oksigen (anoxic) mencegah pembusukan oleh mikroba. Jika hutan bakau ditebang dan digali untuk tambak, tanah tersebut akan terpapar oksigen, memicu pembusukan mikroba yang cepat dan melepaskan karbon tersimpan dalam jumlah masif ke atmosfer.',
      distractorAnalysis: {
        B: 'Bertolak belakang: penggalian tanah melepaskan karbon, bukan menyerapnya.',
        C: 'Klaim absurd bahwa laut menjadi steril dari bakteri.',
        D: 'Hutan hujan darat tidak serta merta merespons secara otomatis.'
      },
      subtopic: 'Environmental Mechanism Extrapolation',
      difficulty: 'medium',
      hint: 'Tanah anoksik yang terpapar oksigen saat ditebang akan terurai oleh bakteri dan melepaskan karbon.'
    },
    {
      id: 'inf-pr-12',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Linguists analyzing historical shifts in English syntax noted that the auxiliary verb "do" (as in "Do you know?") was virtually absent in Old English and only emerged gradually in early modern English. Records show that early instances of auxiliary "do" occurred almost exclusively in rhymed poetry before spreading to prose documents decades later. Literary linguists deduce that early Renaissance poets utilized "do" primarily as a ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'metrical convenience to adjust syllable counts without altering the core semantic meaning of verbs.',
        'religious formula reserved exclusively for sacred liturgical verse.',
        'mandatory grammatical requirement enforced by royal printing monopolies.',
        'translation error resulting from misunderstandings of classical Latin syntax.'
      ],
      correctAnswer: 'A',
      explanation: 'Karena kata bantu "do" awalnya hanya muncul dalam puisi berima sebelum masuk ke tulisan prosa, dan "do" tidak mengubah arti dasar verba ("I know" vs "I do know"), penyair memanfaatkannya sebagai alat pengatur jumlah suku kata (metrical device) agar pas dengan irama dan rima sajak.',
      distractorAnalysis: {
        B: 'Faktor liturgi keagamaan tidak disebutkan dalam teks.',
        C: 'Teks menyatakan ini inovasi bertahap, bukan dekrit monopoli kerajaan.',
        D: 'Teks tidak menyebutkan salah penerjemahan bahasa Latin.'
      },
      subtopic: 'Linguistic Poetic Function Inference',
      difficulty: 'hard',
      hint: 'Hanya muncul di puisi berima: digunakan untuk menyesuaikan jumlah suku kata metrum sajak.'
    }
  ],
  exitTicket: [
    {
      id: 'inf-exit-1',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'A cognitive psychologist tested subjects on complex problem-solving under three lighting conditions: bright blue-enriched light, warm yellow light, and dim light. Subjects in the blue-enriched light condition solved logic puzzles 22 percent faster and reported lower subjective drowsiness. Melatonin assays confirmed that blue wavelengths suppressed the sleep-inducing hormone melatonin. This experimental chain of evidence suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'blue-enriched lighting can enhance alertness and cognitive processing by biochemically modulating circadian hormones.',
        'yellow light permanently damages the retina’s photoreceptor cells.',
        'human beings should eliminate all warm lighting from residential living spaces.',
        'drowsiness is solely caused by the presence of yellow light wavelengths.'
      ],
      correctAnswer: 'A',
      explanation: 'Cahaya biru menekan hormon melatonin (modulasi biokimia sirkadian), yang berujung pada penurunan rasa kantuk dan peningkatan kecepatan penyelesaian teka-teki logika 22%. Kesimpulan logis terukur: cahaya biru dapat meningkatkan kewaspadaan dan pemrosesan kognitif melalui regulasi hormon.',
      distractorAnalysis: {
        B: 'Klaim kerusakan retina tidak diuji dan salah.',
        C: 'Rekomendasi ekstrem yang melampaui teks.',
        D: 'Kata absolut keliru ("solely caused").'
      },
      subtopic: 'Biochemical Alertness Deduction',
      difficulty: 'easy',
      hint: 'Cahaya biru menekan melatonin sehingga menurunkan kantuk dan mempercepat pemrosesan logika.'
    },
    {
      id: 'inf-exit-2',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Geologists investigating the Chicxulub asteroid impact that ended the Cretaceous period analyzed global iridium layers. While the physical impact occurred in present-day Mexico, the soot and iridium fallout layer is distributed uniformly across marine and terrestrial strata worldwide. This global uniformity indicates that the impact ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'injected vaporized particulates into the stratosphere where global winds dispersed them across the planet.',
        'was preceded by hundreds of smaller asteroids striking every individual continent.',
        'caused immediate physical vaporization of all continental landmasses simultaneously.',
        'had no environmental impact beyond the immediate perimeter of the Gulf of Mexico.'
      ],
      correctAnswer: 'A',
      explanation: 'Bagaimana dampak di satu titik (Meksiko) bisa menghasilkan lapisan debu seragam di seluruh dunia? Debu dan uap terlontar ke stratosfer dan angin global menyebarkannya ke seluruh penjuru bumi.',
      distractorAnalysis: {
        B: 'Teks menyebut satu tumbukan fisik utama (the physical impact).',
        C: 'Klaim berlebihan bahwa seluruh benua lenyap seketika.',
        D: 'Bertolak belakang dengan keberadaan lapisan debu global.'
      },
      subtopic: 'Geological Fallout Mechanism',
      difficulty: 'medium',
      hint: 'Partikel terangkat ke stratosfer dan disebarkan oleh angin atmosfer ke seluruh planet.'
    },
    {
      id: 'inf-exit-3',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'Evolutionary anthropologists studying the fossil record of early Homo erectus observed that cranial capacity expanded by over 30 percent while tooth and jaw sizes reduced dramatically compared to earlier australopithecines. Primatologist Richard Wrangham hypothesized that this morphological shift coincided with the invention of cooking: thermal processing tenderizes meat and gelatinizes starches, drastically reducing the chewing time and metabolic energy required for digestion. Which finding, if true, would most directly weaken Wrangham’s cooking hypothesis?',
      prompt: 'Which choice most directly weakens the hypothesis?',
      options: [
        'Definitive geochemical evidence of hearths and controlled fire in hominin habitation sites dates only to 400,000 years ago, nearly a million years after Homo erectus evolved smaller teeth and jaws.',
        'Cooking root tubers increases their caloric bioavailability by more than 40 percent in modern human trials.',
        'Wild chimpanzees occasionally consume fruits that have been naturally roasted by brushfires.',
        'Homo erectus toolkits included sharp stone flakes capable of butchering large ungulate carcasses.'
      ],
      correctAnswer: 'A',
      explanation: 'Hipotesis Wrangham menyatakan bahwa memasak dengan api menyebabkan perubahan anatomi rahang dan gigi yang lebih kecil pada awal Homo erectus (~1.8 juta tahun lalu). Jika bukti api dan perapian tertua baru ada 400.000 tahun lalu (1 juta tahun SETELAH rahang dan gigi mengecil), maka memasak dengan api TIDAK MUNGKIN menjadi penyebab utama perubahan anatomi tersebut. Ini secara telak melemahkan hipotesis Wrangham.',
      distractorAnalysis: {
        B: 'Justru memperkuat argumen nilai gizi makanan yang dimasak.',
        C: 'Perilaku simpanse tidak melemahkan kronologi evolusi manusia.',
        D: 'Alat pemotong daging kompatibel dengan persiapan makanan sebelum dimasak.'
      },
      subtopic: 'Direct Hypothesis Weaken Question',
      difficulty: 'hard',
      hint: 'Jika api baru ditemukan 1 juta tahun setelah gigi mengecil, maka memasak bukan penyebab perubahan gigi.'
    },
    {
      id: 'inf-exit-4',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'When urban economists mapped the distribution of public library branches in metropolitan areas, they discovered that neighborhood crime rates dropped by 12 percent within a four-block radius following the opening of a new library facility. The researchers observed that libraries provide well-lit public plazas, structured after-school adolescent programs, and constant pedestrian foot traffic throughout evening hours. This pattern suggests that ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'civic institutions can foster community informal surveillance and engagement that passively deters neighborhood crime.',
        'crime reduction in urban centers can only be achieved by constructing municipal libraries.',
        'libraries reduce crime because local police stations are mandated to relocate next to them.',
        'adolescents commit crimes exclusively during morning school hours.'
      ],
      correctAnswer: 'A',
      explanation: 'Fasilitas perpustakaan menyediakan penerangan, program remaja, dan arus pejalan kaki (pedestrian foot traffic), yang menciptakan pengawasan informal komunitas (eyes on the street) dan aktivitas positif yang secara pasif mencegah tindak kejahatan.',
      distractorAnalysis: {
        B: 'Kata absolut yang keliru ("can only be achieved").',
        C: 'Relokasi kantor polisi tidak disebutkan dalam teks.',
        D: 'Asumsi tidak berdasar.'
      },
      subtopic: 'Urban Sociology Deduction',
      difficulty: 'medium',
      hint: 'Aktivitas warga, penerangan, dan program komunitas menciptakan pengawasan pasif yang mencegah kejahatan.'
    },
    {
      id: 'inf-exit-5',
      moduleId: 'inferences-evidence',
      type: 'multiple_choice',
      passage: 'In a behavioral economics trial, participants were offered a choice between receiving $50 immediately or $60 in one week; 75 percent chose the immediate $50. However, when offered a choice between $50 in 52 weeks or $60 in 53 weeks, 85 percent chose the larger $60 in 53 weeks, despite the one-week waiting interval being identical in both scenarios. This preference reversal demonstrates the phenomenon of ______',
      prompt: 'Which choice most logically completes the text?',
      options: [
        'hyperbolic discounting, where individuals disproportionately value immediacy over identical future delays.',
        'risk aversion, where consumers always refuse financial rewards involving bank transfers.',
        'rational utility maximization, proving humans evaluate time with perfect mathematical consistency.',
        'inflationary expectations, where participants assumed currency would be devalued within a week.'
      ],
      correctAnswer: 'A',
      explanation: 'Fenomena ini adalah diskon hiperbolik (hyperbolic discounting): manusia mendiskon masa depan secara tidak konsisten. Begitu hadiah tersedia secara instan (saat ini juga), manusia sangat mengutamakan kepuasan seketika, namun saat kedua opsi sama-sama berada di masa depan yang jauh (52 vs 53 minggu), manusia menjadi jauh lebih sabar menunggu 1 minggu tambahan demi mendapatkan $10 lebih banyak.',
      distractorAnalysis: {
        B: 'Teks tidak membahas keengganan risiko transfer bank.',
        C: 'Bertolak belakang: preferensi terbalik membuktikan inkonsistensi rasional manusia dalam memandang waktu.',
        D: 'Ekspektasi inflasi tidak relevan karena selisihnya hanya satu minggu di kedua kasus.'
      },
      subtopic: 'Behavioral Economics Principle Deduction',
      difficulty: 'hard',
      hint: 'Manusia menuntut kepuasan langsung saat hadiah tersedia sekarang: hyperbolic discounting.'
    }
  ],
  discussionPrompts: [
    {
      id: 'inf-disc-1',
      topic: 'Menghindari Over-Inference (Lompatan Spekulatif)',
      prompt: 'Bagaimana cara melatih siswa agar tidak memilih opsi yang "terdengar keren dan revolusioner" tetapi melompat terlalu jauh dari fakta teks?',
      targetInsight: 'Latih prinsip "The Most Boring and Safe Option": Di SAT, kesimpulan ilmiah yang paling defensif dan konservatif hampir selalu merupakan opsi yang benar.'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Inferensi Konservatif',
      activity: 'Siswa mengidentifikasi kesimpulan yang sah dari premis eksperimen biologi.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Prinsip "The Safe Step Rule" & Soal Support/Weaken',
      activity: 'Bahas anatomi hipotesis: mencari variabel bebas dan terikat, lalu menguji apakah bukti baru langsung menyasar relasi tersebut.'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan 12 Soal Inferensi & Penyelidikan Ilmiah',
      activity: 'Siswa mengeliminasi opsi yang memuat kata mutlak (solely, impossible, proves conclusively).'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Refleksi Guru',
      activity: 'Cek apakah pembedaan korelasi vs sebab-akibat sudah diterapkan secara konsisten.'
    }
  }
};
