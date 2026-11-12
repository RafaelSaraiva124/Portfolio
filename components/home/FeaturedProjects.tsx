"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Staynet",
    description: "A full-stack hotel booking platform with real-time availability, user authentication, payment integration, and admin dashboard. Built with Next.js, PostgreSQL, and Prisma.",
    image: "/projects/staynet.png",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "NextAuth"],
    links: {
      demo: "/projects/staynet",
      github: "https://github.com/RafaelSaraiva124/staynet",
    },
    featured: true,
  },
  {
    title: "Portfolio",
    description: "This portfolio website featuring smooth animations, 3D elements, and a modern design system. Built with Next.js 15, React 19, Framer Motion, and Tailwind CSS v4.",
    image: "/projects/portfolio.png",
    tags: ["Next.js 15", "React 19", "Framer Motion", "Tailwind v4", "Three.js"],
    links: {
      demo: "/projects/portfolio",
      github: "https://github.com/RafaelSaraiva124/portfolio",
    },
    featured: true,
  },
  {
    title: "RentWise",
    description: "Property management system for landlords and tenants with contract management, payment tracking, maintenance requests, and automated notifications.",
    image: "/projects/rentwise.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "TypeScript"],
    links: {
      demo: "#",
      github: "https://github.com/RafaelSaraiva124/rentwise",
    },
    featured: false,
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-muted/30"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div>
            <h2
              id="projects-heading"
              className="font-anton text-4xl sm:text-5xl md:text-6xl text-foreground mb-2 tracking-tight"
            >
              Featured Projects
            </h2>
            <p className="font-zalando text-lg text-muted-foreground">
              A selection of my recent work showcasing full-stack development and infrastructure skills
            </p>
          </div>
          <motion.a
            href="/projects"
            className="inline-flex items-center gap-2 font-zalando font-medium text-primary hover:text-primary/80 transition-colors"
            whileHover={{ x: 4 }}
          >
            View All Projects
            <ArrowUpRight size={16} aria-hidden="true" />
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {project.featured && (
                  <motion.span
                    className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-zalando font-medium rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Featured
                  </motion.span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-anton text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-zalando text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-muted text-muted-foreground text-xs font-zalando rounded-lg border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <motion.a
                    href={project.links.demo}
                    className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-zalando text-sm font-medium hover:shadow-[0_0_20px_-5px] hover:shadow-primary/40 transition-all duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-transparent border border-border text-foreground rounded-xl font-zalando text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub size={14} aria-hidden="true" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}