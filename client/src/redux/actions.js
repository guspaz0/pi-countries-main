import axios from "axios";
//require('dotenv').config();
const {VITE_DB_HOST, VITE_DB_PORT} = import.meta.env
import * as actions from './actiontypes';
const URL = `http://${VITE_DB_HOST}:${VITE_DB_PORT}`

export function getAllCountries() {
    return async function (dispatch) {
    try {
        const {data} = await axios.get(`${URL}/countries`)
        if (data) {
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
export function filterCountries(filter) {
    return async function (dispatch) {
        try {
            dispatch({
                type: actions.FILTER,
                payload: filter
            })
        } catch (error) {
            return error
        }
    }
}

export function postActivity(form) {
    axios.post(`${URL}/activities`, form).then((response) => {
        const {data , status} = response
        if (data) {
            return async function (dispatch) {
                try {
                    dispatch({
                        type: actions.POST_ACTIVITY,
                        payload: data
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        } else if (status !== Number(201)) {
            
        }
    })
    // return async function (dispatch) {
    //     try {
    //         const {data, status} = await axios.post(`${URL}/activities`, form)
    //         if (data) {
    //             dispatch({
    //                 type: actions.POST_ACTIVITY,
    //                 payload: data
    //             })
    //         }
    //         console.log(status, typeof(status))
    //         if (status === Number(201)).then()
    //     } catch (error) {
    //         return error
    //     }
    //}
}