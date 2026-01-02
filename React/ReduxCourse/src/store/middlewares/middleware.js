export const logger = (store) => (next) => (action)=>{
    console.log(store,next,action);
    next(action);
}

console.log(logger);