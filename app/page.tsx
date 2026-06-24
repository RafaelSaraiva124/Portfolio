import { Separator } from "@/components/ui/separator";
import { AboutMe } from "@/components/about/aboutme";
import React from "react";

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <main className="grid grid-cols-1 w-full max-w-6xl gap-10 sm:gap-16 px-4 sm:px-8 lg:px-16 pt-4 pb-0 items-center">
                <div className="flex flex-col items-start">
                    <h1 className="font-anton text-5xl sm:text-6xl md:text-8xl leading-none">
                        SOFTWARE
                    </h1>

                    <h1 className="font-anton text-5xl sm:text-6xl md:text-8xl text-zinc-500 leading-none">
                        ENGINEER
                    </h1>

                    <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-zalando">
                        Software developer passionate about building clean and scalable web applications,
                        with a strong interest in self-hosting, Proxmox, Docker and infrastructure systems.
                        I enjoy learning new technologies and turning ideas into real-world projects.
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
                </div>
            </main>
        </div>
    );
}