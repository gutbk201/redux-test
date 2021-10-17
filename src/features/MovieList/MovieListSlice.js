import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import dummy from "../../dummyJson/by-genre16.json";
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

//https://api.themoviedb.org/3/discover/movie?api_key=c47afb8e8b27906bca710175d6e8ba68&language=en-US&sort_by=popularity.desc
//&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate

function apiSearchMoviesByGenre({ genreId, page }) {
    return axios.get(baseUrl + "/discover/movie", {
        params: {
            api_key,
            page,
            with_genres: genreId,
            language: "en-US",
            sort_by: "popularity.desc",
            include_adult: false,
            include_video: false,
            with_watch_monetization_types: "flatrate",
        },
    });
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

export const searchGenreMovies = createAsyncThunk(
    "movies/byGenre",
    async ({ genreId, page }) => {
        const response = await apiSearchMoviesByGenre({ genreId, page });
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
            })
            .addCase(searchGenreMovies.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(searchGenreMovies.fulfilled, (state, action) => {
                state.apiStatus = "idle";
                state.data = action.payload;
            });
    },
});

export const selectMovies = (state) => state.movieList;

export default MovieListSlice.reducer;
