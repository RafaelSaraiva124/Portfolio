"use client";

import Link from "next/link";
import Image from "next/image";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        value: "portfolio",
        title: "Portfolio",
        href: "/projects/portfolio",
        image: "/projects/portfolio.png",
        intro:
            "Personal portfolio website built with Next.js and Tailwind CSS, designed to showcase my software engineering projects, infrastructure, and technical experience through a modern, responsive and SEO-optimised interface.",
        stack: [
            "Next.js",
            "Tailwind CSS",
            "shadcn/ui",
            "Three.js",
            "React Three Fiber",
        ],
    },
    {
        value: "staynet",
        title: "StayNet",
        href: "/projects/staynet",
        image: "/projects/staynet.png",
        intro:
            "Developed as my final-year Software Engineering project, StayNet is a full-stack hotel booking and management platform that centralises reservations, room management, guest operations and secure online payments within a single application.",
        stack: [
            "Next.js",
            "Tailwind CSS",
            "shadcn/ui",
            "Neon PostgreSQL",
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
        href: "https://github.com/RafaelSaraiva124/RentWise",
        image: "/projects/rentwise.jpg",
        intro:
            "RentWise is a full-stack property management platform designed to simplify rental management, tenant administration and payment tracking.",
        stack: [
            "Next.js",
            "Neon PostgreSQL",
            "Drizzle ORM",
            "Tailwind CSS",
            "Auth.js",
        ],
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
                                <span className="font-medium text-lg">
                                    {project.title}
                                </span>

                                <span className="text-sm text-muted-foreground">
                                    Personal Project
                                </span>
                            </div>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-4 pb-5">
                        <div className="space-y-5">
                            <p className="leading-relaxed text-muted-foreground">
                                {project.intro}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md border bg-muted/40 px-2 py-1 text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-end">
                                <Button asChild>
                                    <Link href={project.href}>
                                        Learn More
                                        <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}