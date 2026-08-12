import Image from 'next/image'
import React from 'react'
import Form from './Form'
import Reveal from '../animations/Reveal'

function FormWraper() {
  return (
    <section className='pt-16 md:pt-20 lg:pt-24'>
      <Reveal>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
          src={"/contact/Contact-image.webp"}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          alt='form-image'
          loading="eager"
          className='object-cover object-center'
          data-animate = "scale-image"
           />
        </div>
        <Form />
      </div>
      </Reveal>
    </section>
  )
}

export default FormWraper
