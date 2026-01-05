import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import { BackToTop } from "@/components/back-to-top";

const opensans = Open_Sans({
    subsets: ["latin"],
});

const BASE_URL = "https://travasstineni.cz";
export const metadata: Metadata = {
    title: {
        template: "Travas Stínění | %s",
        default:
            "Travas Stínění - Kompletní dodávka stínící techniky a garážových vrat",
    },
    description:
        "Profesionální montáž stínící techniky, garážových vrat a markýz. Více než 8 let zkušeností, rychlé termíny do 4 týdnů, spolehlivý servis. Kontaktujte nás pro nezávaznou nabídku.",
    keywords:
        "rolety, žaluzie, markýzy, garážová vrata, stínící technika, montáž, servis, Moravský region",
    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: "Travas Stínění - Profesionální montáž stínící techniky",
        type: "website",
        url: "/",
        description:
            "Kvalitní montáž rolet, žaluzií, markýz a garážových vrat s více než 8 lety zkušeností. Rychlé termíny, spolehlivý servis.",
        images: [
            {
                url: "/assets/img/logo/stineni_big.png",
                width: 800,
                height: 600,
                alt: "Travas Stínění - logo společnosti",
            },
        ],
        locale: "cs_CZ",
        siteName: "Travas Stínění",
    },
    twitter: {
        card: "summary_large_image",
        title: "Travas Stínění - Montáž stínící techniky",
        description:
            "Profesionální montáž rolet, žaluzií, markýz a garážových vrat",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="cz">
            <body className={`${opensans.className} antialiased`}>
                <Header />
                <main>{children}</main>
                <BackToTop />
                <Toaster />
                <Footer />
            </body>
        </html>
    );
}
