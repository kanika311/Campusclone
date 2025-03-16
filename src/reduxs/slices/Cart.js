import { createSlice } from "@reduxjs/toolkit";
import {CartApi} from '../../mocks/Cart'



const initialState = {
  Cart:{},
  cartList:[],
    loading: false,
    paginator:{}
   
  };

const CartSlice =createSlice ({
    name: "cart",
    initialState ,
   reducers: {
  CreateCart(state,action){
       let data={...action.payload.data}
       state.Cart=data;
    },
    getCart(state,action){
      state.cartList=[...action.payload.data]
      state.paginator={...action.payload.paginator}
    
    },
    deletecart(state,action){
      let id = action.payload
      console.log(id,'id')
     state.cartList = state.cartList.filter((item) => item.id !== id)
    
  },
  updateCart(state,action){
    let data = {...action.payload.data}
    state.cartList = state.cartList.map((item)=>{
        if(item.id === data.id)
           return data;
           return item;
        
  })},
  softDelete(state, action) {
    let ids = action.payload;
    
    // ✅ Remove items completely from the cart list
    state.cartList = state.cartList.filter((item) => !ids.includes(item.id));
  
    state.isdeleted = true; // ✅ Track that items were deleted
  },

}
});
export const {reducer} = CartSlice;


export const FetchCart=(data,navigate)=> async (dispatch) =>{
    try {
       const result =await CartApi.createCart(data,navigate);
       if (result){
        await dispatch(CartSlice.actions.CreateCart(result))
        return result;
       }
       return null;
    } catch (error) {
        console.error("Error fetching product:", error.message); 
      return null; 
    }
  
    

};

  // get cart list
export const getCartlist=(page = 1,limit = 10,filter ={})=> async (dispatch) =>{
  try {
     const result =await CartApi.getCartList(page,limit ,filter);
     if (result){
      await dispatch(CartSlice.actions.getCart(result.data))
      return result;
     }
     return null;
  } catch (error) {
      console.error("Error fetching product:", error.message); 
    return null; 
  }
};
//delete cart item
export const deleteCartItem=(id)=> async (dispatch) =>{
  try {
     const result =await CartApi.deleteCart(id);
     if (result){
      await dispatch(CartSlice.actions.deletecart(id))
      return result;
     }
     return null;
  } catch (error) {
      console.error("Error fetching product:", error.message); 
    return null; 
  }
};

//update cart item

export const UpdateCartItem=(id,data)=> async (dispatch) =>{
  try {
     const result =await CartApi.UpdateCart(id,data);
     if (result){
      await dispatch(CartSlice.actions.updateCart(result.data))
      return result;
     }
     return null;
  } catch (error) {
      console.error("Error fetching product:", error.message); 
    return null; 
  }
};

// soft delete

export const softDeleteItem = (payload) => async (dispatch) => {
  try {
      const result = await CartApi.softDeleteCart(payload); 
      if (result) {
          await dispatch(CartSlice.actions.softDelete(payload.ids));
          await dispatch(getCartlist());
          return result;
      }
      return null;
  } catch (error) {
      console.error("❌ Error in soft delete API:", error.message);
      return null;
  }
};
