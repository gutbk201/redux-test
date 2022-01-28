import { configureStore } from "@reduxjs/toolkit";
import movieListReducer from "./features/MovieList/MovieListSlice";
import movieDetailReducer from "./features/MovieDetail/MovieDetailSlice";
import bookmarkReducer from "./features/Bookmark/BookmarkSlice";
// import counterReducer from "./features/Counter/counterSlice";
import { throttle } from "rambdax";

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
        if (serialisedState === null) return {};
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
        bookmark: loadLocalStorage().bookmark,
    },
    reducer: {
        counter: bookmarkReducer,
        bookmark: bookmarkReducer,
        movieDetail: movieDetailReducer,
        movieList: movieListReducer,
    },
});

store.subscribe(throttle(() => saveLocalStorage(store.getState()), 2000));
