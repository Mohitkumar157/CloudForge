
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const logoTik = "/logo-tik.svg";

function FeatureList() {
  const t = useTranslations("HomePage.FeaturesSection");

  const featuresList = t.raw("featuresList");

  return (
    <div className="flex flex-col justify-between gap-12">
      <ul className="list-none flex flex-col gap-4">
        {featuresList.map((item, index) => (
          <li key={index} className="overflow-hidden">
          <div data-animate="fade-up" className="flex items-center gap-2 font-semibold">
              <img
                src={logoTik}
                alt="logo-tik"
                className="w-5.5 h-5.5 object-cover"
              />
              {item}
          </div>
            </li>
        ))}
      </ul>

      <div className="rounded-xl overflow-hidden">
        <figure
          data-animate="scale-image"
          className="relative aspect-square md:aspect-[2/2.2] rounded-xl overflow-hidden"
        >
          <Image
            src="/feature-client2.jpg"
            alt="feature-client"
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover object-top"
          />
        </figure>
      </div>
    </div>
  );
}

export default FeatureList;