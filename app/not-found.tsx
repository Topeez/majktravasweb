"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex items-center bg-foreground px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 min-h-screen">
            <div className="space-y-6 w-full text-center">
                <div className="space-y-3">
                    <h2
                        className="font-bold text-transparent text-4xl sm:text-7xl tracking-wide"
                        style={{ WebkitTextStroke: "1px #ffffff" }}
                    >
                        404
                    </h2>
                    <p className="text-background text-xl">
                        Nemohli jsme najít stránku, kterou jsi hledal...
                    </p>
                </div>
                <div className="flex items-center gap-8">
                    <Button
                        onClick={() => router.push("/app")}
                        className="bg-foreground hover:bg-foreground hover:shadow-xl px-8 py-6 rounded-4xl font-bold text-background hover:text-background text-xl transition-all duration-300 cursor-pointer"
                    >
                        Domů
                    </Button>
                    <Button
                        onClick={() => router.back()}
                        className="bg-background hover:bg-background hover:shadow-xl px-8 py-6 rounded-4xl font-bold text-foreground hover:text-foreground text-xl transition-all duration-300 cursor-pointer"
                    >
                        Jít zpět
                    </Button>
                </div>
            </div>
        </div>
    );
}
