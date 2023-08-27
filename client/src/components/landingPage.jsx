import React from "react";
import Wolrdmap from '../assets/worldmap.png'

export default function LandingPage() {

    return (
        <div>
            <h1>Countries PI</h1>
            <img src={Wolrdmap} alt='world-img'/>
            <button>click to enter</button>
        </div>
    )
}