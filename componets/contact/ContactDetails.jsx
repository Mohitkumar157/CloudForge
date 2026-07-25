"use client";
import React, { useState } from 'react'
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import ContactCard from './ContactCard';

const cardData = [
  {
    icon: <PhoneCall className='w-10 h-auto' />,
    text: "8851801918"
  },
  {
    icon: <Mail className='w-10 h-auto' />,
    text: "info@example.com"
  },
  {
    icon: <MapPin className='w-10 h-auto' />,
    text: "410 Noida, Uttar pradesh 203201, INDIA"
  }
]

function ContactDetails() {
  const [active, setActive] = useState(0);
  return (
    <section className='pt-16 md:pt-20 lg:pt-24'>
      <div className="container grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          cardData.map((cardData, i) =>
            <ContactCard
              key={i}
              index = {i}
              cardData={cardData}
              active={active}
              setActive ={setActive}
               />
          )}
      </div>
    </section>
  )
}

export default ContactDetails
