import axios from "axios"




class Cart {
  


    async createCart(data,navigate){
       
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/account");
                alert("please Login first")
               
                return;
            }
    
            
            const response = await axios.post(`${process.env.REACT_APP_URL}/userapp/cart/create`,data,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`, 
                        "Content-Type": "application/json"
                    }
                }
            

            );
            if(response.data.status === 'SUCCESS'){
                console.log("return")
               return response.data
            }else{
                return false
            }
        } catch (error) {
            console.log(error,'error in createCart api')
        }
      }


    //   Get cart list
    async getCartList(page,limit,filter){
        try {
            let obj={
                "query": filter,
  "options": {
    "collation": "",
    "sort": {"name":1},
    "populate": "products.productId",
    "projection": "",
    "lean": false,
    "leanWithId": true,
    "page": page,
    "limit": limit,
    "pagination": true,
    "useEstimatedCount": false,
    "useCustomCountFn": false,
    "forceCountFn": false,
    "read": {},
    "options": {}
  },
  "isCountOnly": false
            }

        
            
            const response = await axios.post(`${process.env.REACT_APP_URL}/userapp/cart/list`,obj,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`, 
                        "Content-Type": "application/json"
                    }
                }
            

            );
            if(response.data.status === 'SUCCESS'){
                console.log("return")
               return response.data
            }else{
                return false
            }
        } catch (error) {
            console.log(error,'error in getcartlist api')
        }
      }
     
     
     
      // delete cart
      async deleteCart(id){
        try {
          
          
          const result=await axios.delete(`${process.env.REACT_APP_URL}/userapp/cart/delete/${id}`,
    
            {
             
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
          );
          if(result.data.status === 'SUCCESS'){
         
            return result.data
         }else{
             return false
         }
     } catch (error) {
         console.log(error,'error in delete api')
     }
      }
    
   


    //   Update cart

    async UpdateCart(id,data){
        try {
          
          
          const result=await axios.put(`${process.env.REACT_APP_URL}/userapp/cart/update/${id}`,data,
    
            {
             
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
          );
          if(result.data.status === 'SUCCESS'){
         
            return result.data
         }else{
             return false
         }
     } catch (error) {
         console.log(error,'error in update api')
     }
      }

         //soft delete cart
         async softDeleteCart(ids) {
            try {
           
           
        
              const result = await axios.delete(`${process.env.REACT_APP_URL}/userapp/cart/soft-delete`, {
                data: ids,
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
              });
          
              console.log("API Response:", result.data);
          
              if (result.data.status === 'SUCCESS') {
                return result.data;
              } else {
                console.warn("Soft delete failed:", result.data);
                return false;
              }
            } catch (error) {
              console.error("Error in soft delete API:", error.response?.data || error.message);
              return false;
            }
          }

          // chat
          async chat(data) {
            try {
                const response = await axios.post(
                    'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDWV-ItYRaPUJfhXjiEgm7XxU2hITz3Lys',
                    data
                );
        
                console.log("🔵 Full API Response:", response.data);
        
                // Directly return response data if it exists
                if (response.data && response.data.candidates) {
                    return response.data;
                } else {
                   
                    return false; 
                }
        
            } catch (error) {
              
                return false;
            }
        }
        
          
    
}




export const CartApi = new Cart();