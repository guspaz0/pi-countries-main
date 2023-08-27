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
