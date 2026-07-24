import React from 'react'

function ExploreMoreBtn() {
  return (
    <div className="relative flex flex-row-reverse items-center
     text-[16px]! gap-3 text-black capitalize
      font-semibold mb-2 w-fit border-b border-transparent group cursor-pointer"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-[#000000]"></span>
     Explore more
     <div className='absolute left-0 -bottom-px w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300'></div>
     </div>
  )
}

export default ExploreMoreBtn
