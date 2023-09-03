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
        case actions.ORDER:
            function order(payload) {
                if (payload === 'reset') return state.copyAllCountries
                return state.allCountries.sort((a,b) => {
                if (payload === 'Z-A') return b.name.localeCompare(a.name);
                if (payload === 'A-Z') return a.name.localeCompare(b.name);
                if (payload === '+population') return a.population - b.population;
                if (payload === '-population') return b.population - a.population;
                })}

            return {
                ...state,
                allCountries: order(action.payload)
            }
            case actions.FILTER:
                function filter(payload) {
                    let filteredList = []
                    if (payload === 'reset') filteredList = state.copyAllCountries
                    else filteredList = state.allCountries.filter((e) => e.region === action.payload)
                    return filteredList
                    }
                return {
                    ...state,
                    allCountries: filter(action.payload)
                }
        default:
            return { ...state };
    }
}