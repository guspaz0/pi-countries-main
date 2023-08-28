import * as actions from './actiontypes';

const initialState = {
    allCountries: [],
    copyAllCountries: [],
    idDetail: {},
    Activities: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
            }
        case actions.SEARCH_COUNTRY:
            return {
                ...state,
                copyAllCountries: state.allCountries,
                allCountries: action.payload,
            }
        case actions.GET_ID_COUNTRY:
            return {
                ...state,
                idDetail: action.payload
            }
        case actions.ALL_ACTIVITIES:
            return {
                ...state,
                Activities: action.payload
            }
        default:
            return { ...state };
    }
}