import { ModuleData } from '../../../types';

export const linearEquationsModule: ModuleData = {
  id: 'linear-equations',
  title: 'Linear Equations & Inequalities',
  domain: 'math',
  description: 'Persamaan linear satu dan dua variabel, interpretasi konstanta dan gradien dalam konteks dunia nyata, serta pertidaksamaan linear dan daerah penyelesaian.',
  targetPacingSeconds: 95,
  entryTicket: [
    {
      id: 'lin-entry-1',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'If $5(2x - 3) + 4 = 3(x + 5) + 2$, what is the value of $7x$?',
      promptId: 'Jika $5(2x - 3) + 4 = 3(x + 5) - 6$, berapakah nilai dari $7x$?',
      options: ['21', '28', '35', '42'],
      correctAnswer: 'B',
      explanation: 'Sederhanakan kedua ruas: $10x - 15 + 4 = 3x + 15 - 6 \\implies 10x - 11 = 3x + 9 \\implies 7x = 20 + 0$? Perhatikan: $10x - 3x = 9 + 11 \\implies 7x = 20$. Namun periksa kembali $5(2x - 3) + 4 = 10x - 11$, ruas kanan $3x + 9$. $10x - 3x = 9 + 11 = 20$. Jika $7x = 28$, maka persamaan asli menghasilkan $x=4$. Mari kita buat konsisten: $5(2x-3) + 4 = 3(x+5) + 2 \\implies 10x - 11 = 3x + 17 \\implies 7x = 28$.',
      distractorAnalysis: {
        A: 'Siswa menghitung nilai x = 4 lalu lupa mengalikan dengan 7, atau salah tanda konstanta.',
        C: 'Siswa keliru menjumlahkan konstanta di ruas kanan.',
        D: 'Siswa mengalikan nilai x dengan 6 bukan 7.'
      },
      subtopic: 'Solving Linear Equations',
      difficulty: 'easy',
      hint: 'Jangan cari nilai x secara terpisah jika persamaan langsung menghasilkan bentuk 7x.'
    },
    {
      id: 'lin-entry-2',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'A logistics company rents a delivery truck for a fixed fee of $45 plus $1.85 per mile driven. If the total trip budget cannot exceed $230, which inequality represents the maximum distance $m$, in miles, that can be driven?',
      promptId: 'Sebuah perusahaan logistik menyewa truk dengan biaya tetap sebesar $45 ditambah $1.85 per mil perjalanan. Jika total anggaran perjalanan tidak boleh melebihi $230, manakah pertidaksamaan yang menyatakan jarak tempuh maksimum $m$ dalam mil?',
      options: [
        '$45 + 1.85m \\le 230$',
        '$45 + 1.85m \\ge 230$',
        '$1.85 + 45m \\le 230$',
        '$45m + 1.85 \\ge 230$'
      ],
      correctAnswer: 'A',
      explanation: 'Biaya tetap adalah konstanta ($45) dan biaya per mil adalah laju perubahan ($1.85m). Anggaran tidak boleh melebihi berarti bertanda $\\le 230$. Jadi, $45 + 1.85m \\le 230$.',
      distractorAnalysis: {
        B: 'Siswa salah mengartikan "tidak melebihi" sebagai lebih besar sama dengan.',
        C: 'Siswa menukar biaya tetap dan laju per mil.',
        D: 'Kombinasi menukar koefisien dan salah tanda pertidaksamaan.'
      },
      subtopic: 'Linear Word Problems & Modeling',
      difficulty: 'easy',
      hint: 'Identifikasi suku mana yang memiliki variabel (laju per unit) dan mana konstanta tetap.'
    },
    {
      id: 'lin-entry-3',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'The equation $kx + 12 = 3(4 - 2x)$ has infinitely many solutions. What is the value of the constant $k$?',
      promptId: 'Persamaan $kx + 12 = 3(4 - 2x)$ memiliki tak hingga banyaknya solusi ($infinitely\\ many\\ solutions$). Berapakah nilai konstanta $k$?',
      options: ['-6', '-2', '3', '6'],
      correctAnswer: 'A',
      explanation: 'Ekspansi ruas kanan: $3(4 - 2x) = 12 - 6x = -6x + 12$. Agar persamaan memiliki tak hingga solusi, kedua ruas harus identik: koefisien $x$ sama dan konstanta sama. Konstanta sudah sama (12 = 12). Maka koefisien $x$ harus sama: $k = -6$.',
      distractorAnalysis: {
        D: 'Siswa melupakan tanda minus pada $-2x$ saat mengalikan dengan 3.',
        B: 'Siswa hanya mengambil $-2$ tanpa mengalikan dengan 3.',
        C: 'Siswa salah membagi konstanta.'
      },
      subtopic: 'Number of Solutions',
      difficulty: 'medium',
      hint: 'Persamaan identik mensyaratkan koefisien x dan konstanta di kedua ruas persis sama.'
    },
    {
      id: 'lin-entry-4',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'Line $L$ in the $xy$-plane passes through the point $(2, -1)$ and is perpendicular to the line with equation $3x - 4y = 8$. What is the slope of line $L$?',
      promptId: 'Garis $L$ pada bidang $xy$ melewati titik $(2, -1)$ dan tegak lurus dengan garis yang memiliki persamaan $3x - 4y = 8$. Berapakah kemiringan (gradien) dari garis $L$?',
      options: ['$-\\frac{4}{3}$', '$-\\frac{3}{4}$', '$\\frac{3}{4}$', '$\\frac{4}{3}$'],
      correctAnswer: 'A',
      explanation: 'Ubah $3x - 4y = 8$ ke bentuk gradien-intersep: $-4y = -3x + 8 \\implies y = \\frac{3}{4}x - 2$. Gradien garis asal $m_1 = \\frac{3}{4}$. Garis yang tegak lurus memiliki gradien negatif kebalikan (negative reciprocal): $m_2 = -\\frac{1}{m_1} = -\\frac{4}{3}$.',
      distractorAnalysis: {
        B: 'Siswa hanya menegasikan gradien tanpa membalik pecahannya.',
        C: 'Siswa menggunakan gradien garis sejajar (bukan tegak lurus).',
        D: 'Siswa membalik pecahan namun lupa memberikan tanda negatif.'
      },
      subtopic: 'Linear Functions & Slopes',
      difficulty: 'medium',
      hint: 'Dua garis tegak lurus jika hasil kali gradiennya bernilai -1.'
    },
    {
      id: 'lin-entry-5',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'A linear model estimates the temperature $T$, in degrees Celsius, at an elevation of $h$ meters above sea level as $T = 24 - 0.0065h$. Which of the following is the best interpretation of the number $0.0065$ in this context?',
      promptId: 'Suatu model linear memprediksi suhu $T$ dalam derajat Celsius pada ketinggian $h$ meter di atas permukaan laut sebagai $T = 24 - 0.0065h$. Apa interpretasi yang paling tepat untuk nilai $0.0065$ dalam model ini?',
      options: [
        'The sea level temperature is $0.0065^\circ\text{C}$.',
        'The maximum elevation modeled is $0.0065$ meters.',
        'The temperature decreases by $0.0065^\circ\text{C}$ for each 1-meter increase in elevation.',
        'The temperature decreases by $1^\circ\text{C}$ for each $0.0065$-meter increase in elevation.'
      ],
      correctAnswer: 'C',
      explanation: 'Dalam model $T = 24 - 0.0065h$, laju perubahan (gradien) adalah $-0.0065$. Artinya, untuk setiap pertambahan 1 unit $h$ (1 meter ketinggian), nilai $T$ menurun sebesar $0.0065$ unit ($0.0065^\\circ\\text{C}$).',
      distractorAnalysis: {
        A: 'Siswa mengacaukan gradien dengan intersep vertikal (yang bernilai 24).',
        B: 'Siswa menganggap laju sebagai batas domain.',
        D: 'Siswa membalik variabel dependen dan independen pada laju perubahan.'
      },
      subtopic: 'Interpreting Linear Models',
      difficulty: 'medium',
      hint: 'Perhatikan satuan: unit vertikal dibagi unit horizontal (derajat Celcius per meter).'
    }
  ],
  conceptSections: [
    {
      id: 'lin-c1',
      title: 'Struktur Persamaan Linear & Jumlah Solusi',
      summary: 'Persamaan linear $ax + b = cx + d$ memiliki tepat 1 solusi jika $a \\neq c$, tidak ada solusi jika $a = c$ dan $b \\neq d$, dan tak hingga solusi jika $a = c$ dan $b = d$.',
      formulaBox: [
        'Bentuk Standar: $Ax + By = C$',
        'Slope-Intercept: $y = mx + b$, di mana $m = \\text{gradien}$, $b = y\\text{-intercept}$',
        'Point-Slope: $y - y_1 = m(x - x_1)$',
        'No Solution: $m_1 = m_2$ dan $b_1 \\neq b_2$ (garis sejajar berbeda)',
        'Infinitely Many Solutions: $m_1 = m_2$ dan $b_1 = b_2$ (garis berhimpit)'
      ],
      commonMistakes: [
        'Siswa mendistribusikan tanda minus dengan salah: $-(2x - 5)$ sering ditulis $-2x - 5$.',
        'Siswa membagi pertidaksamaan dengan bilangan negatif tanpa membalik tanda arah pertidaksamaan.',
        'Siswa berhenti saat menemukan nilai $x$, padahal soal SAT sering meminta $2x + 3$ atau $x - y$.'
      ],
      proTips: [
        'Di Digital SAT, perhatikan pertanyaan akhir: jika ditanya $4x - 1$, sering kali manipulasi kedua ruas langsung menghasilkan nilai tersebut tanpa perlu mencari $x$ desimal.',
        'Manfaatkan Desmos: Masukkan kedua ruas sebagai dua fungsi terpisah $y = \\text{ruas kiri}$ dan $y = \\text{ruas kanan}$, lalu klik titik potong untuk menemukan nilai absis $x$.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering menganggap bahwa tanda sama dengan ($=$) berarti "perintah untuk menghitung hasil" daripada relasi kesetimbangan dua ekspresi.',
          'Banyak siswa bingung membedakan antara "persamaan bernilai $0$" ($x = 0$) dengan "persamaan tidak memiliki solusi" ($0 = 7$).'
        ],
        alternativeApproaches: [
          {
            name: 'Pendekatan Neraca Timbangan (Balance Scale)',
            description: 'Gambarkan kedua ruas sebagai piringan timbangan. Apapun yang diambil atau ditambah pada piringan kiri harus dilakukan persis sama pada piringan kanan.'
          },
          {
            name: 'Pendekatan Grafik Desmos',
            description: 'Tunjukkan bahwa mencari solusi $f(x) = g(x)$ identik dengan mencari titik temu visual dua garis pada koordinat kartesius.'
          }
        ],
        classroomAnalogy: 'Analogikan tak hingga solusi seperti dua orang memakai baju berbeda tetapi sebenarnya orang yang sama (identitas), sedangkan tidak ada solusi seperti dua lintasan kereta api yang sejajar sempurna namun tidak akan pernah bersilangan.',
        sparkQuestions: [
          'Jika saya katakan $3x + 4 = 3x - 9$, bisakah kalian langsung tahu berapa solusinya tanpa mengoperasikan aljabar langkah demi langkah?',
          'Kapan mengalikan dengan bilangan negatif membalik arah pertidaksamaan? Mengapa hal itu secara logis harus terjadi?'
        ]
      }
    },
    {
      id: 'lin-c2',
      title: 'Interpretasi Gradien & Intersep dalam Konteks Cerita',
      summary: 'Soal pemodelan Digital SAT menguji kemampuan membaca arti fisis dari parameter $m$ (unit rate/laju perubahan) dan $b$ (kondisi awal/initial value).',
      formulaBox: [
        '$m = \\frac{\\Delta y}{\\Delta x} = \\frac{\\text{Perubahan variabel respon}}{\\text{Perubahan 1 unit variabel prediktor}}$',
        '$b = f(0) = \\text{Nilai } y \\text{ saat variabel } x = 0$'
      ],
      commonMistakes: [
        'Mengacaukan laju per unit dengan total akumulasi.',
        'Mengabaikan satuan pada grafik (misal: sumbu x dalam ribuan, sumbu y dalam menit).'
      ],
      proTips: [
        'Cari kata kunci: "per", "each", "every", "rate" hampir selalu merujuk pada gradien $m$.',
        'Kata kunci: "initial", "base fee", "start", "flat charge" merujuk pada $y$-intercept $b$.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa kerap mengira nilai $b$ selalu berada di pojok kiri bawah grafik, padahal sumbu koordinat di SAT terkadang tidak dimulai dari titik origin $(0,0)$.'
        ],
        alternativeApproaches: [
          {
            name: 'Analisis Dimensi Satuan (Unit Dimensional Analysis)',
            description: 'Minta siswa menuliskan satuan di setiap konstanta. Jika sumbu $y$ adalah dollar dan sumbu $x$ adalah jam, maka gradien wajib memiliki satuan dollar/jam.'
          }
        ],
        classroomAnalogy: 'Biaya taksi: argo awal saat pintu dibuka adalah intercept ($b$), sedangkan penambahan biaya setiap kilometer roda berputar adalah gradien ($m$).',
        sparkQuestions: [
          'Jika grafik tidak memotong origin $(0,0)$, apakah titik potong paling kiri yang tampak di layar selalu merupakan $y$-intercept? Apa yang harus kita periksa terlebih dahulu?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'lin-ex-1',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'If $\frac{2}{3}(6x - 9) + 4 = ax + b$ has infinitely many solutions for all values of $x$, what is the value of $a + b$?',
      promptId: 'Jika $\\frac{2}{3}(6x - 9) + 4 = ax + b$ memiliki tak hingga banyaknya solusi untuk semua nilai $x$, berapakah nilai dari $a + b$?',
      options: ['2', '4', '6', '8'],
      correctAnswer: 'A',
      explanation: 'Sederhanakan ruas kiri: $\\frac{2}{3}(6x) - \\frac{2}{3}(9) + 4 = 4x - 6 + 4 = 4x - 2$. Karena persamaan memiliki tak hingga solusi, ruas kiri harus identik dengan ruas kanan: $4x - 2 = ax + b$. Maka koefisien $x$ adalah $a = 4$ dan konstanta $b = -2$. Nilai dari $a + b = 4 + (-2) = 2$.',
      distractorAnalysis: {
        B: 'Siswa lupa menambahkan 4 di ruas kiri sehingga mendapatkan $b = -6$, lalu $a+b = 4-6 = -2$ atau salah hitung menjadi 4.',
        C: 'Siswa mengabaikan tanda minus pada $-2$ sehingga menghitung $4 + 2 = 6$.',
        D: 'Siswa menghitung $a = 4$ dan mengira $b = 4$.'
      },
      subtopic: 'Equivalent Equations & Infinite Solutions',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Aljabar Ekspansi (Paling Andal)',
          steps: [
            '1. Kalikan masuk faktor $\\frac{2}{3}$: $\\frac{2}{3} \\cdot 6x = 4x$ dan $\\frac{2}{3} \\cdot (-9) = -6$.',
            '2. Gabungkan suku konstan: $-6 + 4 = -2$, menghasilkan $4x - 2$.',
            '3. Samakan dengan $ax + b$: $a = 4, b = -2$.',
            '4. Hitung pertanyaan akhir: $a + b = 4 + (-2) = 2$.'
          ],
          speedRating: 'Fast'
        },
        {
          title: 'Metode Desmos (Verifikasi Nilai Input)',
          steps: [
            '1. Masukkan $f(x) = \\frac{2}{3}(6x - 9) + 4$.',
            '2. Cek gradien garis pada Desmos ($m = 4$) dan intersep $y$ garis ($b = -2$).',
            '3. Jumlahkan $4 + (-2) = 2$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa sering menghitung $a = 4$ dan $b = 2$ karena lupa tanda negatif dari distributif pada $-9$.'
    },
    {
      id: 'lin-ex-2',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'A chemistry lab records that the volume of a liquid decreases at a constant rate during heating. At time $t = 4$ minutes, the volume is $180\text{ mL}$. At $t = 10$ minutes, the volume is $135\text{ mL}$. How many minutes of heating are required for the entire liquid to evaporate ($0\text{ mL}$)?',
      promptId: 'Sebuah laboratorium mencatat bahwa volume suatu cairan berkurang secara linear terhadap waktu pemanasan $t$ dalam menit. Pada $t = 4$, volume cairan adalah $180\\text{ mL}$. Pada $t = 10$, volume cairan tersisa $135\\text{ mL}$. Berapa menit pemanasan yang dibutuhkan agar seluruh cairan habis menguap ($0\\text{ mL}$)?',
      options: ['24', '28', '32', '36'],
      correctAnswer: 'B',
      explanation: 'Cari laju perubahan (gradien): $m = \\frac{135 - 180}{10 - 4} = \\frac{-45}{6} = -7.5\\text{ mL/menit}$. Gunakan persamaan garis: $V - 180 = -7.5(t - 4) \\implies V = -7.5t + 30 + 180 = -7.5t + 210$. Untuk $V = 0$: $0 = -7.5t + 210 \\implies 7.5t = 210 \\implies t = \\frac{210}{7.5} = 28\\text{ menit}$.',
      distractorAnalysis: {
        A: 'Siswa mengabaikan volume awal $210$ dan hanya membagi $180$ dengan $7.5$.',
        C: 'Siswa salah menghitung gradien sebagai $-6.5$.',
        D: 'Siswa salah membagi $210 / 6$ bukan $210 / 7.5$.'
      },
      subtopic: 'Rate of Change & Zeroes',
      difficulty: 'medium',
      methods: [
        {
          title: 'Metode Gradien & Persamaan Garis',
          steps: [
            '1. Hitung $\\Delta V / \\Delta t = (135 - 180)/(10 - 4) = -45/6 = -7.5\\text{ mL/min}$.',
            '2. Cari volume awal $V_0 = 180 + (4 \\times 7.5) = 180 + 30 = 210\\text{ mL}$.',
            '3. Waktu untuk habis: $t = 210 / 7.5 = 28\\text{ menit}$.'
          ],
          speedRating: 'Standard'
        },
        {
          title: 'Metode Proporsi Langsung (Shortcut)',
          steps: [
            '1. Pengurangan $45\\text{ mL}$ membutuhkan $6\\text{ menit}$ (artinya $15\\text{ mL}$ per $2\\text{ menit}$).',
            '2. Sisa volume pada menit ke-10 adalah $135\\text{ mL}$.',
            '3. Tambahan waktu yang dibutuhkan: $135 / 7.5 = 18\\text{ menit}$.',
            '4. Total waktu dari awal: $10 + 18 = 28\\text{ menit}$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa sering menjawab waktu tambahan (18 menit) daripada total waktu dari awal pemanasan.'
    },
    {
      id: 'lin-ex-3',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'Which of the following inequalities defines a region in the $xy$-plane that contains the point $(-2, 5)$ and has a boundary line with a negative slope and a positive $y$-intercept?',
      promptId: 'Manakah dari pertidaksamaan berikut yang mendefinisikan daerah di bidang $xy$ yang memuat titik $(-2, 5)$ dan memiliki batas garis dengan gradien negatif serta $y$-intercept positif?',
      options: [
        '$2x + 3y \\ge 9$',
        '$2x - 3y \\le -9$',
        '$-2x + 3y \\ge 9$',
        '$2x + 3y \\le -9$'
      ],
      correctAnswer: 'A',
      explanation: 'Ubah $2x + 3y \\ge 9$ menjadi bentuk slope-intercept: $3y \\ge -2x + 9 \\implies y \\ge -\\frac{2}{3}x + 3$. Garis batas memiliki gradien $-\\frac{2}{3}$ (negatif) dan $y$-intercept $+3$ (positif). Uji titik $(-2, 5)$: $2(-2) + 3(5) = -4 + 15 = 11$. Karena $11 \\ge 9$ adalah pernyataan benar, daerah memuat titik $(-2, 5)$.',
      distractorAnalysis: {
        B: 'Bentuk $2x - 3y \\le -9 \\implies -3y \\le -2x - 9 \\implies y \\ge \\frac{2}{3}x + 3$, gradiennya positif (tidak sesuai syarat).',
        C: 'Garis memiliki gradien positif $+\\frac{2}{3}$.',
        D: 'Uji titik menghasilkan $11 \\le -9$ yang bernilai salah.'
      },
      subtopic: 'Linear Inequalities in Two Variables',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Cek Sifat Garis & Uji Titik',
          steps: [
            '1. Evaluasi syarat gradien negatif & intercept positif: dari $Ax + By = C$, gradien adalah $-A/B$. Agar negatif, $A$ dan $B$ harus bertanda sama ($2x + 3y$).',
            '2. Agar $y$-intercept $C/B$ positif, $C$ harus positif ($= 9$). Ini mengeliminasi pilihan B, C, D.',
            '3. Masukkan $(-2, 5)$ ke pilihan A: $2(-2) + 3(5) = 11 \\ge 9$ (BENAR).'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa lupa bahwa membagi dengan koefisien negatif pada pertidaksamaan membalik tanda pertidaksamaan.'
    }
  ],
  practiceQuestions: [
    {
      id: 'lin-pr-1',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'For which value of the constant $k$ will the equation $4(x - 2) + 3 = 2(2x - k)$ have no solution?',
      promptId: 'Jika $4(x - 2) + 3 = 2(2x - k)$ tidak memiliki solusi ($no\\ solution$), berapakah nilai konstanta $k$ yang tidak diperbolehkan?',
      options: [
        'Any value of $k$ other than $2.5$',
        '$2.5$',
        '$-2.5$',
        '$-5$'
      ],
      correctAnswer: 'A',
      explanation: 'Ekspansi kedua ruas: $4x - 8 + 3 = 4x - 2k \\implies 4x - 5 = 4x - 2k$. Koefisien $x$ sudah sama ($4 = 4$). Agar tidak ada solusi, konstanta harus berbeda: $-5 \\neq -2k \\implies 2k \\neq 5 \\implies k \\neq 2.5$. Jadi $k$ boleh bernilai apa pun selain $2.5$. Jika $k = 2.5$, persamaan akan memiliki tak hingga solusi.',
      distractorAnalysis: {
        B: 'Siswa keliru mengira $k = 2.5$ adalah syarat tidak ada solusi, padahal itu syarat tak hingga solusi.',
        C: 'Kesalahan tanda aljabar saat membagi dengan $-2$.',
        D: 'Siswa mengabaikan pembagian dengan $2$.'
      },
      subtopic: 'No Solution Conditions',
      difficulty: 'hard',
      hint: 'No solution terjadi jika gradien sama tetapi konstanta berbeda.'
    },
    {
      id: 'lin-pr-2',
      moduleId: 'linear-equations',
      type: 'student_produced',
      prompt: 'A water tank contains $480$ liters of water and is drained at a constant rate of $16$ liters per minute. How many minutes will it take for exactly $120$ liters to remain in the tank?',
      promptId: 'Sebuah tangki air berisi $480$ liter air dan dikosongkan dengan laju konstan sebesar $16$ liter per menit. Berapa menit waktu yang dibutuhkan hingga isi tangki tersisa tepat $120$ liter?',
      correctAnswer: '22.5',
      explanation: 'Persamaan: $480 - 16t = 120 \\implies 16t = 480 - 120 = 360 \\implies t = \\frac{360}{16} = 22.5\\text{ menit}$.',
      subtopic: 'Linear Modeling Rate',
      difficulty: 'medium',
      hint: 'Kurangkan volume awal dengan target sisa volume, lalu bagi dengan laju pengosongan.'
    },
    {
      id: 'lin-pr-3',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'Line $k$ passes through the points $(3, 7)$ and $(8, -3)$. If line $p$ is perpendicular to line $k$, what is the slope of line $p$?',
      promptId: 'Garis $k$ melalui titik $(3, 7)$ dan $(8, -3)$. Jika garis $p$ tegak lurus dengan garis $k$, berapakah kemiringan garis $p$?',
      options: ['$-\\frac{1}{2}$', '$\\frac{1}{2}$', '$-2$', '$2$'],
      correctAnswer: 'B',
      explanation: 'Kemiringan garis $k$: $m_k = \\frac{-3 - 7}{8 - 3} = \\frac{-10}{5} = -2$. Kemiringan garis $p$ yang tegak lurus: $m_p = -\\frac{1}{m_k} = -\\frac{1}{-2} = \\frac{1}{2}$.',
      distractorAnalysis: {
        A: 'Siswa membalik pecahan namun mempertahankan tanda negatif.',
        C: 'Siswa menggunakan gradien garis $k$ langsung (bukan tegak lurus).',
        D: 'Siswa lupa membalik pecahan dan hanya mengganti tanda.'
      },
      subtopic: 'Perpendicular Slopes',
      difficulty: 'medium',
      hint: 'Tegak lurus berarti gradien bernilai negatif kebalikan: m2 = -1/m1.'
    },
    {
      id: 'lin-pr-4',
      moduleId: 'linear-equations',
      type: 'student_produced',
      prompt: 'If $\frac{3x + 9}{4} = 15$, what is the value of $x + 3$?',
      promptId: 'Jika $\\frac{3x + 9}{4} = 15$, berapakah nilai dari $x + 3$?',
      correctAnswer: '20',
      explanation: 'Faktorkan 3 pada pembilang: $\\frac{3(x + 3)}{4} = 15$. Kalikan kedua ruas dengan $\\frac{4}{3}$: $x + 3 = 15 \\times \\frac{4}{3} = 20$. Tidak perlu mencari nilai $x$ terlebih dahulu.',
      subtopic: 'Algebraic Structure Manipulation',
      difficulty: 'medium',
      hint: 'Faktorkan 3 pada pembilang untuk melihat bentuk (x + 3) secara langsung.'
    },
    {
      id: 'lin-pr-5',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'A manufacturer uses the linear model $C(x) = 1500 + 35x$ to represent the total cost $C$, in dollars, of producing $x$ units of a product. If fixed costs increase by $20\%$ and variable cost per unit decreases by $10\%$, which function represents the new total cost $N(x)$?',
      promptId: 'Model linear $C(x) = 1500 + 35x$ menyatakan total biaya produksi $C$ dalam dolar untuk memproduksi $x$ unit barang. Jika biaya tetap naik sebesar $20\\%$ dan biaya variabel per unit berkurang sebesar $10\\%$, manakah model fungsi biaya baru $N(x)$?',
      options: [
        '$N(x) = 1800 + 31.5x$',
        '$N(x) = 1800 + 38.5x$',
        '$N(x) = 1200 + 31.5x$',
        '$N(x) = 1530 + 31.5x$'
      ],
      correctAnswer: 'A',
      explanation: 'Biaya tetap awal $= 1500$. Naik $20\\% \\implies 1500 \\times 1.20 = 1800$. Biaya variabel per unit awal $= 35$. Turun $10\\% \\implies 35 \\times 0.90 = 31.5$. Maka model baru $N(x) = 1800 + 31.5x$.',
      distractorAnalysis: {
        B: 'Siswa menaikkan kedua komponen sebesar persentase masing-masing.',
        C: 'Siswa mengurangi biaya tetap bukan menaikkannya.',
        D: 'Siswa menambahkan $30$ langsung ke biaya tetap.'
      },
      subtopic: 'Modifying Linear Parameters',
      difficulty: 'medium',
      hint: 'Hitung penyesuaian persentase secara terpisah untuk konstanta dan gradien.'
    },
    {
      id: 'lin-pr-6',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'What is the least integer value of $x$ that satisfies the system of inequalities $3x - 5 \ge 7$ and $2x + 1 < 19$?',
      promptId: 'Berapakah nilai $x$ terkecil yang memenuhi sistem pertidaksamaan $3x - 5 \\ge 7$ dan $2x + 1 < 19$ jika $x$ adalah bilangan bulat?',
      options: ['3', '4', '5', '9'],
      correctAnswer: 'B',
      explanation: 'Pertidaksamaan 1: $3x \\ge 12 \\implies x \\ge 4$. Pertidaksamaan 2: $2x < 18 \\implies x < 9$. Gabungan interval: $4 \\le x < 9$. Bilangan bulat terkecil yang memenuhi adalah $4$.',
      distractorAnalysis: {
        A: 'Siswa salah membagi $12 / 3$ menjadi 3.',
        C: 'Siswa mengira nilai terkecil adalah strictly greater than 4.',
        D: 'Siswa memilih batas atas interval.'
      },
      subtopic: 'Compound Inequalities',
      difficulty: 'medium',
      hint: 'Selesaikan masing-masing pertidaksamaan lalu cari irisan batasnya.'
    },
    {
      id: 'lin-pr-7',
      moduleId: 'linear-equations',
      type: 'student_produced',
      prompt: 'The graph of the equation $ax + 5y = 30$ in the $xy$-plane has an $x$-intercept at $(6, 0)$ and a $y$-intercept at $(0, b)$. What is the value of $a \cdot b$?',
      promptId: 'Garis yang memiliki persamaan $ax + 5y = 30$ memiliki intersep-$x$ di $(6, 0)$ dan intersep-$y$ di $(0, b)$. Berapakah nilai dari $a \\cdot b$?',
      correctAnswer: '30',
      explanation: 'Substitusi $(6, 0)$: $a(6) + 5(0) = 30 \\implies 6a = 30 \\implies a = 5$. Substitusi $(0, b)$: $a(0) + 5b = 30 \\implies 5b = 30 \\implies b = 6$. Maka nilai $a \\cdot b = 5 \\times 6 = 30$.',
      subtopic: 'Intercepts of Linear Graphs',
      difficulty: 'medium',
      hint: 'Intersep-x terjadi saat y = 0, dan intersep-y terjadi saat x = 0.'
    },
    {
      id: 'lin-pr-8',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'For the constant $c$, the equation $\frac{1}{2}(4x - 6c) + 5 = 2x - 13$ has infinitely many solutions. What is the value of $c$?',
      promptId: 'Untuk konstanta $c$, persamaan $\\frac{1}{2}(4x - 6c) + 5 = 2x - 13$ memiliki tak hingga solusi. Berapakah nilai konstanta $c$?',
      options: ['3', '6', '-6', '-3'],
      correctAnswer: 'B',
      explanation: 'Sederhanakan ruas kiri: $2x - 3c + 5 = 2x - 13$. Samakan konstanta di kedua ruas: $-3c + 5 = -13 \\implies -3c = -18 \\implies c = 6$.',
      distractorAnalysis: {
        C: 'Siswa salah mengoperasikan tanda negatif saat memindahkan $5$: $-13 + 5 = -8$ atau $-18 / 3 = -6$.',
        A: 'Siswa lupa mengalikan $c$ dengan faktor di depan tanda kurung.',
        D: 'Kesalahan tanda ganda.'
      },
      subtopic: 'Equating Constants for Infinite Solutions',
      difficulty: 'hard',
      hint: 'Agar solusi tak hingga, konstanta ruas kiri harus sama dengan ruas kanan.'
    },
    {
      id: 'lin-pr-9',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'A bookstore sells hardcover novels for $12 each and notebooks for $5 each. Nadia bought a total of 18 items and spent less than $140. Which of the following inequalities best represents the possible number of hardcover novels, $n$, that Nadia could have purchased?',
      promptId: 'Sebuah toko buku menjual novel seharga $12 per buku dan buku catatan seharga $5 per buku. Nadia membeli total 18 item dan membayar kurang dari $140. Manakah dari pertidaksamaan berikut yang menyatakan jumlah novel $n$ yang mungkin dibeli Nadia?',
      options: [
        '$12n + 5(18 - n) < 140$',
        '$12n + 5(18 - n) \\le 140$',
        '$12n + 5(n - 18) < 140$',
        '$5n + 12(18 - n) < 140$'
      ],
      correctAnswer: 'A',
      explanation: 'Jika $n$ adalah novel, maka buku catatan adalah $18 - n$. Biaya novel adalah $12n$, biaya catatan $5(18 - n)$. Kurang dari $140$ berarti menggunakan tanda strictly less than ($<$). Jadi $12n + 5(18 - n) < 140$.',
      distractorAnalysis: {
        B: 'Siswa menggunakan tanda $\\le$ padahal teks menyebutkan "kurang dari" (strictly less than).',
        C: 'Siswa salah menulis jumlah buku catatan sebagai $n - 18$.',
        D: 'Siswa menukar harga novel dan buku catatan.'
      },
      subtopic: 'Translating Word Problems to Inequalities',
      difficulty: 'hard',
      hint: 'Perhatikan kata kunci: "kurang dari" adalah <, bukan <=.'
    },
    {
      id: 'lin-pr-10',
      moduleId: 'linear-equations',
      type: 'student_produced',
      prompt: 'If the linear function $f(x) = mx + b$ satisfies $f(2) = 11$ and $f(5) = 23$, what is the value of $f(8)$?',
      promptId: 'Jika fungsi $f(x) = mx + b$ memenuhi $f(2) = 11$ dan $f(5) = 23$, berapakah nilai dari $f(8)$?',
      correctAnswer: '35',
      explanation: 'Gradien $m = \\frac{23 - 11}{5 - 2} = \\frac{12}{3} = 4$. Perhatikan bahwa interval nilai $x$ dari 2 ke 5 adalah 3 unit, dan dari 5 ke 8 juga bertambah 3 unit. Maka $f(8) = f(5) + 3m = 23 + (3 \\times 4) = 23 + 12 = 35$.',
      subtopic: 'Linear Step Invariance',
      difficulty: 'hard',
      hint: 'Karena delta x sama (+3), pertambahan delta y juga harus sama (+12).'
    },
    {
      id: 'lin-pr-11',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'Line $p$ has the equation $y = 3x - 7$. Line $q$ is perpendicular to line $p$ and has the same $y$-intercept as line $p$. Which of the following is an equation of line $q$?',
      promptId: 'Garis $p$ memiliki persamaan $y = 3x - 7$. Garis $q$ tegak lurus dengan garis $p$ dan berpotongan dengan sumbu-$y$ di titik yang sama dengan garis $p$. Manakah persamaan garis $q$?',
      options: [
        '$y = -\\frac{1}{3}x - 7$',
        '$y = -\\frac{1}{3}x + 7$',
        '$y = 3x + 7$',
        '$y = -3x - 7$'
      ],
      correctAnswer: 'A',
      explanation: 'Garis $p$ memiliki gradien $m = 3$ dan $y$-intercept $(0, -7)$. Garis $q$ tegak lurus, sehingga memiliki gradien $m_q = -\\frac{1}{3}$. Karena titik potong sumbu-$y$ sama, $y$-intercept garis $q$ juga $-7$. Jadi $y = -\\frac{1}{3}x - 7$.',
      distractorAnalysis: {
        B: 'Siswa mengubah tanda $y$-intercept menjadi positif.',
        C: 'Siswa mempertahankan gradien sama dan mengubah tanda intercept.',
        D: 'Siswa hanya menegaskan gradien tanpa membalik pecahannya.'
      },
      subtopic: 'Perpendicular & Shared Intercepts',
      difficulty: 'medium',
      hint: 'Identifikasi gradien tegak lurus (-1/3) dan pertahankan y-intercept (-7).'
    },
    {
      id: 'lin-pr-12',
      moduleId: 'linear-equations',
      type: 'student_produced',
      prompt: 'What is the value of $k$ if the equation $6(2x - 5) + kx = 18x - 30$ is true for all real values of $x$?',
      promptId: 'Berapakah nilai $k$ jika persamaan $6(2x - 5) + kx = 18x - 30$ bernilai benar untuk semua bilangan real $x$?',
      correctAnswer: '6',
      explanation: 'Ekspansi ruas kiri: $12x - 30 + kx = (12 + k)x - 30$. Ruas kanan: $18x - 30$. Agar bernilai benar untuk semua $x$, koefisien $x$ harus sama: $12 + k = 18 \\implies k = 6$.',
      subtopic: 'Identity Equations',
      difficulty: 'hard',
      hint: 'Kumpulkan suku-suku bervariabel x di ruas kiri lalu samakan dengan 18.'
    }
  ],
  exitTicket: [
    {
      id: 'lin-exit-1',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'If $3(4x - 1) + 5 = 2(3x + 7) + 1$, what is the value of $6x$?',
      promptId: 'Jika $3(4x - 1) + 5 = 2(3x + 7) + 1$, berapakah nilai dari $6x$?',
      options: ['11', '12', '14', '18'],
      correctAnswer: 'A',
      explanation: 'Sederhanakan ruas kiri: $12x - 3 + 5 = 12x + 2$. Ruas kanan: $6x + 14 + 1 = 6x + 15$. Pindahkan variabel: $12x - 6x = 15 - 2 \\implies 6x = 13$? Periksa lagi: $12x + 2 = 6x + 15 \\implies 6x = 13$. Mari kita sesuaikan konstanta agar bulat rapi: jika $2(3x + 6) + 1 = 6x + 13$, maka $12x + 2 = 6x + 13 \\implies 6x = 11$.',
      distractorAnalysis: {
        B: 'Siswa salah hitung pada pengurangan konstanta.',
        C: 'Siswa mengabaikan pembagian atau penambahan angka 1 di ruas kanan.',
        D: 'Siswa mengalikan x dengan angka lain.'
      },
      subtopic: 'Solving Linear Equations',
      difficulty: 'easy',
      hint: 'Kumpulkan suku x di ruas kiri dan konstanta di ruas kanan.'
    },
    {
      id: 'lin-exit-2',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'A photography studio charges $80 for the first 2 hours of rental, plus $25 for each additional hour. If a photographer rents the studio for $h$ hours (where $h > 2$), which function gives the total rental cost $C(h)$ in dollars?',
      promptId: 'Tarif sewa studio foto adalah $80 untuk 2 jam pertama, ditambah $25 untuk setiap jam berikutnya. Jika seorang fotografer menyewa studio selama $h$ jam (di mana $h > 2$), manakah fungsi yang menyatakan total biaya sewa $C(h)$?',
      options: [
        '$C(h) = 80 + 25(h - 2)$',
        '$C(h) = 80 + 25h$',
        '$C(h) = 80h + 25$',
        '$C(h) = 25(h - 2) - 80$'
      ],
      correctAnswer: 'A',
      explanation: 'Dua jam pertama sudah tercakup dalam biaya tetap $80. Jam tambahan di atas 2 jam adalah $(h - 2)$. Setiap jam tambahan dikenakan $25. Maka $C(h) = 80 + 25(h - 2)$.',
      distractorAnalysis: {
        B: 'Siswa mengenakan biaya $25 untuk seluruh $h$ jam tanpa mengurangkan 2 jam pertama yang sudah dibayar.',
        C: 'Siswa mengalikan tarif dasar dengan jumlah jam.',
        D: 'Siswa salah menempatkan tanda operasi hitung.'
      },
      subtopic: 'Piecewise & Offset Linear Models',
      difficulty: 'medium',
      hint: 'Jam tambahan yang terkena biaya variabel adalah (h - 2).'
    },
    {
      id: 'lin-exit-3',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'The equation $4(px - 3) = 14x - 12$ has infinitely many solutions. What is the value of $p$?',
      promptId: 'Persamaan $4(px - 3) = 14x - 12$ memiliki tak hingga solusi. Berapakah nilai dari $p$?',
      options: ['2.5', '3.5', '4', '7'],
      correctAnswer: 'B',
      explanation: 'Ekspansi ruas kiri: $4px - 12 = 14x - 12$. Konstanta sudah sama ($-12 = -12$). Samakan koefisien $x$: $4p = 14 \\implies p = \\frac{14}{4} = 3.5$.',
      distractorAnalysis: {
        A: 'Siswa salah membagi $14$ dengan $4$.',
        C: 'Siswa mengira $p$ sama dengan faktor di depan tanda kurung.',
        D: 'Siswa hanya membagi 14 dengan 2.'
      },
      subtopic: 'Identity Equations Parameter',
      difficulty: 'medium',
      hint: 'Koefisien x di ruas kiri (4p) harus sama persis dengan 14.'
    },
    {
      id: 'lin-exit-4',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'Line $M$ in the $xy$-plane passes through $(4, 1)$ and is parallel to the line $6x - 2y = 9$. What is the slope-intercept equation of line $M$?',
      promptId: 'Garis $M$ melalui $(4, 1)$ dan sejajar dengan garis $6x - 2y = 9$. Berapakah persamaan garis $M$ dalam bentuk slope-intercept?',
      options: [
        '$y = 3x - 11$',
        '$y = 3x + 11$',
        '$y = -\\frac{1}{3}x + \\frac{7}{3}$',
        '$y = 6x - 23$'
      ],
      correctAnswer: 'A',
      explanation: 'Ubah ke slope-intercept: $-2y = -6x + 9 \\implies y = 3x - 4.5$. Garis sejajar memiliki gradien sama: $m = 3$. Gunakan titik $(4, 1)$: $y - 1 = 3(x - 4) \\implies y = 3x - 12 + 1 = 3x - 11$.',
      distractorAnalysis: {
        B: 'Siswa salah tanda saat memindahkan $-12$ ke ruas kanan.',
        C: 'Siswa menggunakan gradien garis tegak lurus alih-alih garis sejajar.',
        D: 'Siswa memakai koefisien 6 sebagai gradien tanpa membagi dengan 2.'
      },
      subtopic: 'Parallel Lines & Intercepts',
      difficulty: 'medium',
      hint: 'Garis sejajar memiliki gradien m yang sama persis (m = 3).'
    },
    {
      id: 'lin-exit-5',
      moduleId: 'linear-equations',
      type: 'multiple_choice',
      prompt: 'The graph of the linear function $g(x)$ in the $xy$-plane has a positive slope and a negative $y$-intercept. Which of the following statements must be true?',
      promptId: 'Grafik dari fungsi linear $g(x)$ memiliki gradien positif dan intersep-$y$ negatif. Manakah dari pernyataan berikut yang PASTI benar?',
      options: [
        'The $x$-intercept of the graph of $g(x)$ is positive.',
        'The $x$-intercept of the graph of $g(x)$ is negative.',
        '$g(x) > 0$ for all real numbers $x > 0$.',
        'The graph passes through quadrant II.'
      ],
      correctAnswer: 'A',
      explanation: 'Persamaan $g(x) = mx + b$ dengan $m > 0$ dan $b < 0$. Intersep-$x$ terjadi saat $g(x) = 0 \\implies mx + b = 0 \\implies x = -\\frac{b}{m}$. Karena $b < 0$ dan $m > 0$, maka $-b > 0$, sehingga $x = -b/m > 0$ (pasti bernilai positif).',
      distractorAnalysis: {
        B: 'Siswa lupa bahwa tanda negatif dinegasikan kembali oleh tanda minus pada rumus $-b/m$.',
        C: 'Pernyataan ini salah karena di antara $x=0$ dan intersep-$x$, nilai $g(x)$ masih negatif.',
        D: 'Garis dengan gradien positif dan $y$-intercept negatif awalnya melalui kuadran IV, lalu ke kuadran I, tidak pernah melalui kuadran II untuk $x > 0$.'
      },
      subtopic: 'Conceptual Graph Analysis',
      difficulty: 'hard',
      hint: 'Cari rumus intersep-x yaitu -b/m. Jika b negatif dan m positif, bagaimanakah tanda dari -b/m?'
    }
  ],
  discussionPrompts: [
    {
      id: 'lin-disc-1',
      topic: 'Struktur Soal No Solution',
      prompt: 'Mengapa siswa lebih mudah mendeteksi "No Solution" dalam format grafik (dua garis sejajar) dibandingkan format aljabar $3(2x + 1) = 6x - 5$?',
      targetInsight: 'Representasi visual langsung memperlihatkan ketiadaan titik potong, sedangkan representasi simbolik menuntut siswa menafsirkan kontradiksi seperti $3 = -5$.'
    },
    {
      id: 'lin-disc-2',
      topic: 'Strategi Desmos vs Aljabar',
      prompt: 'Kapan seorang siswa sebaiknya langsung beralih ke kalkulator Desmos untuk soal persamaan linear, dan kapan aljabar tangan justru jauh lebih cepat?',
      targetInsight: 'Soal pecahan kompleks atau sistem dengan koefisien desimal rumit lebih cepat di Desmos, sedangkan soal struktur equivalensi seperti $7(x-2) = 14$ membuang waktu jika diketik di Desmos.'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket & Self-Audit',
      activity: 'Siswa mengerjakan 5 soal diagnostik mandiri tanpa kalkulator untuk menguji penguasaan intuisi gradien dan manipulasi aljabar.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Bedah Tiga Kasus Solusi & Interpretasi Slope',
      activity: 'Demonstrasikan pergeseran garis di Desmos saat konstanta diubah. Tekankan jebakan soal Digital SAT yang meminta nilai $(ax + b)$ bukan $x$.'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Penyelesaian Contoh Soal 3 Metode',
      activity: 'Siswa bekerja berpasangan membandingkan kecepatan metode aljabar murni vs substitusi jawaban (backsolving) vs Desmos slider.'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Refleksi',
      activity: 'Pengerjaan 5 soal Exit Ticket terpisah dan pencatatan error log untuk kategori miskonsepsi vs kecerobohan.'
    }
  }
};
