import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getCountryID } from '../../redux/actions';
import { DetailStyle } from '../../CSS';

export default function Detail() {

    const dispatch = useDispatch()
    const idDetail = useSelector(state => state.idDetail)
    
    const { id } = useParams()
    useEffect(() => {
        dispatch(getCountryID(id))
    },[dispatch])

    const { name, flags, region, subregion, capital, area, population} = idDetail
    return (<DetailStyle>
        <section className='modal'>
            <div className='modalContainer'>
        {idDetail && <>
            <div className='modalImageContainer'>
                <h2 className='modalTitle'>Name: {name}</h2>
                <img className='modalImg' src={flags} alt='flag'/>
                <h2 className='modalIde'>{idDetail.id}</h2>
            </div>
            <div className='modalInformationContainer'>
                <div>
                    <h2 className='modalInformationTitle'>INFORMATION</h2>
                    <h3 className='modalInformation'>Region: {region}</h3>
                    <h3 className='modalInformation'>subRegion: {subregion}</h3>
                    <h3 className='modalInformation'>Capital: {capital}</h3>
                    <h3 className='modalInformation'>Area(m2): {area}</h3>
                    <h3 className='modalInformation'>Population: {population}</h3>
                </div>
                <Link  strict to={`/home`}>
                    <button className='modalCloseContainer'>
                        <span className='modalClose' >Back to Menu</span>
                    </button>
                </Link>
            </div>
            </>
            }
            </div>
        </section>
        </DetailStyle>
    )
}