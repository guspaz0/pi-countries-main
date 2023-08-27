import React from 'react';
import Card from './card';
import { CardStyle } from '../CSS';
import Pagination from './pagination';

export default function Home({Countries, navigate}) {

    const [page, setPage] = React.useState(0)
    const perPage = 10
    const [maxPage, setMaxPage] = React.useState(Math.ceil(Countries.length/perPage))

    return (
        <>
        <Pagination page={page} maxPage={maxPage} setPage={setPage}/>
        <CardStyle>
        {Countries.slice(page*perPage,(page*perPage)+perPage).map((e) => {
            return <Card key={e.id} country={e} navigate={navigate}/>
        })}
        </CardStyle>
        </>
    )
}