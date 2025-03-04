
import {Slice, createSlice} from "@reduxjs/toolkit";
import { AddressApi } from "../../mocks/address";

const initialState = {
    address:{},
    getaddress:[],
 
    loading:false,
}

const Addressslice = createSlice({
    name:"addressauth",
    initialState,
    reducers:{
       
        Addresscreate(state,action){
            let data = {...action.payload.data}
       console.log(data)
            state.address =data;
        },
        Addressfetch(state,action){
            let data = [...action.payload.data]
       console.log(data,'data of address')
            state.getaddress = data;
        },
        Edit(state,action){
            let data = {...action.payload.data}
          state.getaddress = state.getaddress.map((item)=>{
              if(item.id === data.id)
                 return data;
                 return item;
              
        })
        },
        Delete(state,action){
            let id = action.payload
           state.getaddress = state.getaddress.filter((item) => item.id !== id)
          
        }
    }

});

export const {reducer} = Addressslice;


// create address
export const CreateAddress = (data) => async (dispatch) => {
    try {
          const result =await AddressApi.Createaddress(data);
          if (result){
           await dispatch(Addressslice.actions.Addresscreate(result.data))
          
           console.log(result.data,'result');
           return result.data ;

          }
          return false;
       } catch (error) {
           console.error("Error fetching product:", error.message); 
       
       }
      } 


// fetch address list
      export const fetchAddress = (page=1,limit = 10,filter={}) => async (dispatch) => {
        try {
              const result =await AddressApi.fetchaddress(page,limit,filter)
              if (result){
               await dispatch(Addressslice.actions.Addressfetch(result.data))
             console.log(result,'resultapi');
               return result ;
              }
              return false;
           } catch (error) {
               console.error("Error fetching product:", error.message); 
           
           }
          } 
    
        //   edit address



  export const EditUserAddress = (id,data) => async (dispatch) => {
   
      try {
        const result = await AddressApi.Editaddress(id,data) // ✅ Call the API function
        
    console.log(result,'result')
        if (result.status === 'SUCCESS') {
           await dispatch(Addressslice.actions.Edit(result))
         
          return result;
        }
        return null;
      } catch (error) {
        console.error("Error fetching product:", error.message); // Debugging
        return null;
      }
    };

// Delete Address



export const DeleteUserAddress = (id) => async (dispatch) => {
   
    try {
      const result = await AddressApi.Deleteaddress(id) // ✅ Call the API function
      
 
      if (result.status === 'SUCCESS') {
         await dispatch(Addressslice.actions.Delete(id))
      
      }
    } catch (error) {
      console.error("Error fetching product:", error.message);
      return null;
    }
  };



export default Addressslice;