import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { filterCountries,orderCountries } from '../redux/actions';
import { Link } from 'react-router-dom';
import { SideBarStyle } from '../CSS';
import arrow from '../assets/arrow.png';
import earth from '../assets/earth.png';
import list from '../assets/list.png';
import filter from '../assets/filter.png';
import filter2 from '../assets/filter2.png';

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
            //let uniques = []
            AllCountries.filter((e) => e.Activities.length !== 0).map((x) => {
                return repeated = [...repeated , ...x.Activities]
            })
            // for (let i = 0; i < repeated.length; i++) {
            //     if (uniques.map((e) => repeated[0].name !== e)) uniques = [...uniques, repeated[0].name]
            // }
            // console.log(repeated)
            return repeated
            
        })
    },[AllCountries, Activities])

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
    const [active, setActive] = useState(false)
    const [orderMenu,setOrderMenu] = useState(false)
    const [filterMenu,setFilterMenu] = useState(false)
    const [ActivityMenu,setActivityMenu] = useState(false)


    return (
    <SideBarStyle >
    <div className={active? 'sideMenu' : 'sideMenu inactive'}>          
        <div className='topSection'>
            <div className='logo'>
                <img src={earth} alt="earth logo" />
            </div>
            <div className='toggleMenu'>
                <img onClick={()=>{
                    setActive(!active);
                    // setOrderExpanded(false);
                    // setFiilterExpanded(false);
                    // setActivitiesExpanded(false);
                    }} 
                className='toggleIcon' src={arrow} alt="toggle menu" />
            </div>
        </div>
        <ul>
            <li>
                <span onClick={() => {
                    setOrderMenu(!orderMenu);
                    setFilterMenu(false);
                    setActivityMenu(false);}}
                    className='menuItem'>
                    <div className='menuIcon'>
                        <img src={list} alt="list icon" />
                    </div>
                    <span>ORDER</span>
                </span>
                {orderMenu && <p>
                    <label htmlFor='order'></label>
                    <select className='subMenu' id='order' name='order' onChange={handleOrder}>
                        <option value='A-Z'>A-Z</option>
                        <option value='Z-A'>Z-A</option>
                        <option value='+population'>+ Population</option>
                        <option value='-population'>- Population</option>
                    </select>
                </p>}
                
            </li>
            <li>
            <span onClick={()=> {
                    setOrderMenu(false);
                    setFilterMenu(!filterMenu);
                    setActivityMenu(false);}}
                className='menuItem'>                        
                <div className='menuIcon'>
                    <img src={filter} alt="filter icon" />
                </div>
                <span>FILTER</span>
            </span>
            {filterMenu && <p>
                <label htmlFor='region'>by region</label>
                <select className='subMenu' id='region' name='region' value={Filters.region} onChange={handleFilter}>
                    <option value='all'>All</option>
                    <option value='Americas'>Americas</option>
                    <option value='Africa'>Africa</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </p>}

            </li>
            <li>
            <span onClick={()=> {
                    setOrderMenu(false);
                    setFilterMenu(false);
                    setActivityMenu(!ActivityMenu);}}
                className='menuItem'>                        
                <div className='menuIcon'>
                    <img src={filter2} alt="filter icon" />
                </div>
                <span>FILTER 2</span>
            </span>
            {ActivityMenu && <p>
                <label htmlFor='activity'>by available Activity in current region:</label>
                <select className='subMenu' id='activity' name='activity' value={Filters.activity} onChange={handleFilter}>
                    <option value='all'>All</option>
                    {filterActivity?.map((e) => {return <option key={e.name} value={e.name}>{e.name}</option>})}
                </select>
            </p>}
            </li>
            <li>
                <Link to={'/form'}>
                    <button>Create Activity</button>
                </Link>
            </li>
        </ul>
    </div> 
    </SideBarStyle>
    )
}