import { createSlice } from "@reduxjs/toolkit";
import { OrderApi } from "../../mocks/order";




const initialState = {
  
  Order:{},
  OrderList:[],
    loading: false,
  };

const OrderSlice =createSlice ({
    name: "order",
    initialState ,
   reducers: {
  createOrder(state,action){
       let data={...action.payload.data}
       state.Order=data;
    },
    orderlist(state,action){
      let data=[...action.payload.data.data]
      state.OrderList=data;
    }



}
});
export const {reducer} = OrderSlice;


export const createOrder=(data)=> async (dispatch) =>{
    try {
       const result =await OrderApi.CreateOrder(data);
       if (result){
        await dispatch(OrderSlice.actions.createOrder(result))
        return result;
       }
       return null;
    } catch (error) {
        console.error("Error fetching order:", error.message); 
      return null; 
    }
  


};

  //  orderlist  
  
  export const fetchOrderList=(page=1,limit = 10,filter={})=> async (dispatch) =>{
    try {
       const result =await OrderApi.OrderList(page,limit,filter);
       if (result){
        await dispatch(OrderSlice.actions. orderlist(result))
        return result;
       }
       return null;
    } catch (error) {
        console.error("Error fetching order:", error.message); 
      return null; 
    }
  };