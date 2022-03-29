import axios from "axios";
import { product_failure, product_request, product_success } from "./product.action";

export const allProductApi = (params)=>(dispatch)=>{
dispatch(product_request())
axios
.get("https://urbanladderclone.herokuapp.com/api/products")
.then((res)=>{
    console.log(res)
    dispatch(product_success(res.data.products))
})
.catch((res)=>{
    dispatch(product_failure())
})
}
