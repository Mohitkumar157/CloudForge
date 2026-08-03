"use client"

function SubHeading({ headingText, circelClass = "" , ref }) {
   
    return (
        <div className="overflow-hidden">
            <div ref={ref} className="flex items-center text-[16px]! gap-3 text-[#3D4753] uppercase mb-2 whitespace-nowrap">
                <span className={`inline-block w-2 h-2 rounded-full bg-[#000000] ${circelClass}`}> </span>
                {headingText}
            </div>
        </div>
    )
}

export default SubHeading
