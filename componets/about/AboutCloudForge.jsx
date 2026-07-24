"use client";
import React from 'react'
import ClientAvatars from '../ui/ClientAvatars';
const happyClients = [
    "/happy-client1.webp",
    "/happy-client2.webp",
    "/happy-client3.webp",
    "/happy-client4.webp",
    "/white-plus-icon.webp"
]
function AboutCloudForge() {
    return (
        <div className='about-cloudeForge relative z-10'>
            <div className="container">
                <div className="flex flex-col md:flex-row md:gap-16 items-center gap-10 w-full">

                    <div className='heading md:w-[60%]'>
                        <div className="flex items-center gap-3 text-(--heading-primary) uppercase mb-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-(--bg-primary)"></span>
                            about CloudForge
                        </div>
                        <h1 className='text-6xl text-(--heading-primary)'>Partnering with businesses to achieve growth</h1>
                    </div>

                    <div className="clients md:w-[40%]">
                        <div className='flex items-center justify-between'>
                            <ClientAvatars happyClients={happyClients}/>
                            <div className='text-(--heading-primary) font-semibold'>
                                <p >Rated by our consulting clients</p>
                                <p>4.9/5  (15,400+ Reviews)</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-(--heading-primary) font-semibold mt-10'>
                                We create modern, user-focused digital experiences that
                                help businesses stand out, engage
                                customers, and scale faster.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCloudForge
