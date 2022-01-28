import { omit, pipe, merge } from "rambdax";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: {},
};

export const BookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        insert: (state, action) => {
            const newData = pipe(
                omit("vote_average,vote_count"),
                (movie) => ({
                    [movie.id]: movie,
                }),
                merge(state.data)
            )(action.payload);
            state.data = newData;
        },
        remove: (state, action) => {
            const id = action.payload;
            delete state.data[id];
        },
    },
});

export const { insert, remove } = BookmarkSlice.actions;

export const selectBookmark = (state) => state.bookmark;

export default BookmarkSlice.reducer;
