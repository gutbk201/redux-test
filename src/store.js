import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counterSlice";
import movieDetailReducer from "./features/MovieDetail/MovieDetailSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        movieDetail: movieDetailReducer,
    },
});
