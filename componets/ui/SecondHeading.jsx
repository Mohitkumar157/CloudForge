
function SecondHeading({ children, className = "" ,  ref = null }) {
    return (
        <div data-animate="fade-up" className="overflow-hidden py-2">
            <h2 ref={ref} className={`text-[28px] md:text-[40px] leading-[1.15] font-normal ${className}`}>
                {children}
            </h2>
        </div>
    )
}

export default SecondHeading;
