import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
    {
        value: "languages",
        trigger: "Languages",
        content: "Portuguese (Native), English (Fluent - C1)",
    },
    {
        value: "focus",
        trigger: "Main Focus",
        content:
            "Full-stack Web Development, System Architecture, and Self-hosted Infrastructure.",
    },
    {
        value: "status",
        trigger: "Status",
        content:
            "Open to opportunities and continuously building personal and infrastructure projects.",
    },
]

export function AboutMe() {
    return (
        <Accordion
            type="single"
            collapsible
            className="rounded-lg font-zalando border text-card-foreground"
        >
            {items.map((item) => (
                <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="border-b px-4 last:border-b-0"
                >
                    <AccordionTrigger className="text-sm md:text-base font-medium tracking-tight">
                        {item.trigger}
                    </AccordionTrigger>

                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                        {item.content}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
