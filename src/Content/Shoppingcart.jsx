
import { CiDeliveryTruck } from "react-icons/ci";

import { Box, Minus, Plus, Trash } from "lucide-react";
import { Button, Card, CardContent, Dialog, Pagination, Skeleton } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteCartItem, getCartlist, UpdateCartItem } from "../reduxs/slices/Cart";
import Checkout from "./CheckOut";
import { MdOutlineCancel } from "react-icons/md";
;


export default function Cart() {
  
   const [isPopup, setPopup] = useState(false);
   const[skeleton,setSkeleton]=useState(true);
   const [page, setPage] = useState(1);
    const handleDeletePopup = () => {
      setPopup(true);
    }
  

  const navigate = useNavigate();
   //  cartlist
const dispatch= useDispatch();
const {cartList,paginator} = useSelector((state) => state.cart);
const handleCartList=() =>{
try {
  const response = dispatch(getCartlist(page,5, {"isDeleted":false}));
  if (response) {
    console.log("founddata", response);
    setSkeleton(false); // Hide skeleton after data is loaded
  } else {
    console.log("notfound");
    setSkeleton(false); // Hide skeleton even if no data is found
  }
} catch (error) {
  console.log(error, "error in list api");
  setSkeleton(false); // Hide skeleton on error
}
}
console.log(cartList,"cartlist")
useEffect(() => {
  handleCartList();
}, [page]);


// for total value of cart item
const subtotal = cartList?.reduce((acc, item) => {
  if (item && item.products) {
    return acc + item.products.reduce((sum, cart) => sum + (cart?.productId?.price?.mrp || 0) * (cart?.qty || 1), 0);
  }
  return acc;
}, 0);

//checkouts

const handleCheckout = () => {
  navigate('/checkouts', { state: { cartList } }); // Props bhej rahe hain
};


//Delete api

  const handleDeleteCart = async (id) => {
    console.log(id, 'addressid')
    try {
      const result = await dispatch(deleteCartItem(id));
      if (result) {
        console.log(result, 'delete');
       handleCartList();
        return result;
      }
      return false;
    } catch (error) {
      console.error("Error fetching product:", error);
      return false;
    }
  }


  // Update cart
 

  const handleUpdateCart = async (id,userid,productid,qty,change) => {
    console.log(id, 'addressid') 
    const Updatedqty=qty+change;
    try {
      const data = {
        userId:userid,
       

        products: [
          {
            productId: productid, 
            qty: Updatedqty,
          },
        ],
      };
    
      const result = await dispatch(UpdateCartItem(id,data));
      console.log(id, 'addressid');
      console.log(data, 'data');
      if (result) {
        console.log(result, 'update');
        handleCartList();
       
        return result;
      }
      return false;
    } catch (error) {
      console.error("Error fetching product:", error);
      return false;
    } 
  }
// pagination

  const handleChange = (event, value) => {
    setPage(value);
  };

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
     {skeleton? (<div className="grid grid-rows-4 gap-4">
    {Array.from({ length: 3 }).map((_, index) => (
      <Skeleton key={index} variant="rectangular" width="100%" height={150} />
    ))}
  </div>
):(
      <div>
  { cartList.length > 0 && cartList.map((item, index) => (
        <div key={index}>
           { item && item.products.map((cart,index)=>(

        <Card key={index} className="p-4 mt-[20px]">
          <CardContent className="flex md:flex-row flex-col items-center justify-between gap-4">
            {/* Product Image */}
            <div className="flex ">
              <img src={cart?.productId?.image} alt="Sneaker" className="w-16 h-16 object-cover" />

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-red-500 font-semibold">{cart?.productId?.title?.shortTitle}</h3>
                <p className="flex md:hidden text-gray-500 text-sm">black / 6</p>
                <p className="md:flex hidden  text-gray-500 text-sm">black</p>

                <p className="md:flex hidden text-gray-500 text-sm"> 6</p>

              </div>

            </div>
            <div className="flex items-center justify-center gap-10">
              <p className="text-gray-700 font-medium">Rs.{cart?.productId?.price?.mrp} </p>

              {/* Quantity Controls */}
              <div className="block">
                <div className="flex items-center border rounded">
                  <Button>
                    <Minus size={14}  onClick={()=>{
                  console.log(item?.id,cart?.id,cart?.productId?.id,cart?.qty,'id')
                
                  handleUpdateCart(item?.id,cart?.id, cart?.productId?.id,cart?.qty,-1)}}/>
                  </Button>
                  <span className="px-3">{cart?.qty}</span>
                  <Button>
                    <Plus size={14} onClick={()=>{
                      
                  console.log(item?.id,cart?.id,cart?.productId?.id,'id')
                
                  handleUpdateCart(item?.id,cart?.id, cart?.productId?.id,cart?.qty,+1)}} />
                  </Button>
                </div>

                <div onClick={()=>{
                 handleDeletePopup();
                 }} className="flex  items-center justify-center gap-4  mt-[4px]">Remove <RxCross2 /></div>
              </div>
              {/* for delete popup open */}
                 <Dialog open={isPopup} onClose={() => setPopup(false)}>
                              <div className='bg-white w-[400px] h-auto  border-[1px] border-[#d8d1d1] shadow-md'>
                              <div className='flex items-start justify-end p-[4px] text-red-600'><MdOutlineCancel size={30}  onClick={() => { setPopup(false) }}/></div>
                                <div className='flex  flex-col items-center justify-center gap-4  p-[40px]'>
                                 
                                  <div>Are You Sure you want to delete it??</div>
                                  <div className='flex gap-4'>
                                    <button onClick={() => { setPopup(false) }} className='bg-gray-500 text-white p-2 border-2 w-[100px] rounded-[8px]'>Cancel</button>
                                    <button onClick={() => { 
                                      handleDeleteCart(item?.id) 
                                      if(handleDeleteCart){
                                        setPopup(false)}
                                      }} className='bg-red-700 text-white p-2 border-2  w-[100px] rounded-[8px]'>Delete</button>
                                  </div>
              
                                </div>
              
                              </div>
                            </Dialog>
              {/* Total */}
              <p className="md:flex hidden text-gray-700 font-medium">Rs. {( (cart?.qty || 0) * (cart?.productId?.price?.mrp || 0) ).toFixed(2)} </p>

            </div>

          </CardContent>
        </Card>
           ))}
        </div>
        
      ))
 }
      </div>
     )}
    
      <div className="flex flex-col items-end justify-end gap-6 mt-[20px]">
        <div className="text-[21px] text-[400] font-[400] text-black">Subtotal: Rs. {subtotal.toFixed(2)}</div>
        <div className="text-[15px] text-[400] font-[400] text-[#787A7C]">Tax included. Shipping calculated at checkout</div>
        <div className="text-[15px] text-[400] font-[400] flex items-center justify-center gap-4 text-[#787A7C]"><CiDeliveryTruck size={30} />Check delivery at your location</div>
        <div className='flex items-start justify-start gap-4'>

          <input type='number' placeholder='Enter Your Pincode'
            className='border-[1px] border-[#afafaf] w-[200px] h-[46px]  font-[400] p-4 '

          />
          <button className='border-[1px] border-[#404040] w-[80px] h-[46px]  font-[400] bg-[#1c1d45] text-[white] '>Check</button>


        </div>
      
      <button onClick={handleCheckout} className="bg-[#787a7c] text-white h-[47px] w-[200px] hover:bg-[#C16452]">
        CHECK OUT
      </button>
  
        <Link to="/product/newarrival" className="text-[#964233] text-[14px] font-[400]">Continue shopping</Link>

      </div>
      <div className=" flex items-center justify-center">
    


          <Pagination count={paginator?.pageCount
          } page={page}

            onChange={handleChange} />
      

      </div>
    </div>
  );
}
