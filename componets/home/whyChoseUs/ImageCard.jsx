import Image from "next/image";
import Card from "./Card";
import PrimaryButton from "@/componets/ui/PrimaryButton";

function ImageCard() {
  return (
    <Card className="relative overflow-hidden p-0 min-h-72.5 h-full">
      <Image
        src="/brown-girl.webp"
        alt="brown-girl"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/25 flex flex-col gap-4 justify-end p-6 text-white">
        <p className="text-white!">
          We deliver expert business advice that helps leaders scale.
        </p>

        <PrimaryButton 
        ctaText={"Get a quote"}
        circelClass={"bg-[#f1f1f1] text-[#20324f]"}
        />
      </div>
    </Card>
  );
}

export default ImageCard;