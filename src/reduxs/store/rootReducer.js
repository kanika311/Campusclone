import {combineReducers} from '@reduxjs/toolkit'
import {reducer as authReducer} from '../slices/auth'
import {reducer as productSlice} from '../slices/product'
import {reducer as CartSlice} from '../slices/product'



export const rootReducer = combineReducers({
      auth:authReducer,
      product: productSlice, 
     cart: CartSlice,
    

});