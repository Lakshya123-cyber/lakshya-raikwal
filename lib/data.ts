import { createElement } from "react";
import { LuGraduationCap, LuSchool } from "react-icons/lu";
import img1 from "@/public/ecom.png";
import img2 from "@/public/genius.png";
import img3 from "@/public/messenger.png";

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
    title: "Ecommerce Admin Dashboard",
    description:
      "This was my biggest project ever because I made an ecommerce admin dashboard including the ecommerce store.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma"],
    imageUrl: img1,
    link: "https://ecommerce-admin-murex-six.vercel.app/",
  },
  {
    title: "Genius AI",
    description:
      "This AI is a 6 in 1. It can generate codes to music, anything you can ask for!",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: img2,
    link: "https://genius-ai-silk.vercel.app/dashboard",
  },
  {
    title: "Messenger Clone",
    description:
      "This is a messenger clone which I made just to know more about NextAuth and chat system.",
    tags: ["TypeScript", "Next.js", "Prisma", "Tailwind"],
    imageUrl: img3,
    link: "https://messenger-clone-zeta-orcin.vercel.app/",
  },
] as const;

export const blogsData = [
  {
    title: "My Tech Stack",
    description:
      "In this blog, I talk about what languages do I use on a daily basis.",
    tags: ["PROGRAMMING", "FRONT-END", "BACK-END"],
    imageUrl: img1,
    link: "https://github.com/Lakshya123-cyber/",
  },
  {
    title: "My Workplace",
    description:
      "In this blog, I describe where my workplace is and what accessories do I use.",
    tags: ["LAPTOPS", "ACCESSORIES", "SETUP"],
    imageUrl: img2,
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
