import React from 'react'
import Image from "../images/illustration-working.svg"

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="info">
                    <h2 className="info_heading">
                    More than just <br /> shorter links
                    </h2>
                    <p>
                    Build your brand’s recognition and get detailed insights on how your links are performing.
                    </p>
                    <a className="btn-lg-round" href="/">Get Started</a>
                </div>

                <div className="hero_image">
                    <img src={Image} alt="working-with-computer" />

                </div>
            </div>
            
        </section>
    )
}

export default Hero
