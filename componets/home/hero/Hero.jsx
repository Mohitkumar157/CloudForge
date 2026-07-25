import HeroContent from "./HeroContent"
import HeroMobile from "./HeroMobile"
import HeroSlides from "./HeroSlides"

function Hero() {
    return (
        <>
            <div className="relative mohit hidden md:block">
                <HeroSlides>
                    <HeroContent />
                </HeroSlides>
            </div>

            <div className="block md:hidden">
             <HeroMobile />
            </div>
        </>

    )
}

export default Hero
