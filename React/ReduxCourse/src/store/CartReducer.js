import { produce } from "immer";

//Action Types
const CART_ADD_ITEM = 'cart/addItems';
const CART_REMOVE_ITEM = 'cart/removeItems';
const CART_INC_QUANTATITY = 'cart/incItem';
const CART_DEC_QUANTATITY = 'cart/decItem';

//Action Creater
export function decreaseCartItemQuantity(productId){
    return {
        type:CART_DEC_QUANTATITY,
        payload:{productId}
    }
}


//Increase item quantity
export function cartIncreaseQuantity(productId){
    return{
        type:CART_INC_QUANTATITY,
        payload:{productId}
    }
}


export function cartAddItem(productId,quantity=1){
    return {
        type:CART_ADD_ITEM,
        payload:{productId, quantity}
    }
}

export function cartRemoveItem(productId){
    return{
        type:CART_REMOVE_ITEM,
        payload:{productId}
    }
}



//Reducer
export function cartReducer(originalState = [], action) {
   return produce(originalState,(state)=>{
        const exsistingIndex = state.findIndex(
            (cartItem) => cartItem.productId === action.payload.productId
        )
        switch(action.type){
          case CART_ADD_ITEM:
            if(exsistingIndex !== -1){
                state[exsistingIndex].quantity += 1
                break;
            }
            state.push({...action.payload,quantity: 1});
            break;

            case CART_REMOVE_ITEM:
                state.splice(exsistingIndex,1);
                break;

            case CART_INC_QUANTATITY:
                if(exsistingIndex !== -1){
                state[exsistingIndex].quantity += 1;
                break;
                }
                break;
            
            case CART_DEC_QUANTATITY:
                if(exsistingIndex !== -1){
                state[exsistingIndex].quantity -= 1;
                if(state[exsistingIndex].quantity  === 0){
                    state.splice(exsistingIndex,1);
                }
                break;
                }
            break;
        }
        return state;
    })
    /*
    switch (action.type) {
        case CART_ADD_ITEM:
            //logic of increasing quantity of exsisting item if already added one time we dont want it to be added again
            const exsistingItem = state.find((cartItem)=>cartItem.productId === action.payload.productId);
            console.log(exsistingItem);
            if(exsistingItem) {
                return state.map((cartItem)=>{
                    if(cartItem.productId === action.payload.productId){
                        return {
                            ...cartItem,
                            quantity:cartItem.quantity + action.payload.quantity,
                        }
                    }
                    return cartItem;
                })
            }
            return [ ...state, action.payload ];
        case CART_REMOVE_ITEM:
            return  state.filter((cartItem)=>cartItem.productId !== action.payload.productId);
        case CART_INC_QUANTATITY:
            return state.map((cartItem) => {
                    if (cartItem.productId === action.payload.productId) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                })
        case CART_DEC_QUANTATITY:
            return state.map((cartItem) => {
                    if (cartItem.productId === action.payload.productId) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 };
                    }
                    return cartItem;
                }).filter((item) => item.quantity > 0) // remove the item having quantity 0 automatically
        default:
            return state;
    }
        */
}