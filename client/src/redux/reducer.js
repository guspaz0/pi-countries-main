import * as actions from './actiontypes';

const initialState = {
    allCountries: [],
    copyAllCountries: [],
    idDetail: {},
    Activities: [],
    order: 'A-Z',
    filter: {
        activity: 'all',
        region: 'all'
    },
}

export default function reducer(state = initialState, action) {
    function order(payload, list) {
        if (payload === 'all') return state.copyAllCountries
        let orderList = state.allCountries
        if (list) orderList = list
        return orderList.sort((a,b) => {
            if (payload === 'Z-A') return b.name.localeCompare(a.name);
            if (payload === 'A-Z') return a.name.localeCompare(b.name);
            if (payload === '-population') return a.population - b.population;
            if (payload === '+population') return b.population - a.population;
        }
    )}
    function filter(name, value) {
        let filteredList = []
        if (name === 'region') {
            if (value === 'all') {
                filteredList = state.copyAllCountries
            } else {
                filteredList = state.allCountries.filter((e) => e.region.toLowerCase() === value.toLowerCase())
            }
            if (filteredList.length === 0) {
                filteredList = state.copyAllCountries.filter((e) => e.region.toLowerCase() === value.toLowerCase())
            }
        }
        if (name === 'activity') {
            if (value === 'all') {
                if (state.filter.region === 'all') filteredList = state.copyAllCountries
                else filteredList = state.copyAllCountries.filter((e) => e.region.toLowerCase() === state.filter.region.toLowerCase())
            } else {
                filteredList = state.allCountries.filter((e) => e.Activities.some((x) => x.name === value))
            }
            if (filteredList.length === 0) {
                filteredList = state.copyAllCountries.filter((e) => e.Activities.some((x) => x.name === value))
            }
        }
        return order(state.order, filteredList)
    }
    switch (action.type) {
        case actions.ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                copyAllCountries: action.payload,
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
                Activities: [...action.payload]
            }
        case actions.POST_ACTIVITY:
            return {
                ...state,
                Activities: [...state.Activities, action.payload]
            }
        case actions.ORDER:
            return {
                ...state,
                allCountries: [...order(action.payload)],
                order: action.payload
            }
        case actions.FILTER:
            let {name, value} = action.payload
            return {
                ...state,
                allCountries: [...filter(name, value)],
                filter: {...state.filter, [name]: value}
            }
        default:
            return { ...state };
    }
}