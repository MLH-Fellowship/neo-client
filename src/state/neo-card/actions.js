import types from "./action_types";

// ACTION CREATORS
export function selectNeoCard(neo)
{
    return {
        type: types.SELECT_NEOCARD,
        payload: neo
    };
}