import { Button, Card, CardContent } from '@mui/material'
import { Minus, Plus } from 'lucide-react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchOrderList } from '../reduxs/slices/Order';
import { useDispatch, useSelector } from 'react-redux';
const Orders = () => {
 

     const navigate=useNavigate();


 const dispatch=useDispatch();
      const {OrderList} = useSelector((state) => state.order);
           const handleOrderList=async() =>{
           try {
             const response =await dispatch(fetchOrderList(1,20,{}));
             if(response){
               console.log("founddata",response)
           return response;
           
             }
             else{
               console.log("notfound")
             }
           } catch (error) {
             console.log(error,"error in order list api")
            return error; 
           }
           }
     
           useEffect(() => {
             handleOrderList();
           }, []);
           console.log("Updated Order OrderList:", OrderList);
         
       
  return (
    <div>
         {OrderList.map((items,index)=>(
          <div key={index}>
            {items?.products?.map((order,index)=>(
              <Card key={order?.id||index}   onClick={() => navigate(`/Orderdetails/${order?.id}`)} className="p-4 mt-[20px]">
              <CardContent className="flex md:flex-row flex-col items-center justify-between gap-4">
                {/* Product Image */}
                <div className="flex ">
                  <img src={order?.productId?.image} alt="Sneaker" className="w-[60px] h[60px] object-cover" />
    
                  {/* Product Info */}
                  <div className="flex-1 ml-[10px]">
                    <h3 className="text-[black] font-semibold">{order?.productId?.title?.shortTitle}</h3>
                    <span className="text-[black] font-semibold">Qty:{order?.qty}</span>
      
    
                  </div>
    
                </div>
                <div className="flex items-center justify-center gap-[60px]">
                  <p className="text-gray-700 font-medium">Rs. {( (order?.qty || 0) * (order?.productId?.price?.mrp || 0) ).toFixed(2)}</p>
                 
    
          <div className='flex flex-col items-center justify-center gap-2'>
            <div>Expected date</div>
            <div>11-02-24</div>
            </div>
                </div>
    
              </CardContent>
            </Card>
            ))}
              
            </div>
         ))}
        
    </div>
  )
}

export default Orders