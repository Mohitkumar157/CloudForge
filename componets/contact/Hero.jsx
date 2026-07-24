import React from 'react'

function Hero() {
    return (
        <section className='relative pb-16 flex flex-col justify-center items-center w-full h-screen bg-[url("/contact/Contact-hero.avif")] bg-center bg-cover'>
            <div className='w-full h-screen absolute left-0 top-0 overlay bg-[linear-gradient(#fff0_67%,#0f1e36ab),linear-gradient(#0f1e36b8,#fff0_26%),linear-gradient(#0f1e3652,#0f1e3652)]'></div>
            <div className='md:mt-16 uppercase flex flex-col justify-center gap-3 items-center text-(--text-primary) relative z-40 font-semibold'>
                <div className='flex justify-center gap-3 items-center'>
                    <span className="inline-block w-2 h-2 rounded-full bg-(--bg-primary)"></span>
                    contact
                </div>
                <h1 className='text-6xl font-semibold capitalize'>Connect with us</h1>
            </div>
        </section>
    )
}

export default Hero
