import types from "./action_types";

const initialState =
{
    currentTime: undefined,
    currentDate: undefined
};

// REDUCER
const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case types.UPDATE_TIME: 
            return {
                ...state,
                currentTime: action.now
            };
        case types.UPDATE_DATE: 
            return {
                ...state,
                currentDate: action.now
            };
        default: return state;
    }
};

export default reducer;