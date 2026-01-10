//import { combineReducers, createStore } from 'redux';
//import { myCreateStore } from './myStrore';
import { productsList } from './productslist';
//import { cartReducer } from './CartReducer';
//import productReducer from './ProductsReducer';
import { wishListReducer } from './wishList';
//import { decreaseCartItemQuantity } from './CartReducer';
//import { cartAddItem } from './CartReducer';
import { addWishListItem } from './wishList';
import { removeWishListItem } from './wishList';
import cartReducer from './slices/CartSlice';
import ProductReducer from './slices/productsSlice';
import { produce } from 'immer';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from './middlewares/middleware';
import { updateAllProducts } from './slices/productsSlice';
import { apiMiddleware } from './middlewares/Apimiddleware';
// we must need to add type = "module" to js file 

console.log(productsList);

let intialState = {
    products: productsList,
    cartItems: [],
    wishList: [],
}

const CART_ADD_ITEM = 'cart/addItems';
const CART_REMOVE_ITEM = 'cart/removeItems';
const CART_INC_QUANTATITY = 'cart/incItem';
const CART_DEC_QUANTATITY = 'cart/decItem';

const ADD_IN_WISHLIST = 'wishlist/addItem';
const DELETE_FROM_WISHLIST = 'wishlist/deleteItem';


/*
function reducer(state = intialState, action = { type: null, payload: { value: 1 } }) {
    switch (action.type) {
        case CART_ADD_ITEM:
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        case CART_REMOVE_ITEM:
            return {
                ...state, cartItems: [...state.cartItems.filter((cartItem) =>
                    cartItem.productId !== action.payload.productId)]
            }
        case CART_INC_QUANTATITY:
            return {
                ...state, cartItems: state.cartItems.map((cartItem) => {
                    if (cartItem.productId === action.payload.productId) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                })
            }
        case CART_DEC_QUANTATITY:
            return {
                ...state, cartItems: state.cartItems.map((cartItem) => {
                    if (cartItem.productId === action.payload.productId) {
                        return { ...cartItem, quantity: cartItem.quantity - 1 };
                    }
                    return cartItem;
                }).filter((item) => item.quantity > 0) // remove the item having quantity 0 automatically
            }
        case ADD_IN_WISHLIST:
            return {
                ...state, wishList: productsList.filter((product) =>
                    product.id === action.payload.productId)
            }
        case DELETE_FROM_WISHLIST:
            return {
                ...state, wishList: state.wishList.filter((product) =>
                    product.id !== action.payload.productId)
            }
        default:
            return state;
    }
}
*/


/*
reduxState = reducer(reduxState);
reduxState = reducer(reduxState);
reduxState = reducer(reduxState,{type:'post/increaseby',payload:{value:12}});
console.log(reduxState);
reduxState = reducer(reduxState,{type:'post/decreaseby',payload:{value:2}});
console.log(reduxState); // will results 10 posts as 12 - 2 = 10;
*/

//we have to combine all the reducers before passign to the store if we have multiple reducers
/*const finalReducer = combineReducers({
    products:productReducer,
    cartItems:cartReducer,
    wishList:wishListReducer
})
*/

/*export const store = createStore(finalReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);*/

//MiddleWare Function

/*function logger(store){
    return function (next){
        return function (action){
            console.log(store,next,action);
        }
    }
}*/



export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cartItems: cartReducer,
    wishList: wishListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
})


// we must need to pass the reducer int it
//It consist 3 main functions 1.getState,2.dispatch,3.subscribe

/*
console.log(store.getState()); //get current state
store.dispatch({type:'post',payload:{value:1}}); // we have to pass exact same parameters we used inhead of the
store.dispatch({type:'post',payload:{value:12}});
// reducer not default params works here like payload:{val:1} we must have to pass it
console.log(store.getState());// psots:-1 now

//Action to moinitor the redux dev tools 
/*
setTimeout(()=>{
    store.dispatch({type:'post',payload:{value:22}});
},4000);
*/


/*
const postCount  = document.querySelector('.postcount');
const addPosts = document.querySelector('button');

addPosts.addEventListener('click',()=>{
    store.dispatch({type:'post',payload:{value:1}});
})

store.subscribe(()=>{
    console.log(store.getState());
    postCount.innerText = store.getState().posts;
});

postCount.innerText = store.getState().posts;

// using self redux system
const myStore = myCreateStore(reducer);
console.log(myStore.getState());
myStore.subscribe(()=>{
    console.log(myStore.getState().name);
})
myStore.dispatch({type:'post',payload:{value:1}});
console.log(myStore.getState());
*/


/*
const a = decreaseCartItemQuantity(18);
console.log(a);

//MODIFYING data to cart
store.dispatch({ type: 'cart/addItems', payload: { productId: 1, quantity: 1 } });
store.dispatch({ type: 'cart/addItems', payload: { productId: 11, quantity: 2 } });
store.dispatch({ type: CART_REMOVE_ITEM, payload: { productId: 1 } });
store.dispatch({ type: CART_INC_QUANTATITY, payload: { productId: 11 } });
store.dispatch({ type: CART_ADD_ITEM, payload: { productId: 18, quantity: 10 } });
store.dispatch({ type: CART_DEC_QUANTATITY, payload: { productId: 18 } });
store.dispatch({ type: CART_DEC_QUANTATITY, payload: { productId: 11 } });
store.dispatch({ type: CART_DEC_QUANTATITY, payload: { productId: 11 } });
store.dispatch({ type: CART_DEC_QUANTATITY, payload: { productId: 11 } });
store.dispatch({ type: CART_DEC_QUANTATITY, payload: { productId: 11 } });
store.dispatch({ type: ADD_IN_WISHLIST, payload: { productId: 5 } });
store.dispatch({ type: DELETE_FROM_WISHLIST, payload: { productId: 5 } });

//these are the helper functions which are used to pass values to setUp the action object eaisly
store.dispatch(a);
store.dispatch(cartAddItem(13,5));
store.dispatch(addWishListItem(13));
store.dispatch(removeWishListItem(5));


//immer.js Functionality

const users = [
    {
        name:'Revant Singh',
        age:25,
    },
    {
        name:'Adarsh Namdev',
        age:32,
    },
    {
        name:'Chiraag Kushwaha',
        age:20
    }
];

//Normal method:-
const newUsers = users.map((user,i)=>{
    if(i === 1){
        return {...user,age:20};
    }
    return user;
})

console.log(newUsers);

//using Produce method of immer.js

const newUsers2 = produce(users,(userCopy)=>{
    userCopy[1].age = 19;
})

console.log(newUsers2);
*/