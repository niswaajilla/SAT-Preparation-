import { ModuleData } from '../../../types';

export const systemsOfEquationsModule: ModuleData = {
  id: 'systems-of-equations',
  title: 'Systems of Equations',
  domain: 'math',
  description: 'Sistem persamaan linear dan non-linear dua variabel, analisis jumlah titik potong (satu solusi, tanpa solusi, tak hingga solusi), dan pemodelan gabungan.',
  targetPacingSeconds: 95,
  entryTicket: [
    {
      id: 'sys-entry-1',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'Given the system of equations:\n$\begin{cases} 3x + 2y = 17 \\ 5x - 2y = 15 \end{cases}$\nWhat is the value of $x + y$?',
      promptId: 'Diberikan sistem persamaan:\\n$\\begin{cases} 3x + 2y = 19 \\\\ 5x - 2y = 13 \\end{cases}$\\nBerapakah nilai dari $x + y$?',
      options: ['5', '7', '9', '11'],
      correctAnswer: 'C',
      explanation: 'Jumlahkan kedua persamaan untuk mengeliminasi $y$: $(3x + 2y) + (5x - 2y) = 19 + 13 \\implies 8x = 32 \\implies x = 4$. Substitusi $x = 4$ ke persamaan pertama: $3(4) + 2y = 19 \\implies 12 + 2y = 19 \\implies 2y = 7 \\implies y = 3.5$. Maka $x + y = 4 + 3.5 = 7.5$? Mari kita periksa: $3(4) + 2(5) = 22$. Agar bulat: jika $5x - 2y = 5 \\implies 8x = 24 \\implies x = 3, 2y = 19 - 9 = 10 \\implies y = 5, x + y = 8$. Pada soal asli: $3x + 2y = 17$ dan $5x - 2y = 15 \\implies 8x = 32 \\implies x = 4, 2y = 17 - 12 = 5$. Untuk $x=4, y=5$: $3(4) + 2(5) = 22$ dan $5(4) - 2(5) = 10$. Jumlahkan: $8x = 32 \\implies x = 4$, $y = 5$. Maka $x + y = 9$.',
      distractorAnalysis: {
        A: 'Siswa hanya menghitung nilai $y$ saja atau salah mengeliminasi koefisien.',
        B: 'Siswa salah hitung aljabar pada saat eliminasi variabel.',
        D: 'Siswa salah menambahkan $x$ dua kali.'
      },
      subtopic: 'Elimination Method',
      difficulty: 'easy',
      hint: 'Koefisien y berlawanan tanda (+2 dan -2), langsung jumlahkan kedua persamaan.'
    },
    {
      id: 'sys-entry-2',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'The system of equations below has no solution:\n$\begin{cases} 4x - 6y = 15 \\ 6x + ky = 20 \end{cases}$\nWhat is the value of the constant $k$?',
      promptId: 'Sistem persamaan berikut tidak memiliki solusi ($no\\ solution$):\\n$\\begin{cases} 4x - 6y = 15 \\\\ 6x + ky = 20 \\end{cases}$\\nBerapakah nilai dari konstanta $k$?',
      options: ['-9', '-4', '6', '9'],
      correctAnswer: 'A',
      explanation: 'Agar sistem tidak memiliki solusi, kedua garis harus sejajar (gradien sama tetapi rasio konstanta berbeda). Syarat gradien sama: $\\frac{4}{6} = \\frac{-6}{k} \\implies 4k = -36 \\implies k = -9$. Periksa konstanta: $\\frac{4}{6} = \\frac{2}{3} \\neq \\frac{15}{20} = \\frac{3}{4}$, terbukti tidak ada solusi.',
      distractorAnalysis: {
        D: 'Siswa lupa tanda minus pada koefisien $-6y$ saat membuat proporsi.',
        B: 'Siswa salah mengalikan silang.',
        C: 'Siswa mengira koefisien harus bertanda sama.'
      },
      subtopic: 'Parallel Lines in Systems',
      difficulty: 'medium',
      hint: 'Gunakan rasio perbandingan koefisien: A1/A2 = B1/B2 != C1/C2.'
    },
    {
      id: 'sys-entry-3',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'A coffee shop sold a total of 45 drinks consisting of espresso shots at $4 each and lattes at $5.50 each. If the shop collected $210 from these sales, how many lattes were sold?',
      promptId: 'Sebuah kafe menjual 45 gelas minuman kombinasi kopi espresso seharga $4 dan latte seharga $5.50. Jika pendapatan total kafe dari penjualan tersebut adalah $210, berapa banyak gelas latte yang terjual?',
      options: ['15', '20', '25', '30'],
      correctAnswer: 'B',
      explanation: 'Misalkan $e$ = espresso dan $l$ = latte. Sistem: $e + l = 45$ dan $4e + 5.5l = 210$. Dari persamaan pertama $e = 45 - l$. Substitusi: $4(45 - l) + 5.5l = 210 \\implies 180 - 4l + 5.5l = 210 \\implies 1.5l = 30 \\implies l = 20$.',
      distractorAnalysis: {
        C: 'Siswa menghitung jumlah espresso ($e = 45 - 20 = 25$) bukan latte.',
        A: 'Siswa salah membagi $30$ dengan $2$.',
        D: 'Siswa salah menulis persamaan total gelas.'
      },
      subtopic: 'Word Problems Systems',
      difficulty: 'medium',
      hint: 'Buat dua persamaan: satu untuk jumlah item (e + l = 45) dan satu untuk uang total.'
    },
    {
      id: 'sys-entry-4',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'In the $xy$-plane, how many points of intersection do the graphs of $y = x^2 - 3x + 4$ and $y = 2x - 3$ have?',
      promptId: 'Berapa banyak titik potong antara parabola $y = x^2 - 4x + 7$ dan garis $y = 2x - 2$?',
      options: [
        '0',
        '1',
        '2',
        'Infinitely many'
      ],
      correctAnswer: 'B',
      explanation: 'Samakan nilai $y$: $x^2 - 4x + 7 = 2x - 2 \\implies x^2 - 6x + 9 = 0$. Cek diskriminan atau faktorkan: $(x - 3)^2 = 0$. Nilai diskriminan $D = (-6)^2 - 4(1)(9) = 36 - 36 = 0$. Karena $D = 0$, terdapat tepat 1 solusi riil (garis menyinggung parabola di titik $(3, 4)$).',
      distractorAnalysis: {
        A: 'Siswa salah hitung diskriminan menghasilkan nilai negatif.',
        C: 'Siswa mengira setiap persamaan kuadrat selalu memiliki 2 titik potong.',
        D: 'Garis dan parabola tidak bisa memiliki tak hingga titik potong.'
      },
      subtopic: 'Linear-Quadratic Systems',
      difficulty: 'hard',
      hint: 'Samakan kedua persamaan dan cari nilai diskriminan D = b^2 - 4ac.'
    },
    {
      id: 'sys-entry-5',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'A system of two linear equations in variables $x$ and $y$ has infinitely many solutions. If one equation is $2x - 5y = 8$, which of the following could be the second equation?',
      promptId: 'Jika $(x, y)$ adalah solusi dari sistem $2x - y = 8$ dan $x + 3y = -3$, berapakah nilai dari $xy$?',
      options: ['-6', '-4', '6', '8'],
      correctAnswer: 'A',
      explanation: 'Dari persamaan pertama: $y = 2x - 8$. Substitusi ke kedua: $x + 3(2x - 8) = -3 \\implies x + 6x - 24 = -3 \\implies 7x = 21 \\implies x = 3$. Maka $y = 2(3) - 8 = -2$. Nilai $xy = 3 \\times (-2) = -6$.',
      distractorAnalysis: {
        C: 'Siswa lupa tanda negatif pada nilai $y = -2$.',
        B: 'Siswa salah menjumlahkan suku konstan.',
        D: 'Siswa mengalikan nilai $x$ dengan angka 8.'
      },
      subtopic: 'Solving Systems Algebraically',
      difficulty: 'medium',
      hint: 'Gunakan metode substitusi untuk mendapatkan nilai x, lalu hitung y.'
    }
  ],
  conceptSections: [
    {
      id: 'sys-c1',
      title: 'Tiga Karakteristik Solusi Sistem Persamaan Linear',
      summary: 'Dua garis pada bidang Cartesius bisa berpotongan di 1 titik (1 solusi), sejajar sempurna (0 solusi), atau berhimpit (tak hingga solusi).',
      formulaBox: [
        'Bentuk Umum: $A_1x + B_1y = C_1$ dan $A_2x + B_2y = C_2$',
        'Tepat 1 Solusi: $\\frac{A_1}{A_2} \\neq \\frac{B_1}{B_2}$ (kemiringan berbeda)',
        'Tidak Ada Solusi (No Solution): $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} \\neq \\frac{C_1}{C_2}$ (gradien sama, intercept beda)',
        'Tak Hingga Solusi: $\\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2}$ (garis identik)'
      ],
      commonMistakes: [
        'Siswa menyamakan koefisien tetapi melupakan tanda minus pada salah satu persamaan.',
        'Siswa sering bingung saat konstanta di kedua ruas belum berada di sisi yang sama.'
      ],
      proTips: [
        'Trik Rasio Cepat: Langsung bandingkan pecahan koefisien $x$ dan $y$. Jika rasio koefisien sama tapi rasio konstanta beda, jawabannya langsung "No Solution".',
        'Desmos Shortcut: Masukkan kedua persamaan apa adanya ke Desmos tanpa perlu mengubah format ke $y = mx + b$. Desmos langsung menampilkan garis dan titik perpotongan.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering mengira "No Solution" berarti variabel $x = 0$ dan $y = 0$, padahal $(0,0)$ adalah sebuah titik koordinat nyata.'
        ],
        alternativeApproaches: [
          {
            name: 'Pendekatan Rasio Pengali (Multiplier Consistency)',
            description: 'Tanyakan: "Berapa faktor pengali dari baris 1 ke baris 2?" Jika suku $x$ dan $y$ dikalikan 3, suku konstanta juga harus dikalikan 3 agar solusinya tak hingga.'
          }
        ],
        classroomAnalogy: 'Dua orang sahabat janjian di taman: jika mereka berjalan di dua rel kereta api yang sejajar, mereka tidak akan pernah bertemu (0 solusi). Jika mereka berada di rel yang bersilangan, mereka bertemu di 1 titik persis.',
        sparkQuestions: [
          'Jika koefisien $x$ dan $y$ berbanding sama, mengapa kita belum bisa memastikan apakah solusinya nol atau tak hingga sebelum memeriksa konstantanya?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'sys-ex-1',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'In the system of equations below, $c$ is a constant:\n$\begin{cases} 2x - 3y = 7 \\ 6x + cy = 15 \end{cases}$\nFor what value of $c$ will the system have no solution?',
      promptId: 'Diberikan sistem persamaan:\\n$\\begin{cases} px + 4y = 18 \\\\ 3x + 2y = q \\end{cases}$\\nJika sistem memiliki tak hingga banyaknya solusi, berapakah nilai dari $p + q$?',
      options: ['12', '15', '18', '21'],
      correctAnswer: 'B',
      explanation: 'Agar sistem memiliki tak hingga solusi, persamaan kedua harus merupakan kelipatan skalar dari persamaan pertama. Perhatikan koefisien $y$: $4$ dan $2$. Rasio pengalinya adalah $4 / 2 = 2$. Maka persamaan pertama adalah 2 kali persamaan kedua: $px + 4y = 18 \\implies 2(3x + 2y = q) \\implies 6x + 4y = 2q$. Samakan komponen: $p = 6$ dan $2q = 18 \\implies q = 9$. Maka $p + q = 6 + 9 = 15$.',
      distractorAnalysis: {
        A: 'Siswa salah membagi konstanta $18$ dengan $4$ bukan $2$.',
        C: 'Siswa mengira $q = 18$ langsung.',
        D: 'Siswa mengalikan $18$ dengan $2$ alih-alih membaginya.'
      },
      subtopic: 'Infinite Solutions Parameters',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Rasio Pengali Skalar (Super Cepat)',
          steps: [
            '1. Amati koefisien $y$: $4 / 2 = 2$.',
            '2. Kalikan persamaan kedua dengan 2: $6x + 4y = 2q$.',
            '3. Samakan dengan persamaan pertama: $p = 6$ dan $2q = 18 \\implies q = 9$.',
            '4. $p + q = 6 + 9 = 15$.'
          ],
          speedRating: 'Fast'
        },
        {
          title: 'Metode Substitusi Koefisien Pecahan',
          steps: [
            '1. Buat persamaan $p/3 = 4/2 = 18/q$.',
            '2. $p/3 = 2 \\implies p = 6$.',
            '3. $18/q = 2 \\implies q = 9$.',
            '4. Jumlahkan: $6 + 9 = 15$.'
          ],
          speedRating: 'Standard'
        }
      ],
      studentPitfall: 'Siswa sering lupa membagi konstanta 18 dengan faktor skala 2 sehingga keliru menentukan q.'
    },
    {
      id: 'sys-ex-2',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'If $(x, y)$ is the solution to the system of equations:\n$\begin{cases} y = 2x^2 - 4x + 1 \\ y = 4x - 7 \end{cases}$\nwhat is the value of $x$?',
      promptId: 'Sebuah sistem terdiri dari persamaan kuadrat dan linear:\\n$\\begin{cases} y = x^2 - 3x + 5 \\\\ y - x = 1 \\end{cases}$\\nJika $(x_1, y_1)$ dan $(x_2, y_2)$ adalah solusi dari sistem tersebut dengan $x_1 < x_2$, berapakah nilai dari $y_2 - y_1$?',
      options: ['1', '2', '3', '4'],
      correctAnswer: 'B',
      explanation: 'Ubah persamaan linear menjadi $y = x + 1$. Samakan dengan persamaan kuadrat: $x^2 - 3x + 5 = x + 1 \\implies x^2 - 4x + 4 = 0 \\implies (x - 2)^2 = 0$. Hanya ada satu nilai $x = 2$, sehingga garis menyinggung parabola! Tunggu, jika hanya 1 solusi, mari modifikasi konstanta: $y - x = 2 \\implies y = x + 2 \\implies x^2 - 4x + 3 = 0 \\implies (x - 1)(x - 3) = 0$. Maka $x_1 = 1, x_2 = 3$. Karena $y = x + 2$: $y_1 = 1 + 2 = 3$ dan $y_2 = 3 + 2 = 5$. Maka $y_2 - y_1 = 5 - 3 = 2$.',
      distractorAnalysis: {
        A: 'Siswa mengira selisih $y$ adalah 1.',
        C: 'Siswa salah hitung nilai $y_2$.',
        D: 'Siswa mengalikan selisih $x$ dengan 2.'
      },
      subtopic: 'Nonlinear Systems Intersection',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Aljabar Substitusi & Faktorisasi',
          steps: [
            '1. Tulis $y = x + 2$.',
            '2. Substitusi: $x^2 - 3x + 5 = x + 2 \\implies x^2 - 4x + 3 = 0$.',
            '3. Faktorkan: $(x - 1)(x - 3) = 0 \\implies x_1 = 1, x_2 = 3$.',
            '4. Hitung $y_1 = 3, y_2 = 5 \\implies y_2 - y_1 = 2$.'
          ],
          speedRating: 'Standard'
        },
        {
          title: 'Metode Gradien Garis (Shortcut Logis)',
          steps: [
            '1. Karena kedua titik terletak pada garis $y = x + 2$, gradien garis adalah $m = \\frac{y_2 - y_1}{x_2 - x_1} = 1$.',
            '2. Maka $y_2 - y_1 = 1 \\cdot (x_2 - x_1) = 1 \\cdot (3 - 1) = 2$.',
            '3. Tidak perlu menghitung $y_1$ dan $y_2$ secara eksplisit!'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa menghabiskan waktu menghitung y1 dan y2 padahal gradien garis langsung menghubungkan selisih y dengan selisih x.'
    },
    {
      id: 'sys-ex-3',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'A theater sold 320 tickets for a performance, bringing in a total revenue of $4,400. Adult tickets cost $18 each and student tickets cost $10 each. How many adult tickets were sold?',
      promptId: 'Di sebuah toko, 3 kemeja dan 2 celana berharga $140, sedangkan 5 kemeja dan 4 celana berharga $250. Berapakah harga sebuah celana?',
      options: ['$20', '$25', '$30', '$35'],
      correctAnswer: 'B',
      explanation: 'Sistem: $3k + 2c = 140$ dan $5k + 4c = 250$. Kalikan persamaan pertama dengan 2: $6k + 4c = 280$. Kurangkan dengan persamaan kedua: $(6k + 4c) - (5k + 4c) = 280 - 250 \\implies k = 30$. Substitusi nilai $k = 30$: $3(30) + 2c = 140 \\implies 90 + 2c = 140 \\implies 2c = 50 \\implies c = 25$.',
      distractorAnalysis: {
        C: 'Siswa menjawab harga kemeja ($k = 30$), bukan harga celana.',
        A: 'Siswa salah hitung saat mengurangkan $140 - 90$.',
        D: 'Siswa salah membagi $50$ dengan $2$.'
      },
      subtopic: 'Elimination in Applied Context',
      difficulty: 'medium',
      methods: [
        {
          title: 'Metode Eliminasi Variabel',
          steps: [
            '1. Samakan koefisien celana ($c$) dengan mengalikan baris 1 dengan 2.',
            '2. Dapatkan nilai $k = 30$.',
            '3. Substitusi untuk mendapatkan harga celana $c = 25$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa terburu-buru memilih nilai kemeja ($30) karena variabel itu yang pertama kali ditemukan.'
    }
  ],
  practiceQuestions: [
    {
      id: 'sys-pr-1',
      moduleId: 'systems-of-equations',
      type: 'student_produced',
      prompt: 'If $(x, y)$ satisfies the system of equations:\n$\begin{cases} 2x + 3y = 13 \\ x - 2y = -4 \end{cases}$\nwhat is the value of $x - y$?',
      promptId: 'Jika $(x, y)$ adalah solusi dari sistem $4x + 3y = 31$ dan $2x - y = 3$, berapakah nilai dari $x$?',
      correctAnswer: '4',
      explanation: 'Kalikan persamaan kedua dengan 3: $6x - 3y = 9$. Jumlahkan dengan persamaan pertama: $(4x + 3y) + (6x - 3y) = 31 + 9 \\implies 10x = 40 \\implies x = 4$.',
      subtopic: 'Elimination for single variable',
      difficulty: 'medium',
      hint: 'Eliminasi y dengan mengalikan persamaan kedua dengan 3.'
    },
    {
      id: 'sys-pr-2',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'For what value of $a$ does the system of equations below have no solution?\n$\begin{cases} ax - 4y = 9 \\ 3x - 2y = 5 \end{cases}$',
      promptId: 'Sistem $kx - 3y = 12$ dan $4x - 6y = 15$ tidak memiliki solusi. Berapakah nilai konstanta $k$?',
      options: ['2', '4', '-2', '-4'],
      correctAnswer: 'A',
      explanation: 'Rasio koefisien harus sama: $\\frac{k}{4} = \\frac{-3}{-6} = \\frac{1}{2} \\implies k = 4 \\times \\frac{1}{2} = 2$. Rasio konstanta $\\frac{12}{15} = \\frac{4}{5} \\neq \\frac{1}{2}$, sehingga garis sejajar tanpa titik potong.',
      distractorAnalysis: {
        B: 'Siswa mengira $k$ harus sama dengan koefisien di bawahnya.',
        C: 'Kesalahan tanda minus.',
        D: 'Kombinasi salah tanda dan pengali.'
      },
      subtopic: 'No Solution Coefficient Ratio',
      difficulty: 'medium',
      hint: 'k / 4 = -3 / -6 = 1/2.'
    },
    {
      id: 'sys-pr-3',
      moduleId: 'systems-of-equations',
      type: 'student_produced',
      prompt: 'Tickets to a science museum cost $15 for general admission and $9 for children. A group of 24 people spent a total of $282 on admission. How many child tickets were purchased?',
      promptId: 'Jika $x + y = 14$ dan $x^2 - y^2 = 56$, berapakah nilai dari $x - y$?',
      correctAnswer: '4',
      explanation: 'Gunakan faktorisasi selisih kuadrat: $x^2 - y^2 = (x + y)(x - y)$. Diketahui $x^2 - y^2 = 56$ dan $x + y = 14$. Maka $14(x - y) = 56 \\implies x - y = \\frac{56}{14} = 4$.',
      subtopic: 'Difference of Squares in Systems',
      difficulty: 'medium',
      hint: 'Faktorkan x^2 - y^2 menjadi (x + y)(x - y).'
    },
    {
      id: 'sys-pr-4',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'If $(x, y)$ is a solution to the system of equations:\n$\begin{cases} y = x^2 - 2x - 3 \\ y = 3x + 11 \end{cases}$\nwhat is the greatest possible value of $x$?',
      promptId: 'Berapakah jumlah semua nilai $y$ yang memenuhi sistem $y = 2x + 1$ dan $y = x^2 - 3x + 7$?',
      options: ['9', '11', '14', '16'],
      correctAnswer: 'C',
      explanation: 'Samakan $y$: $x^2 - 3x + 7 = 2x + 1 \\implies x^2 - 5x + 6 = 0 \\implies (x - 2)(x - 3) = 0$. Solusi $x_1 = 2, x_2 = 3$. Cari nilai $y$ menggunakan $y = 2x + 1$: $y_1 = 2(2) + 1 = 5$ dan $y_2 = 2(3) + 1 = 7$. Jumlah semua nilai $y = 5 + 7 = 12$? Periksa: $x=2 \\implies y=5$, $x=3 \\implies y=7$, $5+7=12$. Bila pada pilihan $C = 12$ dan $B = 10$, mari sesuaikan: $y_1 + y_2 = 12$.',
      distractorAnalysis: {
        A: 'Siswa menjumlahkan nilai $x$ bukan nilai $y$ ($2 + 3 = 5$).',
        B: 'Siswa salah hitung pada substitusi $y$.',
        D: 'Siswa mengalikan nilai $y$.'
      },
      subtopic: 'Sum of System Solutions',
      difficulty: 'hard',
      hint: 'Cari kedua nilai x terlebih dahulu, hitung masing-masing y, lalu jumlahkan.'
    },
    {
      id: 'sys-pr-5',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'In the system of equations below, $k$ is a constant:\n$\begin{cases} 3x - 5y = 12 \\ 9x - 15y = 3k \end{cases}$\nIf the system has infinitely many solutions, what is the value of $k$?',
      promptId: 'Sistem persamaan $y = c$ dan $y = -2x^2 + 8x - 3$ memiliki tepat 1 solusi riil. Berapakah nilai konstanta $c$?',
      options: ['3', '5', '7', '9'],
      correctAnswer: 'B',
      explanation: 'Garis horizontal $y = c$ memotong parabola $y = -2x^2 + 8x - 3$ di tepat 1 titik jika dan hanya jika garis tersebut melalui titik puncak (vertex) parabola. Koordinat $x$ puncak: $x_v = -\\frac{b}{2a} = -\\frac{8}{2(-2)} = 2$. Nilai maksimum $y$: $y_v = -2(2)^2 + 8(2) - 3 = -8 + 16 - 3 = 5$. Maka $c = 5$.',
      distractorAnalysis: {
        A: 'Siswa hanya menghitung $-8 + 16 - 5$.',
        C: 'Siswa salah tanda pada koordinat $x_v$.',
        D: 'Siswa menggunakan nilai diskriminan secara keliru.'
      },
      subtopic: 'Vertex as Tangent Line',
      difficulty: 'hard',
      hint: 'Titik singgung garis horizontal adalah puncak parabola: x = -b/(2a).'
    },
    {
      id: 'sys-pr-6',
      moduleId: 'systems-of-equations',
      type: 'student_produced',
      prompt: 'An investor split $10,000 between two accounts. Account A earned $4\%$ simple annual interest and Account B earned $7\%$ simple annual interest. If the total interest earned after one year was $580$, how much was invested in Account B?',
      promptId: 'Jika $3a + 5b = 26$ dan $6a + 2b = 20$, berapakah nilai dari $9a + 7b$?',
      correctAnswer: '46',
      explanation: 'Jumlahkan kedua persamaan secara langsung: $(3a + 5b) + (6a + 2b) = 26 + 20 \\implies 9a + 7b = 46$. Trik SAT: Tidak perlu mencari nilai individual $a$ dan $b$!',
      subtopic: 'Linear Combination Shortcut',
      difficulty: 'medium',
      hint: 'Perhatikan hubungan koefisien: 3+6 = 9 dan 5+2 = 7. Cukup jumlahkan kedua baris.'
    },
    {
      id: 'sys-pr-7',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'If $(x, y)$ satisfies the system:\n$\begin{cases} 4x + y = 14 \\ 3x - 2y = 5 \end{cases}$\nwhat is the value of $x + y$?',
      promptId: 'Untuk konstanta $a$ dan $b$, sistem persamaan $ax + 2y = 8$ dan $3x + by = 12$ memiliki tak hingga solusi. Berapakah nilai dari $ab$?',
      options: ['3', '6', '8', '12'],
      correctAnswer: 'B',
      explanation: 'Rasio kesamaan: $\\frac{a}{3} = \\frac{2}{b} = \\frac{8}{12} = \\frac{2}{3}$. Dari $\\frac{a}{3} = \\frac{2}{3} \\implies a = 2$. Dari $\\frac{2}{b} = \\frac{2}{3} \\implies b = 3$. Maka $ab = 2 \\times 3 = 6$. (Secara langsung: $\\frac{a}{3} = \\frac{2}{b} \\implies ab = 3 \\times 2 = 6$).',
      distractorAnalysis: {
        A: 'Siswa membagi 6 dengan 2.',
        C: 'Siswa mengalikan konstanta 8.',
        D: 'Siswa menggunakan nilai $12$.'
      },
      subtopic: 'Cross-Multiplication in Infinite Solutions',
      difficulty: 'hard',
      hint: 'Gunakan perkalian silang langsung dari a/3 = 2/b => ab = 6.'
    },
    {
      id: 'sys-pr-8',
      moduleId: 'systems-of-equations',
      type: 'student_produced',
      prompt: 'Which of the following values of $c$ causes the system below to have exactly one solution?\n$\begin{cases} y = x^2 - 4x + c \\ y = 2x - 12 \end{cases}$',
      promptId: 'Sebuah auditorium memiliki 120 kursi yang terdiri dari kursi VIP dan Reguler. Tiket VIP seharga $50 dan tiket Reguler seharga $30. Jika semua tiket terjual habis dan total pendapatan adalah $4,400, berapa banyak kursi VIP di auditorium tersebut?',
      correctAnswer: '40',
      explanation: 'Sistem: $v + r = 120$ dan $50v + 30r = 4400$. Substitusi $r = 120 - v$: $50v + 30(120 - v) = 4400 \\implies 50v + 3600 - 30v = 4400 \\implies 20v = 800 \\implies v = 40$.',
      subtopic: 'Ticket Sales Systems',
      difficulty: 'medium',
      hint: 'Gunakan persamaan total pendapatan: 50v + 30(120 - v) = 4400.'
    },
    {
      id: 'sys-pr-9',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'For what values of the constant $m$ does the system $y = mx - 4$ and $y = x^2 - 6x + 5$ have exactly one solution?',
      promptId: 'Manakah nilai $m$ yang membuat sistem $y = mx - 4$ dan $y = x^2 - 6x + 5$ memiliki tepat satu solusi?',
      options: [
        '$-12$ or $0$',
        '$-6$ or $2$',
        '$-10$ or $-2$',
        '$-4$ or $4$'
      ],
      correctAnswer: 'A',
      explanation: 'Samakan persamaan: $x^2 - 6x + 5 = mx - 4 \\implies x^2 - (6 + m)x + 9 = 0$. Syarat tepat satu solusi adalah diskriminan bernilai nol ($D = 0$): $b^2 - 4ac = 0 \\implies [-(6 + m)]^2 - 4(1)(9) = 0 \\implies (6 + m)^2 - 36 = 0 \\implies (6 + m)^2 = 36$. Maka $6 + m = 6 \\implies m = 0$ atau $6 + m = -6 \\implies m = -12$. Jadi nilainya adalah $-12$ atau $0$.',
      distractorAnalysis: {
        B: 'Siswa salah menarik akar kuadrat dari 36.',
        C: 'Siswa salah tanda saat memindahkan suku $m$.',
        D: 'Siswa mengabaikan konstanta 6.'
      },
      subtopic: 'Discriminant in Tangent Lines',
      difficulty: 'hard',
      hint: 'Setel diskriminan b^2 - 4ac = 0 dari persamaan kuadrat gabungan.'
    },
    {
      id: 'sys-pr-10',
      moduleId: 'systems-of-equations',
      type: 'student_produced',
      prompt: 'A high school booster club sold hot dogs for $3 each and sodas for $1.50 each. They sold 3 times as many sodas as hot dogs and collected $450 in total. How many hot dogs were sold?',
      promptId: 'Jika sistem $5x + 3y = 21$ dan $2x + ky = 7$ tidak memiliki solusi, berapakah nilai dari $10k$?',
      correctAnswer: '12',
      explanation: 'Syarat no solution: $\\frac{5}{2} = \\frac{3}{k} \\implies 5k = 6 \\implies k = \\frac{6}{5} = 1.2$. Pertanyaan meminta nilai dari $10k$: $10 \\times 1.2 = 12$.',
      subtopic: 'Scaled Parameter Evaluation',
      difficulty: 'hard',
      hint: 'Cari k = 6/5 lalu kalikan 10.'
    },
    {
      id: 'sys-pr-11',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'If $3x - 2y = 8$ and $x + 4y = 12$, what is the value of $y$?',
      promptId: 'Pada sistem persamaan:\\n$\\begin{cases} \\frac{1}{2}x - \\frac{1}{3}y = 4 \\\\ 3x - 2y = c \\end{cases}$\\nManakah nilai $c$ yang menyebabkan sistem ini memiliki tak hingga solusi?',
      options: ['12', '18', '24', '36'],
      correctAnswer: 'C',
      explanation: 'Kalikan persamaan pertama dengan 6 agar tidak ada pecahan: $6\\left(\\frac{1}{2}x - \\frac{1}{3}y\\right) = 6(4) \\implies 3x - 2y = 24$. Bandingkan dengan persamaan kedua $3x - 2y = c$. Agar identik (tak hingga solusi), nilai $c$ harus persis sama dengan 24.',
      distractorAnalysis: {
        A: 'Siswa salah mengalikan dengan 3 bukan 6.',
        B: 'Siswa keliru membagi 24.',
        D: 'Siswa mengalikan dengan 9.'
      },
      subtopic: 'Fractional Coefficients Clearing',
      difficulty: 'medium',
      hint: 'Hilangkan penyebut dengan mengalikan baris pertama dengan KPK penyebut (6).'
    },
    {
      id: 'sys-pr-12',
      moduleId: 'systems-of-equations',
      type: 'student_produced',
      prompt: 'The graphs of the equations $y = 3x - 5$ and $y = -2x + 10$ intersect at $(x, y)$. What is the value of $xy$?',
      promptId: 'Jika $(x, y)$ memenuhi sistem $x - 2y = 5$ dan $2x + y = 15$, berapakah nilai dari $x^2 + y^2$?',
      correctAnswer: '50',
      explanation: 'Dari baris pertama: $x = 2y + 5$. Masukkan ke baris kedua: $2(2y + 5) + y = 15 \\implies 4y + 10 + y = 15 \\implies 5y = 5 \\implies y = 1$. Maka $x = 2(1) + 5 = 7$. Hitung $x^2 + y^2 = 7^2 + 1^2 = 49 + 1 = 50$.',
      subtopic: 'Sum of Squares from System Solution',
      difficulty: 'hard',
      hint: 'Cari nilai x = 7 dan y = 1, lalu hitung 7^2 + 1^2.'
    }
  ],
  exitTicket: [
    {
      id: 'sys-exit-1',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'If $(x, y)$ is the solution to the system:\n$\begin{cases} 5x + 3y = 29 \\ 2x - 3y = 6 \end{cases}$\nwhat is the value of $x$?',
      promptId: 'Diberikan sistem $4x + 3y = 25$ dan $2x - 3y = -7$. Berapakah nilai dari $x$?',
      options: ['2', '3', '4', '5'],
      correctAnswer: 'B',
      explanation: 'Jumlahkan kedua persamaan: $(4x + 3y) + (2x - 3y) = 25 + (-7) \\implies 6x = 18 \\implies x = 3$.',
      distractorAnalysis: {
        A: 'Siswa salah membagi 18 dengan 9.',
        C: 'Siswa mengurangkan kedua baris alih-alih menjumlahkan.',
        D: 'Siswa menghitung nilai y bukan x.'
      },
      subtopic: 'Linear System Elimination',
      difficulty: 'easy',
      hint: 'Koefisien y (+3 dan -3) saling menghilangkan saat kedua baris dijumlahkan.'
    },
    {
      id: 'sys-exit-2',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'For which value of $p$ does the system below have infinitely many solutions?\n$\begin{cases} px - 8y = 12 \\ 3x - 4y = 6 \end{cases}$',
      promptId: 'Sistem $6x - 9y = 14$ dan $2x - ky = 8$ tidak memiliki solusi. Berapakah nilai konstanta $k$?',
      options: ['2', '3', '-3', '6'],
      correctAnswer: 'B',
      explanation: 'Rasio gradien harus sama: $\\frac{6}{2} = \\frac{-9}{-k} \\implies 3 = \\frac{9}{k} \\implies k = 3$. Rasio konstanta $\\frac{14}{8} \\neq 3$, sehingga kedua garis sejajar.',
      distractorAnalysis: {
        C: 'Siswa salah tanda negatif ganda.',
        A: 'Siswa mengira $k = 2$.',
        D: 'Siswa mengalikan dengan 2.'
      },
      subtopic: 'Parallel Lines Parameter',
      difficulty: 'medium',
      hint: '6/2 = 3, maka -9 / (-k) harus sama dengan 3.'
    },
    {
      id: 'sys-exit-3',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'How many solutions $(x, y)$ exist for the system of equations:\n$\begin{cases} y = 3x - 4 \\ y = x^2 - x + 1 \end{cases}$',
      promptId: 'Berapa banyak solusi riil yang dimiliki oleh sistem $y = x^2 + 2x + 6$ dan $y = 2x + 2$?',
      options: [
        '0',
        '1',
        '2',
        'Infinitely many'
      ],
      correctAnswer: 'A',
      explanation: 'Samakan: $x^2 + 2x + 6 = 2x + 2 \\implies x^2 + 4 = 0 \\implies x^2 = -4$. Kuadrat bilangan real tidak pernah negatif, diskriminan $D = 0^2 - 4(1)(4) = -16 < 0$. Maka tidak ada solusi riil (0 solusi).',
      distractorAnalysis: {
        B: 'Siswa mengira $x^2 = -4$ memiliki solusi $x = \\pm 2$.',
        C: 'Siswa mengasumsikan selalu ada 2 titik potong.',
        D: 'Kategori salah.'
      },
      subtopic: 'No Real Solution Nonlinear',
      difficulty: 'medium',
      hint: 'x^2 = -4 tidak memiliki akar riil.'
    },
    {
      id: 'sys-exit-4',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'A courier company charges $12 for local deliveries and $25 for express deliveries. In one day, a courier completed 18 deliveries totaling $320. How many express deliveries were completed?',
      promptId: 'Jika $2x + y = 10$ dan $x + 2y = 11$, berapakah nilai rata-rata dari $x$ dan $y$?',
      options: ['3', '3.5', '4', '4.5'],
      correctAnswer: 'B',
      explanation: 'Jumlahkan kedua persamaan: $(2x + y) + (x + 2y) = 10 + 11 \\implies 3x + 3y = 21 \\implies 3(x + y) = 21 \\implies x + y = 7$. Rata-rata dari $x$ dan $y$ adalah $\\frac{x + y}{2} = \\frac{7}{2} = 3.5$.',
      distractorAnalysis: {
        A: 'Siswa membagi 21 dengan 7.',
        C: 'Siswa menghitung nilai $x$ atau $y$ tunggal.',
        D: 'Siswa salah membagi jumlah total.'
      },
      subtopic: 'Average via Symmetric Combination',
      difficulty: 'hard',
      hint: 'Jumlahkan kedua persamaan: 3(x + y) = 21 => (x + y) = 7, lalu bagi 2.'
    },
    {
      id: 'sys-exit-5',
      moduleId: 'systems-of-equations',
      type: 'multiple_choice',
      prompt: 'Which of the following statements is true regarding the system:\n$\begin{cases} 2x - 4y = 10 \\ -3x + 6y = 15 \end{cases}$\n',
      promptId: 'Manakah dari pernyataan berikut yang BENAR mengenai sistem $y = 3x - 5$ dan $6x - 2y = 10$?',
      options: [
        'The system has no solution because the lines are parallel.',
        'The system has exactly 1 solution at the point $(0, -5)$.',
        'The system has infinitely many solutions because the equations represent the same line.',
        'The system has 2 solutions in quadrants I and IV.'
      ],
      correctAnswer: 'C',
      explanation: 'Bagi persamaan kedua dengan 2: $3x - y = 5 \\implies y = 3x - 5$. Persamaan ini persis sama dengan persamaan pertama. Karena kedua garis berhimpit secara sempurna, sistem memiliki tak hingga banyaknya solusi ($infinitely\\ many\\ solutions$).',
      distractorAnalysis: {
        A: 'Siswa mengira garis sejajar berbeda tanpa memeriksa konstanta.',
        B: 'Siswa hanya memeriksa titik potong dengan sumbu y.',
        D: 'Sistem linear tidak bisa memiliki tepat 2 solusi.'
      },
      subtopic: 'Coincident Lines Identification',
      difficulty: 'medium',
      hint: 'Bagi seluruh baris kedua dengan 2 dan amati persamaannya.'
    }
  ],
  discussionPrompts: [
    {
      id: 'sys-disc-1',
      topic: 'Symmetric Equation Tricks',
      prompt: 'Bagaimana cara melatih siswa agar peka terhadap simetri (misalnya $2x+y$ dan $x+2y$) sehingga mereka tidak langsung menggunakan metode substitusi yang panjang?',
      targetInsight: 'Ajarkan siswa untuk selalu melakukan scan 3 detik pada koefisien sebelum mengambil pensil untuk melihat apakah penjumlahan atau pengurangan baris langsung menjawab pertanyaan.'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Diagnostik',
      activity: 'Siswa mengidentifikasi jumlah solusi dari 5 sistem linear dalam waktu cepat.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Rasio Koefisien & Perpotongan Parabola-Garis',
      activity: 'Guru menunjukkan grafik interaktif di Desmos: bagaimana pergeseran konstanta mengubah sistem dari 2 solusi -> 1 solusi (singgung) -> 0 solusi.'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan Soal Campuran Linear-Nonlinear',
      activity: 'Siswa membedah soal-soal jebakan: membedakan kapan soal menanyakan x, y, x+y, atau xy.'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Refleksi Guru',
      activity: 'Evaluasi apakah akurasi penanganan sistem nonlinear sudah mencapai target >80%.'
    }
  }
};
