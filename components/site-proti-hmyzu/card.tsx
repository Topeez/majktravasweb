import Link from "next/link";

export function Card({
    link,
    className,
    title,
    image,
}: {
    link: string;
    className: string;
    title: string;
    image: string;
}) {
    return (
        <Link
            href={link}
            className={`text-background group shadow-lg hover:shadow-2xl rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 h-full min-h-[400px] will-change-auto bg-cover relative ${className}`}
        >
            <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center group-hover:scale-110 transition-all duration-500 will-change-[scale]"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500" />

            <div className="z-10 text-center">
                <h3 className="font-semibold text-3xl">{title}</h3>
            </div>
        </Link>
    );
}
