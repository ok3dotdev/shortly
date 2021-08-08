import React from 'react'
import { ReactComponent as Logo } from "../images/logo.svg"
import Facebook from "../images/icon-facebook.svg"
import Twitter from "../images/icon-twitter.svg"
import Pinterest from "../images/icon-pinterest.svg"
import Instagram from "../images/icon-instagram.svg"

function Footer() {
    return (
        <section className="container footer-container">
            <div className="footer-logo">
                <Logo fill="white"/>
            </div>

            <div className="footer-nav_links">
                <ul className="ft-links">
                    Features
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>

                <ul>
                    Resources
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>

                <ul>
                    Company
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>


            </div>

            <div className="footer-social_links">
                <img className="footer-sc" src={Facebook} alt="facebook" />
                <img className="footer-sc" src={Twitter} alt="Twitter" />
                <img className="footer-sc" src={Pinterest} alt="pinterest" />
                <img className="footer-sc" src={Instagram} alt="Instagram" />

            </div>

        </section>
    )
}

export default Footer
