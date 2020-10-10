import types from "./action_types";

// ACTION CREATORS
export function fetchBrowsedNeos(neos)
{
    return {
        type: types.FETCH_BROWSED_NEOS,
        payload: neos
    };
}