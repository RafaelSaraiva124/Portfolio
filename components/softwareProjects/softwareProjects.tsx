"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const projects = [
    {
        value: "portfolio",
        title: "Portfolio",
        image: "/projects/portfolio.png",
        intro:
            "Personal portfolio website built with Next.js and Tailwind CSS, designed to showcase my software projects, infrastructure work, and design work in a modern and responsive interface.",
        stack: [
            "Next.js",
            "Tailwind CSS",
            "shadcn/ui",
            "Three.js",
            "React-three-fiber",
        ],
    },
    {
        value: "staynet",
        title: "StayNet",
        image: "/projects/staynet.png",
        intro:
            "StayNet is a full-stack accommodation management platform built with a modern, scalable architecture focused on performance, modularity, and real-world production patterns.",
        stack: [
            "Next.js",
            "Tailwind CSS",
            "shadcn/ui",
            "Neon Database",
            "Drizzle ORM",
            "Auth.js",
            "Stripe",
            "Cloudinary",
            "Resend",
            "Docker",
        ],
    },
    {
        value: "rentwise",
        title: "RentWise",
        image: "/projects/rentwise.jpg",
        intro:
            "RentWise is a full-stack property management platform designed to help landlords efficiently manage rentals, tenants, and payments.",
        stack: ["Next.js", "NeonDataBase", "Drizzle", "Tailwind", "Auth.js"],
    },
];

export function SoftwareProjects() {
    return (
        <Accordion
            type="single"
            collapsible
            className="rounded-lg border text-card-foreground"
        >
            {projects.map((project) => (
                <AccordionItem
                    key={project.value}
                    value={project.value}
                    className="border-b px-4 last:border-b-0"
                >
                    <AccordionTrigger className="py-5">
                        <div className="flex items-center gap-4">
                            <div className="relative h-20 w-20 md:h-24 md:w-44 overflow-hidden rounded-xl border">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 80px, 176px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex flex-col items-start text-left">
                                <span className="font-medium">{project.title}</span>
                                <span className="text-sm text-muted-foreground">
                                    Personal Project
                                </span>
                            </div>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 pb-5">
                        <div className="space-y-3">
                            <p className="text-muted-foreground leading-relaxed">
                                {project.intro}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-1 rounded-md border bg-muted/40"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}