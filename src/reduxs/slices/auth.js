import { authApi } from "../../mocks/authapi";
import {Slice, createSlice} from "@reduxjs/toolkit";
const initialState = {
    user:{},
    loading:false,
}


const slice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        getUser(state,action){
            let data = {...action.payload.data.data}
            console.log(data)
         state.user = data
        },
        updateUser(state,action){
            let data = action.payload.data
        state.user = {...state.user, ...data}
        },
       

    }

});

export const {reducer} = slice

export const getUser = () => async (dispatch) =>{

    try {
        
        const result = await authApi.getUser();
        if(result){
            await dispatch(slice.actions.getUser(result))
            return true
        }
        return false
    } catch (error) {
        console.log(error)
    }
}

// export const updateUser = (data,id)=> async (dispatch) =>{
//     console.log(data)
//     // const result = await authApi.updateUser(data,id);
//     console.log(result)
//     if(result){
//         await dispatch(slice.actions.updateUser(result))
//         return true
//     }
//     return false
    
// }









export default slice;