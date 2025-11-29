import {createStore} from 'redux';
import { myCreateStore } from './myStrore';
import { productsList } from './productslist';
// we must need to add type = "module" to js file 

console.log(productsList);

let intialState = {
   products:productsList,
   cartItems:[],
   wishList:[],
}

const CART_ADD_ITEM = 'cart/addItems';
const  CART_REMOVE_ITEM = 'cart/removeItems';
const CART_INC_QUANTATITY =  'cart/incItem';
const CART_DEC_QUANTATITY = 'cart/decItem';

const ADD_IN_WISHLIST = 'wishlist/addItem';
const DELETE_FROM_WISHLIST = 'wishlist/deleteItem';


function reducer(state = intialState,action={type:null,payload:{value:1}}){
   switch(action.type){
    case CART_ADD_ITEM:
        return {...state,cartItems:[...state.cartItems,action.payload]};
    case CART_REMOVE_ITEM:
        return {...state,cartItems:[...state.cartItems.filter((cartItem)=>
            cartItem.productId !== action.payload.productId)]}
    case CART_INC_QUANTATITY:
        return {...state, cartItems:state.cartItems.map((cartItem)=>{
            if(cartItem.productId === action.payload.productId){
                return {...cartItem,quantity:cartItem.quantity+1};
            }
            return cartItem;
        })}
    case CART_DEC_QUANTATITY:
        return {...state, cartItems:state.cartItems.map((cartItem)=>{
            if(cartItem.productId === action.payload.productId){
                return {...cartItem,quantity:cartItem.quantity-1};
            }
            return cartItem;
        }).filter((item)=>item.quantity > 0) // remove the item having quantity 0 automatically
    }
    case ADD_IN_WISHLIST:
        return {...state,wishList:productsList.filter((product)=>
            product.id === action.payload.productId)}
    case DELETE_FROM_WISHLIST:
        return {...state,wishList:state.wishList.filter((product)=>
        product.id !== action.payload.productId)}
    default:
        return state;
   }
}


/*
reduxState = reducer(reduxState);
reduxState = reducer(reduxState);
reduxState = reducer(reduxState,{type:'post/increaseby',payload:{value:12}});
console.log(reduxState);
reduxState = reducer(reduxState,{type:'post/decreaseby',payload:{value:2}});
console.log(reduxState); // will results 10 posts as 12 - 2 = 10;
*/


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store);
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


//MODIFYING data to cart
store.dispatch({type:'cart/addItems',payload:{productId:1,quantity:1}});
store.dispatch({type:'cart/addItems',payload:{productId:11,quantity:2}});
store.dispatch({type:CART_REMOVE_ITEM,payload:{productId:1}});
store.dispatch({type:CART_INC_QUANTATITY,payload:{productId:11}});
store.dispatch({type:CART_ADD_ITEM,payload:{productId:18,quantity:10}});
store.dispatch({type:CART_DEC_QUANTATITY,payload:{productId:18}});
store.dispatch({type:CART_DEC_QUANTATITY,payload:{productId:11}});
store.dispatch({type:CART_DEC_QUANTATITY,payload:{productId:11}});
store.dispatch({type:CART_DEC_QUANTATITY,payload:{productId:11}});
store.dispatch({type:CART_DEC_QUANTATITY,payload:{productId:11}});
store.dispatch({type:ADD_IN_WISHLIST,payload:{productId:5}});
store.dispatch({type:DELETE_FROM_WISHLIST,payload:{productId:5}});
