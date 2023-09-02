import React from 'react';
import { FormStyle } from '../CSS';
import { postActivities } from '../redux/actions';
import Validate from '../utils/validate'

export default function Form({copyAllCountries}) {

    const [erros, setErrors] = React.useState(null)

    const [Country, setCountry] = React.useState([{
        name: null,
        id: null,
    } ])

    const [form, setForm] = React.useState({
        name: null,
        difficult: 0,
        duration: null,
        season: null,
        countries: []
    })

    React.useEffect(() => {
        setErrors(Validate(form))
},[form])

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        if (name === 'search') {
            const filterName = copyAllCountries.filter((e) => e.name.toLowerCase().includes(value.toLowerCase())).map((e) => {return {name: e.name, id: e.id}})
            setCountry(filterName)
        }
        else if (name === 'selectCountry') {
            if (form.countries.some((x) => x === value)) {
                setForm({
                    ...form,
                    countries: form.countries.filter((x) => x !== value)
                })
            } else {
                setForm({
                    ...form,
                    countries: [...form.countries, value]
                })
            }
        } else {
            setForm({
                ...form,
                [name]: value
            })
        }
    }
    function handleSelect(e) {
        e.preventDefault()
        const { name } = e.target.name
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(form)
        postActivities(form)
    }
    return (
        <FormStyle>
        <h1>Add Activities</h1>
        <form>
            <label htmlFor="name">Name</label>
            <input id='name' name='name' type='text' onChange={handleChange}/>
{errors.name && <p className='error'>{errors.name}</p>}
            <label htmlFor="difficult">Difficult</label>
            <input id='difficult' name='difficult' type='range' min={0} max={5} onChange={handleChange}/>
{errors.difficult && <p className='error'>{errors.difficult}</p>}
            <label htmlFor="duration">Duration</label>
            <input id='duration' name='duration' type='time' onChange={handleChange}/>
{errors.duration && <p className='error'>{errors.duration}</p>}
            <label htmlFor="season">Season</label>
            <select id='season' name='season' onChange={handleChange}>
                <option value='summer'>Summer</option>
                <option value='winter'>Winter</option>
                <option value='autumn'>Autumn</option>
                <option value='spring'>Spring</option>
            </select>
{errors.season && <p className='error'>{errors.season}</p>}
            <label htmlFor='select'>Select Countries</label>
                <input type='search' placeholder='search Country' name='search' onChange={handleChange}/>
                <label htmlFor='countries'>Search results</label>
                <select style={{height: '150px', minWidth: '100px'}} id='selectCountry' name='selectCountry' multiple onChange={handleChange}>
                    {Country && Country.map((e) => {
                        return <option key={e.id} value={e.id}>{e.name}</option>})}
                </select>
                <label htmlFor='country'>Selected Countries</label>
                <select style={{minHeight: '150px', minwidth: '100px'}} id='country' name='selectCountry' multiple onChange={handleChange}>
                    {form.countries && form.countries.map((e) => {
                        return <option key={e} value={e}>{copyAllCountries.filter((x) => x.id === e)[0].name}</option>})}
                </select>
{errors.country && <p className='error'>{errors.country}</p>}
            
            <input type='submit' onClick={handleSubmit}/>
        </form>
        </FormStyle>
    )
}