import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar/navbar";
import Profilecard from "@/components/profile/profilecard";
import ContactForm from "@/components/contactForm/contactForm";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Personal developer portfolio",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col  text-foreground">
        <Toaster />
        <TooltipProvider>
            <ThemeProvider>

                <Navbar />

                <main className="flex flex-1 justify-center px-4 sm:px-6 lg:px-8">
                    <div className="
                        grid
                        w-full
                        max-w-6xl
                        py-16 md:py-24 lg:py-32
                        gap-8 lg:gap-12
                        grid-cols-1
                        lg:grid-cols-[35%_65%]
                      ">

                        <div className="flex justify-center lg:justify-end order-1 lg:sticky lg:top-20 lg:self-start">
                            <Profilecard />
                        </div>

                        <div className="flex flex-col order-2">
                            {children}
                            <div className="mt-15 w-full px-9 sm:px-6 lg:px-15">
                                <h1 className="font-anton text-6xl md:text-8xl leading-none">
                                    Let’s Build
                                </h1>
                                <h1 className="font-anton text-6xl md:text-8xl text-zinc-500 leading-none">
                                    Something
                                </h1>
                                <div className="mt-6 w-full">
                                    <ContactForm/>
                                </div>

                            </div>
                        </div>

                    </div>

                </main>


            </ThemeProvider>
        </TooltipProvider>
        </body>
        </html>
    );
}