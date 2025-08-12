import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface ContactItem {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
}

export const contactInfo: ContactItem[] = [
    {
        icon: React.createElement(Phone, { size: 20 }),
        title: "Telefon",
        content: React.createElement(Link, { href: "tel:+420735864899", draggable: false,  className: "font-bold hover:underline" }, "+420 735 864 899"),
    },
    {
        icon: React.createElement(Mail, { size: 20 }),
        title: "Email",
        content: React.createElement(Link, { href: "mailto:mistrava@seznam.cz", draggable: false, className: "font-bold hover:underline" }, "mistrava@seznam.cz")
    },
    {
        icon: React.createElement(MapPin, { size: 20 }),
        title: "Sídlo",
        content: React.createElement(Link, { href: "https://maps.app.goo.gl/CcH32FaUAWpXKBJXA", target: "_blank", draggable: false, className: "font-bold hover:underline"}, "Kobylí 587, 691 10 Kobylí")
    },
    {
        icon: React.createElement(Clock, { size: 20 }),
        title: "Kdy mě zastihnete?",
        content: React.createElement(
            "div",
            { className: "font-bold"},
            "Telefonicky Po - Pá:",
            React.createElement("div", { className: "font-normal" }, " 8:00 - 16:00")
        ),
    },
];
