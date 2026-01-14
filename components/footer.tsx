"use client";

import { services } from "@/data/services";
import { contactInfo } from "@/data/contact";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter } from "next/navigation";

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
            // If already on homepage, just scroll to section
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // If not on homepage, navigate to homepage with hash
            router.push(`/${href}`);
        }
    };

    return (
        <footer className="bg-foreground py-12 text-background">
            <div className="cs-container">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
                    <div aria-label="Company Information">
                        <div className="flex justify-center items-center">
                            <Link href="/" draggable={false} aria-label="Home">
                                <Image
                                    src="/assets/img/logo/logo.png"
                                    width={160}
                                    height={80}
                                    alt="logo"
                                    className="w-40"
                                    draggable={false}
                                />
                            </Link>
                        </div>
                        <p className="mt-4 text-background md:text-left text-center">
                            Profesionální montáže stínicí techniky s více než 8
                            letou praxí. Zaměřuji se na individuální řešení a
                            precizní provedení.
                        </p>
                    </div>

                    <div className="text-center" aria-label="Services">
                        <h4 className="mb-4 font-bold text-lg">Služby</h4>
                        <ul className="space-y-2 text-background">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.link}
                                        className="hover:underline transition"
                                        draggable={false}
                                        aria-label={service.title}
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center" aria-label="Quick Links">
                        <h4 className="mb-4 font-bold text-lg">
                            Rychlé odkazy
                        </h4>
                        <ul className="space-y-2 text-background">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() =>
                                            handleNavClick(link.href)
                                        }
                                        className="text-left hover:underline transition cursor-pointer"
                                        aria-label={link.label}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="text-center"
                        aria-label="Contact Information"
                    >
                        <h4 className="mb-4 font-bold text-lg">Kontakt</h4>
                        <ul className="space-y-2 text-background text-left">
                            {contactInfo.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex justify-center md:justify-start items-center"
                                    aria-label={item.title}
                                >
                                    <span className="mr-3" aria-hidden="true">
                                        {item.icon}
                                    </span>
                                    <div className="odd:flex odd:flex-col odd:justify-center odd:items-center last:text-center">
                                        {item.content}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />
                <div className="font-bold text-muted text-center">
                    &copy; {new Date().getFullYear()} Travas Stínění. Všechna
                    práva vyhrazena.
                </div>
                <div className="mt-5 text-muted text-xs text-center">
                    Webovou stránku vytvořil
                    <Link
                        href={"https://www.topeeez.cz"}
                        className="font-bold animate-shine effect-shine"
                        target="_blank"
                        draggable={false}
                        aria-label="Topeeez Website"
                    >
                        <span> Topeeez</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
