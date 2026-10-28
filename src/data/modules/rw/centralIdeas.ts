import { ModuleData } from '../../../types';

export const centralIdeasModule: ModuleData = {
  id: 'central-ideas-details',
  title: 'Central Ideas & Details',
  domain: 'reading_writing',
  description: 'Menemukan gagasan utama (thesis), membedakan klaim inti dari detail pendukung, mendeteksi distraktor terlalu sempit (too narrow) atau terlalu luas (too broad), dan paraphrase matching.',
  targetPacingSeconds: 71,
  entryTicket: [
    {
      id: 'cid-entry-1',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'For decades, urban planners assumed that widening municipal highways would alleviate traffic congestion. However, transport economists have repeatedly documented the phenomenon of "induced demand": when roadway capacity increases, travel times initially drop, prompting more suburban commuters to drive rather than use mass transit. Within a few years, traffic volume expands until congestion returns to its baseline level.',
      prompt: 'Which choice best states the main idea of the text?',
      options: [
        'Expanding highway capacity fails to solve long-term traffic congestion because it encourages more people to drive.',
        'Mass transit systems are universally superior to private automobiles in reducing suburban commute times.',
        'Urban planners intentionally ignore transport economists when designing municipal infrastructure.',
        'Traffic congestion in metropolitan areas is primarily caused by suburban commuters refusing to carpool.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks berfokus pada fenomena "induced demand", di mana pelebaran jalan tol pada akhirnya gagal mengatasi kemacetan jangka panjang karena kapasitas tambahan justru mendorong lebih banyak orang untuk berkendara pribadi. Pilihan A merangkum tesis utama ini secara tepat.',
      distractorAnalysis: {
        B: 'Terlalu ekstrem ("universally superior") dan tidak didukung oleh teks.',
        C: 'Tuduhan bahwa perencana "sengaja mengabaikan" ekonom tidak dinyatakan dalam teks.',
        D: 'Terlalu sempit dan menyalahkan kebiasaan carpool yang tidak dibahas dalam passage.'
      },
      subtopic: 'Main Thesis Identification',
      difficulty: 'medium',
      hint: 'Fokus pada kesimpulan akhir fenomena "induced demand": kapasitas bertambah memicu lebih banyak mobil sehingga macet kembali.'
    },
    {
      id: 'cid-entry-2',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'While fungal mycelial networks are primarily recognized for decomposing organic matter on the forest floor, recent ecological research indicates they also function as subterranean communication channels. Trees connected through these fungal threads can transfer carbon, nitrogen, and chemical distress signals to neighboring saplings, effectively warning them of impending pest infestations.',
      prompt: 'According to the text, what is one newly recognized function of mycelial networks?',
      options: [
        'Facilitating the exchange of nutrients and defensive alerts between trees',
        'Directly synthesizing chlorophyll for shaded understory saplings',
        'Eradicating all pathogenic insects from the surrounding forest floor',
        'Preventing mature trees from absorbing excess nitrogen from the soil'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyatakan secara eksplisit: "Trees connected through these fungal threads can transfer carbon, nitrogen, and chemical distress signals to neighboring saplings, effectively warning them of impending pest infestations." Ini secara langsung diparafrasekan oleh pilihan A: memfasilitasi pertukaran nutrisi dan peringatan pertahanan.',
      distractorAnalysis: {
        B: 'Miskin bukti: jamur tidak melakukan sintesis klorofil untuk pohon.',
        C: 'Klaim berlebihan ("eradicating all pathogenic insects"). Teks hanya menyebutkan memberi peringatan (warning), bukan membasmi total.',
        D: 'Bertolak belakang dengan transfer nutrisi yang bermanfaat.'
      },
      subtopic: 'Specific Detail Retrieval',
      difficulty: 'easy',
      hint: 'Cari frasa kunci dalam teks: "transfer carbon, nitrogen, and chemical distress signals".'
    },
    {
      id: 'cid-entry-3',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'In the seventeenth century, Dutch still-life paintings frequently depicted lavish banquets featuring exotic citrus fruits, silver goblets, and imported porcelain. While art historians initially interpreted these opulent displays merely as celebrations of merchant wealth, modern scholars suggest they carried a moralizing subtext: the inclusion of wilting flowers and rotting peel served as a "memento mori," reminding viewers of the transience of earthly pleasures.',
      prompt: 'Which choice best describes the central idea of the text?',
      options: [
        'Dutch still-life paintings served not just as celebrations of prosperity, but also as symbolic reminders of human mortality.',
        'Seventeenth-century Dutch merchants commissioned paintings solely to boast of their imported luxury goods.',
        'Art historians have concluded that citrus fruits were the most valuable commodity in seventeenth-century Holland.',
        'Modern scholars believe seventeenth-century painters lacked the technical skill to depict fresh flowers.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyandingkan interpretasi awal (perayaan kekayaan) dengan pandangan baru para sarjana modern (bahwa lukisan tersebut juga memuat subteks moral memento mori tentang kefanaan hidup melalui buah membusuk dan bunga layu). Pilihan A secara seimbang merangkum kedua dimensi makna tersebut.',
      distractorAnalysis: {
        B: 'Terlalu sempit dan mengabaikan pesan moral "memento mori".',
        C: 'Klaim keliru yang tidak pernah dinyatakan dalam teks.',
        D: 'Tidak berdasar dan meremehkan keterampilan teknis pelukis.'
      },
      subtopic: 'Evolving Interpretations Main Idea',
      difficulty: 'medium',
      hint: 'Gagasan utama mencakup kedua aspek: bukan cuma kemakmuran, tapi juga pengingat kefanaan hidup.'
    },
    {
      id: 'cid-entry-4',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'The discovery of the Antikythera mechanism, an ancient Greek analog computer dating to roughly 100 BCE, fundamentally disrupted prevailing historical timelines regarding Hellenistic engineering. Before its recovery from a shipwreck, historians believed that complex bronze gear trains capable of modeling astronomical cycles were not invented until fourteenth-century medieval Europe.',
      prompt: 'According to the text, why was the discovery of the Antikythera mechanism significant?',
      options: [
        'It demonstrated that sophisticated mechanical gear technology existed centuries earlier than historians previously believed.',
        'It proved that ancient Greek astronomers had successfully calculated the precise orbit of Neptune.',
        'It revealed that bronze was the only metal used in Hellenistic clockmaking.',
        'It established that fourteenth-century European clockmakers had copied ancient Greek blueprints.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyatakan bahwa sebelum penemuan tersebut, sejarawan mengira roda gigi perunggu kompleks baru ada pada abad ke-14 di Eropa. Penemuan artefak dari 100 SM ini membuktikan bahwa teknologi mekanis canggih sudah ada berabad-abad lebih awal dari perkiraan semula.',
      distractorAnalysis: {
        B: 'Spekulasi berlebihan yang tidak disebutkan dalam teks.',
        C: 'Kata absolut yang salah ("the only metal used").',
        D: 'Teks tidak menyatakan bahwa pembuat jam Eropa menyalin cetak biru Yunani.'
      },
      subtopic: 'Historical Significance Detail',
      difficulty: 'easy',
      hint: 'Artefak ini membuktikan teknologi roda gigi kompleks sudah ada jauh lebih awal dari dugaan semula.'
    },
    {
      id: 'cid-entry-5',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Many conservation efforts focus disproportionately on "charismatic megafauna"—large, photogenic mammals like tigers and pandas—to attract donor funding. While this strategy successfully mobilizes public donations, biologists argue that it diverts critical resources away from ecologically indispensable organisms, such as soil nematodes and pollinators, whose collapse poses a far greater threat to global biospheric stability.',
      prompt: 'Which choice best states the primary argument of the biologists mentioned in the text?',
      options: [
        'Prioritizing popular, visually appealing species can lead to the neglect of ecologically crucial less prominent organisms.',
        'Large mammals contribute nothing of value to their respective ecosystem food webs.',
        'Donors should be prohibited from contributing funds to programs protecting endangered pandas.',
        'Soil nematodes are the only organism capable of maintaining biospheric stability.'
      ],
      correctAnswer: 'A',
      explanation: 'Argumen utama para biolog adalah bahwa fokus berlebihan pada "charismatic megafauna" mengalihkan sumber daya penting dari organisme yang kurang populer namun vital secara ekologis seperti nematoda dan penyerbuk. Pilihan A adalah parafrase yang sempurna.',
      distractorAnalysis: {
        B: 'Ekstrem dan keliru: teks tidak mengatakan mamalia besar tidak punya nilai.',
        C: 'Ekstrem: teks tidak menuntut pelarangan donasi untuk panda.',
        D: 'Kata absolut yang salah ("the only organism").'
      },
      subtopic: 'Counter-Perspective Argument',
      difficulty: 'medium',
      hint: 'Fokus pada kritik biolog: mamalia populer menyedot sumber daya dari organisme kecil yang krusial bagi ekosistem.'
    }
  ],
  conceptSections: [
    {
      id: 'cid-c1',
      title: 'Strategi Menemukan Gagasan Utama & Eliminasi Distraktor',
      summary: 'Soal Central Ideas menguji kemampuan menangkap tesis payung (umbrella claim) teks, sedangkan Detail menguji akurasi parafrase fakta spesifik.',
      formulaBox: [
        'Tesis = Subjek Utama + Klaim/Argumen Spesifik Penulis',
        'Formula Eliminasi SAT: Hindari 3 perangkap utama:',
        '1. Too Narrow: Benar secara fakta menurut teks, tapi hanya menyebutkan 1 contoh/kalimat pendukung.',
        '2. Too Broad: Melompat ke kesimpulan filosofis raksasa yang tidak dibuktikan teks.',
        '3. Opposite/Distorted: Membalik hubungan logis atau menambahkan kata absolut (always, never, only).'
      ],
      commonMistakes: [
        'Siswa memilih opsi hanya karena memuat kata-kata yang persis sama (verbatim words) dengan passage, padahal makna kalimatnya melenceng.',
        'Siswa terjebak pada kalimat pertama (hook/latar belakang) dan mengabaikan kalimat tesis yang sering muncul setelah kata pivot (However, In contrast, Recent findings indicate).'
      ],
      proTips: [
        'Teknik "The Pivot Finder": Cari kata transisi kontras (However, But, Yet, Recently). Di Digital SAT, argumen utama penulis hampir selalu diletakkan SETELAH kata pivot, bukan sebelum kata pivot.',
        'Uji Payung (Umbrella Test): Pilihan gagasan utama yang benar harus mampu "memayungi" seluruh kalimat di passage, bukan hanya salah satu bagian.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering mengira opsi yang panjang dan penuh istilah ilmiah otomatis merupakan jawaban utama. Latih siswa untuk menguji: "Apakah ini tesis atau hanya bukti data laboratorium?"'
        ],
        alternativeApproaches: [
          {
            name: 'Formula "So What?" (Inti Pesan)',
            description: 'Setelah membaca 50 kata, minta siswa merangkum dalam 1 kalimat dengan format: "Penulis menulis teks ini untuk membuktikan bahwa [X]".'
          }
        ],
        classroomAnalogy: 'Gagasan utama adalah atap rumah, sedangkan detail adalah tiang-tiang fondasi penyangganya. Tanpa tiang atap akan roboh, tetapi kamu tidak bisa menyebut tiang itu sebagai sebuah rumah utuh.',
        sparkQuestions: [
          'Jika sebuah opsi 100% benar secara fakta berdasarkan teks, mengapa opsi tersebut masih bisa menjadi jawaban yang SALAH untuk pertanyaan "Main Idea"?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'cid-ex-1',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Ethnomusicologists studying traditional Georgian polyphonic singing note that unlike Western classical chorales, which prioritize standardized tempered scales and harmonic resolution, Georgian songs utilize complex, microtonal intervals and deliberately dissonant drones. These acoustic features are not accidental impurities, as nineteenth-century European observers mistakenly believed, but rather intentional aesthetic expressions deeply intertwined with communal ritual traditions.',
      prompt: 'Which choice best states the main idea of the text?',
      options: [
        'Georgian polyphonic music’s distinctive microtonal harmonies are deliberate artistic expressions tied to cultural rituals, rather than technical defects.',
        'Nineteenth-century European observers accurately transcribed the microtonal structures of Georgian chorales.',
        'Western classical chorales are musically inferior to traditional Georgian communal singing traditions.',
        'Microtonal intervals in vocal music can only be produced through communal rituals.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks membantah anggapan pengamat abad ke-19 bahwa fitur mikrotonal musik Georgia adalah "accidental impurities" (cacat tak sengaja). Sebaliknya, teks menegaskan bahwa harmoni tersebut adalah ekspresi estetika yang disengaja dan berakar kuat pada tradisi ritual komunal. Pilihan A menangkap seluruh inti argumen ini.',
      distractorAnalysis: {
        B: 'Bertentangan dengan teks: pengamat abad ke-19 keliru ("mistakenly believed").',
        C: 'Perbandingan nilai yang menghakimi ("inferior") yang tidak pernah dibuat oleh penulis.',
        D: 'Klaim absolut keliru ("can only be produced").'
      },
      subtopic: 'Cultural Reassessment Main Idea',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Bantahan Mitos (Myth vs Reality)',
          steps: [
            '1. Identifikasi mitos lama: pengamat mengira mikrotonal adalah cacat/ketidaksengajaan.',
            '2. Identifikasi klaim penulis: ini adalah inovasi estetika sengaja yang terikat budaya.',
            '3. Pilih opsi yang merangkum bantahan tersebut secara utuh (Opsi A).'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa memilih opsi yang terlalu sempit tentang musik Barat atau memilih opsi ekstrim C.'
    },
    {
      id: 'cid-ex-2',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Linguists analyzing the syntax of Pirahã, an indigenous language of the Amazon basin, sparked intense theoretical debates when they reported that the language lacks grammatical recursion—the ability to embed clauses within clauses indefinitely. If substantiated, this absence challenges Noam Chomsky’s universal grammar hypothesis, which posits that recursion is an innate, indispensable property of all human languages.',
      prompt: 'According to the text, why did the linguistic findings regarding Pirahã generate controversy?',
      options: [
        'They suggest that a feature previously thought to be fundamental to all human language may not be universal.',
        'They proved conclusively that Noam Chomsky’s theory of universal grammar is entirely fraudulent.',
        'They demonstrated that Amazonian languages cannot communicate complex theoretical thoughts.',
        'They revealed that grammatical recursion was invented in Europe during the nineteenth century.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menjelaskan bahwa jika temuan bahasa Pirahã tidak memiliki rekursi terbukti benar, hal itu menantang hipotesis tata bahasa universal Chomsky yang menganggap rekursi sebagai sifat bawaan seluruh bahasa manusia. Dengan kata lain, fitur yang sebelumnya dianggap fundamental dan ada di semua bahasa ternyata mungkin tidak universal.',
      distractorAnalysis: {
        B: 'Terlalu agresif dan berlebihan ("conclusively proved... fraudulent"). Teks hanya menyatakan "challenges" bersyarat ("If substantiated").',
        C: 'Pernyataan merendahkan yang tidak dinyatakan dalam teks.',
        D: 'Distraktor historis tanpa kaitan.'
      },
      subtopic: 'Theoretical Challenge Detail',
      difficulty: 'medium',
      methods: [
        {
          title: 'Pencocokan Nuansa Kata Hati-Hati (Cautious Phrasing)',
          steps: [
            '1. Amati nada teks: bersyarat ("If substantiated", "challenges").',
            '2. Eliminasi opsi B karena menggunakan kata mutlak ("proved conclusively").',
            '3. Pilih opsi A yang menggunakan kata terukur ("suggest", "may not be universal").'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa tergoda oleh opsi B yang dramatis namun melanggar aturan kehati-hatian ilmiah SAT.'
    },
    {
      id: 'cid-ex-3',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'In a behavioral experiment evaluating canine problem-solving, domestic dogs and hand-reared wolves were presented with an inaccessible treat inside a sealed puzzle container. While the wolves persistently manipulated the box until they opened it or exhausted their physical options, the dogs quickly abandoned solitary manipulation and looked repeatedly at nearby human researchers, demonstrating a reliance on cross-species social cues.',
      prompt: 'Which choice best describes the central contrast established in the text?',
      options: [
        'Wolves relied on persistent physical trial-and-error, whereas dogs sought human social cooperation to solve the task.',
        'Domestic dogs were more intellectually capable of unlocking puzzle containers than wild wolves.',
        'Wolves showed superior communication skills when collaborating with unfamiliar human observers.',
        'Dogs abandoned the experiment because they were less motivated by food rewards than wolves.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks mengontraskan perilaku serigala yang terus memanipulasi kotak secara fisik mandiri ("persistently manipulated the box") dengan anjing peliharaan yang menoleh ke manusia ("looked repeatedly at nearby human researchers, demonstrating reliance on cross-species social cues"). Pilihan A merangkum perbedaan esensial ini.',
      distractorAnalysis: {
        B: 'Teks tidak menyatakan anjing lebih pintar dalam membuka kotak (serigala yang membuka atau terus berusaha).',
        C: 'Bertolak belakang: serigala tidak bekerja sama dengan manusia.',
        D: 'Tidak ada bukti bahwa motivasi makanan anjing lebih rendah.'
      },
      subtopic: 'Comparative Animal Behavior Main Idea',
      difficulty: 'medium',
      methods: [
        {
          title: 'Metode Tabel Kontras Dua Subjek',
          steps: [
            '1. Subjek A (Serigala): manipulasi fisik gigih, mandiri.',
            '2. Subjek B (Anjing): mencari interaksi sosial dengan manusia.',
            '3. Cocokkan langsung ke opsi A.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa mengasumsikan anjing "lebih pintar" karena mencari bantuan, padahal teks hanya mendeskripsikan perbedaan strategi sosial.'
    }
  ],
  practiceQuestions: [
    {
      id: 'cid-pr-1',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Geobiologists examining fossilized stromatolites in Western Australia have identified chemical signatures indicating that photosynthetic cyanobacteria flourished nearly 3.5 billion years ago. These microbial mats did not merely survive in the primitive ocean; by producing oxygen as a metabolic byproduct, they gradually transformed Earth’s reducing atmosphere, laying the geochemical foundation for complex aerobic life.',
      prompt: 'Which choice best states the main idea of the text?',
      options: [
        'Ancient cyanobacteria played an active role in shaping Earth’s atmosphere by releasing oxygen essential for later complex life.',
        'Western Australia is the only place on Earth where fossilized microbial mats have been discovered.',
        'Complex aerobic organisms emerged simultaneously with the earliest cyanobacteria 3.5 billion years ago.',
        'Primitive oceanic waters contained toxic levels of oxygen that prevented bacterial survival.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menekankan peran aktif cyanobacteria yang melepaskan oksigen sebagai produk sampingan metabolik, mengubah atmosfer bumi dan meletakkan fondasi bagi kehidupan aerobik kompleks. Pilihan A merangkum tesis utama ini.',
      distractorAnalysis: {
        B: 'Kata absolut yang salah ("the only place").',
        C: 'Bertentangan dengan kronologi teks ("laying the foundation for later complex life").',
        D: 'Bertolak belakang dengan fakta teks.'
      },
      subtopic: 'Geobiological Evolution Main Idea',
      difficulty: 'easy',
      hint: 'Fokus pada peran cyanobacteria menghasilkan oksigen yang mengubah atmosfer.'
    },
    {
      id: 'cid-pr-2',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Historian Eric Foner emphasizes that the Reconstruction era following the American Civil War was not merely a passive transition period of physical rebuilding. Rather, it was a profound democratic experiment during which formerly enslaved African Americans actively mobilized, establishing independent churches, running for municipal office, and drafting progressive state constitutions.',
      prompt: 'According to the text, how does Eric Foner characterize the Reconstruction era?',
      options: [
        'As an active period of political and civic agency by formerly enslaved people',
        'As a purely economic program focused exclusively on industrial manufacturing',
        'As an era characterized primarily by passive acceptance of federal military decrees',
        'As a temporary pause in political debates over democratic rights'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyatakan bahwa era Rekonstruksi adalah "a profound democratic experiment during which formerly enslaved African Americans actively mobilized" dengan mendirikan gereja, mencalonkan diri, dan merancang konstitusi. Ini menunjukkan agensi politik dan sipil yang aktif.',
      distractorAnalysis: {
        B: 'Mengabaikan aspek politik dan hak-hak sipil.',
        C: 'Bertentangan langsung dengan teks yang menolak gagasan "passive transition".',
        D: 'Keliru.'
      },
      subtopic: 'Historical Revision Detail',
      difficulty: 'medium',
      hint: 'Foner menekankan peran aktif (active agency) masyarakat yang sebelumnya diperbudak.'
    },
    {
      id: 'cid-pr-3',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'A common criticism of microfinance programs in developing nations is that small entrepreneurial loans often fail to generate sustained macroeconomic growth. Economists observe that while microloans can buffer impoverished households against sudden financial emergencies, recipients frequently use the funds for immediate consumption rather than high-return capital investments that expand employment.',
      prompt: 'Which choice best states the primary reason microloans often fail to generate broad macroeconomic growth?',
      options: [
        'Borrowers often allocate funds toward immediate household needs rather than business expansions that create jobs.',
        'Commercial banks charge exorbitant interest rates on microfinance institutions.',
        'Recipients in developing nations lack the basic numeracy skills needed to manage loans.',
        'Microfinance programs refuse to lend money to female entrepreneurs.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyebutkan secara eksplisit: "recipients frequently use the funds for immediate consumption rather than high-return capital investments that expand employment." Ini diparafrasekan secara tepat oleh pilihan A.',
      distractorAnalysis: {
        B: 'Tidak disebutkan dalam passage.',
        C: 'Asumsi menghina tanpa bukti teks.',
        D: 'Klaim palsu yang tidak ada dalam teks.'
      },
      subtopic: 'Economic Mechanism Detail',
      difficulty: 'medium',
      hint: 'Dana sering dipakai untuk konsumsi darurat rumah tangga, bukan investasi bisnis.'
    },
    {
      id: 'cid-pr-4',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Although urban vertical farming uses up to 95 percent less water than conventional agriculture by recirculating moisture within sealed indoor systems, critics point out its substantial energetic footprint. The artificial LED lighting and climate control systems required to sustain multi-tiered indoor crops consume massive amounts of electricity, potentially negating its environmental benefits if powered by fossil-fuel grids.',
      prompt: 'Which choice best summarizes the central conflict presented in the text?',
      options: [
        'Vertical farming saves remarkable amounts of water but demands high energy consumption that can undermine its overall sustainability.',
        'Vertical farming produces inferior crop yields compared to traditional rural farming methods.',
        'Indoor LED lights emit harmful radiation that stunts the growth of leafy greens.',
        'Sealed hydroponic systems are too expensive to construct in any major metropolitan area.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyandingkan keunggulan utama (hemat air hingga 95%) dengan kelemahan krusialnya (konsumsi listrik masif untuk LED dan kontrol iklim yang bisa meniadakan manfaat lingkungan). Pilihan A merangkum konflik kedua aspek ini.',
      distractorAnalysis: {
        B: 'Teks tidak membahas kualitas atau kuantitas panen tanaman.',
        C: 'Pernyataan fiktif tentang radiasi LED.',
        D: 'Terlalu absolut dan tidak dibahas dalam teks.'
      },
      subtopic: 'Balanced Environmental Evaluation',
      difficulty: 'easy',
      hint: 'Hemat air 95% vs konsumsi energi listrik yang sangat tinggi.'
    },
    {
      id: 'cid-pr-5',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Biochemists studying tardigrades—microscopic animals renowned for surviving extreme desiccation, radiation, and outer space vacuum—have isolated specialized intrinsically disordered proteins (TDPs). Unlike standard proteins that possess fixed three-dimensional geometries, TDPs lack stable structure until dehydration occurs, at which point they vitrify into a protective glass-like matrix that shields cellular structures.',
      prompt: 'According to the text, what unique characteristic allows TDPs to protect tardigrade cells?',
      options: [
        'They transition from an unstructured state into a glass-like protective matrix during dehydration.',
        'They maintain a permanently rigid crystalline structure under all environmental conditions.',
        'They emit radioactive isotopes that neutralize damaging ultraviolet rays.',
        'They actively absorb external moisture to prevent any cell volume reduction.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menjelaskan bahwa TDPs "lack stable structure until dehydration occurs, at which point they vitrify into a protective glass-like matrix that shields cellular structures." Pilihan A menangkap proses transisi unik ini.',
      distractorAnalysis: {
        B: 'Bertolak belakang: TDPs tidak memiliki struktur kaku permanen (lack stable structure).',
        C: 'Fiksi ilmiah yang tidak ada dalam teks.',
        D: 'TDPs bekerja saat dehidrasi terjadi, bukan menyerap air.'
      },
      subtopic: 'Molecular Mechanism Detail',
      difficulty: 'medium',
      hint: 'TDPs berubah menjadi matriks mirip kaca (glass-like matrix) saat mengalami dehidrasi.'
    },
    {
      id: 'cid-pr-6',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'In literary analysis of nineteenth-century gothic fiction, the eerie castle is rarely a passive setting. Instead, authors like Mary Shelley and Edgar Allan Poe treated architecture as a psychological projection of the protagonist’s deteriorating mental state: cracked foundations, labyrinthine corridors, and subterranean dungeons externalize internal guilt, repressions, and moral decay.',
      prompt: 'Which choice best states the main idea of the text?',
      options: [
        'In nineteenth-century gothic fiction, castle architecture functions as a symbolic manifestation of the characters’ psychological decline.',
        'Mary Shelley and Edgar Allan Poe were the only authors to include architectural descriptions in nineteenth-century novels.',
        'Gothic castles built in the nineteenth century were structurally unsound due to poor masonry.',
        'Gothic authors believed that living in large stone castles caused mental illness.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks berargumen bahwa arsitektur kastil gothic bukan sekadar latar belakang pasif, melainkan proyeksi psikologis dari kemerosotan mental dan moral karakter. Pilihan A merangkum tesis ini dengan tepat.',
      distractorAnalysis: {
        B: 'Kata absolut yang salah ("the only authors").',
        C: 'Salah menafsirkan metafora arsitektur sastra sebagai cacat teknik bangunan nyata.',
        D: 'Tafsiran keliru sebab-akibat literal.'
      },
      subtopic: 'Literary Metaphor Main Idea',
      difficulty: 'easy',
      hint: 'Arsitektur kastil gothic adalah simbol proyeksi psikologis kemerosotan mental karakter.'
    },
    {
      id: 'cid-pr-7',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'When astronomers analyzed the spectroscopic data from white dwarf stars accreting debris from surrounding asteroid belts, they discovered that the falling planetary fragments contained abundant refractory elements and water-rich minerals. This composition closely mirrors the primordial chondritic meteorites that delivered volatile compounds to early Earth, implying that rocky exoplanetary systems frequently harbor the basic geological precursors for prebiotic chemistry.',
      prompt: 'Which choice best states the primary implication of the astronomers’ discovery?',
      options: [
        'Rocky planetary systems beyond our solar system may commonly possess the foundational ingredients for life.',
        'White dwarf stars are hospitable environments where living organisms currently flourish.',
        'Earth is the only planet in the Milky Way galaxy that received water from meteorites.',
        'Asteroid belts around white dwarfs will inevitably coalesce into habitable terrestrial worlds.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyatakan bahwa kemiripan komposisi asteroid di sekitar bintang katai putih dengan meteorit yang membawa air ke bumi awal mengindikasikan bahwa "rocky exoplanetary systems frequently harbor the basic geological precursors for prebiotic chemistry" (sering memiliki bahan kimia dasar pembentuk kehidupan). Pilihan A merangkum implikasi ini.',
      distractorAnalysis: {
        B: 'Bintang katai putih bukan lingkungan yang ramah untuk makhluk hidup saat ini.',
        C: 'Bertentangan langsung dengan temuan bahwa sistem lain juga memiliki air.',
        D: 'Klaim masa depan mutlak ("will inevitably coalesce") yang tidak didukung teks.'
      },
      subtopic: 'Scientific Discovery Implication',
      difficulty: 'hard',
      hint: 'Keberadaan air dan mineral serupa bumi di sistem bintang lain mengindikasikan bahan dasar kehidupan umum di galaksi.'
    },
    {
      id: 'cid-pr-8',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Public health researchers studying antibiotic resistance emphasize that the development of resistance genes in farm livestock is not isolated to rural agrarian zones. Through agricultural runoff entering river systems, contaminated food supply chains, and dust blown from feedlots, resistant bacterial strains regularly migrate into dense urban centers, where they transfer resistance plasmids to common human clinical pathogens.',
      prompt: 'According to the text, how do antibiotic-resistant bacteria from livestock enter urban populations?',
      options: [
        'Through water runoff, contaminated food distribution, and airborne particulate transport',
        'Exclusively through direct contact between city residents and farm animals',
        'By mutating spontaneously within hospital sanitation systems',
        'Through contaminated synthetic vitamin supplements produced in factories'
      ],
      correctAnswer: 'A',
      explanation: 'Teks secara eksplisit menyebutkan 3 jalur migrasi: "agricultural runoff entering river systems, contaminated food supply chains, and dust blown from feedlots". Ini diparafrasekan secara tepat oleh pilihan A.',
      distractorAnalysis: {
        B: 'Kata absolut yang salah ("exclusively through direct contact").',
        C: 'Mutasi spontan di rumah sakit tidak menjelaskan asal-usul dari peternakan.',
        D: 'Suplemen vitamin tidak dibahas dalam teks.'
      },
      subtopic: 'Transmission Pathways Detail',
      difficulty: 'easy',
      hint: 'Teks menyebutkan 3 jalur: air sungai, rantai makanan, dan debu yang terbawa angin.'
    },
    {
      id: 'cid-pr-9',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Economist Amartya Sen revolutionized famine studies by demonstrating that catastrophic famines are rarely caused by an absolute physical shortage of food crops. Analyzing major twentieth-century famines, Sen revealed that food was often exported out of famine-stricken regions while impoverished laborers starved because sudden market shocks, wartime inflation, or job losses collapsed their economic "entitlements"—their ability to purchase available grain.',
      prompt: 'Which choice best summarizes Amartya Sen’s central thesis regarding famines?',
      options: [
        'Famines result primarily from socioeconomic breakdowns in purchasing power and distribution rather than sheer crop failures.',
        'Twentieth-century famines were caused entirely by unpredictable droughts and climate catastrophes.',
        'Governments should completely ban the international export of agricultural commodities.',
        'Wartime inflation always leads to severe famines in agrarian societies.'
      ],
      correctAnswer: 'A',
      explanation: 'Tesis Amartya Sen membuktikan bahwa kelaparan massal bukan disebabkan ketiadaan fisik bahan pangan (crop shortage), melainkan runtuhnya kemampuan membeli masyarakat (economic entitlements / purchasing power) akibat guncangan pasar dan inflasi. Pilihan A menangkap tesis revolusioner ini.',
      distractorAnalysis: {
        B: 'Bertentangan langsung dengan bantahan Sen terhadap teori kelangkaan fisik.',
        C: 'Sen tidak mengusulkan larangan ekspor mutlak di semua situasi.',
        D: 'Klaim absolut berlebihan ("always leads to").'
      },
      subtopic: 'Socioeconomic Theory Main Idea',
      difficulty: 'hard',
      hint: 'Kelaparan disebabkan oleh runtuhnya daya beli dan distribusi, bukan ketiadaan fisik makanan.'
    },
    {
      id: 'cid-pr-10',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'In classical economics, the "tragedy of the commons" posits that individuals sharing an open-access resource inevitably deplete it through self-interested overexploitation. However, Nobel laureate Elinor Ostrom documented hundreds of indigenous communities that successfully sustained communal pastures, forests, and irrigation systems for centuries through locally crafted monitoring rules, informal peer sanctions, and mutual trust.',
      prompt: 'Which choice best describes the relationship between Elinor Ostrom’s findings and the traditional "tragedy of the commons" theory?',
      options: [
        'Ostrom’s research challenges the universality of the theory by showing that communities can self-govern shared resources effectively.',
        'Ostrom’s research proved that the traditional theory applies only to marine fisheries, not terrestrial ecosystems.',
        'Ostrom’s findings confirmed that government privatization is the only viable method to prevent resource depletion.',
        'Ostrom’s research established that indigenous communities never utilize rules when managing resources.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menggunakan kata sinyal "However" untuk mengontraskan teori tradisional "tragedy of the commons" (eksploitasi berlebihan pasti terjadi) dengan temuan Elinor Ostrom bahwa masyarakat lokal mampu mengelola sumber daya bersama secara berkelanjutan melalui aturan lokal dan kepercayaan. Oleh karena itu, riset Ostrom menantang universalitas teori tersebut.',
      distractorAnalysis: {
        B: 'Pembatasan pada perikanan laut tidak ada dalam teks.',
        C: 'Bertentangan: riset Ostrom menunjukkan tata kelola komunitas (self-governance), bukan privatisasi mutlak oleh pemerintah.',
        D: 'Bertolak belakang: komunitas justru menggunakan aturan pengawasan lokal (locally crafted rules).'
      },
      subtopic: 'Theoretical Challenge Main Idea',
      difficulty: 'medium',
      hint: 'Ostrom membuktikan bahwa tragedi kepemilikan bersama tidak mutlak: komunitas bisa mengatur dirinya sendiri.'
    },
    {
      id: 'cid-pr-11',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Cognitive scientists investigating bilingualism have observed that bilingual individuals consistently outperform monolinguals on executive function tasks requiring attentional inhibition and task-switching. Researchers hypothesize that because both languages remain simultaneously active in a bilingual brain, the speaker must continuously recruit prefrontal cognitive control networks to suppress interference from the non-target language, thereby strengthening general cognitive flexibility.',
      prompt: 'According to the text, why do bilinguals exhibit superior executive function?',
      options: [
        'The continuous effort required to suppress the unused language provides ongoing exercise for the brain’s cognitive control networks.',
        'Bilinguals possess larger cerebral cortexes from birth compared to monolingual individuals.',
        'Learning two languages eliminates all forms of age-related cognitive decline.',
        'Bilingual brains naturally deactivate one language completely whenever the other is being spoken.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menjelaskan mekanismenya: kedua bahasa aktif secara bersamaan sehingga otak harus terus-menerus menekan gangguan bahasa yang tidak sedang dipakai ("suppress interference from the non-target language"), yang pada gilirannya memperkuat kontrol kognitif dan fleksibilitas. Pilihan A memparafrasekan mekanisme ini.',
      distractorAnalysis: {
        B: 'Klaim anatomis palsu yang tidak ada dalam teks.',
        C: 'Klaim absolut ("eliminates all forms of age-related decline") yang tidak didukung teks.',
        D: 'Bertentangan dengan teks yang menyatakan kedua bahasa tetap aktif secara simultan (both remain simultaneously active).'
      },
      subtopic: 'Cognitive Mechanism Detail',
      difficulty: 'medium',
      hint: 'Upaya terus-menerus menahan bahasa yang tidak dipakai melatih jaringan kontrol otak.'
    },
    {
      id: 'cid-pr-12',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'The practice of controlled ecological burns, long utilized by Indigenous Australian peoples, intentionally creates a mosaic of burned and unburned savanna patches. This traditional landscape management technique suppresses catastrophic mega-fires by fragmenting flammable fuel loads while simultaneously promoting biodiversity by creating diverse micro-habitats for endangered small marsupials and specialized seed-germinating flora.',
      prompt: 'Which choice best states the main idea of the text?',
      options: [
        'Traditional Indigenous burning practices both mitigate the danger of large-scale wildfires and enhance regional biodiversity.',
        'Controlled burns are only effective in Australian savannas and cannot be applied in other ecosystems.',
        'Small marsupials in Australia are endangered primarily because natural lightning fires have ceased.',
        'Modern firefighting technology has rendered traditional mosaic burning techniques obsolete.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menjelaskan manfaat ganda dari praktik pembakaran terkontrol tradisional: (1) mencegah kebakaran besar yang dahsyat dengan memecah bahan bakar api, dan (2) meningkatkan keanekaragaman hayati dengan menciptakan habitat mikro. Pilihan A merangkum kedua manfaat utama ini.',
      distractorAnalysis: {
        B: 'Kata absolut yang salah ("only effective in Australian savannas").',
        C: 'Pernyataan kausalitas palsu yang tidak didukung teks.',
        D: 'Bertentangan dengan apresiasi positif teks terhadap teknik tradisional.'
      },
      subtopic: 'Ecological Practice Dual Benefits',
      difficulty: 'easy',
      hint: 'Manfaat ganda: mencegah kebakaran raksasa dan meningkatkan keanekaragaman hayati.'
    }
  ],
  exitTicket: [
    {
      id: 'cid-exit-1',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Marine biologists studying cephalopod camouflage noted that cuttlefish can alter their skin coloration and 3D surface texture within milliseconds to match complex seafloor backgrounds. Remarkably, this physiological feat occurs despite cuttlefish possessing only a single visual photoreceptor type, rendering them biologically colorblind. Researchers deduce that cuttlefish rely on optical contrast, polarized light sensitivity, and luminance cues rather than hue perception.',
      prompt: 'Which choice best states the main idea of the text?',
      options: [
        'Cuttlefish achieve sophisticated camouflage through non-color visual mechanisms despite lacking color vision.',
        'Cuttlefish developed multiple photoreceptors specifically to identify predator color patterns.',
        'Colorblind marine predators are completely unable to detect camouflaged cuttlefish.',
        'Cuttlefish camouflage is ineffective against polarized light underwater.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyoroti paradoks menarik: sotong mampu melakukan kamuflase warna yang sangat canggih padahal mereka buta warna (hanya punya satu fotoreseptor), karena mereka mengandalkan kontras, polarisasi, dan luminansi. Pilihan A merangkum ide utama ini.',
      distractorAnalysis: {
        B: 'Bertentangan dengan teks (cuttlefish only possess a single photoreceptor).',
        C: 'Teks tidak membahas kemampuan penglihatan predator.',
        D: 'Bertentangan dengan teks yang menyatakan cuttlefish memanfaatkan cahaya terpolarisasi.'
      },
      subtopic: 'Biological Paradox Main Idea',
      difficulty: 'medium',
      hint: 'Meskipun buta warna, sotong berkamuflase menggunakan kontras dan polarisasi cahaya.'
    },
    {
      id: 'cid-exit-2',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Paleoanthropological excavations in Denisova Cave, Siberia, recovered a fossilized finger bone whose genome revealed a previously unknown archaic human lineage: the Denisovans. Genomic comparison with modern human populations revealed that indigenous Melanesians and Australian Aboriginal people carry up to 4 to 6 percent Denisovan DNA, proving that anatomically modern humans interbred with archaic hominins as they migrated across Southeast Asia.',
      prompt: 'According to the text, what did the genomic analysis of Denisovan DNA demonstrate?',
      options: [
        'Interbreeding occurred between archaic hominins and migrating modern humans.',
        'Denisovans were the direct evolutionary ancestors of Neanderthals in Europe.',
        'Modern Europeans possess the highest concentration of Denisovan genetic markers.',
        'Denisova Cave was the sole habitat occupied by archaic hominins during the Pleistocene.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menyatakan secara langsung: "proving that anatomically modern humans interbred with archaic hominins as they migrated across Southeast Asia." Ini langsung diparafrasekan oleh pilihan A.',
      distractorAnalysis: {
        B: 'Teks tidak menyatakan Denisovan adalah nenek moyang langsung Neanderthal.',
        C: 'Bertentangan: jejak genetik terbesar ditemukan pada populasi Melanesia dan Aborigin Australia, bukan Eropa.',
        D: 'Kata absolut yang keliru ("sole habitat").'
      },
      subtopic: 'Genomic Evidence Detail',
      difficulty: 'easy',
      hint: 'Membuktikan adanya perkawinan silang antara hominin purba dan manusia modern.'
    },
    {
      id: 'cid-exit-3',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Economists studying the "rebound effect" in energy efficiency argue that adopting high-efficiency appliances does not automatically reduce national energy consumption. When home heating systems become significantly cheaper to operate per hour, consumers frequently adjust their thermostats to warmer temperatures or heat previously unused rooms, partially or completely offsetting the anticipated energy savings.',
      prompt: 'Which choice best describes the central idea of the text?',
      options: [
        'Efficiency gains can be compromised when lower operating costs induce consumers to use more energy.',
        'High-efficiency home heating systems are less reliable than older, energy-intensive models.',
        'Consumers in cold climates intentionally waste heating energy to protest energy regulations.',
        'Improving appliance energy efficiency has no impact whatsoever on household utility expenses.'
      ],
      correctAnswer: 'A',
      explanation: 'Fenomena "rebound effect" menjelaskan bahwa penurunan biaya operasional per jam akibat efisiensi sering memicu konsumen memakai lebih banyak energi (misal menaikkan suhu termostat), sehingga mengimbangi atau meniadakan penghematan energi yang diharapkan. Pilihan A merangkum tesis ini.',
      distractorAnalysis: {
        B: 'Teks tidak membahas keandalan teknis (reliability) mesin.',
        C: 'Tuduhan kesengajaan membuang energi sebagai protes tidak berdasar.',
        D: 'Klaim absolut berlebihan yang tidak sesuai teks.'
      },
      subtopic: 'Rebound Effect Main Idea',
      difficulty: 'medium',
      hint: 'Penurunan biaya operasional akibat efisiensi memicu konsumsi lebih tinggi: rebound effect.'
    },
    {
      id: 'cid-exit-4',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'In the history of astronomy, the Ptolemaic geocentric model persisted for over a millennium not because ancient scholars were intellectually naive, but because the model was mathematically rigorous. By incorporating complex systems of deferents and epicycles, Ptolemy’s mathematical apparatus accurately predicted planetary positions and solar eclipses with sufficient observational precision for navigation and calendrical calculation.',
      prompt: 'According to the text, why did the Ptolemaic model endure for more than a thousand years?',
      options: [
        'Its sophisticated mathematical mechanisms provided reasonably accurate predictions of celestial events.',
        'Ptolemy threatened legal prosecution against any philosopher who proposed a heliocentric hypothesis.',
        'Ancient navigators refused to use star charts when sailing across the Mediterranean Sea.',
        'No other astronomical models were conceived by Greek or Islamic mathematicians.'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menjelaskan bahwa model Ptolemeus bertahan lama karena secara matematis sangat teliti (mathematically rigorous) dan mampu memprediksi posisi planet serta gerhana dengan akurasi yang memadai untuk navigasi dan penanggalan.',
      distractorAnalysis: {
        B: 'Tuduhan intimidasi hukum yang tidak ada dalam teks.',
        C: 'Bertolak belakang dengan manfaat model untuk navigasi.',
        D: 'Klaim absolut salah.'
      },
      subtopic: 'Historical Endorsement Detail',
      difficulty: 'medium',
      hint: 'Model Ptolemeus bertahan lama karena perhitungannya mampu memprediksi gerak benda langit dengan akurat.'
    },
    {
      id: 'cid-exit-5',
      moduleId: 'central-ideas-details',
      type: 'multiple_choice',
      passage: 'Materials scientists synthesizing bio-inspired polymers have modeled new adhesives on the structure of mussel byssal threads. Mussels anchor themselves to wave-battered coastal rocks by secreting specialized proteins rich in the amino acid DOPA, which forms robust coordination bonds with mineral substrates even underwater. Emulating this molecular mechanism allows researchers to engineer surgical glues capable of sealing internal tissue wounds without synthetic toxins.',
      prompt: 'Which choice best states the primary purpose of the text?',
      options: [
        'To explain how the molecular bonding mechanisms of marine mussels are inspiring non-toxic medical adhesives',
        'To argue that commercial synthetic glues are more durable than bio-inspired surgical adhesives',
        'To demonstrate that coastal wave action permanently destroys mussel byssal thread proteins',
        'To advocate for the complete replacement of all traditional surgical sutures with mussel extract'
      ],
      correctAnswer: 'A',
      explanation: 'Teks menjelaskan bagaimana mekanisme adhesi bawah air dari benang bisus kerang menginspirasi para ilmuwan material untuk menciptakan lem bedah medis yang kuat dan bebas racun sintetis. Pilihan A menyatakan tujuan utama ini secara tepat.',
      distractorAnalysis: {
        B: 'Bertentangan: teks menyoroti keunggulan lem bio-inspirasi yang tidak beracun.',
        C: 'Fakta salah: benang kerang justru bertahan dari ombak.',
        D: 'Klaim ekstrem yang melampaui isi teks.'
      },
      subtopic: 'Bio-Inspired Engineering Main Purpose',
      difficulty: 'medium',
      hint: 'Teks menjelaskan bagaimana mekanisme perekat kerang menginspirasi lem bedah medis non-toksik.'
    }
  ],
  discussionPrompts: [
    {
      id: 'cid-disc-1',
      topic: 'Membedakan Topik, Tesis, dan Detail',
      prompt: 'Banyak siswa memilih opsi yang "terlalu sempit" karena faktanya memang tertulis di teks. Bagaimana cara membuat latihan pembeda antara "Topik", "Tesis Utama", dan "Detail Bukti"?',
      targetInsight: 'Gunakan analogi hirarki: Topik = 1-2 kata (Pelebaran Jalan Tol), Tesis = Pernyataan hubungan logis lengkap (Pelebaran tol memicu induced demand yang mengembalikan kemacetan), Detail = Angka/bukti pendukung (Volume lalu lintas kembali dalam beberapa tahun).'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Main Idea vs Fact',
      activity: 'Siswa membedakan kalimat tesis dari kalimat detail pada 5 kutipan akademis.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Teknik "The Pivot Finder" & Eliminasi Too Narrow / Too Broad',
      activity: 'Bongkar struktur teks SAT: bagaimana penulis meletakkan bantahan tesis setelah kata transisi (However, Rather, Yet).'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan 12 Soal Central Ideas Sains & Sejarah',
      activity: 'Siswa menandai kata pivot pada teks dan mencoret opsi yang mengandung kata absolut (always, never, only).'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Refleksi',
      activity: 'Evaluasi apakah siswa masih terjebak pada verbatim keywords.'
    }
  }
};
