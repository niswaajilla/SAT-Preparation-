import { ModuleData } from '../../../types';

export const dataAnalysisModule: ModuleData = {
  id: 'data-analysis-statistics',
  title: 'Data Analysis & Statistics',
  domain: 'math',
  description: 'Mean, median, standar deviasi, efek outlier, analisis scatterplot dan garis regresi, probabilitas bersyarat tabel kontingensi, serta margin of error.',
  targetPacingSeconds: 95,
  entryTicket: [
    {
      id: 'data-entry-1',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'A dataset consists of 15 integer values with a mean of 24 and a median of 22. If an outlier with a value of 95 is added to the dataset, which of the following statements must be true?',
      promptId: 'Sebuah kumpulan data terdiri dari 15 bilangan dengan nilai mean sebesar 24 dan median sebesar 22. Jika sebuah bilangan ekstrem bernilai 90 ditambahkan ke dalam kumpulan data tersebut, manakah pernyataan berikut yang PASTI benar?',
      options: [
        'The mean will increase more significantly than the median.',
        'The median will increase more significantly than the mean.',
        'The standard deviation of the dataset will decrease.',
        'The median will definitely remain 22.'
      ],
      correctAnswer: 'A',
      explanation: 'Mean sangat sensitif terhadap nilai ekstrem (outlier), sedangkan median adalah ukuran pemusatan data yang resisten (tahan outlier). Menambahkan nilai 90 yang jauh lebih besar dari data lain akan mendongkrak mean secara signifikan, sementara median hanya bergeser paling banyak ke nilai data tepat di sampingnya.',
      distractorAnalysis: {
        B: 'Median tidak terpengaruh kuat oleh outlier.',
        C: 'Penyebaran data menjauh sehingga standar deviasi pasti meningkat, bukan menurun.',
        D: 'Median bisa tetap atau bergeser sedikit ke nilai data urutan berikutnya (dari nilai ke-8 menjadi rata-rata nilai ke-8 dan ke-9), sehingga tidak pasti tetap 22.'
      },
      subtopic: 'Outlier Effects on Central Tendency',
      difficulty: 'easy',
      hint: 'Mean sangat sensitif ditarik oleh outlier, sedangkan median resisten.'
    },
    {
      id: 'data-entry-2',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'A random poll of 400 registered voters in a city found that $58\%$ supported the construction of a new municipal park, with an associated margin of error of $\pm 4.5\%$. Which of the following is the most appropriate conclusion?',
      promptId: 'Sebuah survei acak terhadap 400 pemilih terdaftar di suatu kota menunjukkan bahwa $58\\%$ mendukung pembangunan taman kota baru, dengan margin of error sebesar $4.5\\%$. Manakah kesimpulan yang paling tepat?',
      options: [
        'Exactly $58\%$ of all registered voters in the city support the park.',
        'It is plausible that the true percentage of all city voters who support the park is between $53.5\%$ and $62.5\%$.',
        'The park proposal will definitely be approved by at least $62.5\%$ of voters.',
        'If 800 voters were surveyed, the margin of error would double to $9\%$.'
      ],
      correctAnswer: 'B',
      explanation: 'Margin of error sebesar $4.5\\%$ di sekitar estimasi titik $58\\%$ menghasilkan interval keyakinan $58\\% - 4.5\\% = 53.5\\%$ hingga $58\\% + 4.5\\% = 62.5\\%$. Oleh karena itu, persentase populasi sebenarnya diperkirakan berada di antara batas-batas ini.',
      distractorAnalysis: {
        A: 'Survei sampel tidak pernah menjamin angka persis 58% di populasi.',
        C: '62.5% adalah batas atas estimasi, bukan batas minimal kepastian.',
        D: 'Memperbesar ukuran sampel justru memperkecil margin of error, bukan memperbesarnya.'
      },
      subtopic: 'Margin of Error Interpretation',
      difficulty: 'medium',
      hint: 'Interval estimasi adalah titik tengah +/- margin of error: 58% - 4.5% hingga 58% + 4.5%.'
    },
    {
      id: 'data-entry-3',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'The table below summarizes the distribution of students enrolled in elective courses at a high school:\n$\begin{array}{|l|c|c|r|} \hline & \text{Music} & \text{Visual Art} & \text{Total} \\ \hline \text{Grade 10} & 35 & 25 & 60 \\ \hline \text{Grade 11} & 45 & 15 & 60 \\ \hline \text{Total} & 80 & 40 & 120 \\ \hline \end{array}$\nIf a student is selected at random from Grade 10, what is the probability that the student is enrolled in Music?',
      promptId: 'Garis tren (line of best fit) untuk hubungan antara jam belajar ($x$) dan nilai ujian ($y$) dinyatakan oleh $\\hat{y} = 7.5x + 42$. Seorang siswa belajar selama 6 jam dan memperoleh nilai riil 91. Berapakah nilai residual ($residual = y - \\hat{y}$) untuk siswa tersebut?',
      options: ['4', '-4', '87', '49'],
      correctAnswer: 'A',
      explanation: 'Hitung nilai prediksi model untuk $x = 6$: $\\hat{y} = 7.5(6) + 42 = 45 + 42 = 87$. Nilai riil siswa $y = 91$. Residual dihitung dengan rumus $\\text{Residual} = \\text{Nilai Riil} - \\text{Nilai Prediksi} = y - \\hat{y} = 91 - 87 = +4$.',
      distractorAnalysis: {
        B: 'Siswa menghitung prediksi dikurangi riil ($87 - 91 = -4$).',
        C: 'Siswa hanya menghitung nilai prediksi $\\hat{y} = 87$.',
        D: 'Siswa mengurangkan 42 dari 91.'
      },
      subtopic: 'Regression Residuals',
      difficulty: 'medium',
      hint: 'Residual = Nilai Riil - Nilai Prediksi (y - y_hat) = 91 - 87 = +4.'
    },
    {
      id: 'data-entry-4',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'Dataset $A$ consists of the numbers $\{12, 14, 15, 18, 21\}$. Dataset $B$ is created by adding $7$ to every value in Dataset $A$. How does the standard deviation of Dataset $B$ compare to that of Dataset $A$?',
      promptId: 'Berikut adalah data frekuensi jumlah buku yang dibaca dalam sebulan oleh 20 siswa: 0 buku (2 siswa), 1 buku (6 siswa), 2 buku (7 siswa), 3 buku (3 siswa), 4 buku (2 siswa). Berapakah median dari data tersebut?',
      options: ['1', '1.5', '2', '2.5'],
      correctAnswer: 'C',
      explanation: 'Total data $N = 20$. Karena genap, median terletak pada rata-rata data ke-10 dan data ke-11. Mari buat frekuensi kumulatif: 0 buku (data ke 1-2), 1 buku (data ke 3-8), 2 buku (data ke 9-15). Baik data ke-10 maupun data ke-11 sama-sama bernilai 2 buku. Maka median $= \\frac{2 + 2}{2} = 2$.',
      distractorAnalysis: {
        A: 'Siswa salah hitung posisi data.',
        B: 'Siswa mengira median berada di antara 1 dan 2.',
        D: 'Siswa mengambil titik tengah rentang nilai (4 / 2 = 2).'
      },
      subtopic: 'Median from Frequency Tables',
      difficulty: 'medium',
      hint: 'Cari data ke-10 dan ke-11 dari frekuensi kumulatif. Keduanya bernilai 2.'
    },
    {
      id: 'data-entry-5',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'Two classes took the same algebra test. Class A and Class B each have an average (mean) score of 78. However, the standard deviation for Class A is 3.2, while the standard deviation for Class B is 9.8. Which of the following is the most valid conclusion?',
      promptId: 'Dua kelas A dan B memiliki nilai rata-rata ujian matematika yang sama, yaitu 78. Kelas A memiliki standar deviasi 3.2, sedangkan kelas B memiliki standar deviasi 8.6. Manakah kesimpulan yang benar?',
      options: [
        'Scores in Class A are more consistent and tightly clustered around 78 than scores in Class B.',
        'Scores in Class B are more consistent than scores in Class A.',
        'The highest test score must have been achieved by a student in Class A.',
        'Class B has a larger total number of students.'
      ],
      correctAnswer: 'A',
      explanation: 'Standar deviasi mengukur persebaran data di sekitar mean. Standar deviasi yang lebih kecil (Kelas A = 3.2) berarti nilai-nilai siswa sangat rapat terkonsentrasi di dekat mean (lebih seragam/homogen). Kelas B memiliki persebaran yang jauh lebih lebar.',
      distractorAnalysis: {
        B: 'Standar deviasi besar berarti lebih tersebar (heterogen), bukan seragam.',
        C: 'Standar deviasi tidak menentukan individu peraih nilai ekstrem tertinggi.',
        D: 'Standar deviasi tidak bergantung pada total ukuran sampel.'
      },
      subtopic: 'Interpreting Standard Deviation',
      difficulty: 'easy',
      hint: 'Standar deviasi kecil = data rapat dan homogen di sekitar rata-rata.'
    }
  ],
  conceptSections: [
    {
      id: 'data-c1',
      title: 'Statistika Deskriptif & Inferensial di Digital SAT',
      summary: 'Soal statistika Digital SAT berfokus pada penalaran konseptual daripada perhitungan manual yang rumit: perbandingan standar deviasi visual, efek outlier, dan penyusunan tabel kontingensi.',
      formulaBox: [
        'Mean: $\\bar{x} = \\frac{\\sum x}{n}$ $\\rightarrow$ sangat terpengaruh outlier',
        'Median: nilai tengah data terurut $\\rightarrow$ resisten terhadap outlier',
        'Range: $\\text{Maksimum} - \\text{Minimum}$',
        'Standar Deviasi: ukuran penyebaran jarak rata-rata data dari mean',
        'Probabilitas Bersyarat: $P(A \\mid B) = \\frac{\\text{Jumlah yang memenuhi } A \\text{ dan } B}{\\text{Total kondisi } B}$'
      ],
      commonMistakes: [
        'Pada tabel dua arah (two-way table), siswa sering salah menentukan angka penyebut (apakah total keseluruhan, total baris, atau total kolom).',
        'Siswa mengira ukuran sampel yang lebih besar memperbesar margin of error.'
      ],
      proTips: [
        'Untuk probabilitas bersyarat, cari kata kunci "Given that...", "Of those who...", "If a student who chose X is selected...". Frasa ini menentukan PENYEBUT pecahan!',
        'Jika distribusi miring ke kanan (right-skewed / positive skew), maka $\\text{Mean} > \\text{Median}$. Jika miring ke kiri (left-skewed), maka $\\text{Mean} < \\text{Median}$.'
      ],
      teacherNotes: {
        studentMisconceptions: [
          'Siswa sering menganggap bahwa jika rata-rata meningkat, maka setiap nilai di dalam data pasti ikut meningkat.'
        ],
        alternativeApproaches: [
          {
            name: 'Penyelidikan Kondisi Penyebut (Denominator Anchor)',
            description: 'Latih siswa untuk mencoret seluruh baris/kolom tabel yang tidak relevan sesuai kondisi yang diberikan dalam soal sebelum menghitung probabilitas.'
          }
        ],
        classroomAnalogy: 'Outlier di ruang kelas: Jika Jeff Bezos masuk ke dalam ruangan guru, nilai rata-rata kekayaan seluruh orang di ruangan melonjak menjadi miliaran rupiah, tetapi nilai median kekayaan hampir tidak bergerak sama sekali.',
        sparkQuestions: [
          'Mengapa kita tidak bisa menggeneralisasikan hasil survei yang diambil secara sukarela di media sosial ke seluruh populasi suatu negara?'
        ]
      }
    }
  ],
  workedExamples: [
    {
      id: 'data-ex-1',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'A survey asked 120 adults about pet ownership and homeownership. The results are shown in the two-way table below:\n$\begin{array}{|l|c|c|r|} \hline & \text{Owns a Pet} & \text{No Pet} & \text{Total} \\ \hline \text{Homeowner} & 38 & 12 & 50 \\ \hline \text{Renter} & 42 & 28 & 70 \\ \hline \text{Total} & 80 & 40 & 120 \\ \hline \end{array}$\nWhat fraction of the respondents who do not own a pet are homeowners?',
      promptId: 'Sebuah klinik mencatat 120 pasien berdasarkan kelompok usia dan status vaksinasi:\\n- Dewasa: 54 divaksin, 16 belum divaksin.\\n- Remaja: 38 divaksin, 12 belum divaksin.\\nJika seorang pasien yang BELUM divaksin dipilih secara acak, berapakah probabilitas bahwa pasien tersebut adalah seorang Remaja?',
      options: ['$\\frac{12}{28}$', '$\\frac{12}{50}$', '$\\frac{12}{120}$', '$\\frac{38}{50}$'],
      correctAnswer: 'A',
      explanation: 'Perhatikan kondisi prasyarat: "Jika seorang pasien yang BELUM divaksin dipilih...". Ini berarti ruang sampel (penyebut) HANYA kelompok pasien yang belum divaksin. Total pasien belum divaksin $= 16\\text{ (Dewasa)} + 12\\text{ (Remaja)} = 28$. Jumlah remaja yang belum divaksin adalah $12$. Maka probabilitasnya adalah $\\frac{12}{28}$ (dapat disederhanakan menjadi $\\frac{3}{7}$).',
      distractorAnalysis: {
        B: 'Siswa menggunakan total remaja ($38 + 12 = 50$) sebagai penyebut.',
        C: 'Siswa menggunakan total seluruh pasien ($120$) sebagai penyebut (mengabaikan kondisi bersyarat).',
        D: 'Siswa mengambil jumlah remaja yang sudah divaksin.'
      },
      subtopic: 'Conditional Probability from Two-Way Table',
      difficulty: 'hard',
      methods: [
        {
          title: 'Metode Penentuan Batas Ruang Sampel (Denominator Restricting)',
          steps: [
            '1. Isolasi kolom "Belum Divaksin": total $= 16 + 12 = 28$.',
            '2. Ambil pembilang baris "Remaja": 12.',
            '3. Probabilitas $= 12 / 28 = 3/7$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa membagi 12 dengan 120 (total populasi) karena terbiasa dengan probabilitas gabungan sederhana tanpa memperhatikan kata kunci bersyarat.'
    },
    {
      id: 'data-ex-2',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'An agricultural research firm tests a new organic fertilizer on 250 chili pepper plants selected randomly from a single farm in West Java. The treated plants showed a statistically significant $18\%$ increase in yield compared to untreated control plants. To which of the following populations can this finding be most reliably generalized?',
      promptId: 'Sebuah penelitian acak mengevaluasi efektivitas pupuk baru pada 250 tanaman cabai di sebuah perkebunan di Jawa Timur. Hasil penelitian menunjukkan peningkatan hasil panen yang signifikan secara statistik. Kepada populasi manakah kesimpulan penelitian ini dapat digeneralisasikan secara tepat?',
      options: [
        'All types of agricultural crops worldwide.',
        'All chili pepper plants grown under similar environmental conditions at that farm.',
        'Exclusively the 250 chili pepper plants specifically studied.',
        'All chili pepper varieties across all regions of Indonesia.'
      ],
      correctAnswer: 'B',
      explanation: 'Dalam metodologi sampling inferensial: Sampel acak dapat digeneralisasikan HANYA kepada populasi target yang diwakili oleh kerangka sampling (tanaman cabai di perkebunan tersebut di bawah kondisi tanah/cuaca serupa), dan TIDAK BOLEH diekstrapolasikan secara berlebihan ke seluruh varietas tanaman atau wilayah geografis yang berbeda tanpa pengujian lanjutan.',
      distractorAnalysis: {
        A: 'Generalisasi yang terlalu luas dan tidak berdasar secara ilmiah.',
        C: 'Jika sampel dipilih secara acak, kesimpulan dapat digeneralisasikan melampaui 250 tanaman sampel tersebut.',
        D: 'Iklim dan tanah di wilayah Indonesia lain bisa sangat berbeda sehingga generalisasi ini tidak valid.'
      },
      subtopic: 'Statistical Generalizability',
      difficulty: 'medium',
      methods: [
        {
          title: 'Aturan Generalisasi SAT (Scope of Inference)',
          steps: [
            '1. Cek: Apakah pemilihan sampel acak (random sample)? YA -> kesimpulan bisa digeneralisasikan ke populasi yang diwakili sampel.',
            '2. Cek populasi batas: tanaman cabai di perkebunan tersebut.',
            '3. Hindari opsi yang membuat klaim universal ("semua tanaman di dunia/Indonesia").'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa sering memilih opsi generalisasi terluas karena mengira klaim penelitian berskala besar selalu lebih baik.'
    },
    {
      id: 'data-ex-3',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'Dataset $X$ has mean $\mu_X$ and standard deviation $\sigma_X$. Dataset $Y$ is created by multiplying each element of $X$ by 3 and then subtracting 5. Which expression gives the standard deviation $\sigma_Y$ of Dataset $Y$ in terms of $\sigma_X$?',
      promptId: 'Sebuah set data $X$ terdiri dari bilangan $\\{10, 12, 14, 16, 18\\}$. Set data $Y$ diperoleh dengan mengalikan setiap elemen pada set data $X$ dengan 3 kemudian mengurangkan hasilnya dengan 5 ($Y = 3X - 5$). Bagaimana perbandingan standar deviasi set data $Y$ ($\\sigma_Y$) terhadap standar deviasi set data $X$ ($\\sigma_X$)?',
      options: [
        '$\\sigma_Y = 3\\sigma_X$',
        '$\\sigma_Y = 3\\sigma_X - 5$',
        '$\\sigma_Y = \\sigma_X$',
        '$\\sigma_Y = 9\\sigma_X$'
      ],
      correctAnswer: 'A',
      explanation: 'Sifat transformasi linier pada statistika: Mengalikan seluruh data dengan konstanta $c$ akan mengalikan standar deviasi dengan $|c|$ ($|3| = 3$). Menambah atau mengurangkan konstanta ($-5$) HANYA menggeser posisi data tanpa mengubah jarak atau persebaran antar data, sehingga tidak mempengaruhi standar deviasi sama sekali. Jadi $\\sigma_Y = 3\\sigma_X$.',
      distractorAnalysis: {
        B: 'Miskonsepsi umum: siswa mengira pengurangan 5 juga mengurangi nilai standar deviasi.',
        C: 'Siswa mengira standar deviasi kebal terhadap perkalian skala.',
        D: 'Siswa mengacaukan standar deviasi dengan varians (varians dikalikan $3^2 = 9$).'
      },
      subtopic: 'Linear Transformations of Spread',
      difficulty: 'hard',
      methods: [
        {
          title: 'Sifat Transformasi Linier Statistika',
          steps: [
            '1. Operasi perkalian skala $c$: $\\sigma_{\\text{baru}} = |c| \\times \\sigma_{\\text{lama}}$.',
            '2. Operasi pergeseran penambahan/pengurangan: tidak mengubah $\\sigma$.',
            '3. Kesimpulan: $\\sigma_Y = 3\\sigma_X$.'
          ],
          speedRating: 'Fast'
        }
      ],
      studentPitfall: 'Siswa mengikutsertakan angka -5 ke dalam rumus standar deviasi baru karena mengira semua statistik berubah sama seperti mean.'
    }
  ],
  practiceQuestions: [
    {
      id: 'data-pr-1',
      moduleId: 'data-analysis-statistics',
      type: 'student_produced',
      prompt: 'A set of 7 distinct numbers has a mean of 18. If a new number, 34, is added to the dataset, what is the new mean of the 8 numbers?',
      promptId: 'Rata-rata (mean) dari lima bilangan adalah 18. Jika sebuah bilangan keenam ditambahkan ke dalam kumpulan bilangan tersebut sehingga rata-rata baru menjadi 21, berapakah nilai bilangan keenam tersebut?',
      correctAnswer: '36',
      explanation: 'Jumlah total 5 bilangan pertama $= 5 \\times 18 = 90$. Jumlah total 6 bilangan $= 6 \\times 21 = 126$. Nilai bilangan keenam $= 126 - 90 = 36$.',
      subtopic: 'Mean and Total Sum Formula',
      difficulty: 'easy',
      hint: 'Total baru (6 * 21 = 126) dikurangi total lama (5 * 18 = 90).'
    },
    {
      id: 'data-pr-2',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'Which of the following actions will reliably reduce the margin of error of a sample survey, assuming the sampling method remains randomly representative?',
      promptId: 'Manakah tindakan yang akan memperkecil margin of error dari suatu survei probabilitas sampel acak?',
      options: [
        'Increasing the sample size of respondents.',
        'Decreasing the sample size of respondents.',
        'Widening the confidence level from 95% to 99%.',
        'Switching to a voluntary online poll.'
      ],
      correctAnswer: 'A',
      explanation: 'Margin of error berbanding terbalik dengan akar kuadrat ukuran sampel ($ME \\propto \\frac{1}{\\sqrt{n}}$). Memperbanyak ukuran sampel ($n$) memberikan estimasi yang lebih presisi dan secara langsung memperkecil margin of error.',
      distractorAnalysis: {
        B: 'Memperkecil sampel akan memperbesar margin of error.',
        C: 'Menaikkan tingkat keyakinan memperlebar interval dan margin of error.',
        D: 'Voting sukarela menghasilkan bias seleksi mandiri yang merusak validitas survei.'
      },
      subtopic: 'Factors Affecting Margin of Error',
      difficulty: 'medium',
      hint: 'Ukuran sampel n yang lebih besar selalu memperkecil margin of error.'
    },
    {
      id: 'data-pr-3',
      moduleId: 'data-analysis-statistics',
      type: 'student_produced',
      prompt: 'The table below shows the distribution of blood types in a hospital donor pool:\n$\begin{array}{|l|c|c|r|} \hline & \text{Rh Positive} & \text{Rh Negative} & \text{Total} \\ \hline \text{Type O} & 45 & 15 & 60 \\ \hline \text{Type A} & 35 & 5 & 40 \\ \hline \text{Total} & 80 & 20 & 100 \\ \hline \end{array}$\nWhat is the probability that a randomly chosen donor who is Rh Negative has Type O blood?',
      promptId: 'Kumpulan data terdiri dari 7 bilangan terurut: $4, 7, 9, x, 15, 18, 22$. Jika mean dari kumpulan data tersebut adalah 13, berapakah nilai dari $x$?',
      correctAnswer: '16',
      explanation: 'Total jumlah $= 7 \\times 13 = 91$. Jumlah bilangan yang diketahui: $4 + 7 + 9 + 15 + 18 + 22 = 75$. Nilai $x = 91 - 75 = 16$.',
      subtopic: 'Missing Data Point from Mean',
      difficulty: 'easy',
      hint: 'Total = 7 * 13 = 91. Kurangkan dengan 75.'
    },
    {
      id: 'data-pr-4',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'The values in a dataset are $\{5, 8, 12, 14, 16, 19, 21, 23\}$. What is the interquartile range (IQR) of this dataset?',
      promptId: 'Jika sebuah distribusi frekuensi memiliki bentuk menjulur ke kanan ($skewed\\ to\\ the\\ right$), manakah hubungan yang paling mungkin antara nilai mean dan median?',
      options: [
        '$\\text{Mean} > \\text{Median}$',
        '$\\text{Mean} < \\text{Median}$',
        '$\\text{Mean} = \\text{Median}$',
        '$\\text{Standar Deviasi} = 0$'
      ],
      correctAnswer: 'A',
      explanation: 'Pada distribusi yang menjulur ke kanan (ekor panjang di sebelah kanan/nilai tinggi), nilai-nilai ekstrem tinggi menarik mean ke arah kanan. Oleh karena itu, $\\text{Mean} > \\text{Median}$.',
      distractorAnalysis: {
        B: '$\\text{Mean} < \\text{Median}$ terjadi pada distribusi menjulur ke kiri (skewed left).',
        C: 'Mean = Median terjadi pada distribusi simetris sempurna.',
        D: 'Standar deviasi 0 hanya terjadi jika semua data bernilai identik.'
      },
      subtopic: 'Skewness and Measures of Center',
      difficulty: 'medium',
      hint: 'Ekor di kanan menarik mean lebih besar daripada median.'
    },
    {
      id: 'data-pr-5',
      moduleId: 'data-analysis-statistics',
      type: 'student_produced',
      prompt: 'A basketball player scored 18, 22, 25, 19, and 26 points in their first 5 games. How many points must the player score in the 6th game so that their overall scoring average becomes 23 points per game?',
      promptId: 'Nilai ujian dari 6 orang siswa adalah: 68, 74, 82, 88, 90, 96. Berapakah median dari nilai ujian tersebut?',
      correctAnswer: '85',
      explanation: 'Data sudah terurut. Karena $n = 6$ (genap), median adalah rata-rata data ke-3 dan ke-4: $\\frac{82 + 88}{2} = \\frac{170}{2} = 85$.',
      subtopic: 'Median of Even Data Set',
      difficulty: 'easy',
      hint: '(82 + 88) / 2 = 85.'
    },
    {
      id: 'data-pr-6',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'A pediatrician uses the line of best fit $W = 7.2 + 1.4m$ to model the weight $W$, in pounds, of infants where $m$ is age in months ($0 \le m \le 12$). What does the value $1.4$ represent in this model?',
      promptId: 'Sebuah model regresi linier memprediksi berat badan bayi $W$ dalam pon berdasarkan usia $m$ dalam bulan: $\\hat{W} = 1.4m + 7.2$. Apa arti dari nilai $7.2$ dalam konteks model ini?',
      options: [
        'The estimated birth weight of an infant (at age 0 months).',
        'The estimated monthly increase in the infant\'s weight.',
        'The maximum weight an infant can reach.',
        'The age in months when an infant reaches 10 pounds.'
      ],
      correctAnswer: 'A',
      explanation: 'Nilai $7.2$ adalah konstanta intersep-$y$ (nilai $\\hat{W}$ saat $m = 0$). Dalam konteks bayi, usia $0$ bulan adalah saat baru lahir, sehingga $7.2$ pon adalah estimasi berat lahir.',
      distractorAnalysis: {
        B: 'Pertambahan berat per bulan adalah gradien $1.4$, bukan $7.2$.',
        C: '7.2 bukan batas maksimum.',
        D: 'Tafsiran keliru terhadap konstanta.'
      },
      subtopic: 'Regression Constant Real-World Meaning',
      difficulty: 'easy',
      hint: 'Saat m = 0 (baru lahir), W = 7.2 pon.'
    },
    {
      id: 'data-pr-7',
      moduleId: 'data-analysis-statistics',
      type: 'student_produced',
      prompt: 'A quality inspector tested 500 light bulbs manufactured at a factory and found that 15 bulbs were defective. At this rate, how many defective bulbs would be expected in a total production run of 12,000 bulbs?',
      promptId: 'Kumpulan data $A$ memiliki range sebesar 24. Jika setiap bilangan dalam kumpulan data $A$ dikalikan 2 dan kemudian ditambah 7, berapakah range dari kumpulan data yang baru?',
      correctAnswer: '48',
      explanation: 'Range $= \\text{Maksimum} - \\text{Minimum}$. Misalkan nilai awal maksimum $M$ dan minimum $m$ dengan $M - m = 24$. Setelah transformasi: $\\text{Maksimum Baru} = 2M + 7$ dan $\\text{Minimum Baru} = 2m + 7$. Range Baru $= (2M + 7) - (2m + 7) = 2(M - m) = 2(24) = 48$. Penambahan 7 saling menghilangkan!',
      subtopic: 'Range Linear Transformation',
      difficulty: 'medium',
      hint: 'Penambahan konstanta (+7) tidak mengubah range. Perkalian (2) menggandakan range: 2 * 24 = 48.'
    },
    {
      id: 'data-pr-8',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'A dataset has a median of 40 and a range of 30. If every value in the dataset is multiplied by 2, what is the new range of the dataset?',
      promptId: 'Di sebuah SMA, 60% siswa mengikuti klub olahraga dan 40% siswa mengikuti klub seni. Sebanyak 25% siswa mengikuti KEDUA klub tersebut. Jika seorang siswa yang dipilih secara acak mengikuti klub seni, berapakah probabilitas bahwa ia JUGA mengikuti klub olahraga?',
      options: ['25%', '40%', '62.5%', '75%'],
      correctAnswer: 'C',
      explanation: 'Probabilitas bersyarat: $P(\\text{Olahraga} \\mid \\text{Seni}) = \\frac{P(\\text{Olahraga } \\cap \\text{ Seni})}{P(\\text{Seni})}$. Substitusi: $\\frac{0.25}{0.40} = \\frac{25}{40} = \\frac{5}{8} = 0.625 = 62.5\\%$.',
      distractorAnalysis: {
        A: 'Siswa hanya mengambil persentase irisan (25%).',
        B: 'Siswa mengambil persentase seni saja.',
        D: 'Siswa salah membagi 25 dengan 35.'
      },
      subtopic: 'Conditional Probability Formula',
      difficulty: 'hard',
      hint: 'Bagi persentase irisan (0.25) dengan persentase kondisi seni (0.40): 25/40 = 62.5%.'
    },
    {
      id: 'data-pr-9',
      moduleId: 'data-analysis-statistics',
      type: 'student_produced',
      prompt: 'The mean score of 12 students in Group 1 is 80, and the mean score of 8 students in Group 2 is 90. What is the combined mean score of all 20 students?',
      promptId: 'Sebuah set data terdiri dari bilangan 4, 8, 12, 16. Berapakah nilai rata-rata (mean) dari set data ini?',
      correctAnswer: '10',
      explanation: 'Jumlah: $4 + 8 + 12 + 16 = 40$. Jumlah data: $4$. Rata-rata $= 40 / 4 = 10$.',
      subtopic: 'Basic Arithmetic Mean',
      difficulty: 'easy',
      hint: '40 / 4 = 10.'
    },
    {
      id: 'data-pr-10',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'A university researcher wants to survey the study habits of undergraduate students on campus. Which of the following sampling designs is most likely to produce an unbiased, representative sample?',
      promptId: 'Sebuah penelitian ingin mengetahui rata-rata waktu tidur harian mahasiswa di sebuah universitas beranggotakan 15,000 mahasiswa. Manakah metode pengambilan sampel yang paling valid dan representatif?',
      options: [
        'Randomly selecting 300 students using an automated student ID number generator.',
        'Interviewing the first 300 students who enter the campus library at 7:00 AM.',
        'Posting a voluntary survey link on the university online social media group.',
        'Interviewing all members of the varsity athletic teams.'
      ],
      correctAnswer: 'A',
      explanation: 'Pengambilan sampel acak sederhana ($Simple\\ Random\\ Sampling$) di mana setiap mahasiswa memiliki probabilitas yang sama untuk terpilih adalah metode emas yang meminimalkan bias seleksi dan representatif terhadap seluruh populasi universitas.',
      distractorAnalysis: {
        B: 'Mahasiswa yang datang ke perpustakaan pukul 07.00 pagi cenderung memiliki pola tidur yang tidak mewakili seluruh mahasiswa (bias jadwal).',
        C: 'Kuesioner sukarela online rentan terhadap bias respons mandiri (voluntary response bias).',
        D: 'Atlet basket memiliki pola latihan khusus yang tidak mewakili pola tidur mahasiswa umum.'
      },
      subtopic: 'Representative Sampling Methods',
      difficulty: 'medium',
      hint: 'Sampel acak sederhana memberi setiap anggota populasi kesempatan sama untuk terpilih.'
    },
    {
      id: 'data-pr-11',
      moduleId: 'data-analysis-statistics',
      type: 'student_produced',
      prompt: 'A dataset consists of five positive integers: $\{4, 6, 7, 9, x\}$. If the median is 7 and the mean is 8, what is the value of $x$?',
      promptId: 'Garis regresi memiliki persamaan $\\hat{y} = -2.5x + 30$. Jika nilai aktual data pada $x = 4$ adalah $y = 22$, berapakah nilai residual untuk titik tersebut?',
      correctAnswer: '2',
      explanation: 'Nilai prediksi: $\\hat{y} = -2.5(4) + 30 = -10 + 30 = 20$. Residual $= y - \\hat{y} = 22 - 20 = 2$.',
      subtopic: 'Residual Calculation',
      difficulty: 'medium',
      hint: 'Residual = Nilai Nyata - Nilai Prediksi = 22 - 20 = 2.'
    },
    {
      id: 'data-pr-12',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'Dataset $K$ and Dataset $L$ each consist of 100 values. In Dataset $K$, the values are uniformly distributed between 10 and 90. In Dataset $L$, 80 of the values are exactly 50, and the remaining 20 values are either 49 or 51. Which of the following statements is true?',
      promptId: 'Kumpulan data $K$ dan $L$ masing-masing berisi 100 bilangan. Histogram data $K$ berbentuk lonceng simetris sempurna di sekitar angka 50. Histogram data $L$ seragam merata ($uniform$) dari 0 hingga 100. Manakah yang memiliki standar deviasi lebih besar?',
      options: [
        'Dataset $K$ has a greater standard deviation than Dataset $L$.',
        'Dataset $L$ has a greater standard deviation than Dataset $K$.',
        'Both datasets have the exact same standard deviation.',
        'The standard deviation cannot be compared without individual numerical records.'
      ],
      correctAnswer: 'A',
      explanation: 'Standar deviasi mengukur seberapa jauh data tersebar dari pusat (mean = 50). Pada data $K$ yang berbentuk lonceng, mayoritas data menumpuk sangat dekat dengan pusat (50). Pada data $L$ yang seragam, proporsi data di ujung-ujung ekstrem (dekat 0 dan 100) jauh lebih banyak dibandingkan data lonceng. Oleh karena itu, data $L$ lebih tersebar dan memiliki standar deviasi lebih besar.',
      distractorAnalysis: {
        B: 'Data berbentuk lonceng memiliki konsentrasi tinggi di pusat sehingga deviasinya lebih kecil.',
        C: 'Penyebaran keduanya sangat berbeda.',
        D: 'Bentuk distribusi sudah cukup untuk menyimpulkan perbandingan persebaran relatif.'
      },
      subtopic: 'Visual Comparison of Standard Deviation',
      difficulty: 'hard',
      hint: 'Data seragam memiliki proporsi data di titik ekstrem lebih banyak daripada data kurva lonceng.'
    }
  ],
  exitTicket: [
    {
      id: 'data-exit-1',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'A set of 20 test scores has a mean of 75 and a median of 74. If two new students join the class and both score 100, which of the following describes the effect on the mean and median?',
      promptId: 'Jika nilai outlier terkecil (ekstrem rendah) dihapus dari suatu kumpulan data, apa yang terjadi pada nilai mean dan median?',
      options: [
        'The mean will definitely increase, and the median will either stay the same or increase slightly.',
        'The mean will decrease, and the median will increase.',
        'Both the mean and the median will definitely decrease.',
        'Neither the mean nor the median will change.'
      ],
      correctAnswer: 'A',
      explanation: 'Menghapus nilai yang sangat rendah akan menghilangkan beban penarik mean ke bawah, sehingga nilai mean pasti meningkat. Median hanya bergeser sedikit ke kanan atau tetap, tergantung nilai data di sekitarnya.',
      distractorAnalysis: {
        B: 'Menghilangkan nilai rendah menaikkan mean, bukan menurunkannya.',
        C: 'Nilai tidak berkurang saat angka kecil dibuang.',
        D: 'Mean pasti berubah secara matematis.'
      },
      subtopic: 'Removing Outlier Impact',
      difficulty: 'easy',
      hint: 'Membuang nilai terkecil akan menaikkan rata-rata (mean).'
    },
    {
      id: 'data-exit-2',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'A political poll estimates that a mayoral candidate has $52\%$ support with a margin of error of $\pm 3\%$ at a $95\%$ confidence level. Which of the following is the most accurate interpretation?',
      promptId: 'Sebuah jajak pendapat terhadap 1,000 warga melaporkan dukungan kandidat sebesar $52\\%$ dengan margin of error $3\\%$ pada tingkat keyakinan 95%. Manakah pernyataan yang paling akurat?',
      options: [
        'The true population support for the candidate is plausibly between $49\%$ and $55\%$.',
        'The candidate is guaranteed to win the election with at least $52\%$ of the vote.',
        'Exactly $3\%$ of respondents cast invalid or uncounted ballots.',
        'A repeat survey of 1,000 other residents would yield exactly $52\%$.'
      ],
      correctAnswer: 'A',
      explanation: 'Rentang estimasi interval $= 52\\% \\pm 3\\% = [49\\%, 55\\%]$.',
      distractorAnalysis: {
        B: 'Karena batas bawah 49% berada di bawah 50%, kandidat belum dipastikan menang.',
        C: 'Margin of error bukan persentase suara tidak valid.',
        D: 'Variabilitas sampling menyebabkan sampel baru bisa menghasilkan persentase berbeda dalam rentang wajar.'
      },
      subtopic: 'Confidence Interval Meaning',
      difficulty: 'medium',
      hint: '52% - 3% = 49% hingga 52% + 3% = 55%.'
    },
    {
      id: 'data-exit-3',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'A scatterplot displays the outdoor temperature on the horizontal axis and natural gas consumption for home heating on the vertical axis. The correlation coefficient is $r = -0.88$. What does this value indicate?',
      promptId: 'Sebuah scatterplot menunjukkan korelasi negatif kuat antara suhu luar ruangan ($x$) dan konsumsi gas pemanas ruangan ($y$). Apa yang diindikasikan oleh korelasi negatif kuat ini?',
      options: [
        'As outdoor temperature increases, home heating gas consumption tends to decrease.',
        'As outdoor temperature increases, home heating gas consumption also increases.',
        'Outdoor temperature causes gas consumption to become zero.',
        'There is no meaningful linear association between the two variables.'
      ],
      correctAnswer: 'A',
      explanation: 'Korelasi negatif berarti kedua variabel bergerak dalam arah yang berlawanan: kenaikan pada variabel prediktor ($x$) diasosiasikan dengan penurunan pada variabel respon ($y$).',
      distractorAnalysis: {
        B: 'Ini adalah definisi korelasi positif.',
        C: 'Korelasi tidak berarti nilai jatuh ke nol.',
        D: 'Korelasi kuat berarti ada hubungan linier yang sangat konsisten.'
      },
      subtopic: 'Negative Correlation Interpretation',
      difficulty: 'easy',
      hint: 'Korelasi negatif: variabel x naik, variabel y turun.'
    },
    {
      id: 'data-exit-4',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'In a survey of 80 hospital nurses, 55 work the night shift. Of the night shift nurses, 20 are certified in trauma care. What fraction of the night shift nurses are certified in trauma care?',
      promptId: 'Sebuah tabel menunjukkan 80 karyawan: 30 pria (10 manajer, 20 staf) dan 50 wanita (15 manajer, 35 staf). Berapakah probabilitas seorang staf yang dipilih secara acak adalah seorang pria?',
      options: ['$\\frac{20}{55}$', '$\\frac{20}{80}$', '$\\frac{20}{30}$', '$\\frac{35}{55}$'],
      correctAnswer: 'A',
      explanation: 'Kondisi: "seorang STAF yang dipilih secara acak...". Penyebut adalah total staf $= 20\\text{ (pria)} + 35\\text{ (wanita)} = 55$. Pembilang adalah staf pria $= 20$. Probabilitas $= \\frac{20}{55}$ (atau $\\frac{4}{11}$).',
      distractorAnalysis: {
        B: 'Siswa menggunakan total seluruh 80 karyawan sebagai penyebut.',
        C: 'Siswa menggunakan total seluruh pria (30) sebagai penyebut.',
        D: 'Siswa mengambil staf wanita.'
      },
      subtopic: 'Conditional Probability Table Lookup',
      difficulty: 'medium',
      hint: 'Penyebut adalah total staf (20 + 35 = 55). Pembilang adalah staf pria (20).'
    },
    {
      id: 'data-exit-5',
      moduleId: 'data-analysis-statistics',
      type: 'multiple_choice',
      prompt: 'If a statistician quadruples ($4\times$) the sample size of a simple random survey while maintaining the same population variability, what happens to the margin of error?',
      promptId: 'Jika seorang peneliti meningkatkan ukuran sampel penelitian dari $n = 100$ menjadi $n = 400$, apa yang terjadi pada margin of error survei?',
      options: [
        'The margin of error is halved (reduced to half of its original value).',
        'The margin of error is reduced to one-fourth of its original value.',
        'The margin of error doubles.',
        'The margin of error remains unchanged.'
      ],
      correctAnswer: 'A',
      explanation: 'Rumus margin of error sebanding dengan $\\frac{1}{\\sqrt{n}}$. Jika sampel naik 4 kali lipat ($n \\times 4$), pembagi menjadi $\\sqrt{4} = 2$. Oleh karena itu margin of error terbagi 2 (berkurang menjadi setengah dari semula).',
      distractorAnalysis: {
        B: 'Siswa lupa tanda akar kuadrat pada ukuran sampel n.',
        C: 'Memperbanyak sampel tidak pernah memperbesar error.',
        D: 'Ukuran sampel mempengaruhi presisi estimasi.'
      },
      subtopic: 'Sample Size Inverse Square Root Law',
      difficulty: 'hard',
      hint: 'Margin of error proporsional dengan 1/sqrt(n). sqrt(400/100) = sqrt(4) = 2, jadi error terbagi 2.'
    }
  ],
  discussionPrompts: [
    {
      id: 'data-disc-1',
      topic: 'Korelasi vs Kausalitas di SAT Reading & Math',
      prompt: 'Bagaimana cara melatih siswa agar tidak pernah mengasumsikan hubungan sebab-akibat (kausasi) dari studi observasional pada soal SAT?',
      targetInsight: 'Kausasi hanya dapat dibuktikan jika ada eksperimen acak terkontrol (randomized controlled experiment) dengan kelompok kontrol, bukan survei observasional biasa.'
    }
  ],
  lessonPlan: {
    warmUp: {
      duration: '5 Menit',
      focus: 'Entry Ticket Rata-rata & Outlier',
      activity: 'Siswa mengidentifikasi dampak penambahan data ekstrem pada mean vs median.'
    },
    conceptInstruction: {
      duration: '15 Menit',
      focus: 'Tabel Dua Arah & Ruang Lingkup Generalisasi',
      activity: 'Latih teknik "Denominator Anchor" untuk probabilitas bersyarat dan diskusikan syarat generalisasi populasi.'
    },
    guidedPractice: {
      duration: '20 Menit',
      focus: 'Latihan 12 Soal Regresi & Margin of Error',
      activity: 'Siswa menyelesaikan soal residual regresi dan mengidentifikasi jebakan kata kunci pada pilihan ganda.'
    },
    exitWrapUp: {
      duration: '5 Menit',
      focus: 'Exit Ticket & Refleksi Guru',
      activity: 'Cek apakah pemahaman hukum $1/\\sqrt{n}$ pada margin of error sudah tuntas.'
    }
  }
};
