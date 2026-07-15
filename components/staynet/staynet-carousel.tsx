"use client";

import Image from "next/image";
import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export type StayNetImage = {
    src: string;
    alt: string;
    caption?: string;
};

const defaultImages: StayNetImage[] = [
    {
        src: "/projects/staynet/discover.jpg",
        alt: "StayNet — Discover page",
        caption: "Browse hotels and destinations.",
    },
    {
        src: "/projects/staynet/hotel.jpg",
        alt: "StayNet — Hotel page",
        caption: "Detailed hotel page with booking information.",
    },
    {
        src: "/projects/staynet/calendar.jpg",
        alt: "StayNet — Calendar page",
        caption: "Interactive booking calendar.",
    },
    {
        src: "/projects/staynet/Cart.jpg",
        alt: "StayNet — Cart page",
        caption: "Booking cart before checkout.",
    },
    {
        src: "/projects/staynet/Favorite.jpg",
        alt: "StayNet — Favourite page",
        caption: "Favourite hotels list.",
    },
    {
        src: "/projects/staynet/admin-area.jpg",
        alt: "StayNet — Admin Dashboard",
        caption: "Administration dashboard.",
    },
];

interface StayNetCarouselProps {
    images?: StayNetImage[];
    className?: string;
}

export function StaynetCarousel({
                                    images = defaultImages,
                                    className,
                                }: StayNetCarouselProps) {
    return (
        <Carousel
            opts={{
                align: "center",
                loop: true,
            }}
            className={`w-full max-w-7xl mx-auto ${className ?? ""}`}
        >
            <CarouselContent>
                {images.map((image, index) => (
                    <CarouselItem key={`${image.src}-${index}`}>
                        <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-md">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={928}
                                height={469}
                                priority={index === 0}
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="w-full h-auto transition-transform duration-300 hover:scale-[1.01]"
                            />

                            {image.caption && (
                                <div className="border-t border-zinc-200 dark:border-zinc-800 px-5 py-4">
                                    <p className="text-center text-sm text-muted-foreground">
                                        {image.caption}
                                    </p>
                                </div>
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="-left-5 h-11 w-11" />
            <CarouselNext className="-right-5 h-11 w-11" />
        </Carousel>
    );
}