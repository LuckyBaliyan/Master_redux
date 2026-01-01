import { produce } from "immer";
import {createSlice} from "@reduxjs/toolkit";


const getIndex = (state,action)=>{
    return state.findIndex(
        (cartItem)=> cartItem.productId === action.payload.productId
    );
}


//The createSlice function saves our efforts of creating actions Types, action Creators & reducers

const slice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        cartAddItem(state,action){
          const exsistingIndex = getIndex(state,action);
            if(exsistingIndex !== -1){
                state[exsistingIndex].quantity += 1
            }
            else state.push({...action.payload,quantity: 1});
        },
        cartRemoveItem(state,action){
            const exsistingIndex = getIndex(state,action);
            state.splice(exsistingIndex,1);
        },
        cartIncreaseQuantity(state,action){
            const exsistingIndex = getIndex(state,action);
            if(exsistingIndex !== -1){
                state[exsistingIndex].quantity +=1;
            }

        },
        decreaseCartItemQuantity(state,action){
            const exsistingIndex = getIndex(state,action);
            if(exsistingIndex !== -1){
               if(state[exsistingIndex].quantity === 1){
                state.splice(exsistingIndex,1);
               }
               else{
                state[exsistingIndex].quantity -= 1;
               }
            }
        }
    }
})

// console.log(slice,slice.actions.cartAddItem({id:23}));


export default slice.reducer;
export const {
    cartAddItem,
    cartRemoveItem,
    decreaseCartItemQuantity,
    cartIncreaseQuantity
} = slice.actions;

console.log(cartAddItem,cartAddItem.type);
console.dir(cartAddItem);