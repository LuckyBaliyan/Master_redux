const ADD_IN_WISHLIST = 'wishlist/addItem';
const DELETE_FROM_WISHLIST = 'wishlist/deleteItem';


export function wishListReducer(state = [], action) {
    switch (action.type) {
        case ADD_IN_WISHLIST:
            return [...state,action.payload];
        case DELETE_FROM_WISHLIST:
            return state.filter((product) =>
            product.id !== action.payload.productId)
        default:
            return state;
    }
}