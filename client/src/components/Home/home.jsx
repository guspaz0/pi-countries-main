import {useEffect, useState} from 'react';
import Card from '../Card/card.jsx';
import Navbar from '../Navbar/navbar.jsx';
import { CardStyle, HomeStyle } from '../../CSS';
import Pagination from '../Pagination/pagination.jsx';
import {useSelector } from 'react-redux';

export default function Home() {

    const AllCountries = useSelector(state => state.allCountries)
    const [page, setPage] = useState(0)
    const perPage = 10
    const [maxPage, setMaxPage] = useState(Math.ceil(AllCountries.length/perPage))
    const Activities = useSelector(state => state.Activities)

    useEffect(()=> {
        setMaxPage(Math.ceil(AllCountries.length/perPage))
    },[AllCountries])


    
    return (
    <HomeStyle>
        <Navbar/>
        <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
        <CardStyle>
        {AllCountries.slice(page*perPage,(page*perPage)+perPage).map((e) => {
            return <Card key={e.id} country={e}/>
        })}
        </CardStyle>
        {AllCountries.length === 0? <div className='warning'>No Countries found</div> : null}
    </HomeStyle>
    )
}