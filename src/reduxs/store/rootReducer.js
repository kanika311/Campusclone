import {combineReducers} from '@reduxjs/toolkit'
import {reducer as authReducer} from '../slices/auth'
import {reducer as productSlice} from '../slices/product'
import {reducer as CartSlice} from '../slices/Cart'
import {reducer as Addressslice} from '../slices/Address'
import {reducer as OrderSlice} from  '../slices/Order'


export const rootReducer = combineReducers({
      auth:authReducer,
      product: productSlice, 
     cart: CartSlice,
     addressauth:Addressslice,
    order:OrderSlice,

});