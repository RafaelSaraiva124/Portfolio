import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { House, FolderOpen, BookOpen, SquareDashedBottomCode } from 'lucide-react';
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-8 px-6 py-3 bg-background border rounded-full shadow-md">
                <div>
                    <Tooltip>
                        <Link href="/">
                            <TooltipTrigger>
                                <House className="hover:scale-110 transition" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-zalando">Home</p>
                            </TooltipContent>
                        </Link>
                    </Tooltip>
                </div>
                <div>
                    <Link href="/projects">
                        <Tooltip>
                            <TooltipTrigger>
                                <FolderOpen className="hover:scale-110 transition" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-zalando">Projects</p>
                            </TooltipContent>
                        </Tooltip>
                    </Link>
                </div>
                <div>
                    <Link href="/experience">
                        <Tooltip>
                            <TooltipTrigger>
                                <BookOpen className="hover:scale-110 transition" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-zalando">Experience</p>
                            </TooltipContent>
                        </Tooltip>
                    </Link>
                </div>
                <div>
                    <Link href="/tools">
                        <Tooltip>
                            <TooltipTrigger>
                                <SquareDashedBottomCode className="hover:scale-110 transition" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="font-zalando">Tools</p>
                            </TooltipContent>
                        </Tooltip>
                    </Link>
                </div>
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}