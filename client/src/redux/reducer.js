import * as actions from './actiontypes';

const initialState = {
    allCountries: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.ALL_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload
            }
        default:
            return { ...state };
    }
}