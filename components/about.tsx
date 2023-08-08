"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">passionate developer</span> who has
        keen interest in programming and developing new things,{" "}
        <span className="font-medium">including AI</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          Python, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, Prisma and Flutter. I am always
        looking to learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, brainstorming for a new project idea, or gossiping with my
        mom. I am an <span className="font-medium">ambitious person</span> with
        a <span className="font-medium">positive attitude</span> and{" "}
        <span className="font-medium">full of determination</span> to achieve
        everything I set my mind to.
      </p>
    </motion.section>
  );
}
