"use client";

import { Separator } from "@/components/ui/separator";
import ToolsCard from "@/components/tools/toolscard";
import DesignTools from "@/components/tools/designtools";


export default function Page() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="grid grid-cols-1 w-full max-w-6xl gap-16 px-8 lg:px-16 py-4 items-center">
                <div className="flex flex-col items-start">
                    <h1 className="font-anton text-6xl md:text-8xl leading-none">
                        Tools &
                    </h1>
                    <h1 className="font-anton text-6xl md:text-8xl text-zinc-500 leading-none">
                        Technologies
                    </h1>

                    <div className="mt-6 w-full">
                        <ToolsCard />
                    </div>
                    <Separator className="w-full mt-8" />
                    <div className="mt-6 w-full">
                        <h1 className="font-anton text-6xl md:text-8xl pt-10 leading-none">
                            Design
                        </h1>
                        <h1 className="font-anton text-6xl md:text-8xl text-zinc-500 leading-none">
                            Tools
                        </h1>
                        <div className="mt-6 w-full">
                            <DesignTools />
                        </div>
                    </div>
                    <Separator className="w-full mt-8" />


                </div>
            </main>
        </div>
    );
}