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
                copyAllCountries: state.allCountries,
            }
        case actions.SEARCH_COUNTRY:
            return {
                ...state,
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
       case actions.POST_ACTIVITIES:
            return {
                ...state,
                Activities: [...state.Activities, action.payload]
            }
        default:
            return { ...state };
    }
}