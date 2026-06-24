import Image from "next/image";

const technologies = [
    {
        name: "Blender",
        subtitle: "3D modeling",
        icon: "/designTools/blender.png",
    },
    {
        name: "Fusion 360 ",
        subtitle: "3D modeling",
        icon: "/designTools/fusion.png",
    },
    {
        name: "Figma",
        subtitle: "UI/UX design",
        icon: "/designTools/figma.png",
    },
    {
        name: "Adobe Photoshop",
        subtitle: "Image manipulation",
        icon: "/designTools/photoshop.png",
    },
    {
        name: "Adobe Illustrator",
        subtitle: "Vector graphics",
        icon: "/designTools/Illustrator.png",
    },
    {
        name: "Adobe Premiere Pro",
        subtitle: "Video editing",
        icon: "/designTools/premier.png",
    },
];

export default function DesignTools() {
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