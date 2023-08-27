import React from "react";
import { useNavigate } from 'react-router-dom'
import Wolrdmap from '../assets/worldmap.png'
import { LandingStyle } from "../CSS";

export default function LandingPage() {

    const navigate = useNavigate()
    function handleClick () {
        navigate('/home')
    }
    return (
        <LandingStyle>
            <h1>Countries PI</h1>
            {/* <img src={Wolrdmap} alt='world-img'/> */}
            <button onClick={handleClick}>click to enter</button>
        </LandingStyle>
    )
}