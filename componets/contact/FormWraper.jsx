import Image from 'next/image'
import React from 'react'
import Form from './Form'

function FormWraper() {
  return (
    <section className='py-20'>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative aspect-square rounded-2xl overflow-hidden">
          <Image
          src={"/contact/Contact-image.webp"}
          fill
          alt='form-image'
          className='object-cover object-center'
           />
        </div>
        <Form />
      </div>
    </section>
  )
}

export default FormWraper
