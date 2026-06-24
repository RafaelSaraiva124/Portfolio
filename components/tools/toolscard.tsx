import Image from "next/image";

const technologies = [
    {
        name: "Next.js",
        subtitle: "React Framework",
        icon: "/tech/next.png",
    },
    {
        name: "React",
        subtitle: "Framework",
        icon: "/tech/react.png",
    },
    {
        name: "Docker",
        subtitle: "Containerization",
        icon: "/tech/docker.png",
    },
    {
        name: "Proxmox",
        subtitle: "Virtualization Platform",
        icon: "/tech/proxmox.png",
    },
    {
        name: "PostgreSQL",
        subtitle: "Database",
        icon: "/tech/postgresql.jpg",
    },
    {
        name: "Tailwind CSS",
        subtitle: "Styling Framework",
        icon: "/tech/tailwind.png",
    },
    {
        name: "GitHub",
        subtitle: "Version control",
        icon: "/tech/github.png",
    },
    {
        name: "Shadcn/ui",
        subtitle: "Component library",
        icon: "/tech/shadcn.png",
    },
];

export default function ToolsCard() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {technologies.map((tech) => (
                <div
                    key={tech.name}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                    <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-white p-2">
                        <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            sizes="48px"
                            className="object-contain"
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground">
                            {tech.name}
                        </h3>

                        <p className="text-sm text-muted-foreground">
                            {tech.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}