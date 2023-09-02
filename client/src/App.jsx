import React from "react";
import {useNavigate, useLocation, Route, Routes, useParams} from 'react-router-dom';
import {LandingPage, Home, Form, Detail, Navbar} from './components/index.jsx';
import {useDispatch, useSelector, } from 'react-redux';
import { getAllCountries, searchCountry, getCountryID, allActivities } from "./redux/actions.js";
import { AppStyle } from "./CSS/app.js";

export default function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const Countries = useSelector(state => state.allCountries)
  const idDetail = useSelector(state => state.idDetail)
  const Activities = useSelector(state => state.Activities)
  const CpCountries = useSelector(state => state.copyAllCountries)

  React.useEffect(() => {
    if (Countries.length === 0) {
      dispatch(getAllCountries())
    }
    if (Activities.length === 0) {
      dispatch(allActivities())
    }
  },[dispatch, Countries])

  return (
  <AppStyle>
    {location.pathname !== '/' && <Navbar 
      navigate={navigate}
      dispatch={dispatch}
      searchCountry={searchCountry}
    />}
    <Routes>
      <Route path='/home' element={<Home
        Countries={Countries}
        navigate={navigate}
        Activities={Activities}
        />}
      />
      <Route path='/' element={<LandingPage/>}/>
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
