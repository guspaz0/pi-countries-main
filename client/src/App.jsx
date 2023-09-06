import React, {useEffect} from "react";
import {useNavigate, useLocation, Route, Routes, useParams} from 'react-router-dom';
import {LandingPage, Home, Form, Detail, Navbar, SideBar} from './components/index.jsx';
import {useDispatch, useSelector, } from 'react-redux';
import { getAllCountries, searchCountry, getCountryID, allActivities, orderCountries } from "./redux/actions.js";
import { AppStyle } from "./CSS/app.js";

export default function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const Countries = useSelector(state => state.allCountries)
  const idDetail = useSelector(state => state.idDetail)
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

  // useEffect(()=>{

  // },[Activities])

  return (
  <AppStyle>
    {location.pathname !== '/' && <Navbar 
      navigate={navigate}
      dispatch={dispatch}
      searchCountry={searchCountry}
    />}
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={
        <React.Fragment>
          <Home/>
          <SideBar/>
        </React.Fragment>}
      />
      <Route path='/form' element={<Form 
        copyAllCountries={CpCountries}
      />}/>
      <Route path='/detail/:id' element={<Detail 
        useParams={useParams}
        dispatch={dispatch}
        getCountryID={getCountryID}
        idDetail={idDetail}
        />}/>  
    </Routes>
  </AppStyle>
  )
}
