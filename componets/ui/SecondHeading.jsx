'use client';


function SecondHeading({ children, className ,  ref = null }) {
    return (
        <div className="overflow-hidden"
        >
            <h2 ref={ref} className={`text-[24px] md:text-[40px] mb-4 md:mb-8 font-semibold ${className}`}>
                {children}
            </h2>
        </div>
    )
}

export default SecondHeading;
