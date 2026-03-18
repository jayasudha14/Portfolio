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
      { href: "mailto:jayasudha2816@gmail.com", icon: "fa-solid fa-envelope" },
      { href: "tel:8300294002", icon: "fa-solid fa-phone" }
    ],
    actions: [
      { href: "#contact", label: "Hire Me", icon: "fa-solid fa-paper-plane" },
      { href: "https://drive.google.com/file/d/1yNVwgRuYAr1ScvVQogVwPDvehETHet2b/view?usp=drive_link", label: "Resume", icon: "fa-solid fa-download" }
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
        date: "Aug 2025 - Jan 2026",
        role: "Junior Business Analyst",
        company: "I-BACUS TECH SOLUTIONS PVT LTD",
        companyLink: "https://www.ibacustech.com/",
        description: [
          "Collected, cleaned, and analyzed business and operational datasets to identify trends, performance gaps, and improvement opportunities.",
          "Developed interactive dashboards using Power BI and Excel to monitor KPIs, user engagement, and project outcomes.",
          "Collaborated with cross-functional teams to gather business requirements and convert them into analytical use cases and reporting solutions.",
          "Conducted exploratory data analysis to derive insights related to process efficiency and product performance.",
          "Performed data validation checks to ensure dataset accuracy and consistency for reporting.",
          "Supported Agile project execution through CRM-based task tracking and sprint participation.",
          "Presented analytical findings and actionable recommendations to improve operational performance."
        ],
        logo: "I BACUS TECH SOLUTION PRIVATE LIMITED NEW LOGO.png"
      },
      {
        date: "Jan 2025 - Feb 2025",
        role: "Power BI Developer Intern",
        company: "I-BACUS TECH LABS",
        companyLink: "https://www.ibacustech.com/",
        description: [
          "Designed dashboards for ATM transactions, sales trends, HR metrics, and merchandise performance.",
          "Extracted and transformed datasets using SQL to improve reporting efficiency.",
          "Automated visualization workflows reducing manual reporting effort.",
          "Assisted in data preparation, exploratory analysis, and insight generation."
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
      {        title: "Business Analysis",
        skills: [
          { name: "Requirement Gathering", icon: "https://img.icons8.com/ios-filled/50/requirement.png" },
          { name: "BRD", icon: "https://img.icons8.com/ios-filled/50/document.png" },
          { name: "KPI Tracking", icon: "https://img.icons8.com/ios-filled/50/combo-chart.png" },
          { name: "Stakeholder Management", icon: "https://img.icons8.com/ios-filled/50/management.png" }
        ]
      },
      {
        title: "Tools & Methodologies",
        skills: [
          { name: "CRM Tools", icon: "https://img.icons8.com/ios-filled/50/crm.png" },
          { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
          { name: "Agile & Scrum", icon: "https://img.icons8.com/ios-filled/50/agile.png" },
          { name: "Sprint Planning", icon: "https://img.icons8.com/ios-filled/50/sprint.png" }
        ]
      },
      {
        title: "Others",
        skills: [
          { name: "GIT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Canva", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Canva_Logo.svg" },
          { name: "Data Validation", icon: "https://img.icons8.com/ios-filled/50/check.png" },
          { name: "Trend Analysis", icon: "https://img.icons8.com/ios-filled/50/line-chart.png" },
          { name: "Root Cause Analysis", icon: "https://img.icons8.com/ios-filled/50/search.png" },
          { name: "Analytical Thinking", icon: "https://img.icons8.com/ios-filled/50/brain.png" },
          { name: "Problem Solving", icon: "https://img.icons8.com/ios-filled/50/puzzle.png" }
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
      image: "music-recommendation.jpg00000000000",
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
      technologies: ["Power BI", "Excel", "Python", "MongoDB"],
      image: "uptime-monitoring.webp",
      //githubLink: "https://github.com/Devaraj012/Call-Centre"
    },
    {
      title: "Virtual Try-On Using Augmented Reality",
      category: "Augmented Reality and Computer Vision",
      description: "Developed a virtual try-on system where users can visualize clothing on themselves using AR and computer vision models. Leveraged HR-VITON for garment warping and pose detection.",
      technologies: ["Python", "Augmented Reality", "OpenCV"],
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