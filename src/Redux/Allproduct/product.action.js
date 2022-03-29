import { PRODUCT_FAILURE, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./product.actionType"

export const product_request = ()=>{
    return{
        type : PRODUCT_REQUEST
    }
}
export const product_success = (payload)=>{
    return{
        type : PRODUCT_SUCCESS,
        payload : payload
    }
  
}

export const product_failure = ()=>{
    return{
        type : PRODUCT_FAILURE
    }
    
}