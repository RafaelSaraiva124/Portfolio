import Link from "next/link";
import type { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    ArrowLeft,
    ExternalLink,
    Server,
    Container,
    Cloud,
    GitBranch,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import {Card} from "@/components/ui/card";

const infrastructure = [
    {
        icon: Server,
        title: "Self-Hosted",
        description:
            "Hosted entirely on my own infrastructure, giving me full control over performance, security and deployment.",
    },
    {
        icon: Container,
        title: "Docker",
        description:
            "Containerised using Docker to ensure a consistent and portable environment across development and production.",
    },
    {
        icon: Cloud,
        title: "Cloudflare Tunnel",
        description:
            "Exposed securely to the internet through Cloudflare Tunnel without opening inbound ports.",
    },
    {
        icon: GitBranch,
        title: "Automatic Deployments",
        description:
            "Managed with a self-hosted Coolify instance, automatically deploying the latest changes directly from GitHub.",
    },
];


export default function PortfolioPage() {
    return (
        <div className="flex min-h-screen flex-col items-center">

            <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6">
                <div className="flex flex-col items-start">

                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-zalando"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to projects
                    </Link>

                    <h1 className="font-anton text-5xl sm:text-6xl lg:text-8xl mt-6">
                        PORTFOLIO
                    </h1>

                    <h2 className="font-anton text-2xl sm:text-3xl lg:text-4xl text-zinc-500 mt-2">
                        Personal Portfolio & Developer Platform
                    </h2>

                    <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed font-zalando">
                        My personal portfolio showcases the projects, technologies and
                        software engineering experience I have gained throughout my academic
                        journey and personal development. Beyond presenting my work, it also
                        serves as a platform where I continuously experiment with modern web
                        technologies, improve performance, optimise SEO and refine the overall
                        user experience.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                        <Badge variant="secondary">Next.js</Badge>
                        <Badge variant="secondary">Three.js</Badge>
                        <Badge variant="secondary">TypeScript</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                        <Badge variant="secondary">Shadcn/UI</Badge>
                        <Badge variant="secondary">React-three-fiber</Badge>

                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <Button asChild>
                            <a
                                href="https://github.com/RafaelSaraiva124/Portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="mr-2 h-4 w-4" />
                                View Source
                            </a>
                        </Button>

                        <Button variant="outline" asChild>
                            <a
                                href="https://portfolio.g0dr.pt"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Visit Website
                            </a>
                        </Button>
                    </div>

                    <Separator className="mt-10" />

                    <section className="mt-10">
                        <h2 className="font-zalando font-bold text-3xl">
                            Project Overview
                        </h2>

                        <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
                            This portfolio was designed and developed from scratch using
                            modern web technologies, with a strong focus on performance,
                            accessibility, responsive design and search engine optimisation.
                            Every page is fully responsive and carefully structured to
                            highlight my projects, technical skills and software engineering
                            experience.
                        </p>
                    </section>
                    <section>

                            <Separator className="mt-10 md:mt-16" />

                            <h2 className="mt-10 md:mt-16 text-xl sm:text-2xl md:text-3xl font-zalando font-bold">
                                Infrastructure & Deployment
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg font-zalando text-muted-foreground mt-2 md:mt-3 max-w-3xl">
                                The portfolio is entirely self-hosted, giving me full control over the
                                deployment pipeline, networking and infrastructure. Every update is
                                automatically deployed from GitHub using a modern self-hosted DevOps
                                workflow.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6 w-full">
                                {infrastructure.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-xl border border-zinc-200/60 dark:border-zinc-700/50 p-5"
                                    >
                                        <item.icon className="h-5 w-5 text-zinc-500" />

                                        <h3 className="font-zalando font-semibold text-base mt-3">
                                            {item.title}
                                        </h3>

                                        <p className="font-zalando text-sm text-muted-foreground mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </section>

                    <Separator className="mt-10" />

                </div>
            </main>
        </div>
    );
}