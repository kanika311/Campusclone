import axios from "axios"




class ProductApi  {


    async getProductList(page,limit,filter){
        try {

            let obj = {
                "query":filter,
                "options": {
                  "collation": "",
                  "sort": {"name":1},
                  "populate": "",
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
            
            const response = await axios.post(`${process.env.REACT_APP_URL}/userapp/product/list`,obj);
            if(response.data.status === 'SUCCESS'){
               return response.data
            }else{
                return false
            }
        } catch (error) {
            console.log(error,'error in register api')
        }
      }
          


      async getproductdetails(id){
        try {
          
          const result=await axios.get(`${process.env.REACT_APP_URL}/userapp/product/get/${id}`);
          if(result.data.status === 'SUCCESS'){
            console.log(result.data.data,'response')
            return result.data
         }else{
             return false
         }
     } catch (error) {
         console.log(error,'error in register api')
     }
      }



}



export const productApi = new ProductApi();