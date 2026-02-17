"use client";

import { services } from "@/data/services";
import { contactInfo } from "@/data/contact";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter } from "next/navigation";
import {
    ClimaxLogo,
    IsotraLogo,
    JimiToreLogo,
    TridoLogo,
} from "./logo-cloud/logos";

export function Footer() {
    const pathname = usePathname();
    const router = useRouter();
    const isHomePage = pathname === "/";

    const navLinks = [
        { label: "Služby", href: "#sluzby" },
        { label: "O mně", href: "#omne" },
        { label: "Reference", href: "#recenze" },
        { label: "Kontakt", href: "#kontakt" },
    ];

    const handleNavClick = (href: string) => {
        if (isHomePage) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            router.push(`/${href}`);
        }
    };

    return (
        <footer className="bg-foreground py-16 text-background">
            <div className="cs-container">
                <div className="flex flex-col items-center mb-16">
                    <p className="mb-8 font-bold text-white/40 text-xs text-center uppercase tracking-[0.2em]">
                        Autorizovaná montáž ověřených značek
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                        <div className="flex justify-center w-28 md:w-36">
                            <ClimaxLogo className="opacity-50 hover:opacity-100 brightness-0 invert" />
                        </div>
                        <div className="flex justify-center w-28 md:w-36">
                            <IsotraLogo className="opacity-50 hover:opacity-100 brightness-0 invert" />
                        </div>
                        <div className="flex justify-center w-28 md:w-36">
                            <JimiToreLogo className="opacity-50 hover:opacity-100 brightness-0 invert" />
                        </div>
                        <div className="flex justify-center w-28 md:w-36">
                            <TridoLogo className="opacity-50 hover:opacity-100 brightness-0 invert" />
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/10 mb-12" />

                <div className="gap-10 grid grid-cols-1 md:grid-cols-4">
                    <div className="flex flex-col items-center md:items-start md:text-left text-center">
                        <Link
                            href="/"
                            draggable={false}
                            aria-label="Home"
                            className="block mb-6"
                        >
                            <Image
                                src="/assets/img/logo/logo.png"
                                width={160}
                                height={80}
                                alt="Travas Stínění Logo"
                                className="w-40"
                                draggable={false}
                            />
                        </Link>
                        <p className="max-w-xs text-white/70 text-sm leading-relaxed">
                            Profesionální montáže stínicí techniky s více než 8
                            letou praxí. Zaměřuji se na individuální řešení a
                            precizní provedení.
                        </p>
                    </div>

                    <div className="md:text-left text-center">
                        <h4 className="mb-6 font-bold text-lg tracking-wide">
                            Služby
                        </h4>
                        <ul className="space-y-3 text-white/70 text-sm">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.link}
                                        className="block py-1 hover:text-white transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:text-left text-center">
                        <h4 className="mb-6 font-bold text-lg tracking-wide">
                            Rychlé odkazy
                        </h4>
                        <ul className="space-y-3 text-white/70 text-sm">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() =>
                                            handleNavClick(link.href)
                                        }
                                        className="block py-1 w-full md:w-auto hover:text-white text-left transition-colors cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:text-left text-center">
                        <h4 className="mb-6 font-bold text-lg tracking-wide">
                            Kontakt
                        </h4>
                        <ul className="space-y-4 text-white/70 text-sm">
                            {contactInfo.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex md:flex-row flex-col items-center md:items-start gap-3"
                                >
                                    <span className="mt-0.5 text-white shrink-0">
                                        {item.icon}
                                    </span>
                                    <div className="leading-tight">
                                        {item.content}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="bg-white/10 my-10" />

                <div className="flex flex-col justify-between items-center gap-4 text-white/40 text-xs">
                    <div className="font-bold text-muted text-center">
                        &copy; {new Date().getFullYear()} Travas Stínění.
                        Všechna práva vyhrazena.
                    </div>
                    <div className="mt-5 text-muted text-xs text-center">
                        Webovou stránku vytvořil
                        <Link
                            href={"https://www.topeeez.cz"}
                            className="font-bold animate-shine effect-shine"
                            target="_blank"
                            draggable={false}
                            aria-label="Topeeez portfolio"
                        >
                            <span> Topeeez</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
