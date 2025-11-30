const CART_ADD_ITEM = 'cart/addItems';
const CART_REMOVE_ITEM = 'cart/removeItems';
const CART_INC_QUANTATITY = 'cart/incItem';
const CART_DEC_QUANTATITY = 'cart/decItem';


export function cartReducer(state = [], action) {
    switch (action.type) {
        case CART_ADD_ITEM:
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
}