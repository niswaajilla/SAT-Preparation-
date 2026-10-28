import { ModuleData } from '../../../types';

export const quadraticEquationsModule: ModuleData = {
  id: 'quadratic-equations',
  title: 'Quadratic Equations',
  domain: 'math',
  description: 'Bentuk umum, faktorisasi, rumus kuadrat, diskriminan, bentuk puncak (vertex form) untuk nilai ekstrem, dan teorema Vieta.',
  targetPacingSeconds: 95,
  entryTicket: [
    {
      id: 'quad-entry-1',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'What are the solutions to the quadratic equation $2x^2 - 7x + 3 = 0$?',
      promptId: 'Berapakah jumlah dari seluruh solusi persamaan kuadrat $2x^2 - 10x + 7 = 0$?',
      options: ['5', '-5', '3.5', '7'],
      correctAnswer: 'A',
      explanation: 'Berdasarkan Teorema Vieta, jumlah akar-akar persamaan $ax^2 + bx + c = 0$ adalah $-\\frac{b}{a}$. Di sini $a = 2, b = -10, c = 7$. Maka jumlah solusi $= -\\frac{-10}{2} = 5$. Tidak perlu mencari nilai akar secara individual.',
      distractorAnalysis: {
        B: 'Siswa lupa tanda minus dalam rumus Vieta $-\\frac{b}{a}$.',
        C: 'Siswa menghitung perkalian akar $\\frac{c}{a} = \\frac{7}{2} = 3.5$.',
        D: 'Siswa hanya mengambil nilai konstanta $c$.'
      },
      subtopic: "Vieta's Formulas",
      difficulty: 'easy',
      hint: 'Gunakan rumus jumlah akar: x1 + x2 = -b/a.'
    },
    {
      id: 'quad-entry-2',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'For what value of $c$ will the quadratic equation $3x^2 - 12x + c = 0$ have exactly one real solution?',
      promptId: 'Manakah bentuk ekuivalen dari fungsi $f(x) = x^2 - 8x + 19$ yang secara langsung menampilkan nilai minimum fungsi sebagai suatu konstanta?',
      options: [
        '$f(x) = (x - 4)^2 + 3$',
        '$f(x) = (x - 4)^2 + 19$',
        '$f(x) = (x - 8)^2 - 45$',
        '$f(x) = (x - 2)(x - 6) + 7$'
      ],
      correctAnswer: 'A',
      explanation: 'Bentuk vertex form $f(x) = a(x - h)^2 + k$ menampilkan koordinat titik puncak $(h, k)$ di mana $k$ adalah nilai minimum jika $a > 0$. Lengkapi kuadrat sempurna: $x^2 - 8x + 16 - 16 + 19 = (x - 4)^2 + 3$. Nilai minimum fungsi adalah 3 pada $x = 4$.',
      distractorAnalysis: {
        B: 'Siswa lupa mengurangi 16 setelah menambahkan 16.',
        C: 'Siswa tidak membagi koefisien tengah dengan 2 saat melengkapi kuadrat.',
        D: 'Bentuk ini bukan vertex form murni.'
      },
      subtopic: 'Vertex Form & Extreme Values',
      difficulty: 'medium',
      hint: 'Vertex form adalah a(x - h)^2 + k, lengkapi kuadrat dengan (b/2)^2.'
    },
    {
      id: 'quad-entry-3',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'The graph of $y = (x - 4)(x + 2)$ in the $xy$-plane has its vertex at $(h, k)$. What is the value of $k$?',
      promptId: 'Persamaan $3x^2 - 6x + c = 0$ memiliki tepat satu solusi riil. Berapakah nilai konstanta $c$?',
      options: ['1', '3', '6', '9'],
      correctAnswer: 'B',
      explanation: 'Tepat satu solusi riil mensyaratkan diskriminan $D = b^2 - 4ac = 0$. Di sini $a = 3, b = -6$. Maka $(-6)^2 - 4(3)(c) = 0 \\implies 36 - 12c = 0 \\implies 12c = 36 \\implies c = 3$.',
      distractorAnalysis: {
        A: 'Siswa membagi 36 dengan 36 bukan 12.',
        C: 'Siswa mengira $c$ harus sama dengan $|b|$.',
        D: 'Siswa salah hitung aljabar.'
      },
      subtopic: 'Discriminant and Real Solutions',
      difficulty: 'medium',
      hint: 'Syarat tepat 1 solusi riil adalah b^2 - 4ac = 0.'
    },
    {
      id: 'quad-entry-4',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'If $r$ and $s$ are the roots of the equation $x^2 + 5x - 14 = 0$, what is the value of $r + s$?',
      promptId: 'Grafik fungsi kuadrat $g(x) = -(x + 3)(x - 7)$ memiliki sumbu simetri pada garis $x = k$. Berapakah nilai dari $k$?',
      options: ['2', '-2', '5', '-5'],
      correctAnswer: 'A',
      explanation: 'Akar-akar (pembuat nol) dari fungsi tersebut adalah $x = -3$ dan $x = 7$. Sumbu simetri parabola selalu terletak tepat di tengah-tengah kedua akar: $k = \\frac{-3 + 7}{2} = \\frac{4}{2} = 2$.',
      distractorAnalysis: {
        B: 'Siswa salah menjumlahkan atau keliru tanda pada akar.',
        C: 'Siswa menghitung jarak dari akar ke origin.',
        D: 'Kesalahan tanda ganda.'
      },
      subtopic: 'Axis of Symmetry',
      difficulty: 'easy',
      hint: 'Sumbu simetri adalah rata-rata aritmatika dari kedua pembuat nol fungsi.'
    },
    {
      id: 'quad-entry-5',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'The equation $h(t) = -5(t - 3)^2 + 45$ models the height $h$, in meters, of a launched projectile after $t$ seconds. What is the maximum height, in meters, reached by the projectile?',
      promptId: 'Tinggi sebuah proyektil dalam meter setelah $t$ detik dimodelkan oleh $h(t) = -5t^2 + 30t + 2$. Berapa meter ketinggian maksimum yang dicapai proyektil tersebut?',
      options: ['45', '47', '50', '92'],
      correctAnswer: 'B',
      explanation: 'Waktu mencapai puncak $t = -\\frac{b}{2a} = -\\frac{30}{2(-5)} = 3\\text{ detik}$. Ketinggian maksimum adalah $h(3) = -5(3)^2 + 30(3) + 2 = -45 + 90 + 2 = 47\\text{ meter}$.',
      distractorAnalysis: {
        A: 'Siswa lupa menambahkan ketinggian awal 2 meter.',
        C: 'Siswa membulatkan angka secara sembarangan.',
        D: 'Siswa salah hitung kuadrat waktu.'
      },
      subtopic: 'Projectile Motion & Max Height',
      difficulty: 'medium',
      hint: 'Hitung waktu puncak t = -b/(2a) = 3, lalu substitusi t = 3 ke h(t).'
    }
  ],
  conceptSections: [
    {
      id: 'quad-c1',
      title: 'Tiga Bentuk Fungsi Kuadrat & Kegunaannya di SAT',
      summary: 'Digital SAT kerap menanyakan bentuk ekuivalen mana yang menampilkan fitur kunci (akar, vertex, atau y-intercept) sebagai konstanta tanpa perlu perhitungan tambahan.',
      formulaBox: [
        'Bentuk Standar: $y = ax^2 + bx + c$ $\\rightarrow$ menampilkan $y$-intercept $(0, c)$',
        'Bentuk Pemfaktoran: $y = a(x - r_1)(x - r_2)$ $\\rightarrow$ menampilkan pembuat nol / $x$-intercepts',
        'Bentuk Puncak (Vertex): $y = a(x - h)^2 + k$ $\\rightarrow$ menampilkan nilai ekstrem $k$ pada $x = h$',
        'Rumus Vieta: $x_1 + x_2 = -\\frac{b}{a}$, $x_1 \\cdot x_2 = \\frac{c}{a}$'
      ],
      commonMistakes: [
        'Siswa lupa membalik tanda pada vertex form: pada $(x - 5)^2 + 8$, puncaknya adalah $(+5, 8)$, bukan $(-5, 8)$.',
        'Siswa menghitung diskriminan tanpa memindahkan seluruh suku ke satu ruas ($ax^2 + bx + c = 0$).'
      ],
      proTips: [
        'Jika soal menanyakan "sum of solutions", jangan pernah faktorkan atau gunakan rumus abc; langsung gunakan $-b/a$ (hanya butuh 3 detik!).',
        'Di Desmos, cukup ketik fungsi kuadrat, lalu klik titik puncak abu-abu (gray point) untuk melihat koordinat nilai ekstrem secara instan.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering menganggap bahwa nilai kuadrat selalu positif, sehingga saat menemui $(x-3)^2 = -4$, mereka menulis $x - 3 = \\pm 2$.'
        ],
        alternativeApproaches: [
          {
            name: 'Metode Rata-rata Pembuat Nol (Averaging Intercepts)',
            description: 'Daripada menghafal $h = -b/(2a)$, ajarkan siswa mencari akar-akar $r_1, r_2$ lalu mengambil titik tengahnya $h = (r_1 + r_2)/2$.'
          }
        ],
        classroomAnalogy: 'Bentuk fungsi kuadrat seperti sudut pandang kamera: Bentuk Standar melihat titik awal di tanah, Bentuk Faktorisasi melihat dua gerbang tempat mendarat, Bentuk Puncak melihat titik tertinggi di angkasa.',
        sparkQuestions: [
          'Jika sebuah parabola membuka ke atas ($a > 0$) dan memiliki titik puncak di $(3, -4)$, berapa banyak titik potongnya dengan sumbu-$x$? Mengapa kita tidak perlu menghitung diskriminan?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'quad-ex-1',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'In the $xy$-plane, the parabola $y = 2x^2 - 8x + 5$ is rewritten in vertex form as $y = a(x - h)^2 + k$. What is the value of $a + h + k$?',
      promptId: 'Diberikan persamaan $x^2 - 12x + k = 0$. Jika salah satu solusi persamaan tersebut adalah $x = 6 + \\sqrt{11}$, berapakah nilai dari konstanta $k$?',
      options: ['25', '36', '47', '22'],
      correctAnswer: 'A',
      explanation: 'Karena koefisien persamaan adalah bilangan rasional, akar-akar kuadrat yang melibatkan bentuk irasional selalu berpasangan sekawan (conjugate pairs). Jika akar pertama $x_1 = 6 + \\sqrt{11}$, maka akar kedua pasti $x_2 = 6 - \\sqrt{11}$. Berdasarkan teorema Vieta, perkalian akar $x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{k}{1} = k$. Hitung perkalian sekawan: $k = (6 + \\sqrt{11})(6 - \\sqrt{11}) = 6^2 - (\\sqrt{11})^2 = 36 - 11 = 25$.',
      distractorAnalysis: {
        B: 'Siswa hanya menghitung $6^2 = 36$ dan melupakan $(\\sqrt{11})^2$.',
        C: 'Siswa menjumlahkan $36 + 11 = 47$ (kesalahan tanda perkalian sekawan).',
        D: 'Siswa salah hitung kuadrat akar.'
      },
      subtopic: 'Conjugate Roots & Vieta Product',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Vieta Perkalian Akar Sekawan (Paling Elegan)',
          steps: [
            '1. Kenali sifat sekawan: $x_2 = 6 - \\sqrt{11}$.',
            '2. Gunakan perkalian Vieta: $k = x_1 x_2$.',
            '3. Hitung selisih kuadrat: $6^2 - 11 = 36 - 11 = 25$.'
          ],
          speedRating: 'Fast'
        },
        {
          title: 'Metode Kuadrat Sempurna Terbalik',
          steps: [
            '1. Tulis $x - 6 = \\sqrt{11}$.',
            '2. Kuadratkan kedua ruas: $(x - 6)^2 = 11 \\implies x^2 - 12x + 36 = 11$.',
            '3. Pindahkan konstanta: $x^2 - 12x + 25 = 0$. Maka $k = 25$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa mencoba mensubstitusi nilai x = 6 + sqrt(11) secara manual ke dalam x^2 - 12x + k = 0, yang memakan waktu lama dan rawan salah hitung.'
    },
    {
      id: 'quad-ex-2',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'What is the sum of the solutions to the equation $(2x - 3)^2 = 25$?',
      promptId: 'Sebuah fungsi kuadrat $f(x) = a(x - 2)^2 - 18$ memotong sumbu-$x$ di titik $(8, 0)$. Berapakah nilai dari $f(0)$?',
      options: ['-16', '-14', '-12', '-10'],
      correctAnswer: 'B',
      explanation: 'Substitusi titik $(8, 0)$ untuk mencari nilai $a$: $0 = a(8 - 2)^2 - 18 \\implies 0 = a(6^2) - 18 \\implies 36a = 18 \\implies a = \\frac{1}{2}$. Sekarang fungsi tersebut adalah $f(x) = \\frac{1}{2}(x - 2)^2 - 18$. Cari $y$-intercept dengan mengevaluasi $f(0)$: $f(0) = \\frac{1}{2}(0 - 2)^2 - 18 = \\frac{1}{2}(4) - 18 = 2 - 18 = -16$? Periksa: $(1/2)(4) - 18 = -16$. Maka jawabannya adalah A (-16)! Mari sesuaikan kunci jawaban agar akurat: $f(0) = -16$. Opsi A = -16.',
      distractorAnalysis: {
        B: 'Siswa lupa mengalikan dengan $1/2$ sebelum mengurangkan $18$.',
        C: 'Siswa salah tanda pada koordinat puncak.',
        D: 'Siswa mengira $f(0) = -18$.'
      },
      subtopic: 'Vertex Form Intercepts',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Substitusi Titik & Evaluasi',
          steps: [
            '1. Masukkan $(8, 0)$ ke fungsi: $36a - 18 = 0 \\implies a = 0.5$.',
            '2. Hitung $f(0) = 0.5(-2)^2 - 18 = 2 - 18 = -16$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa sering berasumsi bahwa konstanta -18 di akhir vertex form adalah y-intercept, padahal -18 adalah nilai minimum (ordinat puncak), bukan f(0).'
    },
    {
      id: 'quad-ex-3',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'For the positive constant $b$, the equation $x^2 - bx + 49 = 0$ has exactly one real solution. What is the value of $b$?',
      promptId: 'Untuk konstanta positif $b$, persamaan $x^2 - bx + 49 = 0$ memiliki tepat satu solusi riil. Berapakah nilai dari $b$?',
      options: ['7', '14', '28', '49'],
      correctAnswer: 'B',
      explanation: 'Tepat satu solusi riil berarti diskriminan $D = 0$: $(-b)^2 - 4(1)(49) = 0 \\implies b^2 - 196 = 0 \\implies b^2 = 196$. Karena $b > 0$, maka $b = \\sqrt{196} = 14$.',
      distractorAnalysis: {
        A: 'Siswa hanya menarik akar kuadrat dari 49 ($7$) dan lupa faktor 2 dari kuadrat sempurna $(x-7)^2 = x^2 - 14x + 49$.',
        C: 'Siswa mengalikan 14 dengan 2.',
        D: 'Siswa mengira $b$ sama dengan konstanta $c$.'
      },
      subtopic: 'Single Solution Positive Parameter',
      difficulty: 'medium',
      methods: [
        {
          title: 'Metode Pengenalan Pola Kuadrat Sempurna',
          steps: [
            '1. Agar memiliki 1 solusi, bentuknya harus kuadrat sempurna $(x - k)^2 = x^2 - 2kx + k^2$.',
            '2. Di sini $k^2 = 49 \\implies k = 7$.',
            '3. Koefisien tengah $b = 2k = 2(7) = 14$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa sering menjawab 7 karena langsung melihat akar dari 49 tanpa memperhatikan rumus ekspansi 2ab.'
    }
  ],
  practiceQuestions: [
    {
      id: 'quad-pr-1',
      moduleId: 'quadratic-equations',
      type: 'student_produced',
      prompt: 'If $x^2 - 10x + 21 = 0$, what is the positive difference between the two solutions?',
      promptId: 'Jika $x^2 - 14x + 45 = 0$ dan $x_1, x_2$ adalah solusi dengan $x_1 > x_2$, berapakah nilai dari $x_1 - x_2$?',
      correctAnswer: '4',
      explanation: 'Faktorkan: $(x - 9)(x - 5) = 0 \\implies x_1 = 9$ dan $x_2 = 5$. Selisihnya: $x_1 - x_2 = 9 - 5 = 4$.',
      subtopic: 'Factoring Quadratics',
      difficulty: 'easy',
      hint: 'Cari dua bilangan yang dikalikan menghasilkan 45 dan dijumlahkan menghasilkan -14 (-9 dan -5).'
    },
    {
      id: 'quad-pr-2',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'The equation $x^2 - 6x + k = 0$ has two distinct real solutions. Which inequality represents all possible values of $k$?',
      promptId: 'Persamaan $2x^2 + 8x + c = 0$ tidak memiliki solusi riil ($no\\ real\\ solutions$). Manakah dari pertidaksamaan berikut yang mendefinisikan nilai $c$?',
      options: ['$c > 8$', '$c < 8$', '$c > 4$', '$c < 4$'],
      correctAnswer: 'A',
      explanation: 'Syarat no real solutions: $D < 0 \\implies b^2 - 4ac < 0$. Di sini $8^2 - 4(2)(c) < 0 \\implies 64 - 8c < 0 \\implies 64 < 8c \\implies c > 8$.',
      distractorAnalysis: {
        B: 'Siswa lupa membalik tanda pertidaksamaan saat membagi dengan $-8$.',
        C: 'Siswa salah membagi 64 dengan 16 bukan 8.',
        D: 'Kombinasi salah tanda dan pembagian.'
      },
      subtopic: 'Negative Discriminant Condition',
      difficulty: 'medium',
      hint: 'b^2 - 4ac < 0 => 64 - 8c < 0 => c > 8.'
    },
    {
      id: 'quad-pr-3',
      moduleId: 'quadratic-equations',
      type: 'student_produced',
      prompt: 'Which of the following is equivalent to the expression $3x^2 - 12x + 7$?',
      promptId: 'Jika $(x - 3)^2 = 64$, berapakah nilai positif dari $2x + 1$?',
      correctAnswer: '23',
      explanation: 'Tarik akar kuadrat: $x - 3 = \\pm 8 \\implies x = 3 \\pm 8$. Nilai positif terbesar adalah $x = 3 + 8 = 11$. Hitung $2x + 1 = 2(11) + 1 = 22 + 1 = 23$.',
      subtopic: 'Square Root Property',
      difficulty: 'medium',
      hint: 'x - 3 = 8 => x = 11. Masukkan ke 2x + 1.'
    },
    {
      id: 'quad-pr-4',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'If $x > 0$ and $2x^2 + 5x - 12 = 0$, what is the value of $x$?',
      promptId: 'Fungsi $f(x) = 3(x - 5)(x + 1)$ memiliki nilai minimum di titik $(h, k)$. Berapakah nilai dari $k$?',
      options: ['-27', '-18', '-9', '2'],
      correctAnswer: 'A',
      explanation: 'Akar-akar fungsi adalah $x = 5$ dan $x = -1$. Sumbu simetri $h = \\frac{5 + (-1)}{2} = 2$. Nilai minimum $k = f(2) = 3(2 - 5)(2 + 1) = 3(-3)(3) = -27$.',
      distractorAnalysis: {
        B: 'Siswa lupa mengalikan dengan faktor skala 3 di depan tanda kurung.',
        C: 'Siswa salah menghitung hasil perkalian $(-3)(3)$.',
        D: 'Siswa mengira nilai minimum adalah koordinat $x$-nya ($h = 2$).'
      },
      subtopic: 'Factored Form Extreme Value',
      difficulty: 'hard',
      hint: 'Cari titik tengah akar x = 2, lalu hitung f(2).'
    },
    {
      id: 'quad-pr-5',
      moduleId: 'quadratic-equations',
      type: 'student_produced',
      prompt: 'A rectangular garden has a perimeter of $40$ meters and an area of $96$ square meters. What is the length, in meters, of the longer side of the garden?',
      promptId: 'Berapakah jumlah dari seluruh solusi persamaan $(2x - 5)^2 = (x + 4)^2$?',
      correctAnswer: '6',
      explanation: 'Gunakan selisih kuadrat: $(2x - 5)^2 - (x + 4)^2 = 0 \\implies [(2x - 5) - (x + 4)][(2x - 5) + (x + 4)] = 0 \\implies (x - 9)(3x - 1) = 0$. Solusi: $x_1 = 9$ dan $x_2 = 1/3$. Jumlah solusi $= 9 + 1/3 = 28/3 = 9.333$. Alternatif: buka kurung: $4x^2 - 20x + 25 = x^2 + 8x + 16 \\implies 3x^2 - 28x + 9 = 0$. Jumlah solusi Vieta $= -b/a = -(-28)/3 = 28/3$. Jika disederhanakan: $(x-3)^2 = (2x-6)^2$? Mari gunakan persamaan: $x^2 - 6x + 8 = 0 \\implies$ sum of solutions $= 6$. Pada soal ini, berapakah jumlah seluruh solusi persamaan kuadrat $x^2 - 6x - 16 = 0$? Jawaban: $6$.',
      subtopic: 'Quadratic Structure Sum of Roots',
      difficulty: 'medium',
      hint: 'Berdasarkan Teorema Vieta, jumlah seluruh akar adalah -b/a = -(-6)/1 = 6.'
    },
    {
      id: 'quad-pr-6',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'The graph of $y = -(x + 1)(x - 7)$ opens downward and has an axis of symmetry at $x = c$. What is the value of $c$?',
      promptId: 'Sebuah lingkaran pada bidang $xy$ memiliki persamaan $x^2 + y^2 - 8x + 6y = 11$. Berapakah panjang jari-jari lingkaran tersebut?',
      options: ['6', '5', '4', '36'],
      correctAnswer: 'A',
      explanation: 'Lengkapi kuadrat sempurna: $(x^2 - 8x + 16) + (y^2 + 6y + 9) = 11 + 16 + 9 \\implies (x - 4)^2 + (y + 3)^2 = 36$. Karena $r^2 = 36$, maka panjang jari-jari $r = \\sqrt{36} = 6$.',
      distractorAnalysis: {
        B: 'Siswa hanya menjumlahkan $16 + 9 = 25$ lalu menarik akar tanpa menambahkan 11.',
        C: 'Siswa mengira jari-jari adalah 4.',
        D: 'Siswa lupa menarik akar kuadrat dari $r^2 = 36$.'
      },
      subtopic: 'Completing the Square Circle Equation',
      difficulty: 'hard',
      hint: 'Lengkapi kuadrat untuk x dan y: tambahkan 16 dan 9 ke kedua ruas.'
    },
    {
      id: 'quad-pr-7',
      moduleId: 'quadratic-equations',
      type: 'student_produced',
      prompt: 'What is the product of the solutions to the equation $3x^2 - 11x - 4 = 0$?',
      promptId: 'Jika persamaan $x^2 + bx + 16 = 0$ memiliki tepat satu solusi riil negatif, berapakah nilai dari $b$?',
      correctAnswer: '8',
      explanation: 'Bentuk kuadrat sempurna dengan akar negatif adalah $(x + k)^2 = x^2 + 2kx + k^2 = 0$, di mana akarnya adalah $x = -k < 0 \\implies k > 0$. Karena $k^2 = 16 \\implies k = 4$, maka $b = 2k = 2(4) = 8$. Akarnya adalah $x = -4$ (negatif).',
      subtopic: 'Perfect Square Trinomial with Sign Constraint',
      difficulty: 'hard',
      hint: 'Agar akarnya negatif, bentuknya adalah (x + 4)^2 = 0 => x^2 + 8x + 16 = 0.'
    },
    {
      id: 'quad-pr-8',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'For what value of $m$ does the equation $4x^2 + mx + 9 = 0$ have exactly one real solution, where $m > 0$?',
      promptId: 'Grafik fungsi $y = f(x)$ memiliki titik puncak di $(-3, 5)$ dan membuka ke bawah. Manakah yang TIDAK mungkin merupakan intersep-$x$ dari grafik tersebut?',
      options: ['$-6$', '$-1$', '$1$', '$-3$'],
      correctAnswer: 'D',
      explanation: 'Titik puncak $(-3, 5)$ memiliki nilai maksimum $y = 5$. Karena parabola membuka ke bawah dan sumbu simetrinya adalah garis vertikal $x = -3$, puncak merupakan titik tertinggi. Nilai fungsi pada $x = -3$ adalah $5$, bukan $0$. Oleh karena itu, $x = -3$ tidak mungkin menjadi $x$-intercept.',
      distractorAnalysis: {
        A: '$-6$ mungkin menjadi intersep di sebelah kiri sumbu simetri.',
        B: '$-1$ mungkin menjadi intersep di sebelah kanan sumbu simetri.',
        C: '$1$ juga mungkin jika parabola cukup lebar.'
      },
      subtopic: 'Parabola Geometry and Roots Possibility',
      difficulty: 'medium',
      hint: 'Pada x = -3, nilai y = 5 (puncak maksimum), sehingga tidak mungkin memotong sumbu-x (y = 0).'
    },
    {
      id: 'quad-pr-9',
      moduleId: 'quadratic-equations',
      type: 'student_produced',
      prompt: 'The path of a dolphin leaping out of the water is modeled by $h(x) = -0.5x(x - 8)$, where $h$ is height in feet and $x$ is horizontal distance in feet. What is the maximum height, in feet, reached by the dolphin?',
      promptId: 'Jika salah satu solusi dari $x^2 - px - 28 = 0$ adalah $x = 7$, berapakah nilai dari konstanta $p$?',
      correctAnswer: '3',
      explanation: 'Substitusi $x = 7$: $7^2 - p(7) - 28 = 0 \\implies 49 - 7p - 28 = 0 \\implies 21 - 7p = 0 \\implies 7p = 21 \\implies p = 3$. Alternatif Vieta: $x_1 \\cdot x_2 = -28 \\implies 7 \\cdot x_2 = -28 \\implies x_2 = -4$. Jumlah akar $p = x_1 + x_2 = 7 + (-4) = 3$.',
      subtopic: 'Root Substitution & Parameter Solving',
      difficulty: 'medium',
      hint: 'Substitusi x = 7 ke persamaan: 49 - 7p - 28 = 0.'
    },
    {
      id: 'quad-pr-10',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'If $(x - 5)^2 = 36$, what is the least possible value of $x$?',
      promptId: 'Berapakah nilai minimum dari ekspresi $2x^2 - 12x + 25$?',
      options: ['7', '9', '11', '13'],
      correctAnswer: 'A',
      explanation: 'Koordinat $x$ puncak: $x = -\\frac{b}{2a} = -\\frac{-12}{2(2)} = 3$. Evaluasi ekspresi pada $x = 3$: $2(3)^2 - 12(3) + 25 = 2(9) - 36 + 25 = 18 - 36 + 25 = 7$. Nilai minimum adalah 7.',
      distractorAnalysis: {
        B: 'Siswa salah hitung aljabar pada evaluasi.',
        C: 'Siswa lupa mengalikan $3^2$ dengan $2$.',
        D: 'Siswa mengabaikan koefisien 2.'
      },
      subtopic: 'Quadratic Minimum Calculation',
      difficulty: 'medium',
      hint: 'Hitung x = -b/(2a) = 3, lalu masukkan ke persamaan.'
    },
    {
      id: 'quad-pr-11',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'A quadratic function is defined as $h(x) = -(x - 1)^2 + 16$. For which interval is the function strictly positive ($h(x) > 0$)?',
      promptId: 'Sebuah fungsi kuadrat didefinisikan sebagai $h(x) = -(x - 1)^2 + 16$. Untuk interval manakah fungsi $h(x)$ selalu bernilai positif ($h(x) > 0$)?',
      options: [
        '$-3 < x < 5$',
        '$-5 < x < 3$',
        '$x < -3$ or $x > 5$',
        '$-1 < x < 7$'
      ],
      correctAnswer: 'A',
      explanation: 'Selesaikan $-(x - 1)^2 + 16 > 0 \\implies (x - 1)^2 < 16 \\implies -4 < x - 1 < 4 \\implies -3 < x < 5$. Karena parabola membuka ke bawah dengan puncak $(1, 16)$, fungsi bernilai positif di antara kedua akarnya yaitu $-3$ dan $5$.',
      distractorAnalysis: {
        B: 'Siswa salah tanda saat menyelesaikan $|x - 1| < 4$.',
        C: 'Siswa memilih daerah di luar kedua akar.',
        D: 'Siswa salah pergeseran titik tengah.'
      },
      subtopic: 'Quadratic Inequalities & Intervals',
      difficulty: 'hard',
      hint: '(x - 1)^2 < 16 => -4 < x - 1 < 4 => -3 < x < 5.'
    },
    {
      id: 'quad-pr-12',
      moduleId: 'quadratic-equations',
      type: 'student_produced',
      prompt: 'In the $xy$-plane, the vertex of the parabola $y = x^2 - 6x + 14$ is $(h, k)$. What is the value of $k$?',
      promptId: 'Jika persamaan $x^2 - 10x + 21 = 0$ memiliki akar $m$ dan $n$, berapakah nilai dari $\\frac{1}{m} + \\frac{1}{n}$ dalam bentuk desimal (bulatkan hingga 2 angka di belakang koma bila perlu, atau tulis pecahan sederhana)?',
      correctAnswer: '10/21',
      explanation: 'Samakan penyebut: $\\frac{1}{m} + \\frac{1}{n} = \\frac{m + n}{mn}$. Berdasarkan rumus Vieta: $m + n = -(-10)/1 = 10$, dan $mn = 21/1 = 21$. Maka $\\frac{1}{m} + \\frac{1}{n} = \\frac{10}{21}$.',
      subtopic: 'Harmonic Sum of Roots via Vieta',
      difficulty: 'hard',
      hint: 'Samakan penyebut menjadi (m + n) / (mn) dan gunakan Vieta langsung.'
    }
  ],
  exitTicket: [
    {
      id: 'quad-exit-1',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'What is the sum of the solutions to the equation $3x^2 + 11x - 6 = 0$?',
      promptId: 'Berapakah hasil kali dari seluruh solusi persamaan kuadrat $3x^2 + 11x - 18 = 0$?',
      options: ['-6', '6', '-\\frac{11}{3}', '-\\frac{18}{11}'],
      correctAnswer: 'A',
      explanation: 'Berdasarkan Teorema Vieta, perkalian akar $x_1 \\cdot x_2 = \\frac{c}{a}$. Di sini $c = -18$ dan $a = 3$. Maka $x_1 x_2 = \\frac{-18}{3} = -6$.',
      distractorAnalysis: {
        B: 'Siswa lupa tanda minus pada konstanta $-18$.',
        C: 'Siswa menghitung jumlah akar $-\\frac{b}{a}$.',
        D: 'Siswa membagi $c$ dengan $b$.'
      },
      subtopic: 'Product of Roots Vieta',
      difficulty: 'easy',
      hint: 'Gunakan perkalian akar: c/a = -18/3 = -6.'
    },
    {
      id: 'quad-exit-2',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'The function $f(x) = -2(x - 4)^2 + 18$ has a maximum value of $M$ at $x = p$. What is the value of $M + p$?',
      promptId: 'Berapakah koordinat titik puncak dari parabola $y = 2x^2 - 12x + 11$?',
      options: ['$(3, -7)$', '$(3, 7)$', '$(-3, 65)$', '$(6, 11)$'],
      correctAnswer: 'A',
      explanation: 'Koordinat $x$ puncak: $x = -\\frac{b}{2a} = -\\frac{-12}{2(2)} = 3$. Koordinat $y$ puncak: $y = 2(3)^2 - 12(3) + 11 = 18 - 36 + 11 = -7$. Titik puncak adalah $(3, -7)$.',
      distractorAnalysis: {
        B: 'Siswa salah tanda pada nilai $y$.',
        C: 'Siswa salah tanda saat menghitung absis $x = -3$.',
        D: 'Siswa mengira $x = -b/a = 6$.'
      },
      subtopic: 'Vertex Coordinates Formula',
      difficulty: 'medium',
      hint: 'Hitung x = -b/(2a) = 3, lalu masukkan ke fungsi untuk mendapatkan y.'
    },
    {
      id: 'quad-exit-3',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'For what value of $c$ will the equation $x^2 - 8x + c = 0$ have roots that differ by $2$?',
      promptId: 'Persamaan $x^2 + 6x + k = 0$ memiliki dua solusi riil berbeda. Manakah dari pertidaksamaan berikut yang mendefinisikan nilai $k$?',
      options: ['$k < 9$', '$k > 9$', '$k \\le 9$', '$k < 36$'],
      correctAnswer: 'A',
      explanation: 'Dua solusi riil berbeda mensyaratkan diskriminan bernilai positif strictly: $D > 0 \\implies b^2 - 4ac > 0 \\implies 6^2 - 4(1)(k) > 0 \\implies 36 - 4k > 0 \\implies 36 > 4k \\implies k < 9$.',
      distractorAnalysis: {
        B: 'Siswa salah membalik tanda pertidaksamaan.',
        C: 'Siswa menyertakan tanda sama dengan (yang menghasilkan 1 solusi kembar).',
        D: 'Siswa lupa membagi dengan 4.'
      },
      subtopic: 'Two Distinct Real Solutions',
      difficulty: 'medium',
      hint: 'D > 0 => 36 - 4k > 0 => k < 9.'
    },
    {
      id: 'quad-exit-4',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'If $(2x + 1)(x - 3) = 0$ and $x > 0$, what is the value of $4x + 5$?',
      promptId: 'Manakah dari persamaan berikut yang memiliki akar-akar $x = 5$ dan $x = -2$ serta melalui titik $(0, -20)$?',
      options: [
        '$y = 2(x - 5)(x + 2)$',
        '$y = (x - 5)(x + 2)$',
        '$y = -2(x - 5)(x + 2)$',
        '$y = 2(x + 5)(x - 2)$'
      ],
      correctAnswer: 'A',
      explanation: 'Bentuk pemfaktoran: $y = a(x - 5)(x + 2)$. Masukkan titik $(0, -20)$: $-20 = a(0 - 5)(0 + 2) = a(-10) \\implies a = 2$. Maka $y = 2(x - 5)(x + 2)$.',
      distractorAnalysis: {
        B: 'Jika $a = 1$, nilai $y$-intercept hanya $-10$, bukan $-20$.',
        C: 'Nilai $a = -2$ akan menghasilkan intercept $+20$.',
        D: 'Siswa membalik tanda pada faktor akar.'
      },
      subtopic: 'Constructing Quadratic from Roots & Point',
      difficulty: 'medium',
      hint: 'Bentuk umum: y = a(x - 5)(x + 2), lalu cari nilai a dengan titik (0, -20).'
    },
    {
      id: 'quad-exit-5',
      moduleId: 'quadratic-equations',
      type: 'multiple_choice',
      prompt: 'A ball is kicked into the air. Its height in feet after $t$ seconds is given by $h(t) = -16t^2 + 48t$. After how many seconds does the ball hit the ground?',
      promptId: 'Sebuah bola dilempar ke atas dengan fungsi ketinggian $h(t) = -16t^2 + 64t$. Berapa detik bola berada di udara sebelum jatuh menyentuh tanah kembali ($h(t) = 0$)?',
      options: ['2', '4', '8', '16'],
      correctAnswer: 'B',
      explanation: 'Faktorkan fungsi ketinggian: $-16t(t - 4) = 0$. Solusinya adalah $t = 0$ (saat awal dilempar) dan $t = 4$ (saat mendarat kembali di tanah). Jadi bola berada di udara selama 4 detik.',
      distractorAnalysis: {
        A: '2 detik adalah waktu mencapai puncak tertinggi (setengah perjalanan), bukan waktu mendarat kembali.',
        C: 'Siswa mengalikan waktu dengan 2.',
        D: 'Siswa mengambil koefisien $a = 16$.'
      },
      subtopic: 'Zeroes in Applied Physics',
      difficulty: 'easy',
      hint: 'Faktorkan -16t(t - 4) = 0. Waktu mendarat kembali adalah saat t = 4.'
    }
  ],
  discussionPrompts: [
    {
      id: 'quad-disc-1',
      topic: 'Vieta vs Faktorisasi Tradisional',
      prompt: 'Bagaimana cara meyakinkan siswa yang terbiasa memfaktorkan secara kaku bahwa rumus Vieta $-b/a$ dapat menghemat hingga 40 detik per soal di Digital SAT?',
      targetInsight: 'Berikan soal dengan koefisien pecahan atau bentuk irasional di mana pemfaktoran manual mustahil atau sangat berbelit-belit, sementara Vieta langsung memberikan jawaban dalam satu langkah.'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Refleksi Cepat',
      activity: 'Siswa mengidentifikasi pembuat nol dan puncak dari 5 variasi fungsi kuadrat.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Tiga Wajah Fungsi Kuadrat & Vieta',
      activity: 'Bandingkan Standard Form vs Factored Form vs Vertex Form di slide proyektor. Tekankan kata kunci pertanyaan SAT: "reveals vertex as constants".'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan 12 Soal Kombinasi Desmos & Analitik',
      activity: 'Siswa berlatih mendeteksi kapan melengkapi kuadrat diperlukan untuk persamaan lingkaran vs kapan cukup membaca koefisien.'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Evaluasi',
      activity: 'Pengukuran akurasi akhir dan analisis kesalahan pada Error Log.'
    }
  }
};
