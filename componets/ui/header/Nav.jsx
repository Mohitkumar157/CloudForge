"use client";
import { Link, usePathname } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
const navLinks = [
  {
    name: "Home",
    key: "home",
    href: "/",
  },
  {
    name: "About",
    key: "about",
    href: "/about",
  },
  {
    name: "Service",
    key: "services",
    href: "/service",
  },
  {
    name: "Blog",
    key: "blog",
    href: "/blog",
  },
  {
    name: "Contact",
    key: "contact",
    href: "/contact",
  },
];

function Nav() {
    const t = useTranslations("Header.Navigation");
   const pathName = usePathname();
    return (
        <nav className="text-[#f1f1f1] flex gap-8 items-center">
            {navLinks.map((link, index) =>
                <Link
                    key={index}
                    href={link.href}
                    className="relative pb-0.5 group font-semibold text-white border-b border-transparent"
                    >
                     {t(link.key)}
                    <div className={`${pathName === link.href ? "w-full" : "w-0"} absolute bottom-0 left-0 w-0 h-px bg-(--bg-primary) group-hover:w-full transition-all duration-300`}></div>
                </Link>
            )}
        </nav>
    )
}

export default Nav
