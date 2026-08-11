"use client";

import React from "react";
import SubHeading from "../ui/SubHeading";
import AnimatedParagraph from "../ui/AnimatedParagraph";
import { useTranslations } from "next-intl";

function ServicesAboutCloudForge() {
  const t = useTranslations("ServicesPage.AboutCloudForgeSection");

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="w-full flex flex-col gap-0 md:flex-row justify-center items-start">
          
          <div className="md:w-[20%] md:py-2 font-semibold">
            <SubHeading headingText={t("subHeading")} />
          </div>

          <div className="md:w-[80%] w-full text-2xl md:text-[40px] leading-11 font-semibold">
            <AnimatedParagraph
              text={t("description")}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesAboutCloudForge;