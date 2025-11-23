import {createStore} from 'redux';
// we must need to add type = "module" to js file 

let intialState = {
    posts:0,
    name:"Lucky Baliyan",
    age:19,
}


function reducer(state = intialState,action={type:null,payload:{value:1}}){
  switch(action.type){
    case 'post':
        return {...state,posts:state.posts + action.payload.value}
    case 'delete':
        return {...state,posts:state.posts - action.payload.value}
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


const store = createStore(reducer);// we must need to pass the reducer int it
//It consist 3 main functions 1.getState,2.dispatch,3.subscribe

console.log(store.getState()); //get current state
store.dispatch({type:'post',payload:{value:1}}); // we have to pass exact same parameters we used inhead of the
// reducer not default params works here like payload:{val:1} we must have to pass it
console.log(store.getState());// psots:-1 now

