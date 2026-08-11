
import React from "react";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("BlogPage.HeroSection");

  return (
    <section className='relative pb-16 flex flex-col justify-center items-center w-full h-screen bg-[url("/blog/Blog.avif")] bg-center bg-cover'>

      <div className='w-full h-screen absolute left-0 top-0 overlay bg-[linear-gradient(#fff0_67%,#0f1e36ab),linear-gradient(#0f1e36b8,#fff0_26%),linear-gradient(#0f1e3652,#0f1e3652)]'></div>

      <div className='md:mt-16 uppercase flex flex-col justify-center gap-3 items-center text-(--text-primary) relative z-40 font-semibold'>

        <div className='flex justify-center gap-3 items-center'>
          <span className="inline-block w-2 h-2 rounded-full bg-(--bg-primary)"></span>
          {t("label")}
        </div>

        <h1 className='text-5xl md:text-6xl text-(--heading-primary) text-center font-semibold capitalize'>
          {t("title")}
        </h1>

      </div>
    </section>
  );
}

export default Hero;

