"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                }),
            });

            if (!res.ok) {
                throw new Error("Failed request");
            }

            form.reset();

            toast.success("Message sent successfully!");
        } catch (error) {
            toast.error("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card className="w-full bg-transparent border-0 shadow-none mx-auto">
            <CardHeader>
                <CardTitle className="font-zalando text-2xl">
                    Contact Me
                </CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">

                    <Input name="name" placeholder="Your name" required />

                    <Input name="email" type="email" placeholder="Your email" required />

                    <Textarea
                        name="message"
                        placeholder="Your message..."
                        className="min-h-[120px]"
                        required
                    />

                    <Button
                        type="submit"
                        className="w-full bg-amber-600 text-white font-zalando font-bold hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 dark:text-black"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}