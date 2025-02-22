import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../../mocks/product";

const initialState = {
  product:[],
  productDetail:{},
  productPaginator:{},
  loading: false,
  
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct(state, action) {
       state.product = [...action.payload.data.data]
       state.productPaginator={...action.payload.data.paginator}
       
      },
      getproductDetails(state, action) {
        let data = {...action.payload.data}
        state.productDetail = data
       }
    }
});





export const{reducer}= productSlice;


export const fetchProductList = (page,limit,filter={}) => async (dispatch) => {
    try {
      const result = await productApi.getProductList(page,limit,filter) // ✅ Call the API function
      
  
      if (result) {
         await dispatch(productSlice.actions.getProduct(result))
       
        return result;
      }
      return null;
    } catch (error) {
      console.error("Error fetching product:", error.message); // Debugging
      return null;
    }
  };

  export const fetchProductdetails = (id) => async (dispatch) => {
   
      try {
        const result = await productApi.getproductdetails(id) // ✅ Call the API function
        
    console.log(result,'result')
        if (result.status === 'SUCCESS') {
           await dispatch(productSlice.actions.getproductDetails(result))
         
          return result;
        }
        return null;
      } catch (error) {
        console.error("Error fetching product:", error.message); // Debugging
        return null;
      }
    };

  
