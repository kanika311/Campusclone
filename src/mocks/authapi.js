import axios from "axios"



class AuthApi  {


  async getUser(){
    try{
      const response =await axios.get(`${process.env.REACT_APP_URL}/userapp/user/me`,{
          headers:{
              'Authorization':`Bearer ${localStorage.getItem('token')}`
          }
      });
      if(response){
          return response
      }
      else{
          return false 
      }
          }
          catch(error){
              console.log(error,'error in api call')
      
          }
  }

// async updateUser(){
// //   try {
// //     const response =await axios.Update(`${process.env.REACT_APP_URL}`,data)
// //     if(response.data.status === 'SUCCESS'){
// //       return response.data
// //    }else{
// //        return false
// //    }
// //   } catch (error) {
// //     console.log(error,'error in register api')
// //   }
// // }


  async register(data){
    try {
        
        const response = await axios.post(`${process.env.REACT_APP_URL}/userapp/auth/register`,data);
        if(response.data.status === 'SUCCESS'){
           return response.data
        }else{
            return false
        }
    } catch (error) {
        console.log(error,'error in register api')
    }
  }
  async login(data){
    try {
      const response=await axios.post(`${process.env.REACT_APP_URL}/userapp/auth/login`,data)
      if(response.data.status==='SUCCESS'){
        return response.data
      }
      else{
        return false;
      }
      
    } catch (error) {
      console.log(error,"error in login api")
      
    }
  }




}



export const authApi = new AuthApi();