import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const experiences = [
    {
        title: "Actively Seeking Software Engineering Opportunities",
        period: "2026 - Present",
    },
    {
        title: "University of Split – FESB",
        subtitle: "Erasmus Exchange Semester",
        period: "Feb 2026 – Jul 2026",
        description:
            "International academic experience that strengthened adaptability, collaboration, and exposure to different engineering methodologies.",
    },
    {
        title: "Instituto Politécnico de Bragança",
        subtitle: "BSc in Computer Engineering",
        period: "2022 – 2026",
        description:
            "Focused on software engineering fundamentals, including algorithms, data structures, databases, and systems architecture.",
    },


];

export default function ExperienceTimeline() {
    return (
        <div className="relative border-l border-border ml-4 space-y-10">

            {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">

                    <div className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-foreground" />

                    <Card className="bg-card border-border shadow-sm hover:shadow-md transition">
                        <CardHeader>
                            <CardTitle className="text-lg">
                                {exp.title}
                            </CardTitle>

                            <CardDescription>
                                {exp.subtitle} • {exp.period}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="text-sm text-muted-foreground leading-relaxed">
                            {exp.description}
                        </CardContent>
                    </Card>

                </div>
            ))}
        </div>
    );
}