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
  jobit,
  tripguide,
  threejs,
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
    id: "project",
    title: "Projects",
  },
  // {
  //   id: "feedback",
  //   title: "Testimonials",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Java",
    icon: docker,
  },
];

const experiences = [
 
  {
    title: "Something good's coming up",
    company_name: "....",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "February 2023 - Present",
    points: ["On my pathway to gain more experience...."],
  },
  {
    title: "Web Developer (Freelance)",
    company_name: "Atariya Home Decor",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2022 - February 2023",
    points: [
      "Developing and Hosting an E-commerce web site using HTML, CSS, JS and Shoppify.",
      "Creating payment gateway and all the functionalities.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper sapien. Praesent ipsum orci, consequat eu felis id, aliquam ultricies urna.",
    name: "Your Name",
    designation: "designation",
    company: "company or place",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper sapien. Praesent ipsum orci, consequat eu felis id, aliquam ultricies urna.",
    name: "Your Name",
    designation: "designation",
    company: "company or place",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper sapien. Praesent ipsum orci, consequat eu felis id, aliquam ultricies urna.",
    name: "Your Name",
    designation: "designation",
    company: "company or place",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper sapien. Praesent ipsum orci, consequat eu felis id, aliquam ultricies urna.",
    name: "Your Name",
    designation: "designation",
    company: "company or place",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "News Croc",
    description:
      "This is a React application that displays news articles based on different categories like Sports, Business, Entertainment, etc. The application is made up of several components.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NewsAPI",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/aryan-rajput1/NewsCroc",
  },
  {
    name: "Text-Utils",
    description:
      "Web application that enables users to generate text based on their preferences and allows user to manipulate text according to their will, it provides you a healthy user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "BootStrap",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/aryan-rajput1/Text-Utils-app",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
