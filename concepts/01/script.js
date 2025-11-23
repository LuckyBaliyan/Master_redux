//Basics of state cahnge

const state = {
    count:0,
}

//1. change the state of count by 1
//state.count = 1; mutating the state which is not allowed in redux
//console.log(state.count);

//2.Increase it by one 
/*function changeState(obj,counter = 1){
   obj.count = obj.count+counter;
}
*/
//changeState(state);

//But Redux says that don't mutate i.e without changing the actualCount change count

//One Method that pops on my head was this:-
/*
const currState =  structuredClone(state);

changeState(currState);

console.log(state,currState)
*/

//But suitable method is this:-

let prevState = state;

function increment(state,counter = 1){
    //Mutating State//
    /**state.count = state.count + 1; **/
    
    state = {count:state.count+1};
    console.log(state);
    console.log(state === prevState);
    console.log(state,prevState);
}

increment(state,prevState);


