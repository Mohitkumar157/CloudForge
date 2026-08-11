
import React from "react";
import PrimaryButton from "@/componets/ui/PrimaryButton";
import ServicesCard from "./ServicesCard";
import CardStack from "@/componets/animations/CardStack";
import { useTranslations } from "next-intl";

function PracticalServices() {
  const t = useTranslations("ServicesPage.PracticalServicesSection");

  const strategies = t.raw("strategies");

  return (
    <section className="bg-[#3d4753] py-16 md:py-20 lg:py-24">
      <div className="container flex flex-col items-start gap-4 md:flex-row md:gap-0 justify-between md:items-center">
        <h2 className="text-[28px] md:text-[40px] leading-[1.15] font-normal text-(--heading-primary)">
          {t("title")}
        </h2>

        <PrimaryButton
          ctaText={t("cta")}
          className="group-hover:bg-[#20324f] bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
          btnTextClass="text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"
          circelClass="bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"
        />
      </div>

      <div className="pt-16">
        <CardStack>
          {strategies.map((strategy, i) => (
            <ServicesCard
              key={strategy.id}
              index={i}
              data={strategy}
            />
          ))}
        </CardStack>
      </div>
    </section>
  );
}

export default PracticalServices;