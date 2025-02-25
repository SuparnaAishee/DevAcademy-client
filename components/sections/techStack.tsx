"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const technologies = [
  { name: "React", icon: "react.svg" },
  { name: "CSS", icon: "css.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "Tailwind", icon: "tailwind.svg" },
  { name: "HTML", icon: "html.svg" },
  { name: "Node", icon: "node.svg" },
  { name: "Firebase", icon: "firebase.svg" },
];

export default function TechStack() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  return (
    <section className="relative overflow-hidden py-20 pl-12 pr-12" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent" />
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What Will You Learn?_
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg mb-8"
          >
            Master the most in-demand technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative p-6 rounded-lg bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent backdrop-blur-sm 
                        transform hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`/tech/${tech.icon}`}
                alt={tech.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-center font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
