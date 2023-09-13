import React, {useEffect, useState} from 'react';
import { FormStyle } from '../../CSS';
import { postActivity } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Validate from './validate.js'

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

    const [Country, setCountry] = useState([])

    const [form, setForm] = useState({
        name: "",
        difficult: 1,
        duration: '00:00',
        season: '',
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
                duration: '',
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
        <section className='modalFormSection.active'>
            <div className='modalFormContainer'>
                <div className='modalInformation'>
                <div className='modalTitle'>
                    <h1 className='formTitle'>Add Activities</h1>
                </div>
                <form className='modalForm'>
                    <div className='inputContainer'>
                        <label htmlFor="name" className='textBox'>Name</label>
                        <input className='inputBox'
                            id='name'
                            name='name'
                            type='text'
                            placeholder='type activity name...'
                            value={form.name}
                            onChange={handleChange}
                        />
                        {errors.name? <p className='textAlert'>{errors.name}</p> : <></>}
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="difficult" className='textBox'>Difficult</label>
                        <input className='inputBox'
                            type='number'
                            name='difficult'
                            min='1'
                            max='5'
                            value={form.difficult}
                            onChange={handleChange}
                        />
                        {errors.difficult? <p className='textAlert'>{errors.difficult}</p> : <></>}
                    </div>
                    
                    <div className='inputContainer'>
                        <label htmlFor="duration" className='textBox'>Duration</label>
                        <input className='inputBox'
                            id='duration'
                            name='duration'
                            type='time'
                            value={form.duration}
                            onChange={handleChange}
                        />
                        {errors.duration? <p className='textAlert'>{errors.duration}</p>: <></>}
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="season" className='textBox'>Season</label>
                        <select className='inputBox' id='season' name='season' defaultValue={form.season} onChange={handleChange}>
                            <option></option>
                            <option value='summer'>Summer</option>
                            <option value='winter'>Winter</option>
                            <option value='autumn'>Autumn</option>
                            <option value='spring'>Spring</option>
                        </select>
                        {errors.season? <p className='textAlert'>{errors.season}</p> : <></>}
                    </div>

                    <div className='selectContainer'>
                        <label htmlFor='select' className='searchCountry'>Select Countries</label>
                        <input 
                            type='search'
                            placeholder='search Country'
                            name='search'
                            onChange={handleChange}
                        />
                    <span className='selectCountry'>
                        <span className='countryChild'>
                            <label htmlFor='countries' className='textBox'>Search results</label>
                            <select className='inputBox2' style={{height: '150px', minWidth: '100px'}}
                                id='selectCountry'
                                name='selectCountry'
                                multiple
                                onChange={handleChange}>
                                {Country? Country.map((e) => {
                                    return <option key={e.id} value={e.id}>{e.name}</option>}) : <></>}
                            </select>
                        </span>
                        <span className='countryChild'>
                            <label htmlFor='country'>Selected Countries</label>
                            <select className='inputBox2' style={{minHeight: '150px', minWidth: '100px'}}
                                id='country'
                                name='selectCountry'
                                multiple
                                onChange={handleChange}>
                                {form.country? form.country.map((e) => {
                                    return <option key={e} value={e}>{copyAllCountries.filter((x) => x.id === e)[0].name}</option>}) : <></>}
                            </select>
                        </span>
                    </span>
                    {errors.country? <p className='textAlert'>{errors.country}</p> : <></>}
                    </div>
                    <div className='formButtons'>
                        <button className='formButton' onClick={handleSubmit}>
                            <span className='textButton'>SEND</span>
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    </FormStyle>
    )
}