import React from 'react'
import StrategySection from './StrategySection'
import ServicesOverview from './ServicesOverview'

function BusinessShowcase() {
    return (
        <section className='py-16'>
            <div className="container">
                <StrategySection />
                <ServicesOverview />
            </div>

        </section>
    )
}

export default BusinessShowcase
