import axios from "axios";
//require('dotenv').config();
const {VITE_DB_HOST, VITE_DB_PORT} = import.meta.env
import * as actions from './actiontypes';
const URL = `http://${VITE_DB_HOST}:${VITE_DB_PORT}`

export function getAllCountries() {
    return async function (dispatch) {
    try {
        const {data, status} = await axios.get(`${URL}/countries`)
        if (status) {
            dispatch({
                type: actions.ALL_COUNTRIES,
                payload: data
            })
        }
    } catch (error) {
        return error
    }
}}

export function searchCountry(name) {
    return async function(dispatch){
        try {
            const {data} = await axios.get(`${URL}/countries?name=${name}`)
            console.log(data)
            if (data) {
                dispatch({
                    type: actions.SEARCH_COUNTRY,
                    payload: data
                })
            }
        }catch (error) {
            return error
        }
    }
}

export function getCountryID(id) {
    return async function(dispatch){
        try {
            const {data} = await axios.get(`${URL}/countries/${id}`)
            if (data) {
                dispatch({
                    type: actions.GET_ID_COUNTRY,
                    payload: data
                })
            }
        }catch (error) {
            return error
        }
    }
}

export function allActivities() {
    return async function(dispatch){
        try {
            const {data} = await axios.get(`${URL}/activities`)
            if (data) {
                dispatch({
                    type: actions.ALL_ACTIVITIES,
                    payload: data
                })
            }
        }catch (error) {
            return error
        }
    }
}

export function orderCountries(order) {
    return async function (dispatch) {
        try {
            dispatch({
                type: actions.ORDER,
                payload: order
            })
        } catch (error) {
            return error
        }
    }
}
export function filterCountries({name, value}) {
    return async function (dispatch) {
        try {
            dispatch({
                type: actions.FILTER,
                payload: {name, value}
            })
        } catch (error) {
            return error
        }
    }
}

export function postActivity(form) {
    return async function (dispatch) {
        try {
            const {data} = await axios.post(`${URL}/activities`, form)
            if (data) {
                dispatch({
                    type: actions.POST_ACTIVITY,
                    payload: data
                })
            }
        } catch (error) {
            return error
        }
    }
}