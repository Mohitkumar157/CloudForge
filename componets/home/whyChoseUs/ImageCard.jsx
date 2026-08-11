import Image from "next/image";
import Card from "./Card";
import PrimaryButton from "@/componets/ui/PrimaryButton";
import { useTranslations } from "next-intl";
function ImageCard() {
   const t = useTranslations("HomePage.WhyUsSection.imageCard");

  return (
    <Card className="relative aspect-square overflow-hidden p-0 min-h-72.5 h-full">
      <Image
        src="/brown-girl.webp"
        alt="brown-girl"
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/25 flex flex-col gap-4 justify-end p-6 text-white">
        <p className="text-white!">
           {t("description")}
        </p>

        <PrimaryButton 
         ctaText={t("cta")}
        circelClass={"bg-[#f1f1f1] text-[#20324f]"}
        />
      </div>
    </Card>
  );
}

export default ImageCard;