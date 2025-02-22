import axios from "axios"



class Cart {


    async getCartList(){
        try {

            let obj = {
                "userId":"",
                "products":[
                    {
                        "productId": "",
                        "qty": ""
                    }
                 ]
            }
            
            const response = await axios.post(`${process.env.REACT_APP_URL}/userapp/cart`,obj);
            if(response.data.status === 'SUCCESS'){
               return response.data
            }else{
                return false
            }
        } catch (error) {
            console.log(error,'error in register api')
        }
      }



}



export const CartApi = new Cart();