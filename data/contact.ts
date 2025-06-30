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
        content: React.createElement(Link, { href: "tel:123456789" }, "123 456 789"),
    },
    {
        icon: React.createElement(Mail, { size: 20 }),
        title: "Email",
        content: "mistrava@seznam.cz",
    },
    {
        icon: React.createElement(MapPin, { size: 20 }),
        title: "Sídlo",
        content: "Kobylí na Moravě, Jihomoravský kraj",
    },
    {
        icon: React.createElement(Clock, { size: 20 }),
        title: "Kdy mě zastihnete?",
        content: React.createElement(
            "div",
            { className: "font-bold"},
            "Telefonicky Po - Pá:",
            React.createElement("span", { className: "font-normal" }, " 8:00 - 16:00")
        ),
    },
];
