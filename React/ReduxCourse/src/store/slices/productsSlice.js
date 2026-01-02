import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Products",
    initialState:{
        loading:false,
        list:[],
    },
    reducers:{
        updateAllProducts(state,action){
            state.list = action.payload;
            state.loading = false;
        },
        fetching(state){
            state.loading = true;
        },
    },
});

export default slice.reducer;
export const {updateAllProducts, fetching} = slice.actions;