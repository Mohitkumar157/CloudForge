"use client";
import React from 'react'
import PrimaryButton from '../ui/PrimaryButton'
import { useTranslations } from 'next-intl';


function Form() {
  const t = useTranslations("ContactPage.FormSection");
  function handelForm(e) {
    e.preventDefault();
  }
  return (
    <form
      data-animate="fade-up"
      onSubmit={handelForm}
      className='flex flex-col gap-5'
    >

      <div className='overflow-hidden'>
        <h2 data-animate-child="child-fade-up" className='text-[28px] md:text-[40px] leading-[1.15] font-normal '>
          {t("title")}
        </h2>
      </div>

      <div className='overflow-hidden'>
        <input
          data-animate-child="child-fade-up"
          className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl'
          type="text"
          placeholder={t("fields.name")}
        />
      </div>
      <div className='overflow-hidden'>
        <input
          data-animate-child="child-fade-up"
          className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl'
          type="email"
          placeholder={t("fields.email")}
        />
      </div>
      <div className='overflow-hidden'>
        <input
          data-animate-child="child-fade-up"
          className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl'
          type="text"
          placeholder={t("fields.phone")}
        />
      </div>
      <div className='overflow-hidden'>
        <input
          data-animate-child="child-fade-up"
          className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl'
          type="text"
          placeholder={t("fields.subject")}
        />
      </div>

      <div className='overflow-hidden'>
        <textarea
          rows={4}
          className='placeholder:text-black border-b border-(--border-primary) w-full pb-5 text-black outline-0 text-xl'
          placeholder={t("fields.message")}
          data-animate-child="child-fade-up"
        />
      </div>

      <div className='flex items-center gap-4 my-4 overflow-hidden'>
        <input
          type="checkbox"
          className='w-6 h-6'
          data-animate-child="child-fade-up"
        />

        <span>
          {t("terms")}
        </span>

      </div>

      <div className='overflow-hidden'>
        <div data-animate-child="child-fade-up">
          <PrimaryButton
            ctaText={t("submitButton")}
            className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
            btnTextClass={"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
            circelClass={"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
          />
        </div>
      </div>
    </form>
  )
}

export default Form
