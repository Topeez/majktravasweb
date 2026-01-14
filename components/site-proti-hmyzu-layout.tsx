import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface DetailProduktuProps {
    title: string;
    description: string;
    breadcrumbParent?: { title: string; href: string };
    imageSrc: string;
    imageAlt?: string;
    productDescription: string;
    features: string[];
}

export function DetailProduktu({
    title,
    description,
    breadcrumbParent = { title: "Sítě proti hmyzu", href: "/site-proti-hmyzu" },
    imageSrc,
    imageAlt,
    productDescription,
    features,
}: DetailProduktuProps) {
    return (
        <section className="py-44 cs-container">
            {/* Breadcrumb */}
            <Breadcrumb
                aria-label="Breadcrumb navigation"
                items={[
                    { title: "Domů", href: "/" },
                    breadcrumbParent,
                    { title: title },
                ]}
            />

            {/* Nadpis */}
            <div className="mt-20 mb-16 text-center">
                <h1 className="font-bold text-3xl md:text-5xl">{title}</h1>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground text-lg">
                    {description}
                </p>
            </div>

            {/* Obrázek a text */}
            <div className="flex flex-col items-center gap-12 md:grid md:grid-cols-12">
                <div className="relative col-span-12 md:col-span-6 w-full h-[400px] md:h-[500px] aspect-square">
                    <Image
                        src={imageSrc}
                        alt={imageAlt || title}
                        width={1920}
                        height={1080}
                        draggable={false}
                        className="shadow-lg rounded-2xl size-full object-cover"
                    />
                    {/* Dekorativní border */}
                    <div className="absolute inset-0 m-4 border-2 border-background/10 rounded-2xl pointer-events-none" />
                </div>

                <div className="space-y-6 col-span-12 md:col-span-6">
                    <h2 className="font-bold text-2xl md:text-3xl md:text-left text-center">
                        Popis produktu
                    </h2>
                    <p className="md:text-left text-center leading-relaxed">
                        {productDescription}
                    </p>

                    <ul className="space-y-4 mb-8">
                        {features.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="flex-shrink-0 bg-foreground mt-1 p-1 rounded-full">
                                    <Check className="w-4 h-4 text-background" />
                                </div>
                                <span className="text-primary/90">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center md:justify-start">
                        <Link
                            href="/#kontakt"
                            className="group flex items-center gap-2 bg-foreground hover:bg-background px-6 md:px-8 py-3 border border-background hover:border-foreground rounded-4xl max-w-fit font-bold text-background hover:text-foreground text-lg md:text-xl transition-colors cursor-pointer"
                            aria-label="Poptat se"
                        >
                            Poptat se
                            <ArrowRight
                                size={20}
                                className="transition-all group-hover:translate-x-1"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
