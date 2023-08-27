import React from "react";
import {useNavigate, useLocation, Route, Routes} from 'react-router-dom';
import {LandingPage, Home, Form, Detail, Navbar} from './components/index.jsx';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries, searchCountry } from "./redux/actions.js";
import { AppStyle } from "./CSS/app.js";

export default function App() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const Countries = useSelector(state => state.allCountries)

  React.useEffect(() => {
    if (Countries.length === 0) {
      dispatch(getAllCountries())
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
        navigate={navigate}/>}
      />
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/detail' element={<Detail/>}/>  
    </Routes>
  </AppStyle>
  )
}
