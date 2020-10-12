import axios from "axios";

import { fetchBrowsedNeos, fetchBrowsedNeosReverse } from "./actions";

// THUNK CREATORS
export const fetchBrowsedNeosThunk = (page) => (dispatch) =>
{
    return axios.get(`${process.env.REACT_APP_API_URL}/api/browse?page=${page}`)
    .then((res) => dispatch(fetchBrowsedNeos(res.data.neos)))
    .catch((err) => console.error(err));
};

export const fetchBrowsedNeosReverseThunk = (page) => (dispatch) =>
{
    return axios.get(`${process.env.REACT_APP_API_URL}/api/browse?page=${page}`)
    .then((res) => dispatch(fetchBrowsedNeosReverse(res.data.neos)))
    .catch((err) => console.error(err));
};