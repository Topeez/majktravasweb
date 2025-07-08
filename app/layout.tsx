import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const BASE_URL = "https://travasstineni.cz";

export const metadata: Metadata = {
    title: {
        template: "Travas Stínění | %s",
        default: "Travas Stínění",
    },
    description: "Webová stránka Travas Stínění",
    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: "Travas Stínění",
        type: "website",
        url: "/",
        description: "Webová stránka Travas Stínění",
    }

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} antialiased`}>
                <Header />
                <main>{children}</main>
                <Toaster />
                <Footer />
            </body>
        </html>
    );
}

