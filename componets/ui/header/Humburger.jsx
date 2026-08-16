"use client";

import { Link} from "@/src/i18n/navigation";
import { X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "../LanguageSwitcher";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

function Humburger() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative flex justify-between items-center px-2 py-4 bg-(--bg-primary)">
            {/* Logo */}
            <Link href="/" className="logo">
                <h2 className="uppercase text-2xl! font-semibold">
                    CloudForge
                </h2>
            </Link>

            {/* Hamburger Button */}
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={open}
                className="humburger flex flex-col gap-2 p-3 bg-(--bg-theme) rounded-md overflow-hidden"
            >
                <span className="inline-block w-7 h-0.5 bg-(--bg-primary) rounded-full" />

                <span
                    className={`inline-block h-0.5 bg-(--bg-primary) rounded-full transition-all duration-200 ${
                        open ? "w-7" : "w-4"
                    }`}
                />

                <span className="inline-block w-7 h-0.5 bg-(--bg-primary) rounded-full" />
            </button>

            {/* Mobile Navigation */}
            <nav
                aria-label="Mobile navigation"
                className={`fixed top-0 right-0 z-999 w-full h-screen flex justify-end backdrop-blur-[2px] transition-transform duration-500 ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="w-[70%] h-screen p-6 bg-(--bg-theme) text-(--text-primary)">
                    {/* Mobile Header */}
                    <div className="flex justify-between items-center">
                        <Link
                            href="/"
                            className="logo"
                            onClick={() => setOpen(false)}
                        >
                            <h2 className="font-semibold uppercase text-[18px]! text-[#f1f1f1]">
                                CloudForge
                            </h2>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close mobile menu"
                            className="cursor-pointer"
                        >
                            <X
                                className="w-9 h-9"
                                strokeWidth={1.25}
                            />
                        </button>
                    </div>

                    <div className="w-full h-[0.5px] bg-(--text-primary) my-5" />

                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link, i) => (
                            <li
                                key={link.href}
                                className="font-semibold text-[18px] py-2 overflow-hidden"
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`
                                        inline-block
                                        transition-all
                                        duration-700
                                        ease-out
                                        ${
                                            open
                                                ? "translate-y-0 opacity-100"
                                                : "-translate-y-24 opacity-0"
                                        }
                                    `}
                                    style={{
                                        transitionDelay: open
                                            ? `${i * 80}ms`
                                            : "0ms",
                                    }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="w-full h-[0.5px] bg-(--text-primary) my-5" />

                    <LanguageSwitcher />
                </div>
            </nav>
        </div>
    );
}

export default Humburger;