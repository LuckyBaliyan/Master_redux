//Reducer :- state updator in redux

let reduxState = {
    posts:0,
    name:"Lucky Baliyan",
    age:19,
}

//Redux is even stricter it says no you don't make any chnage or anew obj from state
//just return the state

function reducer(state,action={type:null,payload:{value:1}}){
   // console.log(action); //undefined if not given with any value
   if (action.type === 'post/increaseby')return {...state,posts:state.posts + action.payload.value,action};
   else if (action.type === 'post/decreaseby') return{...state,posts:state.posts - action.payload.value,action};
   return state;
}

// What redux will do //
console.log(reducer(reduxState));
//whever we call it by passing our state we get a new state with updated values

//So redux do these calls behind the scenes

reduxState = reducer(reduxState);
reduxState = reducer(reduxState);
reduxState = reducer(reduxState,{type:'post/increaseby',payload:{value:12}});
console.log(reduxState);
reduxState = reducer(reduxState,{type:'post/decreaseby',payload:{value:2}});
console.log(reduxState); // will results 10 posts as 12 - 2 = 10;

//action:-  is a js object which envolves a string mostly defining the operation on state change i.e basic crud
//like add post and delete post and the data we provide the data on which the specific action needs to be performed
//which we pass in an object we called that a payload



