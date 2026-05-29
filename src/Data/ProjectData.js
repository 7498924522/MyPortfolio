import Project_1 from "../assets/CPP.PNG"
import Project_2 from "../assets/C_Mart.PNG";
export const projects = [
  {
    id: 1,
    image: Project_1,
    category: "Operating System Major Concept (CPU Scheduling Algorithm)",
    title: "CPU Scheduling Algorithm Visulizer",
    description:
      "Built this project to overcome my own difficulty in understanding CPU scheduling algorithms and to help future students learn them easily through visualization . Transition- BlackBoard Learning To -Technical Learning.",
    technologies: [
       "HTML",
      "Tailwind CSS",
      "React JS",
      "SessionStorage",
    ],
    liveLink: "https://scheduling-algorithm-app-mnru.vercel.app/home",
    githubLink: "https://github.com/7498924522/Scheduling-algorithm-app",
  },
  {
    id: 2,
    image: Project_2,
    category: "Daily Essential Online Order Platform",
    title: "ChapatiMart (E-Commerce)",
    description:
      "Approached and developed a real-world online ordering platform for my relatives’ shop in Mumbai, inspired by Zepto and Zomato with Customer, Admin, and Delivery Boy systems.",
    technologies: [
       "HTML", 
        "Tailwind CSS",
        "React JS", 
         "JS", 
         "Java", 
          "Spring-Boot",
          "MySQL", 
         "Aiven MySQL", 
          "Docker", 
           "Render", 
            "Vercel", 
            "Razorpay",
           "Postman", 
    ],
    liveLink: "https://chapati-mart.vercel.app/",
    githubLink: "https://github.com/7498924522/ChapatiMart",
  },
];