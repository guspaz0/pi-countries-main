import React, {useEffect, useState} from 'react';
import { FormStyle } from '../CSS';
import { postActivity } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Validate from '../utils/validate'

export default function Form({copyAllCountries}) {

    const dispatch = useDispatch()
    const Activities = useSelector(state => state.Activities)

    const [errors, setErrors] = useState({
        name: '',
        difficult: 0,
        duration: '',
        season: '',
        countries: [],
    })

    const [Country, setCountry] = useState([{
        name: null,
        id: null,
    }])

    const [form, setForm] = useState({
        name: null,
        difficult: 1,
        duration: '00:15',
        season: 'summer',
        country: []
    })

    useEffect(() => {
        setErrors(Validate(form))
    },[form])

    useEffect(() => {
        if (Activities.some((x) => x.name === form.name)) {
            alert('Activity created successfull')
            setForm({
                name: null,
                difficult: 1,
                duration: '00:15',
                season: 'summer',
                country: []
            })
        }
    },[Activities, form.name])

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        if (name === 'search') {
            const filterName = copyAllCountries.filter((e) => e.name.toLowerCase().includes(value.toLowerCase())).map((e) => {return {name: e.name, id: e.id}})
            setCountry(filterName)
        }
        else if (name === 'selectCountry') {
            if (form.country.some((x) => x === value)) {
                setForm({
                    ...form,
                    country: form.country.filter((x) => x !== value)
                })
            } else {
                setForm({
                    ...form,
                    country: [...form.country, value]
                })
            }
        }
        else if (name === 'difficult') {
            setForm({
                ...form,
                difficult: parseInt(value)
            })
        } else {
            setForm({
                ...form,
                [name]: value
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if (Object.keys(errors).length === 0) {
            dispatch(postActivity({...form, duration: `${form.duration}:00`}))
        } else {
            alert('please solve the form validations')
        }
    }
    return (
        <FormStyle>
        <h1>Add Activities</h1>
        <form className='form'>
            <span>
                <label htmlFor="name">Name</label>
                <input id='name' name='name' type='text' value={form.name} onChange={handleChange}/>
                    {errors.name && <p className='error'>{errors.name}</p>}
            </span>
            <span>
                <label htmlFor="difficult">Difficult</label>
                <input type='number' name='difficult' min='1' max='5' value={form.difficult} onChange={handleChange}/>
            </span>
            {errors.difficult && <p className='error'>{errors.difficult}</p>}
            <span>
                <label htmlFor="duration">Duration</label>
                <input id='duration' name='duration' type='time' value={form.duration} onChange={handleChange}/>
            </span>
            {errors.duration && <p className='error'>{errors.duration}</p>}
            <span>
                <label htmlFor="season">Season</label>
                <select id='season' name='season' defaultValue={form.season} onChange={handleChange}>
                    <option value='summer'>Summer</option>
                    <option value='winter'>Winter</option>
                    <option value='autumn'>Autumn</option>
                    <option value='spring'>Spring</option>
                </select>
                {errors.season && <p className='error'>{errors.season}</p>}
            </span>
            <span className='searchCountry'>
                    <label htmlFor='select'>Select Countries</label>
                    <input type='search' placeholder='search Country' name='search' onChange={handleChange}/>
            </span>
            <span className='selectCountry'>
                <span className='countryChild'>
                    <label htmlFor='countries'>Search results</label>
                    <select style={{height: '150px', minWidth: '100px'}} id='selectCountry' name='selectCountry' multiple onChange={handleChange}>
                        {Country && Country.map((e) => {
                            return <option key={e.id} value={e.id}>{e.name}</option>})}
                    </select>
                </span>
                <span className='countryChild'>
                    <label htmlFor='country'>Selected Countries</label>
                    <select style={{minHeight: '150px', minWidth: '100px'}} id='country' name='selectCountry' multiple onChange={handleChange}>
                        {form.country && form.country.map((e) => {
                            return <option key={e} value={e}>{copyAllCountries.filter((x) => x.id === e)[0].name}</option>})}
                    </select>
                    {errors.country && <p className='error'>{errors.country}</p>}
                </span>
            </span>
            <input className='submit' type='submit' value='Send' onClick={handleSubmit}/>
        </form>
        </FormStyle>
    )
}