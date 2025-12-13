import { productsList } from "./productslist";

const intialState = productsList;

export default function productReducer(state = intialState,action){
    return intialState;
}