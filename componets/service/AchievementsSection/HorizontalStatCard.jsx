import ClientAvatars from '@/componets/ui/ClientAvatars'
import React from 'react'
import { useTranslations } from 'next-intl';

const happyClients = [
  "/happy-client1.webp",
  "/happy-client2.webp",
  "/white-plus-icon.webp"
]
function HorizontalStatCard({ className = "" }) {
  const t = useTranslations("ServicesPage.AchievementSection");

  return (
    <section className={`bg-white border border-(--border-primary) rounded-xl overflow-hidden p-6 ${className}`}>
      <h3 className='text-[20px]! font-semibold'>
        {t("horizontalStatCard.title")}
      </h3>
      <div className='w-full flex items-center justify-between'>
        <p>
          {t("horizontalStatCard.description")}
        </p>
        <ClientAvatars happyClients={happyClients} />
      </div>
    </section>
  )
}

export default HorizontalStatCard
