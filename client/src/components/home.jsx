import React from 'react';
import Card from './card';
import { CardStyle, HomeStyle } from '../CSS';
import Pagination from './pagination';
import {useSelector, useDispatch} from 'react-redux';
import { orderCountries, filterCountries } from '../redux/actions';

export default function Home({Activities}) {

    const dispatch = useDispatch()
    const AllCountries = useSelector(state => state.allCountries)
    const [page, setPage] = React.useState(0)
    const perPage = 10
    const [maxPage, setMaxPage] = React.useState(Math.ceil(AllCountries.length/perPage))

    React.useEffect(()=> {
        setMaxPage(Math.ceil(AllCountries.length/perPage))
    },[AllCountries])

    function handleOrder(e) {
        e.preventDefault()
        const {name, value} = e.target;
        if (name === 'order') {
            dispatch(orderCountries(value))
        }
    }
    function handleFilter(e) {
        e.preventDefault()
        const {name, value} = e.target;
        dispatch(filterCountries({name, value}))
        }
    
    return (
    <HomeStyle>
    <span className='filters-bar'>
        <span>
            <label htmlFor='order'>Order:</label>
            <select id='order' name='order' onChange={handleOrder}>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='+population'>+ Population</option>
                <option value='-population'>- Population</option>
            </select>
        </span>
        <span>
            <label htmlFor='region'>Filter by Region:</label>
            <select id='region' name='region' onChange={handleFilter}>
                <option value='Americas'>Americas</option>
                <option value='Africa'>Africa</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
            <button name='reset' onClick={handleFilter}>Reset</button>
        </span>
        <span>
            <label htmlFor='activity'>Filter by Activity:</label>
            <select name='activity'>
                {Activities?.map((e) => {return <option key={e.id} value={e.name}>{e.name}</option>})}
            </select>
        </span>
    </span>
        <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
        <CardStyle>
        {AllCountries.slice(page*perPage,(page*perPage)+perPage).map((e) => {
            return <Card key={e.id} country={e}/>
        })}
        </CardStyle>
    </HomeStyle>
    )
}