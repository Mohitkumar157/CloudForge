import { ArrowUpRight } from 'lucide-react';


function PrimaryButton({ctaText , className}) {
  return (
    <div className={`group bg-[#f1f1f1] text-[#212121] w-fit rounded-full`}>
        <button className={`transition-all duration-300 border border-[#f1f1f1] h-12 flex items-center gap-6  pl-5 pr-2 rounded-4xl group-hover:bg-[#20324f] group-hover:text-[#f1f1f1] cursor-pointer `}>
        <span className='font-semibold text-[16px]'>{ctaText}</span>
        <div className='w-8 h-8 rounded-full bg-inherit flex justify-center items-center'>
            <div className='group-hover:w-8 group-hover:h-8 group-hover:bg-[#f1f1f1] group-hover:overflow-auto transition-all duration-300 ease-in flex justify-center items-center bg-[#20324f] w-2 h-2 rounded-full overflow-hidden'>
            <ArrowUpRight className='h-0 w-0 text-[#212121] group-hover:w-3 group-hover:h-3 transition-all duration-300'/>
        </div>
        </div>
    </button>
    </div>
  )
}

export default PrimaryButton