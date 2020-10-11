import types from "./action_types";

// ACTION CREATORS
export function selectNeoCard(neoID)
{
    return {
        type: types.SELECT_NEOCARD,
        payload: neoID
    };
}