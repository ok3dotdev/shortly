import React from 'react'
import Image1 from "../images/icon-brand-recognition.svg"
import Image2 from "../images/icon-fully-customizable.svg"
import Image3 from "../images/icon-detailed-records.svg"




function Statistics() {
    return (
        <section className="container stats-container">

            <div className="stats-info">
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with <br /> our advanced statistics dashboard.</p>


            <div className="cards">
                <div className="card card1">
                    <div className="brand">
                    <img src={Image1} alt="" />

                    </div>
                    <h2>Brang Recognition</h2>
                    <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.

                    </p>
                </div>
                <div className="card card2">
                    <div className="brand">
                    <img src={Image2} alt="" />

                    </div>
                    <h2>Fully Customizable</h2>               
                    <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
                <div className="card card3">
                    <div className="brand">
                        <img src={Image3} alt="" />

                    </div>
                    <h2>Detailed Records</h2>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
            </div>

            </div>
            </section>
    )
}

export default Statistics
