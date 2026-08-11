
import React from "react";
import ConsultingCard from "./ConsultingCard";
import Image from "next/image";
import PrimaryButton from "@/componets/ui/PrimaryButton";
import ClientAvatars from "@/componets/ui/ClientAvatars";
import Reveal from "@/componets/animations/Reveal";
import { useTranslations } from "next-intl";

const happyClients = [
  "/happy-client1.webp",
  "/happy-client2.webp",
  "/happy-client3.webp",
  "/happy-client4.webp",
];

const businessMetricIcons = [
  "/service/icon-strategic.svg",
  "/service/icon-creates.svg",
  "/service/icon-drives.svg",
  "/service/icon-data.svg",
];

function WhyChooseUs() {
  const t = useTranslations("ServicesPage.WhyChooseUsSection");

  const successBenefits = t.raw("successCard.benefits");
  const efficiencyBenefits = t.raw("efficiencyCard.benefits");
  const businessMetrics = t.raw("trustedBusinesses.metrics");

  return (
    <section className="bg-(--bg-section) py-16 md:py-20 lg:py-24">
      <div className="container">

        
        <h2 className="text-center text-[28px] md:text-[40px] leading-[1.15] font-normal mb-12">
          {t("title")}
        </h2>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            
            <ConsultingCard>
              <div className="relative aspect-[1.2/1.7] rounded-lg overflow-hidden h-full">
                <Image
                  src="/service/consulting-image.webp"
                  alt="Consulting-image"
                  fill
                  className="object-cover object-center"
                  data-animate="scale-image"
                />
              </div>
            </ConsultingCard>

            
            <ConsultingCard>
              <div
                data-animate="fade-up"
                className="flex flex-col gap-4"
              >

                <div className="flex flex-col gap-4 bg-(--bg-primary) p-6 rounded-2xl overflow-hidden">

                  <div className="overflow-hidden">
                    <div
                      data-animate-child="child-fade-up"
                      className="flex items-center gap-4 mb-12"
                    >
                      <div className="p-3 rounded-md overflow-hidden bg-(--bg-icon)">
                        <img
                          src="/service/Businesses-focus-success.svg"
                          alt="Businesses focus success"
                          loading="lazy"
                        />
                      </div>

                      <h3>
                        {t("successCard.title")}
                      </h3>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-8 overflow-hidden">
                    {successBenefits.map((item, index) => (
                      <li
                        key={index}
                        data-animate-child="child-fade-left"
                        className="flex items-center gap-4"
                      >
                        <img
                          src="/logo-tik.svg"
                          alt="tick-icon"
                        />

                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center relative mt-12">
                    <PrimaryButton
                      ctaText={t("successCard.cta")}
                      className="group-hover:bg-[#20324f] bg-[#f1f1f1] group-hover:text-[#f1f1f1]"
                      btnTextClass="text-[#212121] group-hover:text-[#f1f1f1] transition-all duration-300"
                      circelClass="bg-[#20324f] group-hover:bg-[#f1f1f1] group-hover:text-[#20324f]"
                    />

                    <img
                      src="/service/graph.webp"
                      alt="graph-image"
                      className="object-cover object-center w-[50%] h-auto absolute bottom-0 right-0"
                    />
                  </div>
                </div>

               
                <div className="bg-(--bg-primary) rounded-2xl overflow-hidden p-6">

                  <div
                    data-animate-child="child-fade-down"
                    className="flex items-center gap-4 mb-12"
                  >
                    <ClientAvatars happyClients={happyClients} />

                    <h3 className="text-[16px]! font-semibold">
                      {t("trustedBusinesses.title")}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
                    {businessMetrics.map((item, index) => (
                      <div
                        data-animate-child="child-fade-up"
                        key={item.id}
                        className="flex items-center gap-4"
                      >
                        <img
                          src={businessMetricIcons[index]}
                          alt={item.title}
                        />

                        <span>
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </ConsultingCard>

            
            <ConsultingCard>
              <div
                data-animate="fade-up"
                className="p-10 bg-(--bg-primary) overflow-hidden h-full"
              >

                <div className="overflow-hidden">
                  <h3
                    data-animate-child="child-fade-up"
                    className="font-semibold"
                  >
                    {t("efficiencyCard.title")}
                  </h3>
                </div>

                <div className="overflow-hidden">
                  <p
                    data-animate-child="child-fade-up"
                    className="mt-3 text-justify"
                  >
                    {t("efficiencyCard.description")}
                  </p>
                </div>

                <ul className="flex flex-col gap-8 my-10">
                  {efficiencyBenefits.map((item, index) => (
                    <div
                      key={index}
                      className="overflow-hidden"
                    >
                      <li
                        data-animate-child="child-fade-up"
                        className="flex items-center gap-4"
                      >
                        <img
                          src="/logo-tik.svg"
                          alt="tick-icon"
                        />

                        {item}
                      </li>
                    </div>
                  ))}
                </ul>

                <div className="overflow-hidden">
                  <div data-animate-child="child-fade-up">
                    <PrimaryButton
                      ctaText={t("efficiencyCard.cta")}
                      className="bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"
                      btnTextClass="text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"
                      circelClass="bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"
                    />
                  </div>
                </div>

              </div>
            </ConsultingCard>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default WhyChooseUs;
