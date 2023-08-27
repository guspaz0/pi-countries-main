import {NavbarStyle} from '../CSS';

export default function Navbar({navigate, dispatch, searchCountry}) {

    function handleClick() {
        navigate('/form')
    }
    function handleSearch() {
        const name = document.querySelector('input[name="searchCountry"]').value
        dispatch(searchCountry(name))
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