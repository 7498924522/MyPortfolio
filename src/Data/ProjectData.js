import Project_1 from "../assets/C_Mart.PNG";
import Project_2 from "../assets/cpuscheduling.PNG"

export const projects = [
  {
    id: 1,
    image: Project_1,
    category: "Daily Essential Online Order Platform",
    title: "ChapatiMart (E-Commerce)",
    description:
      "Approached and developed a real-world online ordering platform for my relatives’ shop in Mumbai, inspired by Zepto and Zomato with Customer, Admin, and Delivery Boy systems.",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "React JS",
      "Java",
      "Spring-Boot",
      "Aiven MySQL",
      "RazorPay",
    ],
    liveLink: "https://chapati-mart.vercel.app/",
    githubLink: "https://github.com/7498924522/ChapatiMart",
  },

  {
    id: 2,
    image: Project_2,
    category: "Frontend Assignment",
    title: "Hiring Assignment",
    description:
      "Developed a responsive frontend hiring assignment using reusable React components and responsive UI principles.",
    technologies: [
      "React JS",
      "Tailwind CSS",
      "API",
    ],
    liveLink: "#",
    githubLink: "#",
  },
];