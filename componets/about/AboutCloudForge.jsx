
import React from 'react'
import ClientAvatars from '../ui/ClientAvatars';
const happyClients = [
    "/happy-client1.webp",
    "/happy-client2.webp",
    "/happy-client3.webp",
    "/happy-client4.webp",
    "/white-plus-icon.webp"
]
import { useTranslations } from "next-intl";
function AboutCloudForge() {
    const t = useTranslations("AboutPage.HeroSection");
    return (
        <div className='about-cloudeForge relative z-10'>
            <div className="container">
                <div className="flex flex-col md:flex-row md:gap-16 items-center gap-10 w-full">

                    <div className='heading md:w-[60%]'>
                        <div className="flex items-center gap-3 text-(--heading-primary) uppercase mb-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-(--bg-primary)"></span>
                            {t("subHeading")}
                        </div>
                        <h1 className='text-5xl md:text-6xl text-(--heading-primary)'>
                            {t("title")}
                        </h1>
                    </div>

                    <div className="clients md:w-[40%]">
                        <div className='flex flex-col items-start gap-4 md:gap-0 md:flex-row md:items-center justify-between'>
                            <ClientAvatars happyClients={happyClients} />
                            <div className='text-(--heading-primary) font-semibold'>
                                <p>{t("rating.title")}</p>
                                <p>
                                    {t("rating.value")} {t("rating.reviews")}
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-(--heading-primary) font-semibold mt-4 md:mt-10'>
                                 {t("description")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCloudForge;
