import React, {useEffect} from "react";
import { Route, Routes, useParams} from 'react-router-dom';
import {LandingPage, Home, Form, Detail, SideBar} from './components/index.jsx';
import {useDispatch, useSelector, } from 'react-redux';
import { getAllCountries, allActivities, } from "./redux/actions.js";
import { AppStyle } from "./CSS/app.js";

export default function App() {

  const dispatch = useDispatch();
  const Countries = useSelector(state => state.allCountries)
  
  const Activities = useSelector(state => state.Activities)
  const CpCountries = useSelector(state => state.copyAllCountries)

  useEffect(() => {
    if (Countries.length === 0) {
      dispatch(getAllCountries())
    }
    if (Activities.length === 0) {
      dispatch(allActivities())
    }
  },[dispatch])

  return (
  <AppStyle>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={
        <React.Fragment>
          <SideBar className='SideBar'/>
          <Home className='content'/>
        </React.Fragment>}
      />
      <Route path='/form' element={<Form 
        copyAllCountries={CpCountries}
      />}/>
      <Route path='/detail/:id' element={<Detail/>}/>  
    </Routes>
  </AppStyle>
  )
}
