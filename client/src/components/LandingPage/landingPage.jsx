import React from "react";
import {Link } from 'react-router-dom'
import { LandingStyle } from "../../CSS";

export default function LandingPage() {

    return (
        <LandingStyle>
            <header className="LandingHeader">
                <h1 className="LadingTitle">COUNTRIES</h1>
            </header>
            <section className="LandingAbout">
                <p className="LandingParagraph">¡Welcome!
                in this project you be able to create Activities like tours to visite if you love to travel around the world or if you are a company, to serve to your clients, hope that you can find usefull
                </p>
                {/* <img src={Wolrdmap} alt='world-img'/> */}
                <Link to={'/home'}>
                    <button>click to enter</button>
                </Link>
            </section>
        </LandingStyle>
    )
}