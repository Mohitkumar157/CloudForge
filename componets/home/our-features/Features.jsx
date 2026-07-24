import PrimaryButton from '@/componets/ui/PrimaryButton';
import ClientAvatars from '@/componets/ui/ClientAvatars';



function Features() {
    return (
        <div className='flex flex-col justify-between '>
            <div className='top'>
                <h6 className='flex items-center gap-3 text-[#3D4753] uppercase mb-2'>
                    <span className='inline-block w-2 h-2 rounded-full bg-[#000000]'></span>
                    about Avorica
                </h6>
                <h2 className='md:text-[40px] font-semibold leading-10 mb-5'>
                    We are strategic partners delivering growth
                </h2>
                <div className='flex items-center gap-5 font-semibold'>
                    <div>[Market analysis]</div>
                    <div>[Growth strategy]</div>
                </div>
                <div className="happy-clients">
                    <h3 className='my-3'>Happy clients</h3>
                    <ClientAvatars />
                </div>
            </div>





            <div className='bottom'>
                <p className='mb-4'>
                    We identify hidden bottlenecks in your organization to improve output
                    overhead, and maximize your team’s internal valued productivity.organization
                    improve output.
                </p>

                <div className='request-a-callback rounded-full bg-[#f8f8f8] flex items-center p-4 justify-between'>
                    <p>Request a call back</p>
                    <div>
                        <img
                            src="/call-image.webp"
                            alt="call-image"
                            className='max-w-13.75 h-auto'
                        />
                    </div>
                    <PrimaryButton
                        ctaText={"Book a call"}
                        className={"bg-[#20324f] text-#f1f1f1 group-hover:bg-[#f1f1f1] group-hover:border group-hover:border-[#20324f] transition-all duration-300"}
                        btnTextClass={"text-[#f1f1f1] group-hover:text-[#212121] transition-all duration-300"}
                        circelClass={"bg-[#f1f1f1] group-hover:bg-[#20324f]! group-hover:text-[#f1f1f1]!"}
                    />
                </div>
            </div>

        </div>
    )
}

export default Features
