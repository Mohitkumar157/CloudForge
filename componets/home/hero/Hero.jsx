import HeroContent from "./HeroContent"
import HeroSlides from "./HeroSlides"

function Hero() {
    return (
        <div className="relative">
            <HeroSlides>
                <HeroContent />
            </HeroSlides>
            
        </div>

    )
}

export default Hero
