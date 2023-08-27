export default function Card({country, navigate}) {
    const {id, name, flags, region} = country

    function handleClick() {
        navigate(`/detail/${id}`)
    }
    return (
        <div className='country'onClick={handleClick}>
            <img src={flags} alt={name}/>
            <h4>{name}</h4>
            <h5>{region}</h5>
        </div>
    )
}