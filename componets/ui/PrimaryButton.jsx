import { ArrowUpRight } from 'lucide-react';


function PrimaryButton({ ctaText, className , btnTextClass , circelClass }) {
  return (
    <div className={`group w-fit rounded-full`}>
      <button className=
        {`transition-all duration-400 border
           border-[#f1f1f1] h-12 flex items-center 
           gap-6  pl-5 pr-2 rounded-4xl 
            cursor-pointer ${className}`
        }
        aria-label='discover more'
      >
        <span className={`font-semibold text-[16px] ${btnTextClass}`}>{ctaText}</span>
        <div className='w-8 h-8 rounded-full bg-inherit flex justify-center items-center'>
          <div
            className={`group-hover:w-8 group-hover:h-8 group-hover:bg-[#f1f1f1] 
          group-hover:overflow-auto transition-all duration-300 ease-in 
          flex justify-center items-center w-2 h-2 
          rounded-full overflow-hidden ${circelClass}`}
          >
            <ArrowUpRight className='h-0 w-0  group-hover:w-3 
            group-hover:h-3 transition-all duration-300' />
          </div>
        </div>
      </button>
    </div>
  )
}

export default PrimaryButton