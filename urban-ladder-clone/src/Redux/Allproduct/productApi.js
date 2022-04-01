import axios from "axios";
import {
  product_failure,
  product_request,
  product_success,
} from "./product.action";

export const addCartApi = (id, token) => {
  axios.post(
    "https://urbanladderclone.herokuapp.com/api/cart",
    {
      quantity: 1,
      product: id,
    },
    {
      headers: {
        accesstoken: "Bearer " + token,
      },
    }
  );
};
export const allProductApi = (params) => (dispatch) => {
  console.log("par", params);
  dispatch(product_request());
  if (params) {
    axios
      .get(
        `https://urbanladderclone.herokuapp.com/api/products/${params.search}&sort=${params.sort}`
      )
      .then((res) => {
        console.log(res);
        dispatch(product_success(res.data.products));
      })
      .catch((res) => {
        dispatch(product_failure());
      });
  }
};
