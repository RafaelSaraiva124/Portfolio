"use client";

import dynamic from "next/dynamic";
import { Separator } from "@/components/ui/separator";
import { SoftwareProjects } from "@/components/softwareProjects/softwareProjects";

const Model = dynamic(() => import("@/components/designProjects/models/Model"), {
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground">Loading 3D...</div>
        </div>
    ),
    ssr: false,
});

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="grid grid-cols-1 w-full max-w-6xl gap-16 px-8 lg:px-16 py-4 items-center">
                <div className="flex flex-col items-start">
                    <h1 className="font-anton text-6xl md:text-8xl leading-none">
                        Software
                    </h1>
                    <h1 className="font-anton text-6xl md:text-8xl text-zinc-500 leading-none">
                        Development
                    </h1>

                    <div className="mt-6 w-full">
                        <SoftwareProjects />
                    </div>
                    <Separator className="w-full mt-8" />
                    <div>
                        <h1 className="font-anton text-6xl md:text-8xl pt-10 leading-none">
                            Graphic
                        </h1>
                        <h1 className="font-anton text-6xl md:text-8xl text-zinc-500 leading-none">
                            Design
                        </h1>
                    </div>
                    <h1 className="mt-20 text-3xl font-zalando font-bold"> Sports Jersey Design</h1>
                    <p className="muted font-zalando text-muted-foreground pb-5">From concept to 3D visualization, this project showcases the complete design process behind a modern sports jersey, combining branding, aesthetics, and attention to detail.</p>
                    <div className="w-full h-[700px]  flex items-center justify-center bg-gradient-to-br from-white via-zinc-50 to-neutral-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-neutral-900 rounded-2xl overflow-visible border border-zinc-200 dark:border-zinc-700">
                        <Model />
                    </div>
                    <Separator className="w-full mt-8" />
                    <h1 className="mt-20 text-3xl font-zalando font-bold"> Branding Design</h1>
                    <p className="muted font-zalando text-muted-foreground pb-5">Exploring multiple logo concepts and visual directions to build a distinctive and professional brand identity for BuildTech.</p>
                    <div>
                        <img src="/Projects/branding.jpg" alt="branding" className="w-full h-full rounded-2xl" />
                    </div>
                    <Separator className="w-full mt-8" />


                </div>
            </main>
        </div>
    );
}