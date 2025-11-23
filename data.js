const portfolioData = {
  navbar: [
    { id: "home", label: "Home" },
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ],
  home: {
    name: "Jayasudha N",
    title: [
      "Data Analyst",
      "Business Analyst",
      "Power BI Developer"],

    description: [
      "My passion is turning raw data into meaningful insights that drive effective business decisions. I love solving real problems with numbers.",
      "I specialize in Power BI, SQL, and Python to deliver clear, actionable data stories."
    ],
    socialLinks: [
      { href: "https://github.com/jayasudha14", icon: "fa-brands fa-github" },
      { href: "https://www.linkedin.com/in/jayasudha777", icon: "fa-brands fa-linkedin-in" },
      { href: "mailto:jayasudha2816@gmail.com", icon: "fa-solid fa-envelope" }
    ],
    actions: [
      { href: "#contact", label: "Hire Me", icon: "fa-solid fa-paper-plane" },
      { href: "https://drive.google.com/file/d/15m4RmksB57Ni-kln4C2b5VXlzy1Uodog/view?usp=drive_link", label: "Resume", icon: "fa-solid fa-download" }
    ],
    image: "js.png"
  },
  journey: {
    education: [
      {
        date: "Aug 2022 - Mar 2025",
        degree: "Bachelor of Science in Data Science and Analytics",
        institution: "Sree Saraswathi Thyagaraja College",
        institutionLink: "https://www.stc.ac.in/",
        description: "Completed B.Sc. in Data Science and Analytics with a focus on statistical analysis, machine learning, and data visualization. Engaged in projects utilizing Python, R, and SQL. CGPA: 7",
        logo: "stc.png"
      },
      {
        date: "Jun 2021 - March 2022",
        degree: "HSC(XII), Computer Science",
        institution: "Arokiyamatha Matriculation Higher Secondary School",
        institutionLink: "https://arokiamatha.com/",
        description: "Completed my Class 12 (HSC) at Arokiyamatha Matriculation Higher Secondary School, specializing in Computer Science.",
        logo: "ams.png"
      }
    ],
    experience: [
      {
        date: "Aug 2025 - Present",
        role: "Jr Business Analyst",
        company: "I-Bacus Tech Solution Private Limited",
        companyLink: "https://www.ibacustech.com/",
        description: [
          "Designed and developed Power BI dashboards and reports to visualize key performance indicators (KPIs) and business metrics, improving decision-making processes by 20%.",
          "Collaborated with business stakeholders to understand their data requirements and translate them into effective visualizations.",
          "Extracted, transformed, and loaded data from various sources using Power Query and ETL processes.",
          "Connected Power BI to diverse data sources, such as MySQL, SQL Server, Excel, MongoDB, and MariaDB.",
          "Analyze internal products and websites to improve functionality, performance, and user experience.",
          "Assign and track tasks using CRM, ensuring smooth project execution and timely delivery.",
          "Collaborate with cross-functional teams to translate business requirements into actionable insights."
        ],
        logo: "I BACUS TECH SOLUTION PRIVATE LIMITED NEW LOGO.png"
      },
      {
        date: "Jan 2025 - Feb 2025",
        role: "Power BI developer Intern",
        company: "I-Bacus Tech Solution Private Limited",
        companyLink: "https://www.ibacustech.com/",
        description: [
          "Designed and deployed interactive dashboards in Power BI & Tableau, including ATM Transactional, Walmart Sales, HR Analytics, and Merchandise Trend dashboards.",
          "Conducted data cleaning and analysis using SQL and MySQL Workbench, improving reporting efficiency.",
          "Maintained and updated existing Power BI reports and dashboards to ensure data accuracy and relevance."
        ],
        logo: "I BACUS TECH SOLUTION PRIVATE LIMITED NEW LOGO.png"
      },
      {
        date: "Aug 2024 - oct 2024",
        role: "Data Analyst Intern",
        company: "Novitech Solutions Private Limited",
        companyLink: "https://www.novitechsolutionsc.com/",
        description: [
          "Created dashboards and visual reports for business insights using Power BI.",
          "Performed data cleaning, transformation, and analysis using SQL and Excel.",
          "Collaborated with teams on AI-driven projects, enhancing data-driven decision-making."
        ],
        logo: "C:\\Users\\jayas\\Documents\\Python\\portfolio\\novitech-logo.png"
      }
    ]
  },
  skills: {
    categories: [
      {
        title: "Data & Analytics",
        skills: [
          { name: "Power BI", icon: "https://img.icons8.com/color/48/power-bi.png" },
          { name: "Tableau", icon: "https://img.icons8.com/color/48/tableau-software.png" },
          { name: "Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" },
          { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "Looker Studio", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_Data_Studio_logo.svg" },
          { name: "Google Analytics", icon: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Google_Analytics_logo.png" }
        ]
      },
      {
        title: "Database Management",
        skills: [
          { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "MariaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
          { name: "SQL Server", icon: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
          { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ]
      },
      {
        title: "Data Science & Libraries",
        skills: [
          { name: "Pandas", icon: "https://pandas.pydata.org/static/img/pandas_mark.svg" },
          { name: "Numpy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
          { name: "Matplotlib", icon: "https://matplotlib.org/stable/_static/logo2.svg" },
          { name: "Seaborn", icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg" }
        ]
      },
      {
        title: "API & Integration",
        skills: [
          { name: "API", icon: "https://img.icons8.com/ios-filled/50/api.png" },
          { name: "Postman (API Testing)", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" }
        ]
      },
      {
        title: "Others",
        skills: [
          { name: "GIT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Canva", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Canva_Logo.svg" }
        ]
      }
    ]
  },
  projects: [
    {
      title: "Music Recommender System Based on Human Emotions",
      category: "Artificial Intelligence and Machine Learning",
      description: "A machine learning model that analyzes facial expressions and emotional cues to recommend music that matches the user's mood. Includes emotion detection, data preprocessing, model training, and playlist generation.",
      technologies: ["Python", "OpenCV", "TensorFlow"],
      image: "music-recommendation.jpg",
      //githubLink: "https://github.com/Devaraj012/IPL"
    },
    {
      title: "ATM Transaction Analysis",
      category: "Data Analytics",
      description: "A Power BI dashboard analyzing ATM transaction patterns, cash withdrawals, downtime, customer activity, and location-based trends to improve operational efficiency.",
      technologies: ["Power BI", "Excel"],
      image: "atm-analysis.webp",
      //githubLink: "https://github.com/Devaraj012/Call-Centre"
    },
    {
      title: "Uptime Monitoring Analysis",
      category: "Data Analytics and Visualization",
      description: "Dashboard that monitors uptime/downtime of applications, tracks response time, failure patterns, and system reliability to ensure seamless performance.",
      technologies: ["Power BI", "Excel"],
      image: "uptime-monitoring.webp",
      //githubLink: "https://github.com/Devaraj012/Call-Centre"
    },
    {
      title: "Virtual Try-On Using Augmented Reality",
      category: "Augmented Reality and Computer Vision",
      description: "Developed a virtual try-on system where users can visualize clothing on themselves using AR and computer vision models. Leveraged HR-VITON for garment warping and pose detection.",
      technologies: ["Python", "HR-VITON", "OpenCV"],
      image: "virtual-tryon.webp",
      //githubLink: "https://github.com/Devaraj012/Call-Centre"
    },
    {
      title: "Adventure Works Sales Analysis",
      category: "Data Analytics and Visualization",
      description: "End-to-end sales analysis dashboard showcasing customer trends, product performance, regional sales, and profit metrics using the Adventure Works dataset.",
      technologies: ["Power BI", "Excel"],
      image: "adventure-works.webp",
      //githubLink: "https://github.com/Devaraj012/Call-Centre"
    }
  ]
};