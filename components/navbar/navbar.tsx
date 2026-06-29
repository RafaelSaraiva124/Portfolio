"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    House,
    FolderOpen,
    BookOpen,
    SquareDashedBottomCode,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const navItems = [
    { href: "/", label: "Home", icon: House },
    { href: "/projects", label: "Projects", icon: FolderOpen },
    { href: "/experience", label: "Experience", icon: BookOpen },
    { href: "/tools", label: "Tools", icon: SquareDashedBottomCode },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Main navigation"
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-md border border-border/50 rounded-full shadow-lg shadow-black/10">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const isActive =
                        href === "/" ? pathname === "/" : pathname.startsWith(href);

                    return (
                        <Tooltip key={href}>
                            <TooltipTrigger asChild>
                                <Link
                                    href={href}
                                    aria-label={label}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`
                                        relative flex items-center justify-center w-10 h-10 rounded-full
                                        transition-all duration-300 group
                                        ${isActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                    }
                                    `}
                                >
                                    {isActive && (
                                        <span className="absolute inset-0 rounded-full bg-primary/10 ring-1 ring-primary/40 shadow-[0_0_12px_2px] shadow-primary/20" />
                                    )}

                                    <span
                                        className={`
                                            absolute -bottom-[3px] left-1/2 -translate-x-1/2
                                            w-1 h-1 rounded-full bg-primary
                                            transition-all duration-300
                                            ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"}
                                        `}
                                    />

                                    <Icon
                                        size={18}
                                        aria-hidden="true"
                                        className={`relative z-10 transition-all duration-300 ${
                                            isActive ? "scale-110" : "group-hover:scale-110"
                                        }`}
                                    />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-zalando">{label}</p>
                            </TooltipContent>
                        </Tooltip>
                    );
                })}

                <div className="w-px h-5 bg-border/60 mx-1" />
                <ThemeToggle />
            </div>
        </nav>
    );
}