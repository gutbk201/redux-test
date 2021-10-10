import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dummy from "../../dummyJson/popular.json";
const api_key = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = `https://api.themoviedb.org/3/movie/popular`;
function apiGetMovieList(page) {
    // return axios.get(baseUrl, { params: { language: "en-US", api_key, page } });
    return { data: dummy };
}
const initialState = {
    status: "init",
    data: {},
};

export const fetchMovieList = createAsyncThunk(
    "movieList/fetch",
    async (page) => {
        const response = await apiGetMovieList(page);
        return response.data;
    }
);

export const MovieListSlice = createSlice({
    name: "movieList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchMovieList.fulfilled, (state, action) => {
                state.status = "idle";
                state.data = action.payload;
            });
    },
});

export const selectMovieList = (state) => state.movieList;

export default MovieListSlice.reducer;
