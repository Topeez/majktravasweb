"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = {
    title: string;
    href?: string;
};

interface BreadcrumbProps {
    items: Crumb[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav
            className="flex items-center col-span-12 w-full text-muted-foreground text-sm"
            aria-label="breadcrumb"
        >
            {items.map((item, index) => (
                <div className="flex items-center" key={index}>
                    {index !== 0 && <ChevronRight className="mx-2 w-4 h-4" />}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-foreground hover:underline underline-offset-4"
                        >
                            {item.title}
                        </Link>
                    ) : (
                        <span className="w-full text-muted-foreground">
                            {item.title}
                        </span>
                    )}
                </div>
            ))}
        </nav>
    );
}
