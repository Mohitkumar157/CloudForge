import dynamic from "next/dynamic"
import HeroContent from "./HeroContent"
const HeroSlides = dynamic(()=> import("./HeroSlides"))
const HeroMobile = dynamic(()=> import("./HeroMobile"))


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
