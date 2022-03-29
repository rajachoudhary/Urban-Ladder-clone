import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./product.actionType"

const initState = {
    isLoading : false,
    isError : false,
    all_product : []
}

export const Product_reducer = (state=initState,{type,payload})=>{
switch(type){
    case PRODUCT_REQUEST :
        return{
            ...state,
            isLoading : true,
            isError :false
        }
    case PRODUCT_SUCCESS :
        return{
             ...state,
             all_product : payload,
            isLoading : false,
            isError : false
        }

    case PRODUCT_FAILURE :
        return{
            ...state,
            isLoading : false,
            isError : true
        }
    default : 
        return state
}
   
}