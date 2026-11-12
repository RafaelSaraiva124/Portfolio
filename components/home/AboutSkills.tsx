"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, Layers, Terminal } from "lucide-react";

const skills = [
  { category: "Frontend", icon: Code2, items: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", icon: Server, items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL", "Authentication"] },
  { category: "Infrastructure", icon: Cloud, items: ["Docker", "Proxmox", "Linux", "Nginx", "Self-hosted"] },
  { category: "DevOps", icon: Terminal, items: ["CI/CD", "GitHub Actions", "Containerization", "Monitoring", "Automation"] },
  { category: "Design", icon: Layers, items: ["Figma", "Photoshop", "Illustrator", "3D Modeling", "UI/UX"] },
  { category: "Database", icon: Database, items: ["PostgreSQL", "Prisma", "Redis", "Migrations", "Optimization"] },
];

export function AboutSkills() {
  return (
    <section
      id="about-skills"
      className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16"
      aria-labelledby="about-heading"
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
            id="about-heading"
            className="font-anton text-4xl sm:text-5xl md:text-6xl text-foreground mb-6 tracking-tight"
          >
            About & Expertise
          </h2>
          <p className="font-zalando text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Software Engineering graduate from Portugal with a passion for building modern,
            scalable web applications. I enjoy working across the entire development lifecycle,
            from designing intuitive interfaces to deploying reliable, self-hosted infrastructure.
            Beyond code, I explore graphic design, 3D modeling, and 3D printing, combining
            creativity with engineering to transform ideas into complete solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.article
              key={skill.category}
              className="group relative p-6 bg-card border border-border rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  <skill.icon size={20} aria-hidden="true" />
                </div>
                <h3 className="font-anton text-lg text-foreground">{skill.category}</h3>
              </div>
              <ul className="space-y-2" role="list">
                {skill.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="font-zalando text-sm text-muted-foreground/80 flex items-center gap-2 group-hover:text-foreground transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"
                      aria-hidden="true"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}