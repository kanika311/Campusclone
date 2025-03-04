import axios from "axios"



class Order {

  async CreateOrder(data) {
    try {
        

        const response = await axios.post(
            `${process.env.REACT_APP_URL}/userapp/order/create`,
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
        console.error("API order Call Error:", error.response ? error.response.data : error.message);
      return false;
    }
}


// orderlist
async OrderList(page = 1, limit = 5, filter = {}) {
    try {
       
        
let obj=
{
    "query": filter,
    "options": {
      "collation": "",
      "sort": {"name":1},
      "populate": [
        { "path": "products.productId" },
        { "path": "products.addressId" }
    ],
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
  const response = await axios.post(`${process.env.REACT_APP_URL}/userapp/order/list`,
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



}



export const OrderApi = new Order();