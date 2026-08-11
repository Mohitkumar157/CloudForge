"use client";

import React from "react";
import ClientAvatars from "../ui/ClientAvatars";
import PrimaryButton from "../ui/PrimaryButton";
import { Minus } from "lucide-react";
import { useTranslations } from "next-intl";

const happyClients = [
  "/happy-client1.webp",
  "/happy-client2.webp",
  "/happy-client3.webp",
  "/happy-client4.webp",
];

function HeroContent() {
  const t = useTranslations("ServicesPage.HeroSection");

  const businessServices = t.raw("businessServices");

  return (
    <div className="absolute z-10 w-full">
      <div className="container flex flex-col justify-between gap-4 md:gap-16">
        <div>
          <div className="flex items-center">
            <ClientAvatars happyClients={happyClients} />

            <div>
              <div className="flex items-center gap-3">
                <img
                  src="/service/Star-service-three.svg"
                  alt="star"
                  loading="lazy"
                />

                <span className="font-semibold text-(--text-primary)">
                  {t("rating")}
                </span>
              </div>

              <span className="text-(--text-primary)">
                {t("trustedWorldwide")}
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl w-fit font-semibold text-(--heading-primary) my-4 md:mb-16 md:mt-8">
            {t("title1")} <br className="hidden md:block" />
            {t("title2")}
          </h1>

          <PrimaryButton
            ctaText={t("cta")}
            className="pointer-events-auto group-hover:bg-[#20324f] bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
            btnTextClass="text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"
            circelClass="bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"
          />
        </div>

        <div>
          <p className="text-(--text-primary)">
            {t("description")}
          </p>
        </div>

        <div className="hidden md:block">
          <ul className="flex justify-between items-center">
            {businessServices.map((service) => (
              <li
                key={service.id}
                className="flex items-center gap-2 text-(--text-primary) uppercase font-semibold"
              >
                <span>{service.id}</span>
                <Minus />
                <span>{service.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;