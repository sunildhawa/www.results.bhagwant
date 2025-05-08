 
    const students = [
      // Example students data with their respective semesters
      {
          roll: "12210010001",
          name: "ABHISHEK TAILOR",
          Fname: "SHIVRAJ TAILOR",
          Mname: "SAROJ DEVI",
          EnrollmentNo: "122100100001",
          Institute: "FACULTY OF COMPUTER SCIENCE & APP",
          semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 7.74,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "A" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
      {
        roll: "12210010003",
        name: "AYUSH SINDAL",
        Fname: "RAKESH SINDAL",
        Mname: "SAVITA SINDAL",
        EnrollmentNo: "122100100003",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
        credit: 28.00,
        sgpa: 8.12,
        cgpa: 7.44,
        ec: 112.00,
        subjects: [
            { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
            { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
            { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "A" },
            { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
            { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
            { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
        ]
    },
    {
        roll: "12210010004",
        name: "BABLU YADAV",
        Fname: "SITARAM YADAV",
        Mname: "MANJU YADAV",
        EnrollmentNo: "122100100004",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 27.00,
          sgpa: 7.12,
          cgpa: 6.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "D" },
          ]
      },
    {
        roll: "12210010005",
        name: "BHARAT KUMAR",
        Fname: "LAKHPAT RAM",
        Mname: "LAXMI KUMARI",
        EnrollmentNo: "122100100005",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 27.00,
          sgpa: 7.12,
          cgpa: 6.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "E" },
          ]
      },
    {
        roll: "12210010006",
        name: "CHINNU",
        Fname: "SURAJ MAL TAILOR",
        Mname: "RENU DEVI",
        EnrollmentNo: "122100100006",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 7.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "A" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
    {
        roll: "12210010009",
        name: "HARSHIT KUMAR",
        Fname: "DEVI LAL MONPURIA",
        Mname: "KIRAN DEVI",
        EnrollmentNo: "122100100009",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 27.00,
          sgpa: 7.12,
          cgpa: 6.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "D" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
    {
        roll: "12210010012",
        name: "KHUSHBU KHAN",
        Fname: "ABDUL GAFFAR",
        Mname: "NASEEM KHAN",
        EnrollmentNo: "122100100012",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
        credit: 28.00,
        sgpa: 8.12,
        cgpa: 7.44,
        ec: 112.00,
        subjects: [
            { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
            { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
            { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
            { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
            { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
            { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
        ]
    },
    {
        roll: "12210010013",
        name: "KRISHNA KANHAIYA SHARMA",
        Fname: "NIKHIL SHARMA",
        Mname: "SANJU SHARMA",
        EnrollmentNo: "122100100013",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
        credit: 28.00,
        sgpa: 8.12,
        cgpa: 6.44,
        ec: 112.00,
        subjects: [
            { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
            { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "C" },
            { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
            { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
            { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
            { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "D" },
        ]
    },
    {
        roll: "12210010014",
        name: "KUNAL VERMA",
        Fname: "ANIL VERMA",
        Mname: "MAMTA VERMA",
        EnrollmentNo: "122100100014",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 27.00,
          sgpa: 7.12,
          cgpa: 6.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "E" },
          ]
      },
    {
        roll: "12210010015",
        name: "MAHAVEER KUMAWAT",
        Fname: "HANSRAJ KUMAWAT",
        Mname: "KANCHAN",
        EnrollmentNo: "122100100015",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 7.12,
          cgpa: 6.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
    {
        roll: "12210010016",
        name: "MANISH CHOUDHARY",
        Fname: "RAJENDRA SINGH CHOUDHARY",
        Mname: "MADHU DEVI",
        EnrollmentNo: "122100100016",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 7.64,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
    {
        roll: "12210010017",
        name: "MOHAMMAD YASIR",
        Fname: "ILAMDEEN",
        Mname: "MALUKA BANO",
        EnrollmentNo: "122100100017",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 6.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
    {
        roll: "12210010018",
        name: "MOHAMMAD ARMAN KHAN",
        Fname: "SAYED AKHTAR",
        Mname: "RUKSANA BANO",
        EnrollmentNo: "122100100018",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
        credit: 27.00,
        sgpa: 7.12,
        cgpa: 6.44,
        ec: 112.00,
        subjects: [
            { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
            { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
            { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "C" },
            { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
            { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "D" },
            { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
        ]
    },
    {
        roll: "12210010020",
        name: "	PIYUSH VERMA",
        Fname: "ANILANAND VERMA",
        Mname: "ANITA VERMA",
        EnrollmentNo: "122100100020",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 27.00,
          sgpa: 6.12,
          cgpa: 5.44,
          ec: 110.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "A" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "C" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "D" },
          ]
      },
    {
        roll: "12210010021",
        name: "RAHUL TIWARI",
        Fname: "RAMESH CHAND SHARMA",
        Mname: "MADHU SHARMA",
        EnrollmentNo: "122100100021",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 7.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "A" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
    {
        roll: "12210010022",
        name: "RAHUL TYAGI",
        Fname: "MUKUT LAL TYAGI	E",
        Mname: "KUSUM TYAGI",
        EnrollmentNo: "122100100022",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
          credit: 27.00,
          sgpa: 7.12,
          cgpa: 6.44,
          ec: 111.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "C" },
          ]
      },
    {
        roll: "12210010023",
        name: "ROHIT MIRCHANDANI",
        Fname: "PURSHOTTAM MIRCHANDANI",
        Mname: "JAYA MIRCHANDANI",
        EnrollmentNo: "122100100023",
        Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
        semester: "BCA V SEM",
        credit: 28.00,
        sgpa: 8.12,
        cgpa: 7.34,
        ec: 112.00,
        subjects: [
            { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
            { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
            { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "A" },
            { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
            { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
            { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "C" },
        ]
    },
      {
        roll: "12210010024",
          name: "ROSHNEE SHARMA",
          Fname: "RAJESH SHARMA",
          Mname: "NEETA JHA",
          EnrollmentNo: "122100100024",
          Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
          semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 8.14,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "A" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "A" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "A" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
      {
        roll: "12210010025",
          name: "SANKET GURJAR",
          Fname: "NORAT MAL GURJAR",
          Mname: "LALI DEVI",
          EnrollmentNo: "122100100025",
          Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
          semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 7.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "A" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
      {
          roll: "12210010026",
          name: "SUNIL KUMAR",
          Fname: "SHUBH RAM",
          Mname: "GYARSI DEVI",
          EnrollmentNo: "122100100026",
          Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
          semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 7.94,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "A" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "A" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
      {
         roll: "12210010029",
          name: "VISHESH SHARMA",
          Fname: "MAHENDRA SHARMA",
          Mname: "HEMLATA SHARMA",
          EnrollmentNo: "122100100029",
          Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
          semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 6.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
      {
        roll: "12210010034",
          name: "SHIVRAJ JAJRA",
          Fname: "BIRMA RAM JAJRA",
          Mname: "MEERA DEVI",
          EnrollmentNo: "122100100034",
          Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
          semester: "BCA V SEM",
          credit: 27.00,
          sgpa: 7.12,
          cgpa: 5.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 6.0, grade: "B" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "C" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "D" },
          ]
      },
      {
          roll: "12210010028",
          name: "VISHAL JAGWANI",
          Fname: "GHANSHYAM JAGWANI",
          Mname: "RESHMA JAGWANI",
          EnrollmentNo: "122100100028",
          Institute: "FACULTY OF COMPUTER SCIENCE AND APPLICATION",
          semester: "BCA V SEM",
          credit: 28.00,
          sgpa: 8.12,
          cgpa: 7.44,
          ec: 112.00,
          subjects: [
              { code: "05BCA101", title: "SOFTWARE ENGINEERING", credit: 6.0, grade: "A" },
              { code: "05BCA102", title: "PROGRAMMING IN VISUAL BASIC", credit: 3.0, grade: "A" },
              { code: "05BCA103", title: "INFO.SYS.ANALYSIS DESIGN & IMPLEMENTION", credit: 6.0, grade: "B" },
              { code: "05BCA104", title: "TECH. DOCUMENTATION PREST.& COMM. SKILLS", credit: 6.0, grade: "B" },
              { code: "05BCA201", title: "SOFTWARE LAB BASED ON 05BCA-103 & 05BCA-104", credit: 3.0, grade: "A" },
              { code: "05BCA301", title: "DISCIPLINE AND CO-CURRICULAR ACTIVITIES", credit: 1.0, grade: "A" },
          ]
      },
        
      // Add more students for different semesters
  ];

  function search() {
      const roll = document.getElementById("rollInput").value.trim();
      const selectedSemester = document.getElementById("semesterSelect").value;
      const resultBox = document.getElementById("resultBox");
      const studentInfo = document.getElementById("studentInfo");
      const marksTable = document.getElementById("marksTable");
      const footer = document.querySelector(".footer");

      // Mapping the selected semester number to the actual semester name
      const semesterNames = {
          "1": "BCA I SEM",
          "2": "BCA II SEM",
          "3": "BCA III SEM",
          "4": "BCA IV SEM",
          "5": "BCA V SEM",
          "6": "BCA VI SEM"
      };

      // Clear previous results
      document.querySelectorAll('h6').forEach(h => h.remove());

      resultBox.style.display = "block";
      studentInfo.innerHTML = `<p style="text-align:center; color: green; font-weight: bold;">Processing your result, please wait...</p>`;
      marksTable.innerHTML = `
          <tr>
              <th>Subject Code</th>
              <th>Course Title</th>
              <th>Credits</th>
              <th>Grade</th>
          </tr>
      `;

      setTimeout(() => {
          // Find the student matching both roll number and semester
          const student = students.find(s => s.roll === roll && s.semester === semesterNames[selectedSemester]);

          if (student) {
              studentInfo.innerHTML = `
              <div  style='border: 1px solid gray; position: relative; margin-top: 20px; width: 327px'>
                 <h1 id='bg' style='text-align: center;'>Bhagwant University</h1>
                 <p style='text-align: center;'>AJMER, INDIA  </p>
                 <p style='text-align: center;'>SEMESTER GRADE REPORT</p>
                 <p style='text-align: center;'>B.C.A. IV Semester (MAY-JUNE 2024)</p>
                <img id='qr' style=' position: absolute; top:0;' src="BULOGO-removebg-preview.png" alt="">
              
                <div id='hi' style='border:1px solid gray; border-right: none;  margin-top: 62px; border-left: none; border-bottom: none;'>
                    <p><strong style='color: #004080; font-size: 12px; padding-right: 80px;'> Name:</strong>   ${student.name}</p>
                    <p><strong style='color: #004080; font-size: 12px; padding-right: 39px;'> Father's Name:</strong>  ${student.Fname}</p>
                    <p><strong style='color: #004080; font-size: 12px; padding-right: 35px;'> Mother's Name:</strong>   ${student.Mname}</p>
                    <p><strong style='color: #004080; font-size: 12px; padding-right: 71px;'> Roll No:</strong>  ${student.roll}</p>
                    <p><strong style='color: #004080; font-size: 12px; padding-right: 35px;'> Enrollment No:&nbsp;</strong>${student.EnrollmentNo}</p>
                    <p><strong style='color: #004080; font-size: 12px; padding-right: 70px;'> Institute:</strong>  ${student.Institute}</p>
                </div>
              </div>
             
              `;
              student.subjects.forEach(sub => {
                  marksTable.innerHTML += `
                      <tr>
                          <td>${sub.code}</td>
                          <td>${sub.title}</td>
                          <td>${sub.credit}</td>
                          <td>${sub.grade}</td>
                      </tr>
                  `;
              });
              marksTable.insertAdjacentHTML("afterend", `
         <div style='border: 1px solid gray; border-top-color: gray; width: 327px'>
           <p style="text-align: center; font-weight:700;">Verified by: Exam Department</p>
         <h6 style="text-align: center; font-weight:300; margin-top: 20px; font-size: 10px;  font-family: 'Times New Roman', Times, serif;
; ">
           <br> CREDIT EARNED IN THE SEMESTER : <b style="color: black;font-size: 14px; font-weight: 800;">${student.credit.toFixed(2)}</b>
           <br>
             SEMESTER GRADE POINT AVERAGE (SGPA):<b style="color: black;font-size: 14px; font-weight: 800;">${student.sgpa.toFixed(2)}</b>
           <br>
             CUMULATIVE GRADE POINT AVERAGE (CGPA):<b style="color: black;font-size: 14px; font-weight: 800;">${student.cgpa.toFixed(2)}</b>
           <br>
             EARNED CREDITS (EC):<b style="color: black;font-size: 14px; font-weight: 800;">${student.ec.toFixed(2)}</b>
         </h6>
        </div>
      `);
      footer.style.display = "block";
            } else {
                studentInfo.innerHTML = `<p style="color:red;">No ❌ student found with this roll number for the selected semester.</p>`;
                footer.style.display = "none";
            }
        }, 2000);
    }

    function downloadPDF() {
        window.print();
    }