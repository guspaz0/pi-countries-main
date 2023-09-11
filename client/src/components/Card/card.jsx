import {Link} from 'react-router-dom';

export default function Card({country}) {

    const {id, name, flags, region} = country

    return (
            <Link strict to={`/detail/${id}`} className='container'>
                <div className='card'>
                    <img className='cardImage' src={flags} alt={name}/>
                    <h4 className='country'>{name}</h4>
                    <h5 className='continent'>{region}</h5>
                </div>
            </Link>
    )
}