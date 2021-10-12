import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dummy from "../../dummyJson/detail-550988.json";
const api_key = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = `https://api.themoviedb.org/3/movie/`;
function apiGetMovieDetail(id) {
    return axios.get(baseUrl + id, { params: { api_key, language: "en-US" } });
    // return { data: dummy };
}
const initialState = {
    apiStatus: "init",
    data: {},
};

export const fetchMovieDetail = createAsyncThunk(
    "movieDetail/fetch",
    async (id) => {
        const response = await apiGetMovieDetail(id);
        return response.data;
    }
);

export const MovieDetailSlice = createSlice({
    name: "movieDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieDetail.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(fetchMovieDetail.fulfilled, (state, action) => {
                state.apiStatus = "idle";
                state.data = action.payload;
            });
    },
});

export const selectMovieDetail = (state) => state.movieDetail;

export default MovieDetailSlice.reducer;
