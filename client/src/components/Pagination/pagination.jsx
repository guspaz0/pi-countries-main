import React,{useEffect} from 'react';
import { PaginationStyle } from '../../CSS';

export default function Pagination({page, setPage, maxPage}) {

    const [enumPage,setEnumPages] = React.useState(() => {
        let pages = []
        for (var i = 0; i < maxPage; i++) {
            pages = [...pages, i]
        }
        return pages
    })
    useEffect(() => {
        setEnumPages(() => {
            let pages = []
            for (var i = 0; i < maxPage; i++) {
                pages = [...pages, i]
            }
            return pages
        })
        setPage(0)
    },[maxPage])
    function handlePrevious(){
        setPage(page-1)
    }
    function handleNext(){
        setPage(page+1)
    }
    function handlePage(e) {
        setPage(parseInt(e.target.value))
    }
    
    return (
        <PaginationStyle>
            <button disabled={page === 0? true : false} onClick={handlePrevious}>⏪</button>
            {enumPage.map((p) => {return <button key={p} className={p === page? 'activePage': 'inactivePage'} value={p} onClick={handlePage}>{p+1}</button>})}
            <button disabled={page === maxPage-1? true : false} onClick={handleNext}>⏩</button>
    </PaginationStyle>
    )
}