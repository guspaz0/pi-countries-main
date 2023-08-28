import React from 'react';
import { DetailStyle } from '../CSS';

export default function Detail({useParams, getCountryID, dispatch, idDetail}) {
    
    const { id } = useParams()
    React.useEffect(() => {
        dispatch(getCountryID(id))
    },[])

    const { name, flags, region, subregion, capital, area, population} = idDetail
    return (<DetailStyle>
        {idDetail && <>
            <h1>Country Detail</h1>
            <h2>Name: {name}</h2>
            <img src={flags} alt='flag'/>
            <p>Region: {region}</p>
            <p>subRegion: {subregion}</p>
            <p>Capital: {capital}</p>
            <p>Area(m2): {area}</p>
            <p>Population: {population}</p>
            </>
            }
        </DetailStyle>
    )
}