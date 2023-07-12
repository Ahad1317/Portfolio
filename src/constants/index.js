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
  IEEE,
  alexa,
  ssoc,
  tesla,
  shopify,
  airbnb,
  carrent,
  jobit,
  tripguide,
  threejs,
  circleup,
  windbnb,
  snakezaaz,
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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "AWS Cloud practisioner",
    icon: backend,
  },
  {
    title: "Competitive Coder",
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IEEE",
    company_name: "IEEE SRMIIST CLUB",
    icon: IEEE,
    iconBg: "#FFFFFF",
    date: "March 2023 - Present",
    points: [
      "HyperForge Registration Portal",
      "Contributed as a Front-end Developer on the website",
      "Built using React JS, JavaScript, Tailwind and TypeForm",
    ],
  },
  {
    title: "Alexa SRM",
    company_name: "Alexa Developers SRM",
    icon: alexa,
    iconBg: "#000000",
    date: "December 2022 - Present",
    points: [
      "Events Portal of Alexa",
      "Contributed to the Front-end as well as Back-end of the events portal",
      "Worked on certificates routes",
      "Built using Next JS, TypeScript, Tailwind, Express JS and supabase",
    ],
  },
  {
    title: "SSOC 2022",
    company_name: "Social Summer of Code 22022",
    icon: ssoc,
    iconBg: "#FFFFFF",
    date: "August 2021 - September 2021",
    points: [
      "Open source contribution",
      "Worked on ship-it website to design front-end pages",
      "Designed error 404 page and readm.md file",
    ],
  },
  {
    title: "WindBNB",
    company_name: "A responsive Airbnb clone project",
    icon: airbnb,
    iconBg: "#FFFFFF",
    date: "October 2022 - October 2022",
    points: [
      "A personally self-designed clone",
      "Utilizing Material-UI for designing intuitive user interfaces",
      "Implemented carousel animations to showcase property listings",
      "Offers a visually appealing browsing experience",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Circle-Up",
    description:
      "A mern stack, social media API Application. Implemented responsive CSS layouts and integrated features like user authentication to create an immersive and secure social media platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node-express",
        color: "pink-text-gradient",
      },
    ],
    image: circleup,
    source_code_link: "https://github.com/Ahad1317/CircleUp_mern",
  },
  {
    name: "Wind BnB",
    description:
      "A responsive Airbnb clone project, utilizing Material-UI for designing intuitive user interfaces. Implemented carousel animations to showcase property listings, offering a visually appealing browsing experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: windbnb,
    source_code_link: "https://github.com/Ahad1317/Windbnb",
  },
  {
    name: "Snake Zaaz",
    description:
      "A captivating snake game, featuring an immersive gameplay experience. Employing the cutting-edge blurbox algorithm, powered by Canvas, Game delivers addictive fun with dynamic visuals and engaging mechanics.",
    tags: [
      {
        name: "vanillajs",
        color: "blue-text-gradient",
      },
      {
        name: "html-canvas",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: snakezaaz,
    source_code_link: "https://github.com/Ahad1317/Snake-Zaaz",
  },
];

export { services, technologies, experiences, testimonials, projects };