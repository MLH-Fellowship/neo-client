import axios from "axios";

import { fetchBrowsedNeos } from "./actions";

// THUNK CREATORS
export const fetchBrowsedNeosThunk = (page) => (dispatch) =>
{
    return axios.get(`/api/browse?page=${page}`)
    .then(({ data }) => console.log(data))
    .then((neos) => dispatch(fetchBrowsedNeos(neos)))
    .catch((err) => console.error(err));
};