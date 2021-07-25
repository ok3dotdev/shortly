import React from 'react'
import Logo from '../images/logo.svg'

function Header() {
    return (
        <header>
            <div className="container">

            <div className="logo">
                <img className="logo-image" src={Logo} alt="logo" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li className="links">Features</li>
                    <li className="links">Pricing</li>
                    <li className="links">Resources</li>
                </ul>

               
            </nav>
            <div className="account">
                    <a className="login " href="/">Login</a>
                    <a className="sign-up btn-round" href="/">Sign up</a>
                </div>
            </div>

        </header>
    )
}

export default Header
