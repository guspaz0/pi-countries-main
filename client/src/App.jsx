import React from "react";
import {useNavigate, useLocation, Route, Routes} from 'react-router-dom';
import {LandingPage, Home, Form, Detail, Navbar} from './components/index.jsx';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries } from "./redux/actions.js";
import { AppStyle } from "./CSS/app.js";

export default function App() {

  const location = useLocation();
  const dispatch = useDispatch();
  const Countries = useSelector(state => state.allCountries)

  React.useEffect(() => {
    if (Countries.length === 0) {
      dispatch(getAllCountries())
    }
  },[dispatch])

  return (
  <AppStyle>
    {location.pathname !== '/' && <Navbar/>}
    <Routes>
      <Route path='/home' element={<Home countries={Countries}/>}/>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/detail' elemen={<Detail/>}/>  
    </Routes>
  </AppStyle>
  )
}
