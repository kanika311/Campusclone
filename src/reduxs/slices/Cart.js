import { createSlice } from "@reduxjs/toolkit";
import {CartApi} from '../../mocks/Cart'


const initialState = {
    product:[],
    loading: false,
  };

const CartSlice=createSlice ({
    name: "cart",
    initialState ,
   reducers: {
    getCartList(state,action){
       let data={...action.payload.data.data} 
       state.product=data;
    }
   }
});
export const {reducers}=CartSlice;


export const FetchCart=()=> async (dispatch) =>{
    try {
       const result =await CartApi.getCartList();
       if (result){
        await dispatch(CartSlice.actions.FetchCart(result))
        return result;
       }
       return null;
    } catch (error) {
        console.error("Error fetching product:", error.message); 
      return null; 
    }

};