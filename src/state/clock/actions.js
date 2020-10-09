import types from "./action_types";

// ACTION CREATORS
export function updateTime()
{
    return { 
        type: types.UPDATE_TIME,
        now: new Date().toLocaleTimeString()
    };
}

export function updateDate()
{
    return { 
        type: types.UPDATE_DATE,
        now: new Date().toLocaleDateString(undefined,
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };
}