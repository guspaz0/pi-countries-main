import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
    const {name, flags, region} = props.country

    function handleClick() {

    }
    return (
        <div className='country'onClick={handleClick}>
            <img src={flags} alt={name}/>
            <h4>{name}</h4>
            <h5>{region}</h5>
        </div>
    )
}