import * as actions from './actiontypes';

const initialState = {
    allCountries: [],
    copyAllCountries: []
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
        default:
            return { ...state };
    }
}