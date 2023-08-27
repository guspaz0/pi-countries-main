import React from 'react';
import {useNavigate} from 'react-router-dom';
import {NavbarStyle} from '../CSS';
import { searchCountry } from '../redux/actions';

export default function Navbar() {

    const navigate = useNavigate()
    function handleClick() {
        navigate('/form')
    }
    function handleSearch() {
        const name = document.querySelector('input[name="searchCountry"]').value
        console.log(name)
    }
    return (
        <NavbarStyle>
            <button onClick={handleClick}>Create Activity</button>
            <span>
                <input type='search' placeholder='Search country by Name' name='searchCountry'/>
                <button onClick={handleSearch}>Search</button>
            </span>
        </NavbarStyle>
    )
}