'use client';


function SecondHeading({ children, ref = "" }) {
    return (
        <div className="overflow-hidden"
        >
            <h2
                ref={ref}
                className='md:text-[40px] font-semibold leading-10 mb-5'
            >
                {children}
            </h2>
        </div>
    )
}

export default SecondHeading;
