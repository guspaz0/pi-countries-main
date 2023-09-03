import React from 'react';
import Card from './card';
import { CardStyle } from '../CSS';
import Pagination from './pagination';
import {useSelector} from 'react-redux';
import { orderCountries, filterCountries, filterActivity } from '../redux/actions';

export default function Home({Countries, navigate, Activities, dispatch}) {

    const AllCountries = useSelector(staete => staete.AllCountries)
    const [page, setPage] = React.useState(0)
    const perPage = 10
    const [maxPage, setMaxPage] = React.useState(Math.ceil(Countries.length/perPage))

    React.useEffect(()=>{
        
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
    <>
    <span>Order:
        <select name='order' onChange={handleOrder}>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
            <option value='+population'>+ Population</option>
            <option value='-population'>- Population</option>
        </select>
    </span>
    <span>
        Filter by Region: 
        <select name='filter-region' onChange={handleFilter}>
            <option value='Americas'>Americas</option>
            <option value='Africa'>Africa</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
        </select>
        <button name='reset' onClick={handleFilter}>Reset</button>
    </span>
    <span>
        Filter by Activity:
        <select name='filter-activity'>
            {Activities?.map((e) => {return <option key={e.id} value={e.name}>{e.name}</option>})}
        </select>
    </span>
        <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
        <CardStyle>
        {Countries.slice(page*perPage,(page*perPage)+perPage).map((e) => {
            return <Card key={e.id} country={e} navigate={navigate}/>
        })}
        </CardStyle>
    </>
    )
}