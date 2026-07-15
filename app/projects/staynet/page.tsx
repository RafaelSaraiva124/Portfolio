import Link from "next/link";
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Hotel,
    Search,
    Heart,
    ShoppingCart,
    CreditCard,
    LogIn,
    Bell,
    ClipboardCheck,
    Map,
    ExternalLink,
    ArrowLeft,
} from "lucide-react";
import { FaGithub  } from "react-icons/fa";
import { StaynetCarousel } from "@/components/staynet/staynet-carousel";



export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio.g0dr.pt"),

    title: {
        default: "StayNet — Hotel Booking & Management Platform",
        template: "%s | Rafael Saraiva",
    },

    description:
        "StayNet is a modern full-stack hotel booking and management platform built with Next.js, TypeScript, PostgreSQL, Drizzle ORM, Docker and Stripe. Developed as a production-inspired Software Engineering project.",

    keywords: [
        "StayNet",
        "Hotel Booking",
        "Hotel Management",
        "Next.js",
        "React",
        "TypeScript",
        "Drizzle ORM",
        "PostgreSQL",
        "Stripe",
        "Docker",
        "Portfolio",
        "Software Engineer",
        "Full Stack Developer",
    ],

    authors: [
        {
            name: "Rafael Saraiva",
            url: "https://portfolio.g0dr.pt",
        },
    ],

    creator: "Rafael Saraiva",

    publisher: "Rafael Saraiva",

    alternates: {
        canonical: "/projects/staynet",
    },

    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "/projects/staynet",

        title: "StayNet — Hotel Booking & Management Platform",

        description:
            "A production-inspired full-stack hotel booking and management platform built with Next.js, TypeScript, PostgreSQL, Docker and Stripe.",

        images: [
            {
                url: "https://portfolio.g0dr.pt/projects/staynet/cover.jpg",
                width: 1200,
                height: 630,
                alt: "StayNet",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "StayNet — Hotel Booking & Management Platform",

        description:
            "Production-inspired full-stack hotel booking platform built with Next.js.",

        images: [
            "https://portfolio.g0dr.pt/projects/staynet/cover.jpg",
        ],
    },

    robots: {
        index: true,
        follow: true,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",

    name: "StayNet",

    applicationCategory: "Hotel Management Platform",

    operatingSystem: "Web Browser",

    url: "https://portfolio.g0dr.pt/projects/staynet",

    image:
        "https://portfolio.g0dr.pt/projects/staynet/cover.jpg",

    codeRepository:
        "https://github.com/RafaelSaraiva124/StayNet",

    description:
        "Production-inspired hotel booking and management platform built with Next.js.",

    programmingLanguage: [
        "TypeScript",
        "SQL",
    ],

    author: [
        {
            "@type": "Person",
            name: "Rafael Saraiva",
        },
    ],
};

const roles = [
    {
        title: "Visitor",
        description:
            "Explore hotels, browse available rooms and discover the platform before creating an account.",
    },
    {
        title: "Guest",
        description:
            "Book rooms, manage favourites and reservations, complete secure payments and track upcoming stays.",
    },
    {
        title: "Hotel Partner",
        description:
            "Manage properties, rooms, reservations and oversee the complete guest check-in and check-out process.",
    },
    {
        title: "Administrator",
        description:
            "Manage the platform, review partner applications and supervise the overall ecosystem.",
    },
];

const features = [
    {
        icon: Search,
        title: "Hotel & Room Search",
        description:
            "Search hotels and rooms with live availability, filtered by dates and location.",
    },
    {
        icon: ShoppingCart,
        title: "Cart & Booking Flow",
        description:
            "Reservations are staged in a cart and re-validated for availability right before payment.",
    },
    {
        icon: CreditCard,
        title: "Secure Payments",
        description:
            "Checkout is powered by Stripe, only confirming a reservation once payment succeeds.",
    },
    {
        icon: Heart,
        title: "Favorites",
        description: "Users can save hotels they like and revisit them later.",
    },
    {
        icon: ClipboardCheck,
        title: "Check-in / Check-out",
        description:
            "Partners record and track guest check-in and check-out throughout the stay.",
    },
    {
        icon: LogIn,
        title: "Authentication & Sessions",
        description:
            "Secure sign-up, login and session handling for every user role via Auth.js.",
    },
    {
        icon: Bell,
        title: "Notifications",
        description: "Keeps users informed about the status of their bookings.",
    },
    {
        icon: Map,
        title: "Interactive Maps",
        description:
            "Hotel locations are shown on interactive maps powered by OpenStreetMap.",
    },
];

const stack = {
    "Framework & Language": ["Next.js", "React", "TypeScript", "Node.js"],
    Styling: ["Tailwind CSS"],
    Data: ["Neon Database (PostgreSQL)", "Drizzle ORM", "Cloudinary"],
    Infrastructure: ["Docker", "Redis"],
    Integrations: ["Stripe", "Auth.js", "OpenStreetMap"],
    Tooling: ["Figma", "Visual Paradigm", "GitLab", "VS Code"],
};

export default function StayNetPage() {
    return (
        <div className="flex min-h-screen flex-col items-center">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-6">
                <div className="flex flex-col items-start w-full">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-zalando"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to projects
                    </Link>

                    <h1 className="font-anton text-5xl sm:text-6xl md:text-8xl leading-none mt-6">
                        STAYNET
                    </h1>
                    <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl text-zinc-500 leading-none mt-2">
                        Hotel Booking &amp; Management Platform
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg font-zalando text-muted-foreground mt-6 max-w-3xl leading-relaxed">
                        StayNet is a modern full-stack hotel management platform designed to streamline both the guest booking experience and day-to-day hotel operations within a single ecosystem. Guests can discover hotels, browse real-time availability, manage favourites, and complete secure online reservations, while hotel staff benefit from a comprehensive administration dashboard for managing properties, rooms, reservations, guests, and the entire check-in/check-out lifecycle.
                        <br /><br />
                        Developed as my final-year Software Engineering project in collaboration with a colleague, StayNet showcases the design and implementation of a web application using modern web technologies. The project focuses on scalability, security, and maintainability, featuring role-based access control, secure authentication, online payments, responsive design, and a modular architecture. It demonstrates my ability to design, develop, and deploy complex full-stack applications that solve real-world business challenges.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-6">
                        <Badge variant="secondary" className="font-zalando">
                            <Hotel className="h-3.5 w-3.5 mr-1" />
                            Final Year Project
                        </Badge>
                        <Badge variant="secondary" className="font-zalando">
                            Next.js
                        </Badge>
                        <Badge variant="secondary" className="font-zalando">
                            TypeScript
                        </Badge>
                        <Badge variant="secondary" className="font-zalando">
                            PostgreSQL
                        </Badge>
                        <Badge variant="secondary" className="font-zalando">
                            Stripe
                        </Badge>
                        <Badge variant="secondary" className="font-zalando">
                            Docker
                        </Badge>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <Button asChild>
                            <a
                                href="https://github.com/RafaelSaraiva124/StayNet"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="h-4 w-4 mr-2" />
                                View on GitHub
                            </a>
                        </Button>
                        <Button asChild variant="outline">
                            <a
                                href="/projects/relatorio.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Read Full Report
                            </a>
                        </Button>
                    </div>

                    <Separator className="w-full mt-10" />

                    <StaynetCarousel className="mt-10" />

                    <Separator className="w-full mt-10" />

                    <h2 className="mt-10 md:mt-16 text-xl sm:text-2xl md:text-3xl font-zalando font-bold">
                        Four User Roles, One Platform
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg font-zalando text-muted-foreground mt-2 md:mt-3 max-w-3xl">
                        Access and permissions are tailored to each type of user, from
                        anonymous visitors to platform administrators.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
                        {roles.map((role) => (
                            <div
                                key={role.title}
                                className="rounded-xl border border-zinc-200/60 dark:border-zinc-700/50 p-5 bg-zinc-50/50 dark:bg-zinc-900/40"
                            >
                                <h3 className="font-zalando font-semibold text-base">
                                    {role.title}
                                </h3>
                                <p className="font-zalando text-sm text-muted-foreground mt-2">
                                    {role.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Separator className="w-full mt-10 md:mt-16" />

                    <h2 className="mt-10 md:mt-16 text-xl sm:text-2xl md:text-3xl font-zalando font-bold">
                        Key Features
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg font-zalando text-muted-foreground mt-2 md:mt-3 max-w-3xl">
                        From discovery to check-out, StayNet covers the full guest journey
                        and the hotel-side operations that support it.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 w-full">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-xl border border-zinc-200/60 dark:border-zinc-700/50 p-5"
                            >
                                <feature.icon className="h-5 w-5 text-zinc-500" />
                                <h3 className="font-zalando font-semibold text-base mt-3">
                                    {feature.title}
                                </h3>
                                <p className="font-zalando text-sm text-muted-foreground mt-2">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <Separator className="w-full mt-10 md:mt-16" />

                    <h2 className="mt-10 md:mt-16 text-xl sm:text-2xl md:text-3xl font-zalando font-bold">
                        Architecture
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg font-zalando text-muted-foreground mt-2 md:mt-3 max-w-3xl leading-relaxed">
                        StayNet follows a modern full-stack architecture built around Next.js,
                        combining the frontend and backend within a unified application while
                        Server Actions and Route Handlers for business logic. PostgreSQL, hosted
                        on Neon and managed through Drizzle ORM, stores the platform's relational
                        data, while Cloudinary is responsible for media storage and optimisation.
                        Redis is used to improve performance through caching, and Stripe handles secure
                        payment processing. The entire application is containerised with Docker, providing
                        a consistent development and deployment environment while ensuring portability and
                        scalability.
                    </p>
                    <div className="w-full mt-8 overflow-hidden rounded-xl md:rounded-2xl border border-zinc-200 dark:border-zinc-700">
                        <img
                            src="/projects/staynet/architecture.jpg"
                            alt="StayNet system architecture diagram"
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>

                    <Separator className="w-full mt-10 md:mt-16" />

                    <h2 className="mt-10 md:mt-16 text-xl sm:text-2xl md:text-3xl font-zalando font-bold">
                        Tech Stack
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full">
                        {Object.entries(stack).map(([category, items]) => (
                            <div key={category}>
                                <h3 className="font-zalando font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {items.map((item) => (
                                        <Badge
                                            key={item}
                                            variant="outline"
                                            className="font-zalando"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <Separator className="w-full mt-10 md:mt-16" />


                </div>
            </main>
        </div>
    );
}