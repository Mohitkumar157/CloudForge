
function SecondHeading({ children, className ,  ref = null }) {
    return (
        <div className="overflow-hidden mb-4 md:mb-8">
            <h2 ref={ref} className={`text-[28px]! md:text-[40px] leading-[1.08] font-semibold ${className}`}>
                {children}
            </h2>
        </div>
    )
}

export default SecondHeading;
