import axios from "axios";
import { product_failure, product_request, product_success } from "./product.action";

export const allProductApi = (params)=>(dispatch)=>{
dispatch(product_request())
axios
.get("http://localhost:3001/all_product")
.then((res)=>{
    
    dispatch(product_success(res.data))
})
.catch((res)=>{
    dispatch(product_failure())
})
}
