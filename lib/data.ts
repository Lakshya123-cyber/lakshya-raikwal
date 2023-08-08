import { createElement } from "react";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Blogs",
    hash: "#blogs",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    link: "https://github.com/Lakshya123-cyber/Airbnb",
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    link: "https://github.com/Lakshya123-cyber/ecommerce-admin",
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/Lakshya123-cyber/genius-ai",
  },
] as const;

export const blogsData = [
  {
    title: "My Tech Stack",
    description:
      "In this blog, I talk about what languages do I use on a daily basis.",
    tags: ["PROGRAMMING", "FRONT-END", "BACK-END"],
    imageUrl: corpcommentImg,
    link: "https://github.com/Lakshya123-cyber/",
  },
  {
    title: "My Workplace",
    description:
      "In this blog, I describe where my workplace is and what accessories do I use.",
    tags: ["LAPTOPS", "ACCESSORIES", "SETUP"],
    imageUrl: rmtdevImg,
    link: "https://github.com/Lakshya123-cyber/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Framer Motion",
  "Flutter",
  "React-Native",
  "Python",
  "Django",
  "Node.js",
  "Git",
  "MySQL",
  "Firebase",
  "MongoDB",
  "Prisma",
] as const;
