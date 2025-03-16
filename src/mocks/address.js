import axios from "axios"



class Address {

  async Createaddress(data) {
    try {
        

        const response = await axios.post(
            `${process.env.REACT_APP_URL}/userapp/address/create`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            }
        );

        console.log("API Response:", response.data);
        if (response.data.status === 'SUCCESS') {
            return response.data;
         
        } else {
            return false;
        }
    } catch (error) {
        console.error("API Call Error:", error.response ? error.response.data : error.message);
      return false;
    }
}
// list address

async fetchaddress() {
    try {
        console.log(`${process.env.REACT_APP_URL}/userapp/address/list`);
        
let obj=
{
    "query": {
  
      
    },
    "options": {
      "collation": "",
      "sort": {"name":1},
      "populate": "",
      "projection": "",
      "lean": false,
      "leanWithId": true,
      "page": 1,
      "limit": 5,
      "pagination": true,
      "useEstimatedCount": false,
      "useCustomCountFn": false,
      "forceCountFn": false,
      "read": {},
      "options": {}
    },
    "isCountOnly": false
  }
  const response = await axios.post(
    `${process.env.REACT_APP_URL}/userapp/address/list`,
    obj ,
    {
         
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }
);

        console.log("API Response:", response.data);
        if (response.data.status === 'SUCCESS') {
            return response.data;
           
         
        } else {
            return false;
        }
    } catch (error) {
        console.error("API Call Error:", error.response ? error.response.data : error.message);
      return false;
    }
}

// address Update

async Editaddress(id,data){
    try {
        
      
      const result=await axios.put(`${process.env.REACT_APP_URL}/userapp/address/update/${id}`,
data,
        {
         
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
      );
      if(result.data.status === 'SUCCESS'){
        console.log(result.data.data,'response')
        return result.data
     }else{
         return false
     }
 } catch (error) {
     console.log(error,'error in edit api')
 }
  }
//   Delete address
async Deleteaddress(id){
    try {
       
      
      const result=await axios.delete(`${process.env.REACT_APP_URL}/userapp/address/delete/${id}`,

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




}



export const AddressApi = new Address();