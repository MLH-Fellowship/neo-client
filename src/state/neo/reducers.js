import types from "./action_types";

const initialState =
{
    neos: [],
    page: {}
};

// REDUCER
const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case types.FETCH_BROWSED_NEOS:
            return {
                ...state,
                neos: [...state.neos, ...action.payload.near_earth_objects],
                page: action.payload.page
            };
        case types.FETCH_BROWSED_NEOS_REVERSE:
            return {
                ...state,
                neos: [...action.payload.near_earth_objects, ...state.neos],
                page: action.payload.page
            };
        default:
            return state;
    }
};

export default reducer;