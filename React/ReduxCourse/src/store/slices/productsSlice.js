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

export const getAllProducts = (state)=> state.products.list;
export const getLoadigState = (state)=> state.products.loading;
export const getProductsError = (state)=> state.products.error;

export default slice.reducer;
export const {updateAllProducts, fetching, fetchProductsError} = slice.actions;