import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "Products",
    initialState:{
        loading:false,
        list:[],
        error:'',
    },
    reducers:{
        updateAllProducts(state,action){
            state.list = action.payload;
            state.loading = false;
            state.error = "";
        },
        fetching(state){
            state.loading = true;
        },
        fetchProductsError(state, action){
            state.loading = false;
            state.error = action.payload || "Something Went Wrong!";
        }
    },
});

export default slice.reducer;
export const {updateAllProducts, fetching, fetchProductsError} = slice.actions;