
import dynamic from "next/dynamic";
import React from "react";
import InfoCard from "./InfoCard";
import StatsCard from "./StatsCard";
import ImageCard from "./ImageCard";
import ChartCard from "./ChartCard";
import SecondHeading from "@/componets/ui/SecondHeading";
const Reveal = dynamic(()=> import("@/componets/animations/Reveal"));
import Odometer from "@/componets/ui/Odometer";
import { useTranslations } from "next-intl";

function WhyUs() {
    const t = useTranslations("HomePage.WhyUsSection");

    return (
        <section>
            <div className="container md:px-0!">
                <div className="mb-4 md:mb-6">
                    <SecondHeading
                        className={"md:text-center leading-[1.08] text-center!"}
                        children={t("title")}
                    />
                </div>

                <Reveal>
                    <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

                        <div
                            data-animate="scale-in"
                            className="overflow-hidden"
                        >
                            <InfoCard
                                title={t("strategicGrowth.title")}
                                subtitle={t("strategicGrowth.subtitle")}
                                description={t("strategicGrowth.description")}
                            />
                        </div>


                        <div data-animate="scale-in">
                            <StatsCard
                                label={t("provenOutcomes.label")}
                                value={t("provenOutcomes.value")}
                                img="/icon.svg"
                                description={t("provenOutcomes.description")}
                            >

                                <Odometer
                                    value={80}
                                    suffix="%"
                                    duration={4}
                                    loops={1}
                                    className="text-8xl font-bold"
                                />

                            </StatsCard>
                        </div>


                        <div data-animate="scale-in">
                            <ImageCard />
                        </div>


                        <div
                            data-animate="scale-in"
                            className="lg:col-span-2"
                        >
                            <ChartCard />
                        </div>


                        <div data-animate="scale-in">
                            <StatsCard
                                label={t("targetedGrowth.label")}
                                value={t("targetedGrowth.value")}
                                img="/icon-2.svg"
                                description={t("targetedGrowth.description")}
                            >

                                <Odometer
                                    value={90}
                                    suffix="%"
                                    duration={4}
                                    loops={1}
                                    className="text-8xl font-bold"
                                />

                            </StatsCard>
                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default WhyUs;