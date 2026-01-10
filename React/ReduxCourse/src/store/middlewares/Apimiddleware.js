//import { useDispatch } from "react-redux";
import { data } from "react-router";
import { updateAllProducts } from "../slices/productsSlice";

export const apiMiddleware = (store)=>(next)=>(action)=>{
    const dispatch = store.dispatch;
    const BASE_URL = `https://fakestoreapi.com`

    if(action.type === 'api/makeCall'){
        next(action);
        const {url, onSucess, onStart} = action.payload;
        //dispatch({type:onStart});

        fetch(`${BASE_URL}/${url}`)
           .then((res)=>res.json())
           .then((data)=>{
            dispatch({
                type:onSucess,
                payload:data,
            });
           })
           .catch(()=>{
            dispatch({
                type:onError,
            });
           })
        
    }
    else next(action);
}