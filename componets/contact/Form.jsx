"use client";
import React from 'react'
import PrimaryButton from '../ui/PrimaryButton'
function Form() {
  function handelForm(e){
   e.preventDefault();
  }
  return (
    <form
     onSubmit={handelForm}
      className='flex flex-col gap-5'
    >
      <h2 className='font-semibold'>Say, hello</h2>
      <input className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl' type="text" placeholder='Your name*' />
      <input className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl' type="email" placeholder='Your email*' />
      <input className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl' type="text" placeholder='Phone number*' />
      <input className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl' type="text" placeholder='Subject' />
      <textarea
      rows={4}
        className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl'
        placeholder='Your message'
      />
      <div className='flex items-center gap-4 my-4'>
        <input
          type="checkbox"
          className='w-6 h-6'
        />
        <span>I agree to the terms and conditions</span>
      </div>
      <PrimaryButton
        ctaText={"Submit now"}
        className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
        btnTextClass={"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
        circelClass={"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
      />
    </form>
  )
}

export default Form
