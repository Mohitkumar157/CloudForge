import PrimaryButton from "@/componets/ui/PrimaryButton";
import ClientAvatars from "@/componets/ui/ClientAvatars";
import SubHeading from "@/componets/ui/SubHeading";
import SecondHeading from "@/componets/ui/SecondHeading";
import { useTranslations } from "next-intl";

const happyClients = [
  "/happy-client1.webp",
  "/happy-client2.webp",
  "/happy-client3.webp",
  "/happy-client4.webp",
  "/black-plus-icon.webp",
];

function Features() {
  const t = useTranslations("HomePage.FeaturesSection");

  const tags = t.raw("tags");

  return (
    <>
      <SubHeading
        data-animate="fade-up"
        headingText={t("subHeading")}
      />

      <div className="overflow-hidden">
        <SecondHeading
          data-animate="fade-up"
          className="mb-0"
        >
          {t("title")}
        </SecondHeading>
      </div>

      <div className="flex items-center gap-5 font-semibold">
        <div className="overflow-hidden">
          <span
            data-animate="fade-up"
            className="inline-block"
          >
            [{tags[0]}]
          </span>
        </div>

        <div className="overflow-hidden">
          <span
            data-animate="fade-up"
            className="inline-block"
          >
            [{tags[1]}]
          </span>
        </div>
      </div>

      <div className="happy-clients my-4">
        <div className="overflow-hidden">
          <h3
            data-animate="fade-up"
            className="my-3"
          >
            {t("happyClients")}
          </h3>
        </div>

        <ClientAvatars
          animationOn="scroll"
          animationStart="top 60%"
          happyClients={happyClients}
        />
      </div>

      <div className="overflow-hidden">
        <p
          className="mb-4"
          data-animate="fade-up"
        >
          {t("description")}
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          data-animate="fade-left"
          className="request-a-callback rounded-full bg-[#f8f8f8] flex items-center p-4 justify-between"
        >
          <span className="text-nowrap text-[14px] font-semibold">
            {t("callback.title")}
          </span>

          <div>
            <img
              src="/call-image.webp"
              alt="call-image"
              className="max-w-13.75 h-auto"
            />
          </div>

          <PrimaryButton
            ctaText={t("callback.cta")}
            className="bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"
            btnTextClass="text-[#f1f1f1] text-[14px]! group-hover:text-[#212121] transition-all duration-300"
            circelClass="bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"
          />
        </div>
      </div>
    </>
  );
}

export default Features;