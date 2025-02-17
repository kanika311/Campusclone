import { Button, Card, CardContent } from '@mui/material'
import { Minus, Plus } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Orders = () => {
    const carddata = [
        {
          id: 1,
          description: "Raasile White Women Sneakers",
          price: "1899",
          image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570",
          color: "white",
          size: "6",
          qty: '1',
          total: "1234"
        },
        {
          id: 1,
          description: "Raasile White Women Sneakers",
          price: "1899",
          image: "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/KIZER_22G-215_BLU-RED_2.jpg?v=1738849570",
          color: "white",
          size: "6",
          qty: '1',
          total: "1234"
        },
      ]

     const navigate=useNavigate();
  return (
    <div>
         {carddata.map((items)=>(
              <Card onClick={()=>{navigate('/Orderdetails')}} className="p-4 mt-[20px]">
              <CardContent className="flex md:flex-row flex-col items-center justify-between gap-4">
                {/* Product Image */}
                <div className="flex ">
                  <img src={items.image} alt="Sneaker" className="w-16 h-16 object-cover" />
    
                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-[black] font-semibold">{items.description}</h3>
                    <p className="flex md:hidden text-gray-500 text-sm">{items.color} / {items.size}</p>
                    <p className="md:flex hidden  text-gray-500 text-sm">{items.color}</p>
    
                    <p className="md:flex hidden text-gray-500 text-sm"> {items.size}</p>
    
                  </div>
    
                </div>
                <div className="flex items-center justify-center gap-[60px]">
                  <p className="text-gray-700 font-medium">Rs. {items.price}</p>
    
          <div className='flex flex-col items-center justify-center gap-2'>
            <div>Expected date</div>
            <div>11-02-24</div>
            </div>
                </div>
    
              </CardContent>
            </Card>
         ))}
        
    </div>
  )
}

export default Orders