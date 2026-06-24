import React from 'react'
import ExperienceTimeline from "@/components/experiences/experiencesCard";
import {Separator} from "@/components/ui/separator";

const Page = () => {
    return (
            <div className="flex min-h-screen flex-col">
                <main className="grid grid-cols-1 w-full max-w-6xl gap-16 px-8 lg:px-16 py-4 items-center">
                <div>
                    <h1 className="font-anton text-6xl md:text-8xl leading-none">
                        Professional
                    </h1>
                    <h1 className="font-anton text-6xl md:text-8xl text-zinc-500 leading-none ">
                        Journey
                    </h1>
                </div>

            <ExperienceTimeline/>
            <Separator className="w-full mt-8" />
                </main>

        </div>

    )
}
export default Page
