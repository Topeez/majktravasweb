import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    className?: string;
}

// Společný styl pro Link (obal)
const linkStyle = "inline-block transition-transform hover:scale-105";

export const ClimaxLogo = ({ className }: LogoProps) => (
    <Link href="https://www.climax.cz/" target="_blank" className={linkStyle}>
        <Image
            src="/assets/img/climax-logo.png"
            width={150} // Zmenšil jsem width/height, 200 je zbytečně moc
            height={60}
            alt="Climax Logo"
            className={`object-contain h-auto w-auto transition-all duration-300 ${className || ""}`}
        />
    </Link>
);

export const IsotraLogo = ({ className }: LogoProps) => (
    <Link href="https://www.isotra.cz/" target="_blank" className={linkStyle}>
        <Image
            src="/assets/img/isotra-logo.png"
            width={150}
            height={60}
            alt="Isotra Logo"
            className={`object-contain h-auto w-auto transition-all duration-300 ${className || ""}`}
        />
    </Link>
);

export const JimiToreLogo = ({ className }: LogoProps) => (
    <Link
        href="https://www.jimi-tore.cz/"
        target="_blank"
        className={linkStyle}
    >
        <Image
            src="/assets/img/jimi-tore-logo.png"
            width={150}
            height={60}
            alt="Jimi Tore Logo"
            className={`object-contain h-auto w-auto transition-all duration-300 ${className || ""}`}
        />
    </Link>
);

export const TridoLogo = ({ className }: LogoProps) => (
    <Link href="https://www.trido.cz/" target="_blank" className={linkStyle}>
        <Image
            src="/assets/img/trido-logo.png"
            width={150}
            height={60}
            alt="Trido Logo"
            className={`object-contain h-auto w-auto transition-all duration-300 ${className || ""}`}
        />
    </Link>
);
