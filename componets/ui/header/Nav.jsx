"use client";
import Link from "next/link";


const navLinks = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Service",
        href: "/service"
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "Contact",
        href: "/contact"
    }
]
function Nav() {
    return (
        <nav className="text-[#f1f1f1] flex gap-8 items-center">
            {navLinks.map((link, index) =>
                <Link
                    key={index}
                    href={link.href}
                    className="relative group font-semibold text-white border-b border-transparent"
                    >
                    {link.name}
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-(--bg-primary) group-hover:w-full transition-all duration-300"></div>
                </Link>
            )}
        </nav>
    )
}

export default Nav
