import React from 'react'


function ClientAvatars({happyClients}) {
    return (
        <div className='flex items-center justify-start' >
            {
                happyClients?.map((clientPhoto, index) =>
                    <img
                        src={clientPhoto}
                        alt="happy-client"
                        width={50}
                        height={50}
                        key={index}
                        className={`max-w-12.5 h-auto relative top-0`}
                        style={{
                            left: `${index * -12}px`,
                        }}
                    />
                )
            }
        </div >
    )
}

export default ClientAvatars;
