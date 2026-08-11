import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import SubHeading from '@/componets/ui/SubHeading'
import Reveal from '@/componets/animations/Reveal'
import { useTranslations } from "next-intl";

function OurTeam() {
  const t = useTranslations("AboutPage.OurTeamSection");
  const teamData = t.raw("members");
  return (
    <Reveal>
      <section className='py-16 md:py-20 lg:py-24 bg-[#c6bdab]'>
        <div className='flex flex-col justify-center items-center'>
          <SubHeading headingText={t("subHeading")} />
          <div className='overflow-hidden'>
            <h2
              data-animate="fade-up"
              className='text-[28px] md:text-[40px] leading-[1.15] font-normal mb-9'>
             {t("title")}
            </h2>
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
          {teamData.map((card, index) => (
            <TeamMemberCard card={card} key={index} />
          ))}
        </div>
      </section>
    </Reveal>
  )
}

export default OurTeam;
