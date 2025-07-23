"use client";

import Image from "next/image";

type Stat = {
    label: string;
    value: number;
};

type Props = {
    title: string;
    subtitle: string;
    image: string;
    stats: {
        [key: string]: Stat;
    };
};

export function Card({ title, subtitle, image, stats }: Props) {
    return (
        <div className="flex md:flex-row md:odd:flex-row-reverse flex-col gap-6 md:gap-12 dark:bg-muted shadow-md p-6 border rounded-2xl overflow-hidden">
            {/* Image */}
            <div className="rounded-xl w-full md:w-1/2 h-64 md:h-[500px] overflow-hidden">
                <Image
                    src={image}
                    width={1200}
                    height={800}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between w-full md:w-1/2 h-full">
                <div className="flex-1 space-y-4">
                    <h3 className="font-bold text-foreground text-2xl md:text-3xl">
                        {title}
                    </h3>
                    <p className="text-muted-foreground text-lg">{subtitle}</p>
                </div>

                {/* Stats */}
                <div className="space-y-4 mt-6">
                    {Object.entries(stats).map(([key, stat]) => (
                        <div key={key}>
                            <div className="flex justify-between font-medium text-muted-foreground">
                                <span className="text-sm md:text-xl">
                                    {stat.label}
                                </span>
                            </div>
                            <div className="flex gap-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={
                                            i < stat.value
                                                ? "bg-foreground h-4 w-8 rounded-xs"
                                                : "h-4 w-8 bg-muted-foreground rounded-xs"
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
