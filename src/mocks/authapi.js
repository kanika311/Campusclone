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
  
  
 async UpdateUser (id,data){
    try {
      console.log(`${process.env.REACT_APP_URL}/userapp/user/update/${id}`);
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/userapp/user/update/${id}`,
        data,
        {
          headers: {
         'Authorization':`Bearer ${localStorage.getItem('token')}`
         
          },
        

        }
      );
      
  
      if (response.data.status === 'SUCCESS') {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error updating user:', error);
      return false; 
    }
  };


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
  // FORGET PASSWORD
  async forgetPassword(data){
    try {
      console.log(`${process.env.REACT_APP_URL}/userapp/auth/reset-password-otp`,"api");
      const response=await axios.post(`${process.env.REACT_APP_URL}/userapp/auth/reset-password-otp`,data)
      if(response.data.status==='SUCCESS'){
        return response.data
      }
      else{
        return false;
      }
      
    } catch (error) {
      console.log(error,"error in forget api")
      
    }
  }
  //Resetpassowrd
  async ResetPassword(data){
    try {
   
      const response=await axios.put(`${process.env.REACT_APP_URL}/userapp/auth/reset-password`,data)
      if(response.data.status==='SUCCESS'){
        return response.data
      }
      else{
        return false;
      }
      
    } catch (error) {
      console.log(error,"error in rest password api")
      
    }
  }




}



export const authApi = new AuthApi();