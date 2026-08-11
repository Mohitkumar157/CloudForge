"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useState } from "react";

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "/flags/uk.png",
    },
    {
      code: "fr",
      name: "Français",
      flag: "/flags/fr.png",
    },
  ];

  const currentLanguage =
    languages.find((language) => language.code === locale) ||
    languages[0];
  const changeLanguage = (newLocale) => { 
    if (newLocale === locale) {
      setOpen(false);
      return;
    }
    setOpen(false);
    router.replace(pathname, {
      locale: newLocale,
    });
  };
  return (
    <div className="relative mt-6 md:mt-0">
      {/* Selected Language */}
      <button
        type="button"
        onClick={(e) => {
           e.stopPropagation();
          setOpen((prev) => !prev)
        }}
        className="flex items-center justify-between w-33.75 gap-2 px-3 py-2 rounded-full border border-white/30 text-white"
      >
        <span>
          <img
            src={currentLanguage?.flag}
            alt={currentLanguage.name}
            className="w-5 h-5 object-cover object-center"
          />
        </span>

        <span className="font-semibold text-[13px]">
          {currentLanguage.name}
        </span>

        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute flex flex-col gap-1 left-0 top-[calc(100%+8px)] z-50 w-40 rounded-xl bg-[#182536] border border-white/20 p-1 shadow-xl">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-[13px] rounded-lg text-left transition-colors ${locale === language.code
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
            >
              <span>
                <img
                  src={language.flag}
                  alt={language.name}
                  className="w-5 h-5 object-cover object-center"
                />
              </span>

              <span>{language.name}</span>

              {locale === language.code && (
                <span className="ml-auto">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;