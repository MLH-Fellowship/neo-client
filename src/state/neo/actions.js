import types from "./action_types";

// ACTION CREATORS
export function fetchBrowsedNeos(neos)
{
    return {
        type: types.FETCH_BROWSED_NEOS,
        payload: neos
    };
}

export function fetchBrowsedNeosReverse(neos)
{
    return {
        type: types.FETCH_BROWSED_NEOS_REVERSE,
        payload: neos
    };
}