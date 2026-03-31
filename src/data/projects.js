import eduMediaImg from '../assets/images/Edumedia.jpg';
import unisireImg from '../assets/images/unisire.png';
import tasyaiImg from '../assets/images/Tasyai.png';

export const projects = [
  {
    id: 1,
    title: "Unisire",
    description: "India’s first student-focused learning and career assistance platform combining structured roadmaps, resume references, and automation tools. Features a sitemap-driven chatbot for enhanced navigation.",
    techStack: ["React.js", "Tailwind CSS", "Python", "Django", "SQL"],
    github: "https://github.com/unisiremainhub-gif/Unisire",
    live: "https://www.unisire.com/",
    image: unisireImg
  },
  {
    id: 2,
    title: "Tasyai",
    description: "An advanced AI/ML project focused on predictive analytics and data processing. Leverages machine learning models to provide actionable insights and automation solutions.",
    techStack: ["Python", "Machine Learning", "React", "Flask"],
    github: "https://github.com/sushantkhatiwada/Tasyai",
    live: "https://tasyai.vercel.app/",
    image: tasyaiImg
  },
  {
    id: 3,
    title: "EduMedia",
    description: "A digital learning platform featuring study materials, interactive UI, subjects, videos, and notes.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sushantkhatiwada/EduMedia-Hub",
    live: "https://edumedia-hub-2.onrender.com",
    image: eduMediaImg
  },
];

export default projects;
