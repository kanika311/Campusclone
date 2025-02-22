
import { CiDeliveryTruck } from "react-icons/ci";

import { Minus, Plus, Trash } from "lucide-react";
import { Button, Card, CardContent } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchCart } from "../reduxs/slices/Cart";

export default function Cart() {
const dispatch= useDispatch();
const {product}=useSelector((state)=>state.product);
const handleCartProduct=async()=>{
const result =await dispatch(FetchCart());
if(result){
  return true;
}
};
console.log(product,"product detail");
useEffect(()=>{
  handleCartProduct();
},[])
  
       
        
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
  const navigate = useNavigate();
  return (
    <div className="md:my-[30px] my-[70px] mx-[20px]">
      <div className="flex items-center justify-center text-[23px] font-[400] text-black ">
        Shopping cart
      </div>
      <div className="md:flex hidden items-center justify-between  mx-[30px]">
        <div className="flex items-center  text-[14px] text-[#787A7C] ml-[20px] ">Product</div>
        <div className="flex items-center  text-[14px] text-[#787A7C] font-[400] gap-[120px]">
          <span>price</span>
          <span>Quantity</span>
          <span>total</span>
        </div>
      </div>
      {carddata.map((items, index) => (
        <Card className="p-4 mt-[20px]">
          <CardContent className="flex md:flex-row flex-col items-center justify-between gap-4">
            {/* Product Image */}
            <div className="flex ">
              <img src={items.image} alt="Sneaker" className="w-16 h-16 object-cover" />

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-red-500 font-semibold">{items.description}</h3>
                <p className="flex md:hidden text-gray-500 text-sm">{items.color} / {items.size}</p>
                <p className="md:flex hidden  text-gray-500 text-sm">{items.color}</p>

                <p className="md:flex hidden text-gray-500 text-sm"> {items.size}</p>

              </div>

            </div>
            <div className="flex items-center justify-center gap-10">
              <p className="text-gray-700 font-medium">Rs. {items.price}</p>

              {/* Quantity Controls */}
              <div className="block">
                <div className="flex items-center border rounded">
                  <Button>
                    <Minus size={14} />
                  </Button>
                  <span className="px-3">{items.qty}</span>
                  <Button>
                    <Plus size={14} />
                  </Button>
                </div>

                <div className="flex  items-center justify-center gap-4  mt-[4px]">Remove <RxCross2 /></div>
              </div>
              {/* Total */}
              <p className="md:flex hidden text-gray-700 font-medium">Rs. {items.total}</p>

            </div>

          </CardContent>
        </Card>
      ))}
      <div className="flex flex-col items-end justify-end gap-6 mt-[20px]">
        <div className="text-[21px] text-[400] font-[400] text-black">Subtotal: Rs. 6,295.00</div>
        <div className="text-[15px] text-[400] font-[400] text-[#787A7C]">Tax included. Shipping calculated at checkout</div>
        <div className="text-[15px] text-[400] font-[400] flex items-center justify-center gap-4 text-[#787A7C]"><CiDeliveryTruck size={30} />Check delivery at your location</div>
        <div className='flex items-start justify-start gap-4'>

          <input type='number' placeholder='Enter Your Pincode'
            className='border-[1px] border-[#afafaf] w-[200px] h-[46px]  font-[400] p-4 '

          />
          <button className='border-[1px] border-[#404040] w-[80px] h-[46px]  font-[400] bg-[#1c1d45] text-[white] '>Check</button>


        </div>
        < button onClick={() => navigate('/checkouts')} className="bg-[#787a7c] text-[white] h-[47px] w-[200px] hover:bg-[#C16452]">CHECK OUT</button>
        <Link to="/product/newarrival" className="text-[#964233] text-[14px] font-[400]">Continue shopping</Link>

      </div>
    </div>
  );
}
