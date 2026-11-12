"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Freelance / Personal Projects",
    location: "Portugal (Remote)",
    period: "2022 — Present",
    description: "Building full-stack web applications, backend systems, and self-hosted infrastructure for clients and personal projects. Specializing in Next.js, React, PostgreSQL, Docker, and Proxmox-based deployments.",
    highlights: [
      "Developed 6+ production applications serving real users",
      "Designed and deployed self-hosted infrastructure on Proxmox (7+ services)",
      "Implemented CI/CD pipelines with GitHub Actions and Docker",
      "Built REST APIs and GraphQL endpoints with TypeScript",
    ],
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Docker", "Proxmox", "Tailwind CSS", "Framer Motion"],
  },
  {
    role: "Software Engineering Graduate",
    company: "University / Education",
    location: "Portugal",
    period: "2019 — 2023",
    description: "Completed Software Engineering degree with focus on full-stack development, database systems, software architecture, and DevOps practices. Graduated with distinction.",
    highlights: [
      "Capstone project: Distributed hotel booking system",
      "Coursework: Algorithms, Databases, Distributed Systems, Cloud Computing",
      "Thesis: Performance optimization in containerized microservices",
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "AWS", "React", "TypeScript"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2
            id="experience-heading"
            className="font-anton text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 tracking-tight"
          >
            Experience
          </h2>
          <p className="font-zalando text-lg sm:text-xl text-muted-foreground leading-relaxed">
            My journey from student to full-stack engineer, building products and infrastructure
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            aria-hidden="true"
          />

          <div className="space-y-12 ml-8">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.role}
                className="relative pl-8 pb-8 last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" aria-hidden="true">
                  <motion.div
                    className="w-full h-full rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5, ease: "easeInOut" }}
                  />
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-anton text-xl sm:text-2xl text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="font-zalando text-lg text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end text-right sm:items-start sm:text-left gap-1 text-sm font-zalando text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} aria-hidden="true" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} aria-hidden="true" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-zalando text-base text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-zalando text-sm font-medium text-foreground mb-3">Key Achievements</h4>
                    <ul className="space-y-2" role="list">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="font-zalando text-sm text-muted-foreground/80 flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-zalando rounded-lg border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}