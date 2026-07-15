import { Separator } from "@/components/ui/separator";
import { AboutMe } from "@/components/about/aboutme";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio.g0dr.pt"),
    title: {
        default: "Rafael Saraiva | Software Engineer",
        template: "%s | Rafael Saraiva",
    },
    description:
        "Rafael Saraiva — Software Engineering graduate building full-stack web apps, backend systems, Docker infrastructure, and self-hosted services with Proxmox.",
    keywords: [
        "Rafael Saraiva",
        "Software Engineer",
        "Full-Stack Developer",
        "Next.js",
        "React",
        "Docker",
        "Proxmox",
        "Self-Hosted Infrastructure",
        "Portfolio",
    ],
    authors: [{ name: "Rafael Saraiva", url: "https://portfolio.g0dr.pt" }],
    creator: "Rafael Saraiva",
    alternates: {
        canonical: "https://portfolio.g0dr.pt",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://portfolio.g0dr.pt",
        siteName: "Rafael Saraiva — Portfolio",
        title: "Rafael Saraiva | Software Engineer",
        description:
            "Software Engineering graduate building full-stack web apps, backend systems, Docker infrastructure, and self-hosted services with Proxmox.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Rafael Saraiva — Software Engineer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rafael Saraiva | Software Engineer",
        description:
            "Software Engineering graduate building full-stack web apps, backend systems, Docker infrastructure, and self-hosted services with Proxmox.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rafael Saraiva",
    url: "https://portfolio.g0dr.pt",
    jobTitle: "Software Engineer",
    description:
        "Software Engineering graduate specialising in full-stack web development, backend systems, Docker, Proxmox, and self-hosted infrastructure.",
    knowsAbout: [
        "JavaScript",
        "React",
        "Next.js",
        "Docker",
        "Proxmox",
        "Linux",
        "Backend Development",
        "Full-Stack Development",
        "System Design",
        "Self-Hosted Infrastructure",
    ],
    knowsLanguage: ["English", "Portuguese"],
    sameAs: ["https://github.com/RafaelSaraiva124"],
};

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="grid grid-cols-1 w-full max-w-6xl gap-10 sm:gap-16 px-4 sm:px-8 lg:px-16 pt-4 pb-0 items-center">
                <section className="flex flex-col items-start" aria-labelledby="main-heading">
                    <h1
                        id="main-heading"
                        className="font-anton text-5xl sm:text-6xl md:text-8xl leading-none"
                    >
                        SOFTWARE
                        <span className="block text-zinc-500">ENGINEER</span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-zalando">
                        I'm a Software Engineer from Portugal passionate about building modern,
                        scalable, and user-focused web applications. I enjoy working across the
                        entire development lifecycle, from designing intuitive user interfaces to
                        developing robust backend systems and deploying reliable, self-hosted
                        infrastructure.
                        <br />
                        <br />
                        Beyond software engineering, I have a strong interest in DevOps, server
                        administration, virtualization, and cloud technologies, always looking for
                        opportunities to learn and explore new tools.
                        <br />
                        <br />
                        I also enjoy graphic design with Adobe Photoshop and Illustrator, as well
                        as 3D modelling and 3D printing, combining creativity with engineering to
                        transform ideas into complete, real-world solutions.
                    </p>

                    <div className="flex flex-row justify-between gap-2 mt-10 w-full">
                        <div className="flex flex-col">
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold">
                                6+
                            </h2>
                            <p className="text-xs sm:text-lg text-muted-foreground font-zalando">
                                Personal <br /> Projects
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold">
                                10+
                            </h2>
                            <p className="text-xs sm:text-lg text-muted-foreground font-zalando">
                                Technologies <br /> Explored
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold">
                                7+
                            </h2>
                            <p className="text-xs sm:text-lg text-muted-foreground font-zalando">
                                Proxmox <br /> Services
                            </p>
                        </div>
                    </div>

                    <Separator className="w-full mt-8" />

                    <div className="mt-6 w-full">
                        <AboutMe />
                    </div>

                    <Separator className="w-full mt-8" />
                </section>
            </main>
        </div>
    );
}