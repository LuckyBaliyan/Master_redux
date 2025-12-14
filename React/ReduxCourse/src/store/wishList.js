const ADD_IN_WISHLIST = 'wishlist/addItem';
const DELETE_FROM_WISHLIST = 'wishlist/deleteItem';

//adding in whicshList Action object

export function addWishListItem(productId){
    return {
        type:ADD_IN_WISHLIST,
        payload:{productId},
    }
}

export function removeWishListItem(productId){
    return {
        type:DELETE_FROM_WISHLIST,
        payload:{productId},
    }
}


export function wishListReducer(state = [], action) {
    switch (action.type) {
        case ADD_IN_WISHLIST:
            //prevents duplicates
            if(state.some(p => p.productId === action.payload.productId)){
                return state;
            }
            return [...state,action.payload];
        case DELETE_FROM_WISHLIST:
            return state.filter((product) =>
            product.productId !== action.payload.productId)
        default:
            return state;
    }
}