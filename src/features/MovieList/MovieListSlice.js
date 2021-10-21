import { type, path } from "rambdax";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import produce from "immer";
import dummy from "../../dummyJson/by-genre16.json";
import genresArray from "../../dummyJson/genres.json";
import missingImage from "../../assets/missing-image.png";
const api_key = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = `https://api.themoviedb.org/3`;
function apiGetMovies(page) {
    return axios.get(baseUrl + "/movie/popular", {
        params: { language: "en-US", api_key, page },
    });
}

function apiSearchMovies({ keyword, page }) {
    return axios.get(baseUrl + "/search/movie", {
        params: { api_key, page, query: keyword },
    });
}

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
    data: {
        results: [],
    },
};
function setUnderId(array) {
    return array
        .map((item) => ({
            ...item,
            poster_path: item.poster_path
                ? "https://image.tmdb.org/t/p/w300" + item.poster_path
                : missingImage,
            release_year: item.release_date && item.release_date.slice(0, 4),
            genres: item.genre_ids.map(
                (id) => genresArray.find((gen) => gen.id === id)?.name
            ),
        }))
        .reduce((cur, next) => {
            return { ...cur, [next.id]: next };
        }, {});
}

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
                state.data.results = setUnderId(action.payload.results);
            })
            .addCase(searchMovies.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.apiStatus = "idle";
                state.data = action.payload;
                state.data.results = setUnderId(action.payload.results);
            })
            .addCase(searchGenreMovies.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(searchGenreMovies.fulfilled, (state, action) => {
                state.apiStatus = "idle";
                state.data = action.payload;
                state.data.results = setUnderId(action.payload.results);
            });
    },
});

export const selectMovies = (state) => state.movieList;

export default MovieListSlice.reducer;
