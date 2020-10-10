import axios from "axios";

import { fetchBrowsedNeos } from "./actions";

// THUNK CREATORS
export const fetchBrowsedNeosThunk = (page) => (dispatch) =>
{
    return axios.get(`/api/browse?page=${page}`)
    .then((res) => dispatch(fetchBrowsedNeos(res.data.neos)))
    .catch((err) => console.error(err));
};