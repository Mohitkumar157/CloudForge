"use client";
import React, { useState } from 'react'
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import ContactCard from './ContactCard';
import { useTranslations } from 'next-intl';

const icons = [
  PhoneCall,
  Mail,
  MapPin
];

function ContactDetails() {
  const [active, setActive] = useState(0);
  const t = useTranslations("ContactPage.ContactDetailsSection");
  const cardData = t.raw("cards");
  return (

    <section className='pt-16 md:pt-20 lg:pt-24'>
      <div className="container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        {
          cardData.map((cardData, i) => {
            const Icon = icons[i];
            return (
              <ContactCard
                key={i}
                index={i}
                cardData={{...cardData , icon: <Icon className="w-10 h-auto" /> }}
                active={active}
                setActive={setActive}

              />
            )

          })}
      </div>
    </section>

  )
}

export default ContactDetails
