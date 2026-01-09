"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = {
    title: string;
    href?: string;
};

interface BreadcrumbProps {
    items: Crumb[];
    className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav
            className={cn(
                "flex items-center col-span-12 w-full text-muted-foreground text-sm",
                className
            )}
            aria-label="breadcrumb"
        >
            {items.map((item, index) => (
                <div className="flex items-center" key={index}>
                    {index !== 0 && (
                        <ChevronRight
                            aria-hidden="true"
                            className="mx-2 w-4 h-4"
                        />
                    )}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-foreground hover:underline underline-offset-4"
                            aria-label={item.title}
                        >
                            {item.title}
                        </Link>
                    ) : (
                        <span
                            className="w-full font-bold text-muted-foreground"
                            aria-current="page"
                            aria-label={item.title}
                        >
                            {item.title}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
