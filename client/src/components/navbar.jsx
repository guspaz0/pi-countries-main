import {NavbarStyle} from '../CSS';
import {useDispatch} from 'react-redux';
import { searchCountry } from '../redux/actions';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const dispatch = useDispatch()
    function handleSearch() {
        const name = document.querySelector('input[name="searchCountry"]').value
        dispatch(searchCountry(name))
    }
    return (
        <NavbarStyle>
            <Link to={'/form'}>
                <button>Create Activity</button>
            </Link>
            <span>
                <input type='search' placeholder='Search country by Name' name='searchCountry'/>
                <button onClick={handleSearch}>Search</button>
            </span>
        </NavbarStyle>
    )
}