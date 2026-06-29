"use client";

import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import { SoftwareProjects } from "@/components/softwareProjects/softwareProjects";

const Model = dynamic(() => import("@/components/designProjects/models/Model"), {
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground text-sm md:text-base">Loading 3D...</div>
        </div>
    ),
    ssr: false,
});

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="grid grid-cols-1 w-full max-w-6xl gap-8 md:gap-16 px-4 sm:px-8 lg:px-16 py-4 md:py-6 items-center">
                <div className="flex flex-col items-start w-full">

                    <h1 className="font-anton text-5xl sm:text-6xl md:text-8xl leading-none">
                        Software
                    </h1>
                    <h1 className="font-anton text-4xl sm:text-6xl md:text-8xl text-zinc-500 leading-none">
                        Development
                    </h1>

                    <div className="mt-4 md:mt-6 w-full">
                        <SoftwareProjects />
                    </div>

                    <Separator className="w-full mt-6 md:mt-8" />

                    <div>
                        <h1 className="font-anton text-5xl sm:text-6xl md:text-8xl pt-8 md:pt-10 leading-none">
                            Graphic
                        </h1>
                        <h1 className="font-anton text-4xl sm:text-6xl md:text-8xl text-zinc-500 leading-none">
                            Design
                        </h1>
                    </div>

                    <h2 className="mt-12 md:mt-20 text-xl sm:text-2xl md:text-3xl font-zalando font-bold">
                        Sports Jersey Design
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg font-zalando text-muted-foreground mt-2 md:mt-3 max-w-3xl">
                        From concept to 3D visualization, this project showcases the complete design process behind a modern sports jersey, combining branding, aesthetics, and attention to detail.
                    </p>

                    <div className="w-full h-[600px] lg:h-[700px] mt-6 md:mt-10 relative rounded-xl md:rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-700/50 shadow-sm dark:shadow-none">
                        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(255,255,255,0.6),transparent)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(255,255,255,0.04),transparent)]" />
                        <Model />
                    </div>

                    <Separator className="w-full mt-6 md:mt-8" />

                    <h2 className="mt-12 md:mt-20 text-xl sm:text-2xl md:text-3xl font-zalando font-bold">
                        Branding Design
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg font-zalando text-muted-foreground mt-2 md:mt-3 max-w-3xl">
                        Exploring multiple logo concepts and visual directions to build a distinctive and professional brand identity for BuildTech.
                    </p>

                    <div className="w-full mt-6 md:mt-10 overflow-hidden rounded-xl md:rounded-2xl border border-zinc-200 dark:border-zinc-700">
                        <img
                            src="/projects/branding.jpg"
                            alt="BuildTech Branding Design"
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>

                    <Separator className="w-full mt-6 md:mt-8" />
                </div>
            </main>
        </div>
    );
}