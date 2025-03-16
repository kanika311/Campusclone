import React, { useEffect, useState } from 'react'
import campuslogo from '../assets/campuslogo.avif';
import { MdDelete, MdDeleteOutline, MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineCancel, MdOutlineShoppingBag } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import '../Component/Swiper.css'
import { useDispatch, useSelector } from 'react-redux';
import { CreateAddress, DeleteUserAddress, EditUserAddress, fetchAddress } from '../reduxs/slices/Address';

import { useFormik } from 'formik';
import { editValidation, UserValidation } from './SignUp/SignupValidation';
import { createOrder } from '../reduxs/slices/Order';
import { Dialog } from '@mui/material';
import { getCartlist, softDeleteItem } from '../reduxs/slices/Cart';
import { CiEdit, CiLocationOn } from 'react-icons/ci';

const Checkout = () => {
  const location = useLocation();
  const [form, setForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();
  const [editData, setEditData] = useState(null);
const[myOrder,SetMyorder]=useState(false)
  const dispatch = useDispatch();
  const cartList = location.state?.cartList || [];
   const [isPopup, setPopup] = useState(false);

   const handleDeltePopup = () => {
     setPopup(true);
   }
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  // for total cart item
  const subtotal = cartList?.reduce((acc, item) => {
    if (item && item.products) {
      return acc + item.products.reduce((sum, cart) => sum + (cart?.productId?.price?.mrp || 0) * (cart?.qty || 0), 0);
    }
    return acc;
  }, 0);
  //   craete address
  const { address } = useSelector((state) => state.addressauth)

  const [locationData, setLocationData] = useState({
    locality: "",
    city: "",
    country: "India",
    zipcode: "",
  });
  
  const initialValues = {
    email: "",
    name: "",
    lastName: "",
    locality: locationData.locality,
    city: locationData.city,
    country: locationData.country,
    zipcode: locationData.zipcode,
    phone: "",
  };
  const formik = useFormik({
    initialValues,

    validationSchema: UserValidation,
    onSubmit: async (data) => {

      try {

        const result = await dispatch(CreateAddress(data));

        if (result) {
          console.log('user address successfully added', result);
          handleAddressList();

          setForm(false);
        } else {
          alert('Failed to update useraddress');

        }
      } catch (error) {
        console.error('Update error:', error);
      }
    },


  });



  //   getaddress

  const { getaddress } = useSelector((state) => state.addressauth)

  const handleAddressList = async () => {
    try {
      const result = await dispatch(fetchAddress(1, 10, {}));
      if (result) {

        return result;
      }
      return false;
    } catch (error) {
      console.error("Error fetching product:", error);
      return false;
    }

  }
  console.log(getaddress, 'AddressList')

  useEffect(() => {
    handleAddressList();

  }, [dispatch]);

 
  // update address api

  const editFormik = useFormik({
    enableReinitialize: true,
    initialValues: editData || {
      name: '',
      lastName: '',
      locality: '',
      city: '',
      country: '',
      zipcode: '',
      phone: '',
    },
    validationSchema: editValidation,
    onSubmit: async (values) => {
      try {
        if (editData?.id) {
          const result = await dispatch(EditUserAddress(editData.id, values));
          if (result) {
            setEdit(false);
            dispatch(fetchAddress(1, 10, {}));
          }

        }
      } catch (error) {
        console.error('Error updating address:', error);
      }
    },
  });
  // order api
  
  const { Order } = useSelector((state) => state.order);


  const { user } = useSelector((state) => state.auth);



  console.log(selectedAddress,"addressid")

  const handleOrder = async () => {
    let products = (cartList || []).map((items, outerIndex) => {
      return{
        productId: items?.products[0]?.productId,
        qty: items?.products[0]?.qty,
        addressId:selectedAddress
      }
    
     
    });
  console.log(products,"productdetail")

    try {
      if (!selectedAddress) {
        alert("Please select an address before placing the order.");

      }




      const data = {
        userId: user?.id,
        products,
        
        status: "pending"
      };
      const response = await dispatch(createOrder(data));
      if (response) {
        console.log(response, 'response')
SetMyorder(true);
        return true;

      }
      else {
        return false;
      }
    } catch (error) {
      console.error("Error product adding in cart:", error);
      return false;
    }



  }

  useEffect(() => {

    console.log(Order, "order data");
  }, [dispatch]);
  useEffect(() => {
    setSelectedAddress(getaddress[0]?.id);
  }, [getaddress]); 

  // softdelete

  console.log(cartList,"list")
  const handleSoftDelete = async () => {
    const payload = { ids: cartList.map((item) => item?.id) }; 
   

    try {
        const response = await dispatch(softDeleteItem(payload)); 
        if (response) {
            console.log(response, "✅ Deleted Successfully");
            return response;
        }
        return false;
    } catch (error) {
        console.log(error, "❌ Error in soft delete API");
    }
};
// Delete address
  const handleDeleteAddress = async (id) => {
    console.log(id, 'addressid')
    try {
      const result = await dispatch(DeleteUserAddress(id));
      if (result) {
        console.log(result, 'delete');
        handleAddressList();
        return result;
      }
      return false;
    } catch (error) {
      console.error("Error fetching product:", error);
      return false;
    }
  }
// current location
const handleCurrentlocation=async()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
     async (position)=>{
        console.log(position,"current position")
        console.log(position.coords.longitude,"longitude")
        console.log(position.coords.latitude,"latitude")
        try {
          const response = await fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=9c59c650c372444cb8485f97cc1091a0`
          );
          const data = await response.json();
          
          if (data && data.features.length > 0) {
            const locationDetails = data.features[0].properties;
            console.log(locationDetails, "📍 Geolocation Address");

            setLocationData({
              locality: locationDetails.address_line1 || "",
              city: locationDetails.city || "",
              country: locationDetails.country || "India",
              zipcode: locationDetails.postcode || "",
            });

          
           
          }
        } catch (error) {
          console.log(error, "❌ Error Fetching Address");
        }
      },
      (error)=>{
        console.log(error,"error ")
      }
    );
  }

}
useEffect(() => {
  formik.setValues({
    ...formik.values,
    locality: locationData.locality,
    city: locationData.city,
    country: locationData.country,
    zipcode: locationData.zipcode,
  });
}, [locationData]);


  return (
    <div className='flex flex-col  h-screen'>

      <div className="flex items-center justify-between mx-[30px] p-6 ">

        <img className="w-[90px] md:w-[180px]" src={campuslogo} alt="Campus Logo" />
        <MdOutlineShoppingBag size={30} onClick={() => navigate('/cart')} />
      </div>
      <div className=" block md:hidden w-full">
        {/* Order Overview Header */}
        <div
          className="h-auto p-6 w-full bg-[#dedede] flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center justify-start gap-4 text-black text-lg font-medium">
            Order Overview {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
          <span className="font-semibold">Rs. 62,897</span>
        </div>

        {/* Dropdown Content */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-[#dedede] "
        >
          <div className='flex flex-col items-start gap-4  mt-[10px]'>
            {cartList && (cartList || [])?.map((items, index) => (
              <div key={index} className='w-[100%]' >
                {(items.products || [])?.map((cartitem, index) => (


                  <div key={index} className="flex items-center justify-center gap-4  ml-[20px] mr-[40px]">

                    <div className="flex   ">
                      <img className=' w-[85px]' src={cartitem.productId.image} alt="image"></img>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start text-[#787A7C]  text-[14px] font-[400] flex-1">
                      <span className='text-black  '>{cartitem.productId.title.shortTitle}</span>
                      <span>blue</span>
                      <span>6</span>
                      <span> Qty:{cartitem?.qty}</span>
                      <span className='md:hidden block'>Rs. {((cartitem?.qty || 0) * (cartitem?.productId?.price?.mrp || 0)).toFixed(2)}</span>
                    </div>
                    <span className='flex items-center justify-center text-[14px] text-[black] font-[400]'>Rs.{((cartitem?.qty || 0) * (cartitem?.productId?.price?.mrp || 0)).toFixed(2)}</span>
                  </div>



                ))}

              </div>

            ))}
            <div className='w-[100%] flex flex-col  gap-4 mt-[20px]'>
              <div className='flex items-center justify-between'>
                <span>Subtotal  </span>
                <span>₹ {(subtotal || 0).toFixed(2)}</span>

              </div>
              <div className='flex items-center justify-between'>
                <span>Shipping

                </span>
                <span>Enter shipping address</span>

              </div>

              <div className='flex items-center justify-between'>

                <div className="flex flex-col gap-2">
                  <span>Total

                  </span>
                  Tax Included

                </div>
                <span>
                  INR
                  ₹ {(subtotal || 0).toFixed(2)}</span>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex items-center justify-between border-t-[1px]  " />

      <div className='grid grid-cols-12 w-[100%] h-[100%]'>

        <div className='md:col-span-6 col-span-12 m-10 overflow-y-auto no-scrollbar h-screen '>
          <button onClick={() => { setForm(true) }} className='w-[207px] h-[46px] border-[1px] border-black text-black bg-white hover:text-white hover:bg-black mb-[10px]'>ADD A NEW ADDRESS</button>

          <div>

            {form && (
              <form onSubmit={formik.handleSubmit} className='flex flex-col w-full gap-4'>
                <div className='text-black text-[19px]'>ADD A NEW ADDRESS</div>
                <div className='flex flex-col gap-2 w-full'>
                <button
  type="submit"
  onClick={() => {
    handleCurrentlocation()
    console.log(formik.errors, "error");
    console.log(address, "address");
  }}
  className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 active:scale-95 transition-all duration-300 shadow-lg text-white h-[50px] w-[250px]  flex items-center justify-center gap-[10px] rounded-[10px] font-[400] "
>
  <CiLocationOn size={24} /> Use Current Location
</button>
                  <label className='text-[14px] text-[#787A7C] font-[400]'>First Name</label>
                  <input id="filled-basic" placeholder='First Name' value={formik.values.name} name="name" onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm">{formik.errors.name}</p>
                  )}
                </div>
                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-[14px] text-[#787A7C] font-[400]'>Last Name</label>
                  <input id="filled-basic" placeholder='Last Name' name="lastName" value={formik.values.lastName} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-red-500 text-sm">{formik.errors.lastName}</p>
                  )}
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-[14px] text-[#787A7C] font-[400]'>Address</label>
                  <input id="filled-basic" placeholder='Address1' name="locality" value={formik.values.locality} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                  {formik.touched.locality && formik.errors.locality && (
                    <p className="text-red-500 text-sm">{formik.errors.locality}</p>
                  )}
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-[14px] text-[#787A7C] font-[400]'>City</label>
                  <input id="filled-basic" placeholder='City' name="city" value={formik.values.city} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                  {formik.touched.city && formik.errors.city && (
                    <p className="text-red-500 text-sm">{formik.errors.city}</p>
                  )}
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-[14px] text-[#787A7C] font-[400]'>Country</label>
                  <input id="filled-basic" placeholder='Country' name="country" value={formik.values.country} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                  {formik.touched.country && formik.errors.country && (
                    <p className="text-red-500 text-sm">{formik.errors.country}</p>
                  )}
                </div>


                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-[14px] text-[#787A7C] font-[400]'>Postal/Zipcode</label>
                  <input id="filled-basic" name="zipcode" value={formik.values.zipcode} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                  {formik.touched.zipcode && formik.errors.zipcode && (
                    <p className="text-red-500 text-sm">{formik.errors.zipcode}</p>
                  )}
                </div>

                <div className='flex flex-col gap-2 w-full'>
                  <label className='text-[14px] text-[#787A7C] font-[400]'>Phone</label>
                  <input id="filled-basic" name='phone' value={formik.values.phone} onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                  )}
                </div>
                <div className='flex  gap-2'>
                  <input id="filled-basic" type='checkbox'
                    className=' border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2 cursor-pointer' />
                  <span>Set as default address</span>
                </div>

       

              <div className='flex items-center justify-start gap-10'>
              <button type="submit"
                  onClick={() => {
                    console.log(formik.errors, "error")
                    console.log(address, 'address')
                  }} className='bg-black h-[47px] w-[150px] text-white'>Add Address</button>
          <button onClick={() => { setForm(false) }} className='text-[white] text-[18px] font-[400]  bg-[#964233]  h-[47px] w-[150px]'>cancel</button>
          </div>
              </form>
            )}


          </div>
          {/* /to re render address */}
          <div className='flex flex-col items-center justify-center gap-4 mt-[20px]'>
            {Array.isArray(getaddress) && getaddress.length > 0 ? (
              getaddress.map((item) => (
                <div key={item?.id} className="w-full p-4 border border-gray-300 rounded flex items-center justify-between gap-2">
                  {/* Radio Button to Select Address */}
                  <input
                    type="radio"
                    name="selectedAddress"
                    value={item?.id}
                    checked={selectedAddress === item?.id}
                    onChange={() => setSelectedAddress(item?.id)}
                    className="cursor-pointer"
                  />

                  {/* Address Details */}
                  <div className='flex flex-col items-start justify-start text-[16px] font-[400]'>
                    <p className='font-bold'>{item?.name} {item?.lastName} {item?.phone}</p>
                    <p>{item?.locality}, {item?.city}, {item?.country}, {item?.zipcode}</p>
                  </div>

                  {/* Change Button */}
                  <div className='flex justify-end items-start gap-4 cursor-pointer'>
                    
                    <CiEdit size={25} onClick={() => { setEdit(!edit); setEditData(item); }} />

                  <MdDeleteOutline size={25} onClick={() => {
                                 handleDeltePopup();
                               }}
                               />
                               <Dialog open={isPopup} onClose={() => setPopup(false)}>
                                 <div className='bg-white w-[400px] h-auto  border-[1px] border-[#d8d1d1] shadow-md'>
                                 <div className='flex items-start justify-end p-[4px] text-red-600'><MdOutlineCancel size={30}  onClick={() => { setPopup(false) }}/></div>
                                   <div className='flex  flex-col items-center justify-center gap-4  p-[60px]'>
                                    
                                     <div>Are You Sure you want to delete it??</div>
                                     <div className='flex gap-4'>
                                       <button onClick={() => { setPopup(false) }} className='bg-gray-500 text-white p-2 border-2 w-[100px] rounded-[8px]'>Cancel</button>
                                       <button onClick={() => { handleDeleteAddress(item?.id); setPopup(false) }} className='bg-red-700 text-white p-2 border-2  w-[100px] rounded-[8px]'>Delete</button>
                                     </div>
                 
                                   </div>
                 
                                 </div>
                               </Dialog>
                  </div>
                </div>
              ))
            ) : (
              <p>No address found.</p>
            )}
          </div>



          {/* edit form */}
          {edit && (
            <form onSubmit={editFormik.handleSubmit} className="flex flex-col w-full gap-4">
              <h3 className="text-black text-[19px]">Edit Address</h3>
              <div>
                <label className='text-[14px] text-[#787A7C] font-[400]'>First Name</label>
                <input id="filled-basic" placeholder='First Name' value={editFormik.values.name} name="name" onChange={editFormik.handleChange}
                  onBlur={editFormik.handleBlur}
                  className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                {editFormik.touched.name && editFormik.errors.name && (
                  <p className="text-red-500 text-sm">{editFormik.errors.name}</p>
                )}
              </div>
              <div className='flex flex-col gap-2 w-full'>
                <label className='text-[14px] text-[#787A7C] font-[400]'>Last Name</label>
                <input id="filled-basic" placeholder='Last Name' name="lastName" value={editFormik.values.lastName} onChange={editFormik.handleChange}
                  onBlur={editFormik.handleBlur}
                  className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                {editFormik.touched.lastName && editFormik.errors.lastName && (
                  <p className="text-red-500 text-sm">{editFormik.errors.lastName}</p>
                )}
              </div>

              <div className='flex flex-col gap-2 w-full'>
                <label className='text-[14px] text-[#787A7C] font-[400]'>Address</label>
                <input id="filled-basic" placeholder='Address1' name="locality" value={editFormik.values.locality} onChange={editFormik.handleChange}
                  onBlur={editFormik.handleBlur}
                  className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                {editFormik.touched.locality && editFormik.errors.locality && (
                  <p className="text-red-500 text-sm">{editFormik.errors.locality}</p>
                )}
              </div>

              <div className='flex flex-col gap-2 w-full'>
                <label className='text-[14px] text-[#787A7C] font-[400]'>City</label>
                <input id="filled-basic" placeholder='City' name="city" value={editFormik.values.city} onChange={editFormik.handleChange}
                  onBlur={editFormik.handleBlur}
                  className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                {editFormik.touched.city && editFormik.errors.city && (
                  <p className="text-red-500 text-sm">{editFormik.errors.city}</p>
                )}
              </div>

              <div className='flex flex-col gap-2 w-full'>
                <label className='text-[14px] text-[#787A7C] font-[400]'>Country</label>
                <input id="filled-basic" placeholder='Country' name="country" value={editFormik.values.country} onChange={editFormik.handleChange}
                  onBlur={editFormik.handleBlur}
                  className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                {editFormik.touched.country && editFormik.errors.country && (
                  <p className="text-red-500 text-sm">{editFormik.errors.country}</p>
                )}
              </div>


              <div className='flex flex-col gap-2 w-full'>
                <label className='text-[14px] text-[#787A7C] font-[400]'>Postal/Zipcode</label>
                <input id="filled-basic" name="zipcode" value={editFormik.values.zipcode} onChange={editFormik.handleChange}
                  onBlur={editFormik.handleBlur}
                  className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                {editFormik.touched.zipcode && editFormik.errors.zipcode && (
                  <p className="text-red-500 text-sm">{editFormik.errors.zipcode}</p>
                )}
              </div>

              <div className='flex flex-col gap-2 w-full'>
                <label className='text-[14px] text-[#787A7C] font-[400]'>Phone</label>
                <input id="filled-basic" name='phone' value={editFormik.values.phone} onChange={editFormik.handleChange}
                  onBlur={editFormik.handleBlur}
                  className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                {editFormik.touched.phone && editFormik.errors.phone && (
                  <p className="text-red-500 text-sm">{editFormik.errors.phone}</p>
                )}
              </div>
              <div className='flex  gap-2'>
                <input id="filled-basic" type='checkbox'
                  className=' border-[1px] border-[#d8d1d1]  hover:border-black rounded-[2px] p-2' />
                <span>Set as default address</span>
              </div>
              <div className='flex items-center justify-start gap-10'>
              <button type="button"
                onClick={() => {

                  editFormik.handleSubmit();
                  setForm(false);
                }}
                className="bg-black h-[47px] w-[150px] text-white">
                Update Address
              </button>
              
              <button type="button"
               className='text-[white] text-[18px] font-[400]  bg-[#964233]  h-[47px] w-[150px]'
                onClick={() =>
                  setEdit(false)} >
                Cancel
              </button>
              </div>
            </form>
          )}


          <div>
            <h1 className='text-black text-[21px] font-[600] mt-[20px]'>Payment</h1>
            <span className='text-[14px] font-[400] text-[#707070]'>All transactions are secure and encrypted.</span>
            <button className='w-[100%] h-[51px] border-[1px] hover:border-black rounded-[2px] p-2 flex items-center justify-start gap-2'>
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
              />
              Cash on delivery
            </button>

            <button className='w-[100%] h-[51px] border-[1px] hover:border-black rounded-[2px] p-2 flex items-center justify-start gap-2'>
              <input
                type="radio"
                name="paymentMethod"
                value="online"
              />
              Online Payment   <button className='w-[100px] h-auto p-[6px] border-[1px] bg-black  text-white rounded-[6px] hover:bg-[gray] hover:text-black ml-[320px]'>

                PAY NOW
              </button>
            </button>
            <button onClick={()=>{handleOrder();
              handleSoftDelete()
            }} className='w-[100%] h-[51px] border-[1px] bg-black  text-white rounded-[2px] mt-[20px] mb-[30px] hover:bg-[gray] hover:text-black font-[400]'>

              ORDER
            </button>
           

            <Dialog open={myOrder} onClose={() => SetMyorder(false)}>
      <div className="bg-white w-[380px] rounded-lg shadow-xl border border-gray-300">
        {/* Close Button */}
        <div className="flex items-center justify-end p-3">
          <MdOutlineCancel
            size={28}
            className="text-gray-500 hover:text-red-600 cursor-pointer transition"
            onClick={() => SetMyorder(false)}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <h2 className="text-lg font-semibold text-gray-800">
            🎉 Your Order is Confirmed!
          </h2>
          <p className="text-gray-600 text-sm text-center">
            Thank you for your purchase. You can See your orders or continue shopping.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 w-full">
            <button
              onClick={() => navigate("/profile")}
              className="flex-1 bg-gray-600 text-white py-2 rounded-lg text-sm transition hover:bg-gray-700"
            >
              Visit Orders
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex-1 bg-red-600 text-white py-2 rounded-lg text-sm transition hover:bg-red-700"
            >
              Keep Shopping
            </button>
          </div>
        </div>
      </div>
    

      </Dialog>
        
          </div>

        



        </div>

        <div className="col-span-6 bg-[#f5f5f5]   w-full top-0 border-l-[1px] overflow-y-auto no-scrollbar h-auto p-[40px] md:block hidden ">

          <div className='flex flex-col items-start gap-4 '>
            {(cartList || []).map((items, index) => (
              <div key={index} className='w-[100%]' >
                {(items.products || []).map((cartitem, index) => (


                  <div key={index} className="flex items-center justify-center gap-4  ml-[20px] mr-[40px]">

                    <div className="flex   ">
                      <img className=' w-[85px]' src={cartitem.productId.image} alt="image"></img>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start text-[#787A7C]  text-[14px] font-[400] flex-1">
                      <span className='text-black  '>{cartitem.productId.title.shortTitle}</span>

                      <span>6</span>
                      <span> Qty:{cartitem?.qty}</span>
                      <span className='md:hidden block'>Rs.{((cartitem?.qty || 0) * (cartitem?.productId?.price?.mrp || 0)).toFixed(2)}</span>
                    </div>
                    <span className='flex items-center justify-center text-[14px] text-[black] font-[400]'>Rs. {((cartitem?.qty || 0) * (cartitem?.productId?.price?.mrp || 0)).toFixed(2)}</span>
                  </div>



                ))}

              </div>

            ))}
            <div className='w-[100%] flex flex-col  gap-4 mt-[20px]'>
              <div className='flex items-center justify-between'>
                <span>Subtotal </span>
                <span> Rs.{(subtotal || 0).toFixed(2)}</span>

              </div>
              <div className='flex items-center justify-between'>
                <span>Shipping

                </span>
                <span>Enter shipping address</span>

              </div>

              <div className='flex items-center justify-between'>

                <div className="flex flex-col gap-2">
                  <span>Total

                  </span>
                  Tax Included

                </div>
                <span>
                  INR
                  {(subtotal || 0).toFixed(2)}</span>

              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Checkout