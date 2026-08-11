import ContactDetails from '@/componets/contact/ContactDetails'
import FormWraper from '@/componets/contact/FormWraper'
import Hero from '@/componets/contact/Hero'
import React from 'react'

function page() {
  return (
    <section>
     <Hero />
     <ContactDetails />
     <FormWraper />
    </section>
  )
}

export default page
