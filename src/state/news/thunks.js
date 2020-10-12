import axios from "axios";

import { fetchNews } from "./actions";

// THUNK CREATORS
export const fetchNewsThunk = () => (dispatch) =>
{
    return axios.get(`${process.env.REACT_APP_API_URL}/api/news`)
    .then((res) => dispatch(fetchNews(res.data.news)))
    .catch((err) => console.error(err));
};