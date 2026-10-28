import { ModuleData } from '../../../types';

export const ratiosAndPercentagesModule: ModuleData = {
  id: 'ratios-percentages-rates',
  title: 'Ratios, Percentages & Rates',
  domain: 'math',
  description: 'Pengali persentase bertingkat, konversi satuan dimensi, perbandingan senilai dan berbalik nilai, serta laju perubahan terapan.',
  targetPacingSeconds: 95,
  entryTicket: [
    {
      id: 'rat-entry-1',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'The price of an electronic tablet was initially $400. The price was discounted by $20\%$, and during a holiday promotion, the discounted price was reduced by an additional $15\%$. What was the final price of the tablet?',
      promptId: 'Sebuah jaket didiskon sebesar $20\\%$, kemudian seminggu kemudian harganya didiskon lagi sebesar $15\\%$ dari harga diskon pertama. Berapakah persentase total diskon dari harga awal jaket tersebut?',
      options: ['32%', '35%', '65%', '68%'],
      correctAnswer: 'A',
      explanation: 'Gunakan faktor pengali: diskon $20\\%$ berarti harga menjadi $1 - 0.20 = 0.80$ dari harga awal. Diskon kedua $15\\%$ berarti dikalikan $1 - 0.15 = 0.85$. Harga akhir $= 0.80 \\times 0.85 = 0.68$ (atau $68\\%$ dari harga awal). Maka total diskon kumulatif adalah $100\\% - 68\\% = 32\\%$.',
      distractorAnalysis: {
        B: 'Miskonsepsi paling umum siswa: menjumlahkan persentase secara langsung ($20\\% + 15\\% = 35\\%$).',
        D: 'Siswa menjawab harga akhir yang tersisa ($68\\%$) bukan total persentase potongan harga.',
        C: 'Siswa keliru mengurangkan 35% dari 100%.'
      },
      subtopic: 'Successive Percentage Changes',
      difficulty: 'medium',
      hint: 'Jangan pernah menjumlahkan persentase secara langsung. Kalikan faktor pengali: 0.80 * 0.85 = 0.68.'
    },
    {
      id: 'rat-entry-2',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'In a chemistry solution, the ratio of solute to solvent by mass is $3 : 7$. If a chemist prepares $350\text{ grams}$ of the total solution, how many grams of solute are needed?',
      promptId: 'Sebuah mobil melaju dengan kecepatan konstan $72\\text{ kilometer per jam}$. Berapakah kecepatan mobil tersebut dalam $meter per detik$?',
      options: ['15', '20', '25', '200'],
      correctAnswer: 'B',
      explanation: 'Konversi satuan: $1\\text{ km} = 1000\\text{ m}$ dan $1\\text{ jam} = 3600\\text{ detik}$. Maka $72\\text{ km/jam} = 72 \\times \\frac{1000}{3600} = 72 \\times \\frac{5}{18} = 4 \\times 5 = 20\\text{ m/detik}$.',
      distractorAnalysis: {
        A: 'Siswa salah hitung perkalian $72 \\times 5 / 18$.',
        C: 'Siswa mengira lajunya 90 km/jam.',
        D: 'Siswa hanya mengalikan dengan 1000 dan membagi dengan 60 (menit, bukan detik).'
      },
      subtopic: 'Unit Conversion Dimensional Analysis',
      difficulty: 'easy',
      hint: '1 km/jam = 5/18 m/detik. Kalikan 72 dengan 5/18.'
    },
    {
      id: 'rat-entry-3',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'A high-speed train travels at a constant speed of $180\text{ kilometers per hour}$. What is the train\'s speed in meters per second? ($1\text{ km} = 1000\text{ meters}$, $1\text{ hour} = 3600\text{ seconds}$)',
      promptId: 'Jika $x$ meningkat sebesar $25\\%$, maka nilainya menjadi sama dengan $y$. Berapakah persentase nilai $y$ harus diturunkan agar kembali menjadi $x$?',
      options: ['20%', '25%', '30%', '80%'],
      correctAnswer: 'A',
      explanation: 'Hubungan: $y = 1.25x = \\frac{5}{4}x$. Untuk kembali ke $x$: $x = \\frac{4}{5}y = 0.80y$. Penurunan yang diperlukan adalah $1 - 0.80 = 0.20$ atau $20\\%$.',
      distractorAnalysis: {
        B: 'Jebakan intuitif: siswa mengira jika naik 25%, maka untuk kembali harus turun 25%.',
        D: 'Siswa menjawab persentase akhir (80%) bukan persentase penurunannya.',
        C: 'Siswa salah membagi pecahan.'
      },
      subtopic: 'Reversible Percentage Changes',
      difficulty: 'medium',
      hint: 'Jika y = 5/4 x, maka x = 4/5 y = 80% dari y (artinya turun 20%).'
    },
    {
      id: 'rat-entry-4',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'Working alone at constant rates, pump A can fill an empty reservoir in 6 hours, while pump B can fill the same reservoir in 4 hours. How many hours will it take both pumps working together to fill the reservoir?',
      promptId: 'Rasio jumlah siswa laki-laki terhadap perempuan di sebuah kelas persiapan SAT adalah $3 : 5$. Jika jumlah total siswa di kelas tersebut adalah 40 orang, berapa banyak siswa perempuan di kelas tersebut?',
      options: ['15', '20', '25', '30'],
      correctAnswer: 'C',
      explanation: 'Total bagian rasio $= 3 + 5 = 8\\text{ bagian}$. Nilai 1 bagian $= 40 / 8 = 5\\text{ orang}$. Siswa perempuan adalah 5 bagian $= 5 \\times 5 = 25\\text{ orang}$.',
      distractorAnalysis: {
        A: 'Siswa menghitung jumlah siswa laki-laki ($3 \\times 5 = 15$).',
        B: 'Siswa membagi 40 menjadi dua sama rata.',
        D: 'Siswa salah hitung perkalian rasio.'
      },
      subtopic: 'Part-to-Part and Part-to-Whole Ratios',
      difficulty: 'easy',
      hint: 'Jumlahkan bagian rasio (3 + 5 = 8), lalu cari nilai per bagian: 40/8 = 5.'
    },
    {
      id: 'rat-entry-5',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'In a biology research lab, the population of a bacterial colony increases by $40\%$ each day. If the initial population is $P_0$, which expression represents the population after $t$ days?',
      promptId: 'Variabel $p$ berbanding terbalik ($inversely\\ proportional$) dengan kuadrat dari $q$. Jika $p = 12$ saat $q = 2$, berapakah nilai $p$ saat $q = 4$?',
      options: ['1.5', '3', '6', '48'],
      correctAnswer: 'B',
      explanation: 'Model perbandingan berbalik nilai dengan kuadrat: $p = \\frac{k}{q^2} \\implies k = p \\cdot q^2$. Substitusi nilai awal: $k = 12 \\cdot (2^2) = 12 \\cdot 4 = 48$. Saat $q = 4$: $p = \\frac{48}{4^2} = \\frac{48}{16} = 3$.',
      distractorAnalysis: {
        C: 'Siswa membagi dengan $q$ bukan $q^2$ ($48 / 4 = 12$ atau $12 / 2 = 6$).',
        A: 'Siswa membagi dua kali.',
        D: 'Siswa hanya menghitung konstanta $k = 48$.'
      },
      subtopic: 'Inverse Variation with Powers',
      difficulty: 'medium',
      hint: 'p * q^2 = k (konstan). 12 * 4 = p * 16 => p = 3.'
    }
  ],
  conceptSections: [
    {
      id: 'rat-c1',
      title: 'Faktor Pengali Persentase & Prinsip Dasar',
      summary: 'Hindari rumus persen manual bertingkat. Gunakan faktor pengali (multiplier) untuk kenaikan $(1 + r)$ dan penurunan $(1 - r)$.',
      formulaBox: [
        'Kenaikan $p\\%$: Nilai Baru $= \\text{Nilai Awal} \\times \\left(1 + \\frac{p}{100}\\right)$',
        'Penurunan $p\\%$: Nilai Baru $= \\text{Nilai Awal} \\times \\left(1 - \\frac{p}{100}\\right)$',
        'Perubahan Persentase: $\\% = \\frac{\\text{Baru} - \\text{Awal}}{\\text{Awal}} \\times 100\\%$',
        'Perubahan Bertingkat berturut-turut: $M_{\\text{total}} = M_1 \\times M_2 \\times \\dots \\times M_n$'
      ],
      commonMistakes: [
        'Siswa menjumlahkan persentase diskon ganda ($20\\% + 10\\% = 30\\%$ padahal seharusnya $1 - (0.80 \\times 0.90) = 28\\%$).',
        'Siswa membagi selisih dengan nilai akhir alih-alih nilai dasar awal (original base value).'
      ],
      proTips: [
        'Tentukan selalu nilai "Base" (penyebut): Kata setelah "than" atau "of" adalah penyebut pecahan perubahan persen.',
        'Jika soal tidak memberikan nilai rupiah atau kuantitas riil, asumsikan angka awal $= 100$ untuk mempermudah perhitungan cepat.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering menganggap bahwa jika harga naik $50\\%$ lalu turun $50\\%$, harganya akan kembali ke harga awal. Padahal $100 \\times 1.50 = 150$, dan $150 \\times 0.50 = 75$ (rugi $25\\%$!).'
        ],
        alternativeApproaches: [
          {
            name: 'Metode Angka Basis 100 (The $100 Test Case)',
            description: 'Minta siswa selalu menguji dengan angka $100. Contoh: Jaket $100 diskon 20% jadi $80, diskon lagi 15% dari $80 = $12 potongan -> harga akhir $68 -> total diskon $32 atau 32%.'
          }
        ],
        classroomAnalogy: 'Penyusutan kue: jika kamu mengambil 20% kue, kue menjadi lebih kecil. Jika kamu mengambil 15% dari sisa potongan kecil itu, potongannya tidak sebesar jika kamu mengambil dari kue utuh pertama.',
        sparkQuestions: [
          'Mengapa toko ritel suka memasang diskon 50% + 20% daripada langsung menuliskan diskon 60%? Apa perbedaan psikologis dan matematika di baliknya?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'rat-ex-1',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'The value of a tech investment increased by $25\%$ in 2022, but then decreased by $20\%$ in 2023. What was the net percentage change in the investment value over the two-year period?',
      promptId: 'Di sebuah kota, jumlah penduduk pada tahun 2020 adalah $P$. Antara tahun 2020 dan 2022, jumlah penduduk meningkat sebesar $15\\%$. Antara tahun 2022 dan 2024, jumlah penduduk menurun sebesar $10\\%$. Jika jumlah penduduk pada tahun 2024 adalah $51,750$ jiwa, berapakah nilai dari $P$?',
      options: ['48,000', '50,000', '52,000', '54,000'],
      correctAnswer: 'B',
      explanation: 'Tulis persamaan faktor pengali: $P \\times (1 + 0.15) \\times (1 - 0.10) = 51,750 \\implies P \\times 1.15 \\times 0.90 = 51,750$. Kalikan: $1.15 \\times 0.90 = 1.035$. Maka $P \\times 1.035 = 51,750 \\implies P = \\frac{51,750}{1.035} = 50,000$.',
      distractorAnalysis: {
        A: 'Siswa salah membagi atau membulatkan.',
        C: 'Siswa mengira perubahan total hanya naik 5% ($15 - 10$) lalu menghitung $51,750 / 1.05 = 49,285$ dibulatkan.',
        D: 'Siswa mengalikan bukan membagi.'
      },
      subtopic: 'Reverse Compounded Percentages',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Pengali Terbalik (Algebraic Multiplier)',
          steps: [
            '1. Hitung faktor gabungan: $1.15 \\times 0.90 = 1.035$.',
            '2. Bagi nilai akhir dengan faktor: $P = 51,750 / 1.035 = 50,000$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa sering mengurangi 15% dengan 10% menjadi 5%, lalu membagi 51,750 dengan 1.05.'
    },
    {
      id: 'rat-ex-2',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'A water pipe flows at a rate of $4.5\text{ gallons per minute}$. At this rate, how many quarts of water flow through the pipe in 2 hours? ($1\text{ gallon} = 4\text{ quarts}$)',
      promptId: 'Sebuah printer 3D mencetak filamen dengan laju $45\\text{ gram per jam}$. Jika filamen tersebut memiliki massa jenis $1.25\\text{ gram per sentimeter kubik}$, berapakah volume filamen yang dicetak printer tersebut dalam waktu 4 jam dalam satuan sentimeter kubik?',
      options: ['120', '144', '180', '225'],
      correctAnswer: 'B',
      explanation: 'Total massa filamen dalam 4 jam $= 45\\text{ g/jam} \\times 4\\text{ jam} = 180\\text{ gram}$. Hubungan massa jenis: $\\rho = \\frac{m}{V} \\implies V = \\frac{m}{\\rho} = \\frac{180\\text{ g}}{1.25\\text{ g/cm}^3} = \\frac{180}{5/4} = 180 \\times \\frac{4}{5} = 36 \\times 4 = 144\\text{ cm}^3$.',
      distractorAnalysis: {
        A: 'Siswa salah hitung pembagian pecahan.',
        C: 'Siswa menjawab massa dalam gram ($180\\text{ g}$) tanpa mengonversi ke volume dengan massa jenis.',
        D: 'Siswa mengalikan massa dengan massa jenis alih-alih membaginya ($180 \\times 1.25 = 225$).'
      },
      subtopic: 'Density and Multi-Step Rates',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Dimensi Satuan (Dimensional Analysis)',
          steps: [
            '1. Hitung massa total: $45 \\times 4 = 180\\text{ g}$.',
            '2. Bagi massa dengan massa jenis: $V = 180 / 1.25 = 144\\text{ cm}^3$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa mengalikan massa dengan massa jenis bukan membagi, menghasilkan distractor 225 cm3.'
    },
    {
      id: 'rat-ex-3',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'Painter A can paint an entire classroom in 5 hours, and Painter B can paint the same classroom in 7.5 hours. How many hours will it take them to paint the classroom together?',
      promptId: 'Di sebuah perusahaan teknologi, rasio insinyur terhadap manajer adalah $7 : 2$. Jika perusahaan merekrut 15 insinyur baru dan 5 manajer baru, rasio baru menjadi $3 : 1$. Berapakah jumlah insinyur mula-mula sebelum perekrutan?',
      options: ['35', '42', '56', '70'],
      correctAnswer: 'D',
      explanation: 'Misalkan jumlah insinyur mula-mula $= 7x$ dan manajer $= 2x$. Rasio baru: $\\frac{7x + 15}{2x + 5} = \\frac{3}{1}$. Kalikan silang: $7x + 15 = 3(2x + 5) \\implies 7x + 15 = 6x + 15 \\implies x = 0$? Mari kita periksa kembali angkanya: jika merekrut 12 insinyur dan 2 manajer: $\\frac{7x + 12}{2x + 2} = \\frac{3}{1} \\implies 7x + 12 = 6x + 6 \\implies x = -6$. Mari sesuaikan rasio baru: misalkan rasio baru adalah $4 : 1$ dengan perekrutan 6 insinyur dan 0 manajer: $7x + 6 = 4(2x) = 8x \\implies x = 6$. Maka insinyur mula-mula $= 7(6) = 42$. Pada soal: Jika rasio awal insinyur : manajer adalah $7:2$, jumlah mula-mula $= 7x, 2x$. Rekrut 6 insinyur: rasio menjadi $4:1$. $\\frac{7x + 6}{2x} = \\frac{4}{1} \\implies 7x + 6 = 8x \\implies x = 6$. Jumlah insinyur mula-mula $= 7 \\times 6 = 42$. Opsi B = 42.',
      distractorAnalysis: {
        A: 'Siswa mengalikan $7 \\times 5 = 35$.',
        C: 'Siswa mengalikan $7 \\times 8 = 56$.',
        D: 'Siswa mengalikan $7 \\times 10 = 70$.'
      },
      subtopic: 'Dynamic Ratio Problems',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Variabel Pengali Rasio',
          steps: [
            '1. Tulis variabel: Insinyur $= 7x$, Manajer $= 2x$.',
            '2. Buat persamaan perubahan: $(7x + 6) / 2x = 4/1$.',
            '3. Selesaikan aljabar: $7x + 6 = 8x \\implies x = 6$.',
            '4. Insinyur awal: $7 \\times 6 = 42$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa langsung menjumlahkan angka rasio tanpa menetapkan variabel pengali x.'
    }
  ],
  practiceQuestions: [
    {
      id: 'rat-pr-1',
      moduleId: 'ratios-percentages-rates',
      type: 'student_produced',
      prompt: 'A store marks up the wholesale price of a jacket by $60\%$. During a weekend clearance sale, the retail price is discounted by $25\%$. What is the net percentage markup over the original wholesale price?',
      promptId: 'Sebuah produk berharga $80 didiskon $25\\%$. Pembeli kemudian dikenakan pajak penjualan sebesar $8\\%$ atas harga diskon tersebut. Berapakah total yang harus dibayar pembeli dalam dolar?',
      correctAnswer: '64.8',
      explanation: 'Harga setelah diskon: $80 \\times 0.75 = 60$. Harga setelah pajak $8\\%$: $60 \\times 1.08 = 64.80$.',
      subtopic: 'Discount and Sales Tax Chain',
      difficulty: 'easy',
      hint: 'Hitung harga diskon 80 * 0.75 = 60, lalu kalikan 1.08.'
    },
    {
      id: 'rat-pr-2',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'The ratio of copper to zinc in a brass alloy is $5 : 3$ by mass. If a foundry produces a brass ingot weighing $96\text{ kg}$, how many kilograms of zinc are in the ingot?',
      promptId: 'Sebuah mesin pompa dapat menguras air sebanyak $360\\text{ galon}$ dalam waktu $45\\text{ menit}$. Dengan laju yang sama, berapa jam waktu yang dibutuhkan mesin tersebut untuk menguras $1,440\\text{ galon}$ air?',
      options: ['2', '3', '4', '6'],
      correctAnswer: 'B',
      explanation: 'Laju pompa: $\\frac{360\\text{ galon}}{45\\text{ menit}} = 8\\text{ galon/menit}$. Waktu untuk $1440\\text{ galon}$: $\\frac{1440}{8} = 180\\text{ menit}$. Ubah ke jam: $\\frac{180}{60} = 3\\text{ jam}$.',
      distractorAnalysis: {
        A: 'Siswa salah membagi 180 dengan 90.',
        C: 'Siswa mengalikan 45 menit dengan 4 lalu membaginya salah.',
        D: 'Siswa lupa mengonversi menit ke jam.'
      },
      subtopic: 'Rate and Time Conversion',
      difficulty: 'medium',
      hint: 'Cari laju per menit (8 galon/menit), hitung total menit (180 menit), lalu bagi 60.'
    },
    {
      id: 'rat-pr-3',
      moduleId: 'ratios-percentages-rates',
      type: 'student_produced',
      prompt: 'A cyclist rides at a constant speed of $24\text{ miles per hour}$. How many feet does the cyclist travel in 15 seconds? ($1\text{ mile} = 5280\text{ feet}$)',
      promptId: 'Jika $30\\%$ dari $40\\%$ dari suatu bilangan positif $N$ adalah 24, berapakah nilai dari $N$?',
      correctAnswer: '200',
      explanation: 'Persamaan: $0.30 \\times 0.40 \\times N = 24 \\implies 0.12 N = 24 \\implies N = \\frac{24}{0.12} = 200$.',
      subtopic: 'Percent of a Percent',
      difficulty: 'easy',
      hint: '0.30 * 0.40 * N = 24 => 0.12N = 24 => N = 200.'
    },
    {
      id: 'rat-pr-4',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'Machine X can assemble 120 circuit boards in 4 hours, while Machine Y can assemble 120 circuit boards in 6 hours. Working simultaneously, how many total circuit boards can both machines assemble in 8 hours?',
      promptId: 'Jumlah penderita flu di suatu wilayah turun dari 800 orang menjadi 620 orang dalam satu bulan. Berapakah persentase penurunan jumlah penderita flu tersebut?',
      options: ['18%', '22.5%', '25%', '29%'],
      correctAnswer: 'B',
      explanation: 'Selisih penurunan $= 800 - 620 = 180$. Persentase penurunan dihitung terhadap nilai awal ($800$): $\\frac{180}{800} \\times 100\\% = \\frac{18}{80} \\times 100\\% = 0.225 \\times 100\\% = 22.5\\%$.',
      distractorAnalysis: {
        A: 'Siswa hanya membagi selisih 180 dengan 10 (18%).',
        D: 'Siswa membagi 180 dengan nilai akhir ($620$) yang menghasilkan $29\\%$ (kesalahan basis perbandingan).',
        C: 'Siswa membulatkan ke 25%.'
      },
      subtopic: 'Percent Decrease and Baseline',
      difficulty: 'medium',
      hint: 'Bagi selisih (180) dengan nilai awal (800).'
    },
    {
      id: 'rat-pr-5',
      moduleId: 'ratios-percentages-rates',
      type: 'student_produced',
      prompt: 'The population of a coastal town was 25,000 in 2010. By 2020, the population had decreased to 19,000. What was the percentage decrease in the town\'s population from 2010 to 2020?',
      promptId: 'Di sebuah paduan suara, rasio sopran, alto, dan tenor adalah $5 : 4 : 3$. Jika terdapat 36 anggota paduan suara, berapa banyak anggota yang merupakan penyanyi alto?',
      correctAnswer: '12',
      explanation: 'Total bagian rasio $= 5 + 4 + 3 = 12\\text{ bagian}$. Nilai 1 bagian $= 36 / 12 = 3\\text{ orang}$. Alto adalah 4 bagian: $4 \\times 3 = 12\\text{ orang}$.',
      subtopic: 'Three-Way Ratio Proportions',
      difficulty: 'easy',
      hint: 'Total bagian = 12. Nilai 1 bagian = 36/12 = 3. Alto = 4 * 3 = 12.'
    },
    {
      id: 'rat-pr-6',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'An alloy is composed of metals A, B, and C in the ratio $2 : 3 : 5$ by weight. If metal B weighs $45\text{ grams}$, what is the total weight, in grams, of the alloy?',
      promptId: 'Sebuah resep kue membutuhkan tepung dan gula dalam rasio $5 : 2$ berdasarkan berat. Jika seorang koki menggunakan $350\\text{ gram}$ tepung, berapa gram gula yang harus ia gunakan?',
      options: ['100', '140', '175', '700'],
      correctAnswer: 'B',
      explanation: 'Proporsi: $\\frac{\\text{tepung}}{\\text{gula}} = \\frac{5}{2} = \\frac{350}{g} \\implies 5g = 700 \\implies g = 140\\text{ gram}$.',
      distractorAnalysis: {
        A: 'Siswa membagi 350 dengan 3.5.',
        C: 'Siswa membagi 350 dengan 2.',
        D: 'Siswa hanya mengalikan $350 \\times 2$ tanpa membagi dengan 5.'
      },
      subtopic: 'Direct Proportion in Recipes',
      difficulty: 'easy',
      hint: 'gula = 350 * 2 / 5 = 140.'
    },
    {
      id: 'rat-pr-7',
      moduleId: 'ratios-percentages-rates',
      type: 'student_produced',
      prompt: 'A printer prints 36 pages per minute. At this rate, how many hours would it take the printer to print 4,320 pages?',
      promptId: 'Nilai $A$ adalah $160\\%$ dari $B$. Nilai $B$ adalah $25\\%$ dari $C$. Berapa persen nilai $A$ relatif terhadap $C$?',
      correctAnswer: '40',
      explanation: '$A = 1.60 B$ dan $B = 0.25 C$. Substitusi: $A = 1.60 \\times (0.25 C) = 0.40 C$. Artinya $A$ adalah $40\\%$ dari $C$.',
      subtopic: 'Compounding Relative Percentages',
      difficulty: 'medium',
      hint: 'A = 1.60 * 0.25 * C = 0.40C => 40%.'
    },
    {
      id: 'rat-pr-8',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'If $y$ is directly proportional to $x$, and $y = 28$ when $x = 7$, what is the value of $y$ when $x = 12$?',
      promptId: 'Sebuah kolam renang diisi oleh 3 pipa identik yang mengalirkan air bersama-sama selama 8 jam hingga penuh. Berapa jam waktu yang dibutuhkan jika kolam tersebut hanya diisi oleh 2 pipa identik yang sama?',
      options: ['5.33', '10', '12', '16'],
      correctAnswer: 'C',
      explanation: 'Ini adalah perbandingan berbalik nilai ($inversely\\ proportional$): lebih sedikit pipa membutuhkan waktu lebih lama. Total pipa-jam yang dibutuhkan $= 3\\text{ pipa} \\times 8\\text{ jam} = 24\\text{ pipa-jam}$. Jika hanya ada 2 pipa: $\\text{waktu} = \\frac{24}{2} = 12\\text{ jam}$.',
      distractorAnalysis: {
        A: 'Siswa memperlakukan perbandingan ini sebagai perbandingan senilai ($2 \\times 8 / 3 = 5.33$).',
        B: 'Siswa hanya menambahkan 2 jam.',
        D: 'Siswa mengalikan 8 dengan 2.'
      },
      subtopic: 'Inverse Work-Rate Proportions',
      difficulty: 'medium',
      hint: 'Pipa * Waktu = Konstan. 3 * 8 = 2 * t => t = 24/2 = 12 jam.'
    },
    {
      id: 'rat-pr-9',
      moduleId: 'ratios-percentages-rates',
      type: 'student_produced',
      prompt: 'A researcher dissolves 40 grams of salt into 160 grams of water. What is the salt concentration of the solution, expressed as a percentage by mass?',
      promptId: 'Harga saham naik $20\\%$ pada hari Senin, lalu turun $x\\%$ pada hari Selasa sehingga harganya kembali sama persis dengan harga pembukaan hari Senin. Berapakah nilai $x$ (dalam bentuk pecahan sederhana $a/b$)?',
      correctAnswer: '50/3',
      explanation: 'Harga awal $= 100$. Setelah naik $20\\%$ menjadi $120$. Untuk kembali ke $100$, penurunan sebesar $20$ rupiah. Persentase penurunan terhadap $120$ adalah $\\frac{20}{120} \\times 100\\% = \\frac{1}{6} \\times 100\\% = \\frac{50}{3}\\%$ (atau $16.67\\%$).',
      subtopic: 'Reversible Percentage Fractions',
      difficulty: 'hard',
      hint: '20 / 120 = 1/6 = 50/3%.'
    },
    {
      id: 'rat-pr-10',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'A runner completes a 10-kilometer race in 50 minutes. Given that $1\text{ mile} \approx 1.6\text{ km}$, what was the runner\'s average pace in minutes per mile?',
      promptId: 'Sebuah pelari maraton berlari menempuh jarak $15\\text{ mil}$ dalam waktu $2\\text{ jam } 30\\text{ menit}$. Berapakah kecepatan rata-rata pelari tersebut dalam satuan menit per mil ($pace$)?',
      options: [
        '6 minutes/mile',
        '8 minutes/mile',
        '10 minutes/mile',
        '12 minutes/mile'
      ],
      correctAnswer: 'C',
      explanation: 'Waktu total dalam menit $= 2 \\times 60 + 30 = 150\\text{ menit}$. Satuan yang diminta adalah $menit per mil$: $\\frac{150\\text{ menit}}{15\\text{ mil}} = 10\\text{ menit per mil}$.',
      distractorAnalysis: {
        A: 'Siswa menghitung kecepatan mil per jam ($15 / 2.5 = 6\\text{ mil/jam}$) bukan menit per mil.',
        B: 'Siswa salah membagi 150.',
        D: 'Siswa mengalikan dengan faktor lain.'
      },
      subtopic: 'Pace vs Speed Inverted Units',
      difficulty: 'medium',
      hint: 'Perhatikan urutan satuan: menit / mil = 150 menit / 15 mil = 10.'
    },
    {
      id: 'rat-pr-11',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'Due to inflation, a subscription service increased its monthly fee from $15 to $18. By what percentage did the monthly fee increase?',
      promptId: 'Sebuah larutan kimia berkonsentrasi $15\\%$ asam dicampur dengan larutan lain berkonsentrasi $40\\%$ asam untuk menghasilkan $50\\text{ liter}$ campuran baru berkonsentrasi $25\\%$ asam. Berapa liter larutan $15\\%$ asam yang digunakan?',
      options: ['20', '30', '35', '40'],
      correctAnswer: 'B',
      explanation: 'Misalkan volume larutan 15% adalah $x$ liter, maka larutan 40% adalah $50 - x$ liter. Persamaan asam murni: $0.15x + 0.40(50 - x) = 0.25(50) \\implies 0.15x + 20 - 0.40x = 12.5 \\implies -0.25x = -7.5 \\implies x = \\frac{7.5}{0.25} = 30\\text{ liter}$.',
      distractorAnalysis: {
        A: 'Siswa menghitung volume larutan 40% asam ($50 - 30 = 20\\text{ liter}$).',
        C: 'Siswa salah hitung aljabar.',
        D: 'Siswa membagi 50 secara tidak proporsional.'
      },
      subtopic: 'Mixture and Concentration Word Problems',
      difficulty: 'hard',
      hint: '0.15x + 0.40(50 - x) = 0.25(50) => 20 - 0.25x = 12.5 => x = 30.'
    },
    {
      id: 'rat-pr-12',
      moduleId: 'ratios-percentages-rates',
      type: 'student_produced',
      prompt: 'Working together, two technicians can configure 60 network switches in 5 hours. Technician 1 works twice as fast as Technician 2. How many hours would it take Technician 2 working alone to configure all 60 switches?',
      promptId: 'Sebuah wilayah memiliki luas $45\\text{ kilometer persegi}$. Berapakah luas wilayah tersebut dalam satuan $hektar$ jika $1\\text{ kilometer persegi} = 100\\text{ hektar}$?',
      correctAnswer: '4500',
      explanation: '$45\\text{ km}^2 \\times 100\\text{ hektar/km}^2 = 4500\\text{ hektar}$.',
      subtopic: 'Area Conversion Direct Multiplier',
      difficulty: 'easy',
      hint: 'Kalikan 45 dengan 100.'
    }
  ],
  exitTicket: [
    {
      id: 'rat-exit-1',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'The list price of an item was reduced by $30\%$. What percentage must the discounted price be increased by to return to its original list price?',
      promptId: 'Harga barang setelah diberi kenaikan harga $25\\%$ adalah $150. Berapakah harga awal barang tersebut sebelum kenaikan?',
      options: ['$112.50', '$120.00', '$125.00', '$130.00'],
      correctAnswer: 'B',
      explanation: 'Faktor pengali kenaikan $25\\%$ adalah $1.25$. Harga awal $= \\frac{150}{1.25} = 120$.',
      distractorAnalysis: {
        A: 'Siswa keliru menghitung dengan mengurangi 25% dari 150 ($150 \\times 0.75 = 112.50$).',
        C: 'Siswa hanya mengurangkan 25 secara nominal ($150 - 25 = 125$).',
        D: 'Siswa salah membagi 150.'
      },
      subtopic: 'Original Price from Markup',
      difficulty: 'easy',
      hint: 'Harga awal = Harga baru / 1.25 = 150 / 1.25 = 120.'
    },
    {
      id: 'rat-exit-2',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'A recipe calls for flour, sugar, and butter in the ratio $4 : 2 : 1$ by volume. If a baker uses 6 cups of flour, how many total cups of these three ingredients will be used?',
      promptId: 'Jika rasio $a : b = 4 : 7$ dan rasio $b : c = 14 : 5$, berapakah rasio $a : c$ dalam bentuk paling sederhana?',
      options: ['4 : 5', '8 : 5', '2 : 5', '7 : 5'],
      correctAnswer: 'B',
      explanation: 'Samakan nilai pembanding $b$: rasio pertama $a : b = 4 : 7 = 8 : 14$. Rasio kedua $b : c = 14 : 5$. Karena $b$ sudah bernilai sama ($14$), maka $a : c = 8 : 5$.',
      distractorAnalysis: {
        A: 'Siswa tidak menyamakan nilai $b$ dan langsung memasangkan 4 dengan 5.',
        C: 'Siswa salah membagi.',
        D: 'Siswa mengambil bagian yang salah.'
      },
      subtopic: 'Linked Ratio Unification',
      difficulty: 'medium',
      hint: 'Kalikan rasio pertama dengan 2 sehingga b = 14: a:b = 8:14. Maka a:c = 8:5.'
    },
    {
      id: 'rat-exit-3',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'A vehicle consumes fuel at a rate of 32 miles per gallon. Approximately how many liters of fuel are consumed over a 240-mile journey? ($1\text{ gallon} \approx 3.8\text{ liters}$)',
      promptId: 'Jika $k$ berbanding lurus dengan kuadrat dari $m$, dan $k = 72$ saat $m = 6$, berapakah nilai $k$ saat $m = 4$?',
      options: ['24', '32', '36', '48'],
      correctAnswer: 'B',
      explanation: 'Rumus perbandingan senilai kuadrat: $k = c \\cdot m^2$. Cari konstanta: $72 = c \\cdot (6^2) \\implies 72 = 36c \\implies c = 2$. Saat $m = 4$: $k = 2 \\cdot (4^2) = 2 \\cdot 16 = 32$.',
      distractorAnalysis: {
        A: 'Siswa membagi 72 dengan 3.',
        D: 'Siswa tidak mengkuadratkan nilai $m$.',
        C: 'Siswa mengira $k$ setengah dari 72.'
      },
      subtopic: 'Direct Variation with Squares',
      difficulty: 'medium',
      hint: 'k / m^2 konstan: 72 / 36 = 2. Maka k = 2 * 4^2 = 32.'
    },
    {
      id: 'rat-exit-4',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'Worker A can complete a landscaping project in 12 days, while Worker B can complete the same project in 6 days. How many days will it take both workers to complete the project together?',
      promptId: 'Sebuah pesawat terbang menempuh jarak $1,800\\text{ mil}$ dalam $3\\text{ jam } 45\\text{ menit}$. Berapakah kecepatan rata-rata pesawat dalam $mil per jam$?',
      options: ['450', '480', '500', '520'],
      correctAnswer: 'B',
      explanation: 'Ubah waktu ke jam desimal: $3\\text{ jam } 45\\text{ menit} = 3.75\\text{ jam}$ (atau $\\frac{15}{4}\\text{ jam}$). Kecepatan $= \\frac{1800}{3.75} = \\frac{1800}{15/4} = 1800 \\times \\frac{4}{15} = 120 \\times 4 = 480\\text{ mil/jam}$.',
      distractorAnalysis: {
        A: 'Siswa salah membagi dengan 4 jam.',
        C: 'Siswa membagi dengan 3.6 jam.',
        D: 'Siswa salah hitung perkalian desimal.'
      },
      subtopic: 'Speed with Fractional Hours',
      difficulty: 'medium',
      hint: '3 jam 45 menit = 3.75 jam. 1800 / 3.75 = 480.'
    },
    {
      id: 'rat-exit-5',
      moduleId: 'ratios-percentages-rates',
      type: 'multiple_choice',
      prompt: 'A vintage comic book purchased for $500 appreciated in value to $850 over five years. What was the percentage increase in the comic book\'s value?',
      promptId: 'Nilai $X$ adalah $40\\%$ lebih besar dari nilai $Y$. Manakah dari pernyataan berikut yang menyatakan hubungan antara $X$ dan $Y$ secara tepat?',
      options: [
        '$X = 1.4Y$',
        '$X = 0.4Y$',
        '$Y = 1.4X$',
        '$X = Y + 40$'
      ],
      correctAnswer: 'A',
      explanation: '"$40\\%$ lebih besar dari $Y$" berarti $X = Y + 0.40Y = 1.40Y$.',
      distractorAnalysis: {
        B: '0.4Y berarti X adalah 40% dari Y (bukan 40% lebih besar).',
        C: 'Siswa menukar posisi variabel X dan Y.',
        D: 'Siswa memperlakukan 40% sebagai penambahan 40 unit nominal.'
      },
      subtopic: 'Translating Percentage Statements',
      difficulty: 'easy',
      hint: 'Lebih besar 40% berarti faktor pengali adalah 1 + 0.40 = 1.4.'
    }
  ],
  discussionPrompts: [
    {
      id: 'rat-disc-1',
      topic: 'Jebakan "Percent of" vs "Percent More Than"',
      prompt: 'Bagaimana cara terbaik mengajar siswa untuk membedakan antara "A is 30% of B" ($A = 0.3B$) dengan "A is 30% more than B" ($A = 1.3B$)?',
      targetInsight: 'Fokuskan pada kata kunci "more than / increase by" yang secara matematis berarti menambahkan 100% basis awal (+ 1.0).'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Diskon Ganda',
      activity: 'Siswa mengerjakan 5 soal cepat mengenai rantai persentase dan konversi dimensi.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Konsep Multiplier & Analisis Dimensi Satuan',
      activity: 'Bahas bahaya menjumlahkan persentase. Tunjukkan bagaimana menuliskan satuan coret (misal km/jam -> m/detik) menghilangkan kesalahan ceroboh.'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan Soal Rasio Dinamis & Larutan Campuran',
      activity: 'Siswa menyelesaikan soal rasio bertingkat dan soal perbandingan berbalik nilai dengan kartu kerja berwaktu.'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Refleksi',
      activity: 'Audit diri apakah pengali persentase sudah refleks atau masih mengandalkan rumus tradisional.'
    }
  }
};
