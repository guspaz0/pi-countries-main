import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function SideBar() {

    const dispatch = useDispatch()
    const AllCountries = useSelector(state => state.allCountries)
    const Activities = useSelector(state => state.Activities)
    const Filters = useSelector(state => state.filter)

    const [filterActivity,setFilterActivity] = useState()

    useEffect(()=> {
        //setMaxPage(Math.ceil(AllCountries.length/perPage))
        setFilterActivity(() => {
            let repeated = []
            let uniques = []
            AllCountries.filter((e) => e.Activities.length !== 0).map((x) => {
                return repeated = [...repeated , ...x.Activities]
            })
            for (let i = 0; i < repeated.length; i++) {
                if (!uniques.includes(repeated[0].name)) uniques.push(repeated[0].name)
            }
            return uniques
        })
    },[AllCountries])

    function handleOrder(e) {
        e.preventDefault()
        const {name, value} = e.target;
        if (name === 'order') {
            dispatch(orderCountries(value))
        }
    }
    function handleFilter(e) {
        e.preventDefault()
        const {name, value} = e.target;
        dispatch(filterCountries({name, value}))
        }

    return (
    <>
    <span className='filters-bar'>
        <span>
            <label htmlFor='order'>Order:</label>
            <select id='order' name='order' onChange={handleOrder}>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='+population'>+ Population</option>
                <option value='-population'>- Population</option>
            </select>
        </span>
        <span>
            <label htmlFor='region'>Filter by Region:</label>
            <select id='region' name='region' value={Filters.region} onChange={handleFilter}>
                <option value='all'>All</option>
                <option value='Americas'>Americas</option>
                <option value='Africa'>Africa</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </span>
        <span>
            <label htmlFor='activity'>Filter by available Activity in current region:</label>
            <select id='activity' name='activity' value={Filters.activity} onChange={handleFilter}>
                <option value='all'>All</option>
                {filterActivity?.map((e) => {return <option key={e} value={e}>{e}</option>})}
            </select>
        </span>
    </span>
        </>
    )
}