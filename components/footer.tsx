import { services } from "@/data/services";
import { contactInfo } from "@/data/contact";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    const navLinks = [
        { label: "Služby", href: "#sluzby" },
        { label: "O mně", href: "#omne" },
        { label: "Reference", href: "#recenze" },
        { label: "Kontakt", href: "#kontakt" },
    ];

    return (
        <footer className="bg-foreground py-12 text-white">
            <div className="cs-container">
                <div className="gap-8 grid grid-cols-1 md:grid-cols-4">
                    <div>
                        <div className="flex justify-center items-center">
                            <Link href="/" draggable={false}>
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

                    <div className="text-center">
                        <h4 className="mb-4 font-bold text-lg">Služby</h4>
                        <ul className="space-y-2 text-background">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.link}
                                        className="hover:underline transition"
                                        draggable={false}
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center">
                        <h4 className="mb-4 font-bold text-lg">
                            Rychlé odkazy
                        </h4>
                        <ul className="space-y-2 text-background">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="hover:underline transition"
                                        draggable={false}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center">
                        <h4 className="mb-4 font-bold text-lg">Kontakt</h4>
                        <ul className="space-y-2 text-background text-left">
                            {contactInfo.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex justify-center md:justify-start items-center"
                                >
                                    <div className="mr-3">{item.icon}</div>
                                    <span>{item.content}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />
                <div className="font-semibold text-muted text-center">
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
                    >
                        <span> Topeeez</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
