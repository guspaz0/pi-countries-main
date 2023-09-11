import {NavbarStyle} from '../../CSS';
import {useDispatch} from 'react-redux';
import { searchCountry } from '../../redux/actions';

export default function Navbar() {

    const dispatch = useDispatch()
    function handleSearch() {
        const name = document.querySelector('input[name="searchCountry"]').value
        dispatch(searchCountry(name))
    }
    return (
        <NavbarStyle>
            <span>
                <input type='search' placeholder='Search country by Name' name='searchCountry'/>
                <button onClick={handleSearch}>Search</button>
            </span>
        </NavbarStyle>
    )
}