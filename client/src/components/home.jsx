import React from 'react';
import Card from './card';
import { CardStyle } from '../CSS';
import Pagination from './pagination';
import {useSelector} from 'react-redux';

export default function Home({countries}) {

    const Countries = useSelector(state => state.allCountries)
    const [page, setPage] = React.useState(0)
    const perPage = 10
    const [maxPage, setMaxPage] = React.useState(Math.ceil(Countries.length/perPage))

    return (
        <>
        <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
        <CardStyle>
        {Countries.slice(page*perPage,(page*perPage)+perPage).map((e) => {
            return <Card key={e.id} country={e}/>
        })}
        </CardStyle>
        </>
    )
}