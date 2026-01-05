import Link from "next/link";
import { services } from "@/data/services";
import { Button } from "./ui/button";
import { BentoGrid } from "./bento-grid";

export default function Services() {
    return (
        <section id="sluzby" className="bg-background py-24">
            <div className="mx-auto px-4 cs-container">
                <div className="flex md:flex-row flex-col justify-between items-start md:items-end gap-6 mb-12">
                    <div className="max-w-2xl md:text-left text-center">
                        <p className="mb-2 font-bold text-muted-foreground text-base uppercase tracking-widest">
                            služby
                        </p>
                        <h2 className="mb-4 font-bold text-3xl md:text-5xl">
                            Co pro vás mohu udělat
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Kompletní řešení od prvotního zaměření přes odbornou
                            instalaci až po spolehlivý servis.
                        </p>
                    </div>

                    <div className="hidden md:block">
                        <Button
                            className="bg-foreground hover:bg-background mt-4 py-3 border border-foreground rounded-lg w-full font-bold text-white hover:text-foreground text-lg transition cursor-pointer"
                            asChild
                        >
                            <Link href="/#kontakt">Nezávazná poptávka</Link>
                        </Button>
                    </div>
                </div>

                <BentoGrid items={services} />
            </div>

            <div className="md:hidden mt-8 text-center">
                <Button
                    className="bg-foreground hover:bg-background mx-12 mt-4 py-3 border border-foreground rounded-lg font-bold text-white hover:text-foreground text-lg transition cursor-pointer"
                    asChild
                >
                    <Link href="/kontakt">Nezávazná poptávka</Link>
                </Button>
            </div>
        </section>
    );
}
