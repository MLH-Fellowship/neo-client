import types from "./action_types";

const initialState =
{
    selected: undefined
};

// REDUCER
const reducer = (state = initialState, action) =>
{
    switch(action.type)
    {
        case types.SELECT_NEOCARD:
            return {
                ...state,
                selected: action.payload
            };
        default:
            return state;
    }
};

export default reducer;