import types from "./action_types";

const initialState =
{
    news: []
};

// REDUCER
const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case types.FETCH_NEWS:
            return {
                ...state,
                news: action.payload
            };
        default:
            return state;
    }
};

export default reducer;