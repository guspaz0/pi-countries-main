import React from 'react';
import { FormStyle } from '../CSS';
import { searchCountry } from '../redux/actions';

export default function Form({copyAllCountries}) {

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
    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        if (name === 'search') {
            const filterName = copyAllCountries.filter((e) => e.name.toLowerCase().includes(value.toLowerCase())).map((e) => {return {name: e.name, id: e.id}})
            setCountry(filterName)
        }
        if (name === 'selectCountry') {
            setForm({
                ...form,
                countries: [...form.countries, value]
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
    }
    return (
        <FormStyle>
        <h1>Add Activities</h1>
        <form>
            <label htmlFor="name">Name</label>
            <input id='name' name='name' type='text'/>
            <label htmlFor="difficult">Difficult</label>
            <input id='difficult' name='difficult' type='range' min={0} max={5}/>
            <label htmlFor="duration">Duration</label>
            <input id='duration' name='duration' type='time'/>
            <label htmlFor="season">Season</label>
            <select id='season' name='season'>
                <option value='summer'>Summer</option>
                <option value='winter'>Winter</option>
                <option value='autumn'>Autumn</option>
                <option value='spring'>Spring</option>
            </select>
            <label htmlFor='select'>Select Countries</label>
                <input type='search' placeholder='search Country' name='search' onChange={handleChange}/>
                <label htmlFor='countries'>Search results</label>
                <select style={{height: '150px', minWidth: '100px'}} id='selectCountry' name='selectCountry' multiple onChange={handleChange}>
                    {Country && Country.map((e) => {return <option key={e.id} value={e.id}>{e.name}</option>})}
                </select>
                <label htmlFor='country'>Selected Countries</label>
                <select style={{height: '150px', width: '100px'}} id='country' multiple onChange={handleChange}>
                    {form.countries && form.countries.map((e) => {return <option key={e} value={e}>{e}</option>})}
                </select>
            
            <input type='submit' onClick={handleSubmit}/>
        </form>
        </FormStyle>
    )
}