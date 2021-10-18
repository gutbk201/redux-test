import { omit, map, pipe } from "rambdax";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
};

export const BookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        insert: (state, action) => {
            // const newData = omit("vote_average,vote_count")(action.payload);
            // const newData = map((movie) => ({ [movie.id]: movie }))(
            //     action.payload
            // );
            const newData = pipe(omit("vote_average,vote_count"), (movie) => ({
                [movie.id]: movie,
            }))(action.payload);
            state.data.push(newData);
        },
    },
});

export const { insert } = BookmarkSlice.actions;

export const selectBookmark = (state) => state.bookmark;

export default BookmarkSlice.reducer;
