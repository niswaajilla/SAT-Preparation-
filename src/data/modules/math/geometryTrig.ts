import { ModuleData } from '../../../types';

export const geometryTrigModule: ModuleData = {
  id: 'geometry-trigonometry',
  title: 'Geometry & Trigonometry Basics',
  domain: 'math',
  description: 'Segitiga siku-siku istimewa, identitas trigonometri kofungsi, sudut pusat dan keliling lingkaran, panjang busur, serta perbandingan kesebangunan.',
  targetPacingSeconds: 95,
  entryTicket: [
    {
      id: 'geo-entry-1',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'In a right triangle $ABC$, the measure of angle $C$ is $90^\circ$. If the length of side $AB$ is $25$ and the length of side $BC$ is $24$, what is the value of $\cos(B)$?',
      promptId: 'Pada segitiga siku-siku $ABC$ dengan sudut siku-siku di $C$, jika $\\sin(A) = \\frac{7}{25}$, berapakah nilai dari $\\cos(B)$?',
      options: ['$\\frac{7}{25}$', '$\\frac{24}{25}$', '$\\frac{7}{24}$', '$\\frac{25}{7}$'],
      correctAnswer: 'A',
      explanation: 'Dalam segitiga siku-siku dengan sudut siku-siku di $C$, sudut $A$ dan sudut $B$ adalah sudut berpenyiku (komplementer, $A + B = 90^\\circ$). Berdasarkan identitas trigonometri kofungsi ($cofunction\\ identity$): $\\cos(B) = \\sin(90^\\circ - B) = \\sin(A) = \\frac{7}{25}$. Tidak perlu mencari panjang sisi ketiga!',
      distractorAnalysis: {
        B: 'Siswa menghitung $\\cos(A) = \\frac{24}{25}$ alih-alih $\\cos(B)$.',
        C: 'Siswa menghitung nilai tangen $\\tan(A) = \\frac{7}{24}$.',
        D: 'Siswa membalik pecahan cosecan.'
      },
      subtopic: 'Cofunction Identity',
      difficulty: 'easy',
      hint: 'Identitas kofungsi SAT: sin(A) = cos(90 - A) = cos(B).'
    },
    {
      id: 'geo-entry-2',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'An equation of a circle in the $xy$-plane is $(x - 5)^2 + (y + 2)^2 = 49$. What is the area of the circle?',
      promptId: 'Sebuah lingkaran memiliki jari-jari $12\\text{ cm}$. Berapakah panjang busur yang dibentuk oleh sudut pusat sebesar $\\frac{2\\pi}{3}\\text{ radian}$?',
      options: ['$4\\pi\\text{ cm}$', '$8\\pi\\text{ cm}$', '$12\\pi\\text{ cm}$', '$16\\pi\\text{ cm}$'],
      correctAnswer: 'B',
      explanation: 'Rumus panjang busur lingkaran dengan sudut radian adalah $s = r\\theta$. Substitusi $r = 12$ dan $\\theta = \\frac{2\\pi}{3}$: $s = 12 \\times \\frac{2\\pi}{3} = 4 \\times 2\\pi = 8\\pi\\text{ cm}$.',
      distractorAnalysis: {
        A: 'Siswa lupa mengalikan dengan 2.',
        C: 'Siswa menghitung keliling lingkaran penuh dibagi 2.',
        D: 'Siswa mengalikan dengan 4/3 bukan 2/3.'
      },
      subtopic: 'Arc Length with Radians',
      difficulty: 'easy',
      hint: 'Panjang busur busur = r * theta (dalam radian).'
    },
    {
      id: 'geo-entry-3',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'If $\sin(x^\circ) = \cos(42^\circ)$, where $0 < x < 90$, what is the value of $x$?',
      promptId: 'Dua buah segitiga sebangun memiliki rasio panjang sisi yang bersesuaian $3 : 5$. Jika luas segitiga yang lebih kecil adalah $36\\text{ cm}^2$, berapakah luas segitiga yang lebih besar?',
      options: ['$60\\text{ cm}^2$', '$80\\text{ cm}^2$', '$100\\text{ cm}^2$', '$125\\text{ cm}^2$'],
      correctAnswer: 'C',
      explanation: 'Jika rasio panjang sisi dua bangun sebangun adalah $a : b$, maka rasio luasnya adalah $a^2 : b^2$. Di sini rasio sisi $3 : 5 \\implies$ rasio luas $3^2 : 5^2 = 9 : 25$. Proporsi: $\\frac{36}{\\text{Luas Besar}} = \\frac{9}{25} \\implies \\text{Luas Besar} = 36 \\times \\frac{25}{9} = 4 \\times 25 = 100\\text{ cm}^2$.',
      distractorAnalysis: {
        A: 'Miskonsepsi klasik: siswa menggunakan rasio linier $3 : 5$ langsung untuk luas ($36 \\times 5 / 3 = 60$).',
        B: 'Siswa salah hitung perkalian rasio.',
        D: 'Siswa mengira rasio kubik.'
      },
      subtopic: 'Similar Figures and Area Ratios',
      difficulty: 'medium',
      hint: 'Rasio luas adalah KUADRAT dari rasio sisi: 3^2 : 5^2 = 9 : 25.'
    },
    {
      id: 'geo-entry-4',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'In a $30^\circ\text{-}60^\circ\text{-}90^\circ$ triangle, the length of the side opposite the $30^\circ$ angle is $5$. What is the length of the side opposite the $60^\circ$ angle?',
      promptId: 'Sebuah segitiga siku-siku memiliki panjang hipotenusa $10\\sqrt{3}$ dan salah satu sudutnya berukuran $30^\\circ$. Berapakah panjang sisi di depan sudut $30^\\circ$?',
      options: ['$5$', '$5\\sqrt{3}$', '$10$', '$15$'],
      correctAnswer: 'B',
      explanation: 'Pada segitiga istimewa $30^\\circ-60^\\circ-90^\\circ$, rasio sisinya adalah $x : x\\sqrt{3} : 2x$ (sisi depan $30^\\circ$ adalah $x$, hipotenusa adalah $2x$). Diketahui hipotenusa $= 2x = 10\\sqrt{3} \\implies x = \\frac{10\\sqrt{3}}{2} = 5\\sqrt{3}$.',
      distractorAnalysis: {
        A: 'Siswa membagi 10 dengan 2 dan menghilangkan $\\sqrt{3}$.',
        C: 'Siswa mengira sisinya sama dengan 10.',
        D: 'Siswa mengalikan dengan $\\sqrt{3}$ menghasilkan sisi depan $60^\\circ$ ($5\\sqrt{3} \\times \\sqrt{3} = 15$).'
      },
      subtopic: 'Special 30-60-90 Triangles',
      difficulty: 'medium',
      hint: 'Sisi di depan sudut 30 derajat adalah setengah dari panjang hipotenusa.'
    },
    {
      id: 'geo-entry-5',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'A circle with radius $12\text{ cm}$ has a central angle measuring $60^\circ$. What is the length, in centimeters, of the arc intercepted by this central angle?',
      promptId: 'Lingkaran dengan persamaan $(x - 4)^2 + (y + 1)^2 = 49$ memiliki titik pusat di $(h, k)$ dan jari-jari $r$. Berapakah nilai dari $h + k + r$?',
      options: ['10', '12', '52', '54'],
      correctAnswer: 'A',
      explanation: 'Pusat lingkaran $(h, k) = (4, -1)$ dan jari-jari $r = \\sqrt{49} = 7$. Maka $h + k + r = 4 + (-1) + 7 = 10$.',
      distractorAnalysis: {
        B: 'Siswa salah tanda pada koordinat $y$ pusat menjadi $+1$ ($4 + 1 + 7 = 12$).',
        C: 'Siswa lupa menarik akar kuadrat dari 49 sehingga mengambil $r = 49$.',
        D: 'Kombinasi salah tanda dan lupa menarik akar.'
      },
      subtopic: 'Circle Equation Parameters',
      difficulty: 'easy',
      hint: 'Pusat adalah (4, -1) dan jari-jari r = sqrt(49) = 7.'
    }
  ],
  conceptSections: [
    {
      id: 'geo-c1',
      title: 'Segitiga Siku-Siku Istimewa & Identitas Kofungsi',
      summary: 'Formula reference sheet SAT menyediakan rasio segitiga 30-60-90 dan 45-45-90. Identitas kofungsi $\\sin(\\theta) = \\cos(90^\\circ - \\theta)$ adalah salah satu jalan pintas paling sering diuji.',
      formulaBox: [
        '$30^\\circ-60^\\circ-90^\\circ$: Rasio sisi $x : x\\sqrt{3} : 2x$',
        '$45^\\circ-45^\\circ-90^\\circ$: Rasio sisi $x : x : x\\sqrt{2}$',
        'Kofungsi: $\\sin(x^\\circ) = \\cos(90^\\circ - x^\\circ)$ dan $\\cos(x^\\circ) = \\sin(90^\\circ - x^\\circ)$',
        'Radian $\\leftrightarrow$ Derajat: $\\text{Derajat} = \\text{Radian} \\times \\frac{180^\\circ}{\\pi}$, $\\text{Radian} = \\text{Derajat} \\times \\frac{\\pi}{180^\\circ}$',
        'Busur & Juring: $s = r\\theta$, $\\text{Luas Juring} = \\frac{1}{2}r^2\\theta$ (dengan $\\theta$ dalam radian)'
      ],
      commonMistakes: [
        'Siswa menukar posisi $x\\sqrt{3}$ (di depan $60^\\circ$) dan $x$ (di depan $30^\\circ$).',
        'Siswa menggunakan rasio sisi $k$ untuk menghitung perbandingan luas $k^2$ atau volume $k^3$.'
      ],
      proTips: [
        'Jika Anda melihat persamaan $\\sin(3x - 10^\\circ) = \\cos(2x + 15^\\circ)$, jangan gunakan rumus penjumlahan sudut. Cukup jumlahkan kedua sudut sama dengan $90^\\circ$!',
        'Di Desmos, pastikan kalkulator berada dalam mode Degree atau Radian sesuai sudut yang digunakan pada soal.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering menganggap radian adalah satuan terpisah yang selalu harus memuat simbol $\\pi$, padahal bilangan desimal seperti 2.5 juga bisa merupakan radian.'
        ],
        alternativeApproaches: [
          {
            name: 'Koneksi Segitiga Komplementer',
            description: 'Gambarkan segitiga siku-siku ABC dengan sudut siku-siku di C. Tunjukkan bahwa sisi "depan" bagi sudut A adalah persis sisi "samping" bagi sudut B. Dari sini, $\\sin(A) = \\text{depan}/\\text{miring} = \\cos(B)$ terbukti seketika.'
          }
        ],
        classroomAnalogy: 'Penskalaan miniatur: jika kamu memperbesar foto 2 kali lipat panjang dan lebarnya, kamu butuh 4 kali lebih banyak tinta cetak untuk menutupi luas kertasnya ($2^2 = 4$).',
        sparkQuestions: [
          'Jika $\\sin(x) = \\cos(y)$, hubungan apa yang pasti terjadi antara sudut $x$ dan $y$ pada kuadran pertama? Bagaimana jika sudut dinyatakan dalam radian?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'geo-ex-1',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'In the $xy$-plane, the equation $x^2 + y^2 - 8x + 6y = 11$ defines a circle. What is the radius of the circle?',
      promptId: 'Jika $\\sin(4x - 12^\\circ) = \\cos(3x + 18^\\circ)$ di mana semua sudut bernilai lancip ($acute$), berapakah nilai dari $x$ dalam derajat?',
      options: ['12', '14', '16', '18'],
      correctAnswer: 'A',
      explanation: 'Berdasarkan identitas kofungsi, jika $\\sin(\\alpha) = \\cos(\\beta)$ untuk sudut lancip, maka kedua sudut saling berkomplemen: $\\alpha + \\beta = 90^\\circ$. Substitusi: $(4x - 12^\\circ) + (3x + 18^\\circ) = 90^\\circ \\implies 7x + 6^\\circ = 90^\\circ \\implies 7x = 84^\\circ \\implies x = 12^\\circ$.',
      distractorAnalysis: {
        B: 'Siswa salah hitung aljabar $84 / 7 = 14$.',
        C: 'Siswa salah tanda konstanta saat menjumlahkan $-12 + 18$.',
        D: 'Siswa mengasumsikan $\\alpha = \\beta$.'
      },
      subtopic: 'Trig Cofunction Linear Equation',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Jumlah Sudut Komplementer (3 Detik)',
          steps: [
            '1. Jumlahkan kedua ekspresi sudut: $(4x - 12) + (3x + 18) = 7x + 6$.',
            '2. Samakan dengan 90: $7x + 6 = 90 \\implies 7x = 84$.',
            '3. Bagi: $x = 12^\\circ$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa menyamakan kedua sudut 4x - 12 = 3x + 18 karena mengira sin dan cos harus memiliki argumen yang sama.'
    },
    {
      id: 'geo-ex-2',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'In right triangle $XYZ$, angle $Y$ is the right angle. If $\tan(X) = \frac{4}{3}$, what is the value of $\sin(X) + \cos(X)$?',
      promptId: 'Sebuah juring lingkaran memiliki sudut pusat $60^\\circ$ dan luas $24\\pi\\text{ cm}^2$. Berapakah panjang keliling juring tersebut (termasuk kedua jari-jarinya)?',
      options: ['$4\\pi + 24$', '$4\\pi + 12$', '$8\\pi + 24$', '$8\\pi + 12$'],
      correctAnswer: 'A',
      explanation: 'Rasio sudut pusat: $\\frac{60^\\circ}{360^\\circ} = \\frac{1}{6}$. Luas lingkaran penuh $= 6 \\times 24\\pi = 144\\pi\\text{ cm}^2$. Karena Luas $= \\pi r^2 \\implies \\pi r^2 = 144\\pi \\implies r = 12\\text{ cm}$. Panjang busur juring $= \\frac{1}{6} \\times 2\\pi r = \\frac{1}{6} \\times 24\\pi = 4\\pi\\text{ cm}$. Keliling juring adalah panjang busur ditambah dua jari-jari: $\\text{Keliling} = 4\\pi + 2r = 4\\pi + 2(12) = 4\\pi + 24\\text{ cm}$.',
      distractorAnalysis: {
        B: 'Siswa hanya menambahkan satu jari-jari alih-alih dua jari-jari.',
        C: 'Siswa salah hitung panjang busur menjadi $8\\pi$.',
        D: 'Kombinasi salah panjang busur dan satu jari-jari.'
      },
      subtopic: 'Perimeter of a Sector',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Proporsi Luas dan Busur Juring',
          steps: [
            '1. Cari jari-jari: $A = (1/6)\\pi r^2 = 24\\pi \\implies r^2 = 144 \\implies r = 12$.',
            '2. Cari busur: $s = (1/6)(2\\pi \\cdot 12) = 4\\pi$.',
            '3. Tambahkan 2 jari-jari untuk keliling utuh juring: $4\\pi + 24$.'
          ],
          speedRating: 'Standard'
        }
      ],
      studentPitfall: 'Siswa hanya menghitung panjang busurnya (4 pi) dan lupa menambahkan 2 jari-jari penutup juring (2r = 24).'
    },
    {
      id: 'geo-ex-3',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'A cylinder has a base radius of $4\text{ cm}$ and a height of $9\text{ cm}$. A cone has the same base radius as the cylinder. If the volume of the cone is equal to the volume of the cylinder, what is the height, in centimeters, of the cone?',
      promptId: 'Pada segitiga $PQR$, sudut $Q$ adalah sudut siku-siku. Titik $S$ terletak pada sisi $PR$ sedemikian sehingga garis $QS$ tegak lurus dengan $PR$. Jika panjang $PS = 4$ dan $SR = 9$, berapakah panjang dari segmen $QS$?',
      options: ['5', '6', '6.5', '13'],
      correctAnswer: 'B',
      explanation: 'Berdasarkan teorema tinggi segitiga siku-siku (Geometric Mean Altitude Theorem), segitiga $PSQ$ dan segitiga $QSR$ adalah segitiga-segitiga sebangun. Hubungannya adalah $(QS)^2 = PS \\times SR$. Substitusi: $(QS)^2 = 4 \\times 9 = 36 \\implies QS = \\sqrt{36} = 6$.',
      distractorAnalysis: {
        C: 'Siswa menghitung rata-rata aritmatika $(4 + 9)/2 = 6.5$ bukan rata-rata geometrik.',
        A: 'Siswa menebak angka di antara 4 dan 9.',
        D: 'Siswa menjumlahkan $4 + 9 = 13$.'
      },
      subtopic: 'Geometric Mean & Altitude Theorem',
      difficulty: 'hard',
      methods: [
        {
          title: 'Teorema Geometric Mean (Paling Cepat)',
          steps: [
            '1. Rumus: $\\text{Tinggi}^2 = \\text{segmen kiri} \\times \\text{segmen kanan}$.',
            '2. $(QS)^2 = 4 \\times 9 = 36$.',
            '3. $QS = 6$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa mencoba menggunakan Teorema Pythagoras tanpa menyadari mereka memiliki 3 variabel panjang yang belum diketahui.'
    }
  ],
  practiceQuestions: [
    {
      id: 'geo-pr-1',
      moduleId: 'geometry-trigonometry',
      type: 'student_produced',
      prompt: 'In the $xy$-plane, what is the distance between the points $(-3, 4)$ and $(5, -2)$?',
      promptId: 'Jika $\\cos(x^\\circ) = \\sin(42^\\circ)$, di mana $0^\\circ < x < 90^\\circ$, berapakah nilai dari $x$?',
      correctAnswer: '48',
      explanation: 'Identitas kofungsi: $x + 42 = 90 \\implies x = 90 - 42 = 48$.',
      subtopic: 'Complementary Angle Trig',
      difficulty: 'easy',
      hint: 'x + 42 = 90 => x = 48.'
    },
    {
      id: 'geo-pr-2',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'The perimeter of an equilateral triangle is $48\text{ cm}$. What is the area, in square centimeters, of the triangle?',
      promptId: 'Sebuah segitiga sama sisi memiliki panjang sisi $8\\text{ cm}$. Berapakah luas segitiga tersebut dalam sentimeter persegi?',
      options: ['$16$', '$16\\sqrt{3}$', '$32$', '$32\\sqrt{3}$'],
      correctAnswer: 'B',
      explanation: 'Rumus luas segitiga sama sisi dengan sisi $s$: $L = \\frac{s^2\\sqrt{3}}{4}$. Substitusi $s = 8$: $L = \\frac{8^2\\sqrt{3}}{4} = \\frac{64\\sqrt{3}}{4} = 16\\sqrt{3}\\text{ cm}^2$.',
      distractorAnalysis: {
        A: 'Siswa membagi 64 dengan 4 tanpa menyertakan $\\sqrt{3}$.',
        C: 'Siswa menghitung setengah alas kali sisi miring tanpa tinggi sesungguhnya.',
        D: 'Siswa salah membagi.'
      },
      subtopic: 'Equilateral Triangle Area',
      difficulty: 'medium',
      hint: 'Luas = (s^2 * sqrt(3)) / 4 = (64 * sqrt(3)) / 4 = 16*sqrt(3).'
    },
    {
      id: 'geo-pr-3',
      moduleId: 'geometry-trigonometry',
      type: 'student_produced',
      prompt: 'In right triangle $DEF$, angle $F$ is a right angle. If $\sin(D) = \frac{12}{13}$, what is the value of $\tan(E)$?',
      promptId: 'Sebuah lingkaran berpusat di $(2, -5)$ dan melalui titik $(2, 3)$. Berapakah luas lingkaran tersebut dalam satuan $\\pi$ (tuliskan hanya koefisien pengali $\\pi$)?',
      correctAnswer: '64',
      explanation: 'Karena absis titik sama ($x = 2$), jari-jari adalah jarak vertikal: $r = |3 - (-5)| = 8$. Luas lingkaran $= \\pi r^2 = \\pi (8^2) = 64\\pi$. Koefisien pengali $\\pi$ adalah $64$.',
      subtopic: 'Circle Radius & Area',
      difficulty: 'easy',
      hint: 'Jarak vertikal antara y = -5 dan y = 3 adalah 8. r^2 = 64.'
    },
    {
      id: 'geo-pr-4',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'An angle measuring $150^\circ$ is converted to radians. What is the measure of the angle in radians?',
      promptId: 'Sudut $150^\\circ$ jika dinyatakan dalam satuan radian adalah:',
      options: ['$\\frac{5\\pi}{6}$', '$\\frac{3\\pi}{4}$', '$\\frac{7\\pi}{6}$', '$\\frac{2\\pi}{3}$'],
      correctAnswer: 'A',
      explanation: 'Konversi derajat ke radian: $150^\\circ \\times \\frac{\\pi}{180^\\circ} = \\frac{150}{180}\\pi = \\frac{5\\pi}{6}$.',
      distractorAnalysis: {
        B: '$3\\pi/4 = 135^\\circ$.',
        C: '$7\\pi/6 = 210^\\circ$.',
        D: '$2\\pi/3 = 120^\\circ$.'
      },
      subtopic: 'Radian Degree Conversion',
      difficulty: 'easy',
      hint: '150/180 = 5/6, maka 5pi/6 radian.'
    },
    {
      id: 'geo-pr-5',
      moduleId: 'geometry-trigonometry',
      type: 'student_produced',
      prompt: 'In the $xy$-plane, the circle $(x + 4)^2 + (y - 7)^2 = 100$ intersects the $y$-axis at two points. What is the distance between these two $y$-intercepts?',
      promptId: 'Rasio volume dua buah kubus yang sebangun adalah $8 : 27$. Jika luas permukaan kubus yang lebih kecil adalah $24\\text{ cm}^2$, berapakah luas permukaan kubus yang lebih besar dalam $\\text{cm}^2$?',
      correctAnswer: '54',
      explanation: 'Rasio volume $V_1 : V_2 = a^3 : b^3 = 8 : 27 \\implies$ rasio sisi $a : b = 2 : 3$. Rasio luas permukaan $= a^2 : b^2 = 2^2 : 3^2 = 4 : 9$. Maka Luas Besar $= 24 \\times \\frac{9}{4} = 6 \\times 9 = 54\\text{ cm}^2$.',
      subtopic: 'Volume to Area Scaling Ratios',
      difficulty: 'hard',
      hint: 'Akar kubik volume memberi rasio sisi 2:3. Kuadratkan untuk rasio luas 4:9. 24 * (9/4) = 54.'
    },
    {
      id: 'geo-pr-6',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'A right rectangular prism has a length of $8\text{ cm}$, a width of $6\text{ cm}$, and a height of $10\text{ cm}$. What is the length, in centimeters, of the longest interior diagonal of the prism?',
      promptId: 'Pada lingkaran berpusat di $O$, sudut keliling $\\angle APB$ menghadap busur $AB$ dan berukuran $48^\\circ$. Berapakah besar sudut pusat $\\angle AOB$ yang menghadap busur yang sama?',
      options: ['24°', '48°', '96°', '132°'],
      correctAnswer: 'C',
      explanation: 'Teorema Sudut Lingkaran: Besar sudut pusat selalu dua kali lipat besar sudut keliling yang menghadap busur yang sama. Maka $\\angle AOB = 2 \\times 48^\\circ = 96^\\circ$.',
      distractorAnalysis: {
        A: 'Siswa membagi 2 alih-alih mengalikan 2.',
        B: 'Siswa mengira sudut pusat sama besar dengan sudut keliling.',
        D: 'Siswa mengurangkan dari 180°.'
      },
      subtopic: 'Inscribed vs Central Angle Theorem',
      difficulty: 'easy',
      hint: 'Sudut pusat = 2 * sudut keliling = 2 * 48 = 96 derajat.'
    },
    {
      id: 'geo-pr-7',
      moduleId: 'geometry-trigonometry',
      type: 'student_produced',
      prompt: 'If $\cos(3x^\circ) = \sin(x + 10^\circ)$, where $0 < x < 45$, what is the value of $x$?',
      promptId: 'Sebuah tangga sepanjang $10\\text{ meter}$ disandarkan pada dinding tegak. Tangga tersebut membentuk sudut $60^\\circ$ dengan tanah mendatar. Berapa meter jarak kaki tangga ke dinding?',
      correctAnswer: '5',
      explanation: 'Ini adalah segitiga istimewa $30^\\circ-60^\\circ-90^\\circ$. Hipotenusa tangga $= 10\\text{ m}$. Kaki tangga ke dinding adalah sisi samping sudut $60^\\circ$ (atau sisi depan sudut $30^\\circ$): $x = 10 \\times \\cos(60^\\circ) = 10 \\times \\frac{1}{2} = 5\\text{ meter}$.',
      subtopic: 'Applied Right Triangle Trigonometry',
      difficulty: 'medium',
      hint: 'Jarak kaki tangga = 10 * cos(60°) = 10 * 0.5 = 5.'
    },
    {
      id: 'geo-pr-8',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'A circle has an area of $64\pi\text{ cm}^2$. A sector of this circle has an area of $8\pi\text{ cm}^2$. What is the central angle measure, in degrees, of this sector?',
      promptId: 'Persamaan lingkaran $(x + 3)^2 + (y - 5)^2 = 25$ digeser ke kanan sejauh 4 unit dan ke bawah sejauh 2 unit. Manakah persamaan lingkaran yang baru?',
      options: [
        '$(x - 1)^2 + (y - 3)^2 = 25$',
        '$(x + 7)^2 + (y - 7)^2 = 25$',
        '$(x - 1)^2 + (y - 7)^2 = 25$',
        '$(x + 1)^2 + (y - 3)^2 = 25$'
      ],
      correctAnswer: 'A',
      explanation: 'Titik pusat awal $(-3, 5)$. Geser ke kanan 4 unit: $x_{\\text{baru}} = -3 + 4 = 1$. Geser ke bawah 2 unit: $y_{\\text{baru}} = 5 - 2 = 3$. Pusat baru $(1, 3)$. Jari-jari tidak berubah ($r^2 = 25$). Persamaan: $(x - 1)^2 + (y - 3)^2 = 25$.',
      distractorAnalysis: {
        B: 'Siswa salah arah pergeseran (menambah ke kiri dan ke atas).',
        C: 'Siswa salah geser sumbu y.',
        D: 'Siswa salah tanda dalam rumus lingkaran.'
      },
      subtopic: 'Translation of Circles',
      difficulty: 'medium',
      hint: 'Pusat (-3, 5) menjadi (-3+4, 5-2) = (1, 3). Persamaan: (x - 1)^2 + (y - 3)^2 = 25.'
    },
    {
      id: 'geo-pr-9',
      moduleId: 'geometry-trigonometry',
      type: 'student_produced',
      prompt: 'In right triangle $PQR$, the hypotenuse $PR$ has length $20$, and $\sin(P) = 0.6$. What is the perimeter of triangle $PQR$?',
      promptId: 'Jika $\\tan(\\theta) = \\frac{3}{4}$ untuk sudut lancip $\\theta$, berapakah nilai dari $\\sin(\\theta) + \\cos(\\theta)$ dalam bentuk desimal?',
      correctAnswer: '1.4',
      explanation: 'Triple Pythagoras dasar $3 - 4 - 5$. Jika depan $= 3$ dan samping $= 4$, maka miring $= 5$. Nilai $\\sin(\\theta) = \\frac{3}{5} = 0.6$ dan $\\cos(\\theta) = \\frac{4}{5} = 0.8$. Maka $\\sin(\\theta) + \\cos(\\theta) = 0.6 + 0.8 = 1.4$.',
      subtopic: 'Pythagorean Triples & Trig Sum',
      difficulty: 'medium',
      hint: 'Triple 3-4-5: sin = 3/5 = 0.6, cos = 4/5 = 0.8. Jumlahkan: 1.4.'
    },
    {
      id: 'geo-pr-10',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'What is the center $(h, k)$ of the circle represented by the equation $x^2 + y^2 + 10x - 4y = 20$ in the $xy$-plane?',
      promptId: 'Sebuah kerucut padat dan silinder padat memiliki jari-jari alas dan tinggi yang sama. Berapakah rasio volume silinder terhadap volume kerucut tersebut?',
      options: ['1 : 3', '3 : 1', '2 : 1', '9 : 1'],
      correctAnswer: 'B',
      explanation: '$V_{\\text{silinder}} = \\pi r^2 h$ dan $V_{\\text{kerucut}} = \\frac{1}{3}\\pi r^2 h$. Rasio $\\frac{V_{\\text{silinder}}}{V_{\\text{kerucut}}} = \\frac{\\pi r^2 h}{\\frac{1}{3}\\pi r^2 h} = 3 : 1$.',
      distractorAnalysis: {
        A: 'Siswa membalik urutan pertanyaan menjadi kerucut terhadap silinder.',
        C: 'Siswa salah mengingat rumus kerucut sebagai 1/2.',
        D: 'Siswa mengkuadratkan rasio.'
      },
      subtopic: 'Geometric Solid Volume Ratios',
      difficulty: 'easy',
      hint: 'Silinder adalah 3 kali volume kerucut dengan dimensi alas dan tinggi identik.'
    },
    {
      id: 'geo-pr-11',
      moduleId: 'geometry-trigonometry',
      type: 'student_produced',
      prompt: 'In a $45^\circ\text{-}45^\circ\text{-}90^\circ$ triangle, the hypotenuse has length $14\sqrt{2}$. What is the area of the triangle?',
      promptId: 'Garis singgung pada sebuah lingkaran selalu tegak lurus terhadap jari-jari di titik singgung. Jika titik $P$ berjarak $13\\text{ cm}$ dari pusat lingkaran dan jari-jari lingkaran adalah $5\\text{ cm}$, berapakah panjang garis singgung dari titik $P$ ke titik singgung pada lingkaran?',
      correctAnswer: '12',
      explanation: 'Segitiga yang terbentuk adalah segitiga siku-siku dengan hipotenusa $13$ dan salah satu sisi tegak (jari-jari) $5$. Berdasarkan Triple Pythagoras $5 - 12 - 13$: $\\text{panjang singgung} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\text{ cm}$.',
      subtopic: 'Circle Tangent & Right Triangle',
      difficulty: 'medium',
      hint: 'Triple Pythagoras 5 - 12 - 13: panjang garis singgung = 12.'
    },
    {
      id: 'geo-pr-12',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'A sphere has a volume of $36\pi\text{ cm}^3$. What is the surface area, in square centimeters, of the sphere?',
      promptId: 'Berapakah luas juring lingkaran yang memiliki jari-jari $9\\text{ cm}$ dan sudut pusat $\\frac{4\\pi}{9}\\text{ radian}$?',
      options: ['$18\\pi\\text{ cm}^2$', '$36\\pi\\text{ cm}^2$', '$9\\pi\\text{ cm}^2$', '$4\\pi\\text{ cm}^2$'],
      correctAnswer: 'A',
      explanation: 'Rumus luas juring dalam radian: $A = \\frac{1}{2}r^2\\theta$. Substitusi $r = 9$ dan $\\theta = \\frac{4\\pi}{9}$: $A = \\frac{1}{2}(81)\\left(\\frac{4\\pi}{9}\\right) = \\frac{1}{2} \\times 9 \\times 4\\pi = 18\\pi\\text{ cm}^2$.',
      distractorAnalysis: {
        B: 'Siswa lupa membagi dengan 2 (lupa faktor $1/2$ dalam rumus luas juring).',
        C: 'Siswa salah hitung perkalian pecahan.',
        D: 'Siswa hanya menghitung panjang busur juring.'
      },
      subtopic: 'Sector Area Radian Calculation',
      difficulty: 'hard',
      hint: 'Luas = 0.5 * r^2 * theta = 0.5 * 81 * (4pi/9) = 18pi.'
    }
  ],
  exitTicket: [
    {
      id: 'geo-exit-1',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'In right triangle $ABC$, angle $C$ is a right angle. Which of the following is equivalent to $\cos(58^\circ)$?',
      promptId: 'Jika $\\cos(58^\\circ) = a$, manakah dari bentuk berikut yang juga bernilai sama dengan $a$?',
      options: ['$\\sin(32^\\circ)$', '$\\sin(58^\\circ)$', '$\\cos(32^\\circ)$', '$\\tan(32^\\circ)$'],
      correctAnswer: 'A',
      explanation: 'Kofungsi komplementer: $\\cos(58^\\circ) = \\sin(90^\\circ - 58^\\circ) = \\sin(32^\\circ)$.',
      distractorAnalysis: {
        B: '$\\sin(58^\\circ)$ tidak sama dengan $\\cos(58^\\circ)$.',
        C: '$\\cos(32^\\circ) = \\sin(58^\\circ)$.',
        D: 'Fungsi tangen memiliki perbandingan berbeda.'
      },
      subtopic: 'Complementary Angle Cofunction',
      difficulty: 'easy',
      hint: 'cos(58) = sin(90 - 58) = sin(32).'
    },
    {
      id: 'geo-exit-2',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'In a $45^\circ\text{-}45^\circ\text{-}90^\circ$ triangle, the length of the hypotenuse is $14$. What is the length of one of the legs?',
      promptId: 'Sebuah segitiga $45^\\circ-45^\\circ-90^\\circ$ memiliki panjang hipotenusa $14\\text{ cm}$. Berapakah panjang masing-masing kakinya?',
      options: ['$7$', '$7\\sqrt{2}$', '$14\\sqrt{2}$', '$7\\sqrt{3}$'],
      correctAnswer: 'B',
      explanation: 'Pada segitiga $45^\\circ-45^\\circ-90^\\circ$, hipotenusa $= x\\sqrt{2} = 14 \\implies x = \\frac{14}{\\sqrt{2}} = \\frac{14\\sqrt{2}}{2} = 7\\sqrt{2}\\text{ cm}$.',
      distractorAnalysis: {
        A: 'Siswa hanya membagi 14 dengan 2 tanpa mengalikan $\\sqrt{2}$.',
        C: 'Siswa mengalikan 14 dengan $\\sqrt{2}$ alih-alih membaginya.',
        D: 'Siswa mengacaukan dengan rasio segitiga 30-60-90.'
      },
      subtopic: 'Special 45-45-90 Triangles',
      difficulty: 'medium',
      hint: 'Panjang kaki = 14 / sqrt(2) = 7*sqrt(2).'
    },
    {
      id: 'geo-exit-3',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'In the $xy$-plane, what is the radius of the circle defined by $x^2 + y^2 - 12x + 16y = 0$?',
      promptId: 'Rasio panjang sisi dua buah segitiga sebangun adalah $2 : 7$. Jika luas segitiga yang lebih besar adalah $196\\text{ cm}^2$, berapakah luas segitiga yang lebih kecil?',
      options: ['$16\\text{ cm}^2$', '$28\\text{ cm}^2$', '$32\\text{ cm}^2$', '$56\\text{ cm}^2$'],
      correctAnswer: 'A',
      explanation: 'Rasio luas $= 2^2 : 7^2 = 4 : 49$. Luas kecil $= 196 \\times \\frac{4}{49} = 4 \\times 4 = 16\\text{ cm}^2$.',
      distractorAnalysis: {
        D: 'Siswa menggunakan rasio linier $2 : 7$ langsung ($196 \\times 2 / 7 = 56$).',
        B: 'Siswa salah hitung aljabar.',
        C: 'Siswa mengalikan dengan 2.'
      },
      subtopic: 'Area Scaling in Similar Triangles',
      difficulty: 'medium',
      hint: 'Rasio luas adalah 4:49. 196 / 49 = 4. 4 * 4 = 16.'
    },
    {
      id: 'geo-exit-4',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'A sector of a circle with radius $9$ has an arc length of $3\pi$. What is the area of the sector?',
      promptId: 'Titik $(6, 8)$ terletak pada lingkaran dengan pusat di origin $(0, 0)$. Berapakah persamaan lingkaran tersebut?',
      options: [
        '$x^2 + y^2 = 100$',
        '$x^2 + y^2 = 10$',
        '$x^2 + y^2 = 14$',
        '$(x - 6)^2 + (y - 8)^2 = 100$'
      ],
      correctAnswer: 'A',
      explanation: 'Jari-jari lingkaran: $r^2 = 6^2 + 8^2 = 36 + 64 = 100$. Persamaan lingkaran berpusat di origin adalah $x^2 + y^2 = r^2 = 100$.',
      distractorAnalysis: {
        B: 'Siswa mengira $r^2 = 10$ bukan $r = 10$.',
        C: 'Siswa menjumlahkan $6 + 8 = 14$.',
        D: 'Siswa memasukkan titik $(6, 8)$ sebagai pusat lingkaran.'
      },
      subtopic: 'Circle Equation Centered at Origin',
      difficulty: 'easy',
      hint: 'r^2 = 6^2 + 8^2 = 36 + 64 = 100. Persamaan: x^2 + y^2 = 100.'
    },
    {
      id: 'geo-exit-5',
      moduleId: 'geometry-trigonometry',
      type: 'multiple_choice',
      prompt: 'In right triangle $JKL$, angle $L$ is a right angle. If $\tan(J) = 1$, what is the degree measure of angle $J$?',
      promptId: 'Sebuah busur lingkaran memiliki panjang $5\\pi\\text{ cm}$ pada lingkaran dengan keliling total $30\\pi\\text{ cm}$. Berapakah besar sudut pusat busur tersebut dalam derajat?',
      options: ['$30^\\circ$', '$45^\\circ$', '$60^\\circ$', '$75^\\circ$'],
      correctAnswer: 'C',
      explanation: 'Fraksi busur terhadap seluruh keliling: $\\frac{5\\pi}{30\\pi} = \\frac{1}{6}$. Besar sudut pusat $= \\frac{1}{6} \\times 360^\\circ = 60^\\circ$.',
      distractorAnalysis: {
        A: 'Siswa salah membagi 360 dengan 12.',
        B: 'Siswa mengira fraksi 1/8.',
        D: 'Siswa salah hitung perkalian pecahan.'
      },
      subtopic: 'Arc to Central Angle Proportion',
      difficulty: 'medium',
      hint: '5pi / 30pi = 1/6. 360 derajat / 6 = 60 derajat.'
    }
  ],
  discussionPrompts: [
    {
      id: 'geo-disc-1',
      topic: 'Identitas Kofungsi Tanpa Hafalan Rumus Rumit',
      prompt: 'Bagaimana cara visual termudah mendemonstrasikan $\\sin(A) = \\cos(90 - A)$ kepada siswa yang selalu panik melihat istilah trigonometri?',
      targetInsight: 'Cukup gambar satu segitiga siku-siku dan beri label sisi Depan, Samping, Miring dari dua sudut pandang berbeda.'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Segitiga Istimewa & Kofungsi',
      activity: '5 soal kilat menguji identifikasi rasio 30-60-90 dan identitas komplementer.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Teorema Penskalaan Luas & Rumus Busur Radian',
      activity: 'Guru menjelaskan mengapa rasio luas kuadratik ($k^2$) dan volume kubik ($k^3$), serta mendemonstrasikan $s = r\\theta$ di Desmos.'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan 12 Soal Geometri & Lingkaran',
      activity: 'Siswa membedah soal-soal pergeseran lingkaran dan segitiga sebangun tinggi garis.'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Refleksi',
      activity: 'Pengukuran akurasi dan pemetaan kendala geometri pada Error Log.'
    }
  }
};
