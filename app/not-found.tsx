"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex items-center bg-foreground px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 min-h-screen">
            <div className="space-y-6 w-full text-center">
                <div className="space-y-3">
                    <h1
                        className="font-bold text-transparent text-4xl sm:text-7xl tracking-wide"
                        style={{ WebkitTextStroke: "1px #ffffff" }}
                    >
                        404
                    </h1>
                    <p className="text-background text-xl">
                        Nemohli jsme najít stránku, kterou jsi hledal...
                    </p>
                </div>
                <Button
                    onClick={() => router.back()}
                    className="bg-background hover:bg-background hover:shadow-xl px-8 py-6 rounded-4xl font-bold text-foreground hover:text-foreground text-xl transition-all duration-300 cursor-pointer"
                >
                    Jít zpět
                </Button>
            </div>
        </div>
    );
}
