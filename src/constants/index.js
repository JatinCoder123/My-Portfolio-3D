import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  timergame,
  portfolio,
  simongame,
  jobit,
  tripguide,
  threejs,
  java,
  java1,
  ecommerce,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Database Design & Architecture",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "java",
    icon: java1,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - July 2023",
    points: [
      " Developed a classic memory-based Simon Game using HTML, CSS, and JavaScript.",
      "  Built a modern, responsive portfolio website to showcase my skills and projects..",

      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Sep 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      " Developed a dynamic, modern, and responsive portfolio website using React.js to showcase my skills and projects.",
      " Animations & Transitions for an interactive user experience.",
      " Single Page Application (SPA) for smooth navigation.",
      " Reusable React Components for modular and scalable design.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Full stack Developer",
    company_name: "E Commerce Site",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Shopping Cart & Checkout System (Integrated Stripe for payments).",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Database Management (MongoDB for efficient data handling).",

      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Data Structures & Algorithms (DSA) ",
    company_name: "Java",
    icon: java,
    iconBg: "#383E56",
    date: "Mar 2022 - Present",
    points: [
      "Solved 400+ DSA problems in Java on platforms like LeetCode, CodeChef,Hackerank or GeeksforGeeks.",
      "Strong understanding of core data structures, including:",
      "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, etc.",
      "Sorting algorithms (Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, etc.)",
      "Searching algorithms (Linear Search, Binary Search, Interpolation Search, etc.)",

      "Efficient problem-solving skills with a focus on time complexity optimization.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
];

const projects = [
  {
    name: "E-Commerce Site Frontend",
    description:
      "A modern, fully responsive E-Commerce Frontend built using React.js with a clean UI and seamless user experience.Dynamic Product Listing with filtering and sorting options. Shopping Cart Functionality with real-time updates.React Router for smooth navigation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/JatinCoder123/ecommerce-client",
    live_link: "https://ecommerce-client-git-main-jatin-vermas-projects-3f511312.vercel.app/",
  },
  {
    name: "CountDown Challenge",
    description:
      " Built an interactive countdown game where players race against time to complete challenges.Dynamic Timer that starts and stops based on user  and Optimized Performance & Responsiveness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: timergame,
    source_code_link: "https://github.com/JatinCoder123/Countdown_Challenge_Game",
    live_link: "https://jatincoder123.github.io/Countdown_Challenge_Game/",
  },
  {
    name: "Personal Portfolio",
    description:
      "Designed and developed a responsive, interactive portfolio to showcase my skills and projects.Modern, Clean UI with a professional design and Fully Responsive Design for desktop and mobile compatibility.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/JatinCoder123/Portfolio",
    live_link: "https://jatincoder123.github.io/Portfolio/",
  },
  {
    name: "Desktop Simon Game (Memory Challenge Game)",
    description:
      "Developed a classic Simon Game to test and improve memory skills using HTML, CSS, and JavaScript.Dynamic Sound Effects for Each Step.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: simongame,

    source_code_link: "https://github.com/JatinCoder123/The-simon-game",
    live_link: "https://jatincoder123.github.io/The-simon-game/",
  },
];

export { services, technologies, experiences, testimonials, projects };
