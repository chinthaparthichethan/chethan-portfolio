export const personalInfo = {
  name: "Chethan",
  title: "Full Stack Developer",
  subtitle: "Building intelligent solutions with Python, Django,React and modern web technologies",
  email: "chethan4255@gmail.com",
  phone: "+91 6303390415",
  location: "Bangalore, India",
  bio: "Passionate Computer Science Engineering student with expertise in Python, Django, and machine learning. I specialize in building web applications and AI-powered solutions that solve real-world problems. I have completed B.Tech with a strong CGPA of 9.12 and hands-on experience in software development.",
  photo: "/images/chethanimage1.jpg", 
  resume: "/chethan_resume1.pdf",
  social: {
    github: "https://github.com/Chinthaparthichethan",
    linkedin: "https://linkedin.com/in/Chinthaparthichethan",
    // twitter: "https://twitter.com/chethancoder",
    // portfolio: "https://chethan-portfolio.com"
  }
};

export const skills = {
  languages: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "Java", level: 75, icon: "☕" },
    { name: "C", level: 70, icon: "⚙️" },
    { name: "SQL", level: 80, icon: "🗃️" }
  ],
  frameworks: [
    { name: "Django", level: 85, icon: "🎯" },
    { name: "React", level: 85, icon: "⚛️" },
    { name: "Flask", level: 75, icon: "🌶️" },
     { name: "NumPy", level: 85, icon: "🔢" },
    { name: "Pandas", level: 85, icon: "🐼" },
  ],
  webTech: [
    { name: "HTML", level: 90, icon: "📄" },
    { name: "CSS", level: 85, icon: "🎨" },
    { name: "JavaScript", level: 80, icon: "🟨" }
  ],
  libraries: [
    { name: "NumPy", level: 85, icon: "🔢" },
    { name: "Pandas", level: 85, icon: "🐼" },
    // { name: "OpenCV", level: 80, icon: "👁️" },
    // { name: "YOLOv8", level: 75, icon: "🎯" }
  ],
  databases: [
    { name: "MySQL", level: 80, icon: "🐬" },
    { name: "SQLite", level: 75, icon: "🗄️" }
  ],
  tools: [
    { name: "Git", level: 85, icon: "📊" },
    { name: "GitHub", level: 85, icon: "🐙" },
    { name: "PyCharm", level: 90, icon: "💚" },
    { name: "VS Code", level: 85, icon: "💙" },
    { name: "Jupyter Notebook", level: 80, icon: "📓" },
    { name: "Excel", level: 75, icon: "📈" },
    
  ],
  softSkills: [
    { name: "Communication", level: 85, icon: "💬" },
    { name: "Time Management", level: 90, icon: "⏰" },
    { name: "Problem Solving", level: 92, icon: "🧩" },
    { name: "Team Collaboration", level: 85, icon: "🤝" },
    { name: "Leadership", level: 80, icon: "👨‍💼" }
  ]
};


export const projects = [
  {
  id: 6, // Use the next available ID in your portfolio project list
  title: "Indian Coin Store",
  description: "A modern e-commerce web application for discovering and purchasing rare historical Indian coins. Provides a streamlined shopping experience with cart persistence, secure checkout, and automated email confirmations.",
  image: "/images/projects/indian-coin-store.png", // Add an actual screenshot of your coin store homepage
  technologies: ["React.js", "Tailwind CSS", "JavaScript", "Vite", "EmailJS", "LocalStorage", "Responsive Design"],
  github: "https://github.com/Chinthaparthichethan/indian-coin-store-ecommerce", // Replace with your actual repo URL
  live: "https://indian-coin-store-ecommerce.vercel.app/", // Replace with your deployed live site URL
  category: "Fullstack",
  featured: true,
  duration: "September 2025",
  highlights: [
    "Fully responsive shopping site for rare Indian coins",
    "Persistent cart with local storage and recovery system",
    "Automated email order confirmations via EmailJS integration",
    "Easy product filtering, smart search, and real-time cart updates",
    "Mobile-first layout, smooth UI animations, and modern themes",
    "Production-ready deployment on Vercel with environment configuration",
    "Robust form validation, error handling, and PDF invoice generation"
  ]
},
  {
    id: 1,
    title: "Automated Vehicle Damage Detection",
    description: "AI-powered system to detect car damage from images using CNN and YOLOv8 for insurance companies. Achieved over 85% accuracy on 1500+ test images with automated cost estimation.",
    image: "/images/projects/vehicle_damage.png",
    technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "Flask", "YOLOv8", "CNN"],
    github: "https://github.com/chinthaparthichethan/Vehicle-damage-detection",
    live: "https://vehicle-damage-estimator.com",
    category: "Machine Learning",
    featured: true,
    duration: "January 2025 – April 2025",
    highlights: [
      "Built CNN model for damage classification",
      "Implemented YOLOv8 for object detection",
      "Created Flask web application for image upload",
      "Achieved 85%+ accuracy on test dataset",
      "Automated insurance claim processing"
    ]
  },
  {
    id: 2,
    title: "Indian Old Currency Showcase Website",
    description: "Django-based web application showcasing Indian old currency coins with detailed information, responsive gallery, and admin panel for content management.",
    image: "/images/projects/currency-collection.png",
    technologies: ["Django", "HTML", "CSS", "JavaScript", "SQLite", "Render"],
    github: "https://github.com/chinthaparthichethan/coincollection",
    live: "https://indian-currency-collection2.onrender.com",
    category: "Web Development",
    featured: true,
    duration: "2024",
    highlights: [
      "Responsive gallery and detail pages",
      "Django admin panel for content management",
      "Clean UI with fast loading",
      "User-friendly navigation",
      "Deployed on Render platform"
    ]
  },
  {
    id: 3,
    title: "Color Detection System",
    description: "Python-based project to detect and identify colors from images or live webcam using OpenCV. Features real-time interaction with RGB value capture and color name display.",
    image: "/images/projects/color-detection.png",
    technologies: ["Python", "OpenCV", "NumPy", "Pandas"],
    github: "https://github.com/chinthaparthichethan/color-detection-python",
    live: "https://color-detection-demo.com",
    category: "Computer Vision",
    featured: false,
    // duration: "May 2024 – June 2024",
    highlights: [
      "Real-time color detection from webcam",
      "RGB value capture and analysis",
      "Color dataset matching algorithm",
      "Interactive mouse click functionality",
      "Useful for design and image analysis"
    ]
  },
  // {
  //   id: 4,
  //   title: "Portfolio Website",
  //   description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, glassmorphism design, and comprehensive project showcase.",
  //   image: "/portfolio-website.jpg",
  //   technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
  //   github: "https://github.com/Chinthaparthichethan/portfolio-website",
  //   live: "https://chethan-portfolio.vercel.app",
  //   category: "Frontend",
  //   featured: true,
  //   duration: "September 2025",
  //   highlights: [
  //     "Responsive design with glassmorphism effects",
  //     "Smooth animations with Framer Motion",
  //     "Modern UI/UX principles",
  //     "Fast loading with Vite",
  //     "SEO optimized"
  //   ]
  // },
  
{
  id: 5, // Use the next available ID
  title: "Modern Calculator App",
  description: "A sleek and functional calculator web application featuring a modern dark theme design with orange accent buttons. Built with HTML, CSS, and JavaScript, offering all essential calculator functions with an intuitive user interface and theme switching capabilities.",
  image: "/images/projects/calculator.png", // Add your calculator screenshot here
  technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid", "Flexbox"],
  github: "https://github.com/Chinthaparthichethan/calculator-web",
  live: "https://calculator-web-beta-ten.vercel.app/", // Replace with your actual demo URL
  category: "Frontend",
  featured: false,
  duration: "March 2024",
  highlights: [
    "Modern dark theme with orange accent colors",
    "Light/Dark theme toggle functionality",
    "Responsive grid layout for calculator buttons",
    "All basic arithmetic operations (+, -, ×, ÷)",
    "Percentage calculations and clear functions",
    "Clean and intuitive button design",
    "Mobile-friendly responsive design",
    "Smooth button interactions and animations"
  ]
},

];

export const experience = [
  {
    id: 1,
    position: "Python Development Intern",
    company: "Cod Tech IT Solutions",
    duration: "July 2024 – September 2024",
    location: "Remote",
    description: [
      "Played a key role in writing Python code to support various software development tasks and projects",
      "Utilized libraries like Pandas and NumPy for efficient data processing, analysis, and manipulation",
      "Worked extensively with Git and GitHub for version control, change tracking, and team collaboration",
      "Contributed to multiple projects involving data analysis and software development workflows",
      "Gained hands-on experience in professional software development practices and methodologies"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Git", "GitHub", "Data Analysis"],
    achievements: [
      "Successfully completed multiple Python development projects",
      "Improved data processing efficiency by 30% using optimized Pandas operations",
      "Collaborated effectively with development team using Git workflows"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Sreenivasa Institute of Technology and Management Studies",
    duration: "2021 - 2025",
    location: "Chittoor, Andhra Pradesh, India",
    cgpa: "9.12",
    description: "B.Tech in Computer Science with excellent academic performance. Focused on software engineering, web development, machine learning, and data structures.",
    relevant_courses: [
      "python",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Technologies",
      "Software Engineering",
      "Computer Networks",
      "Machine Learning",
      "Object Oriented Programming",
      "Operating Systems"
    ],
    achievements: [
      "Maintained CGPA of 9.12 throughout the program",
      "Active participant in coding competitions",
      "Led multiple technical projects",
      "Member of computer science technical society"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    name: "Programming in Java",
    issuer: "NPTEL",
    date: "October 2024",
    credential: "NPTEL24CS**",
    description: "Comprehensive Java programming course covering OOP concepts, data structures, and advanced Java features.",
    skills: ["Java", "Object-Oriented Programming", "Data Structures", "Exception Handling"]
  },
  {
    id: 2,
    name: "Linux Tools for Software Development",
    issuer: "The Linux Foundation",
    date: "July 2024",
    credential: "LF***",
    description: "Advanced course on Linux command line tools, shell scripting, and development environment setup.",
    skills: ["Linux", "Shell Scripting", "Command Line", "Development Tools", "System Administration"]
  }
];

export const languages = [
  {
    name: "English",
    level: "Fluent",
    proficiency: 90
  },
  {
    name: "Telugu",
    level: "Native",
    proficiency: 100
  },
  {
    name: "Hindi",
    level: "Conversational",
    proficiency: 80
  },
  {
    name: "Kannada",
    level: "Basic",
    proficiency: 60
  }
];

export const softSkills = [
  {
    name: "Communication",
    level: 85,
    icon: "💬"
  },
  {
    name: "Time Management",
    level: 90,
    icon: "⏰"
  },
  {
    name: "Problem Solving",
    level: 92,
    icon: "🧩"
  },
  {
    name: "Team Collaboration",
    level: 85,
    icon: "🤝"
  },
  {
    name: "Leadership",
    level: 80,
    icon: "👨‍💼"
  },
  {
    name: "Adaptability",
    level: 88,
    icon: "🔄"
  }
];

export const achievements = [
  {
    id: 1,
    title: "Academic Excellence",
    description: "Maintained CGPA of 9.12 in Computer Science Engineering",
    date: "2021-2025",
    icon: "🎓"
  },
  {
    id: 2,
    title: "AI Model Accuracy",
    description: "Achieved 85%+ accuracy in vehicle damage detection model",
    date: "April 2025",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Professional Development",
    description: "Successfully completed Python development internship",
    date: "September 2024",
    icon: "💼"
  },
  {
    id: 4,
    title: "Technical Certifications",
    description: "Earned certifications from NPTEL and Linux Foundation",
    date: "2024",
    icon: "📜"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Technical Supervisor",
    position: "Senior Developer",
    company: "Cod Tech IT Solutions",
    content: "Chethan demonstrated excellent Python programming skills and showed great enthusiasm for learning new technologies. His work with data analysis using Pandas and NumPy was particularly impressive.",
    avatar: "/testimonial1.jpg"
  },
  {
    id: 2,
    name: "Academic Mentor",
    position: "Professor",
    company: "Sreenivasa Institute of Technology",
    content: "Outstanding student with exceptional problem-solving abilities. Chethan's projects showcase his deep understanding of machine learning and web development concepts.",
    avatar: "/testimonial2.jpg"
  }
  
];


