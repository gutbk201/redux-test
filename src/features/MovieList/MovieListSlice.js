import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dummy from "../../dummyJson/popular.json";
const api_key = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = `https://api.themoviedb.org/3`;
function apiGetMovies(page) {
    return axios.get(baseUrl + "/movie/popular", {
        params: { language: "en-US", api_key, page },
    });
    // return { data: dummy };
}

function apiSearchMovies({ keyword, page }) {
    return axios.get(baseUrl + "/search/movie", {
        params: { api_key, page, query: keyword },
    });
    // return { data: dummy };
}

export const fetchMovies = createAsyncThunk("movieList/fetch", async (page) => {
    const response = await apiGetMovies(page);
    return response.data;
});

export const searchMovies = createAsyncThunk(
    "movies/search",
    async ({ keyword, page }) => {
        const response = await apiSearchMovies({ keyword, page });
        return response.data;
    }
);
const initialState = {
    apiStatus: "init",
    data: {},
};

export const MovieListSlice = createSlice({
    name: "movieList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.apiStatus = "idle";
                state.data = action.payload;
            })
            .addCase(searchMovies.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.apiStatus = "idle";
                state.data = action.payload;
            });
    },
});

export const selectMovies = (state) => state.movieList;

export default MovieListSlice.reducer;
