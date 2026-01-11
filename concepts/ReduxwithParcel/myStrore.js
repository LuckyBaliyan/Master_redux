export function myCreateStore(reducer){
    let state;
    const listners = [];
    const store = {
        getState:()=>{
           return state;
        },
        dispatch:(action)=>{
           state = reducer(state,action);
           listners.forEach((listner)=>{
            listner();
           })
        },
        subscribe:(listner)=>{
           listners.push(listner);
           //returns the unsubscribe() function that remove the current event from the all the till now events
           return function(){
            const lastIndex = listner.findIndex((registeredIndex)=>registeredIndex === listner);
            listners.splice(lastIndex,1);
           }
        },
    };
   store.dispatch({type:"@@INIT"});
   return store;
}