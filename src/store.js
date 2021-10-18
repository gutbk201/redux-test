import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counterSlice";
import movieListReducer from "./features/MovieList/MovieListSlice";
import movieDetailReducer from "./features/MovieDetail/MovieDetailSlice";
import bookmarkReducer from "./features/Bookmark/BookmarkSlice";
import dummy from "./dummyJson/popular.json";

function saveLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistantState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}
function loadLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistantState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

export const store = configureStore({
    preloadedState: {
        // counter: {
        //     value: 123,
        // },
        // bookmark: dummy.results,
    },
    reducer: {
        counter: counterReducer,
        bookmark: bookmarkReducer,
        movieDetail: movieDetailReducer,
        movieList: movieListReducer,
    },
});
