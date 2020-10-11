import types from "./action_types";

const initialState =
{
    neos: []
};

// REDUCER
const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case types.FETCH_BROWSED_NEOS:
            return {
                ...state,
                neos: state.neos.concat(action.payload)
            };
        default:
            return state;
    }
};

export default reducer;