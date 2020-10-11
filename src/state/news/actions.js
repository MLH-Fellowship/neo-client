import types from "./action_types";

// ACTION CREATORS
export function fetchNews(news)
{
    return {
        type: types.FETCH_NEWS,
        payload: news
    };
}