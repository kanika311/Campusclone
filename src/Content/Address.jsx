import React, { useEffect, useState } from 'react'
import { MdDeleteOutline, MdOutlineCancel } from "react-icons/md";
import { editValidation, UserValidation } from '../Content/SignUp/SignupValidation';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { CreateAddress, DeleteUserAddress, EditUserAddress, fetchAddress } from '../reduxs/slices/Address';
import { CiEdit } from "react-icons/ci";
import { Dialog } from '@mui/material';
import { fetchProductList } from '../reduxs/slices/product';



const Address = ({ userdetail }) => {
  const [form, setForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(null);
  const [isPopup, setPopup] = useState(false);
  const { address } = useSelector((state) => state.addressauth)
  const handleDeltePopup = () => {
    setPopup(true);

  }
  const initialValues = {

    email: userdetail?.email || '',
    name: userdetail?.name || '',
    lastName: userdetail?.lastName || '',
    locality: '',
    city: '',
    country: 'india',
    zipcode: '',
    phone: '',


  };

  const formik = useFormik({
    initialValues,

    validationSchema: UserValidation,
    onSubmit: async (data) => {

      try {

        const result = await dispatch(CreateAddress(data));

        if (result) {
          console.log('user address successfully added', result);
        } else {
          alert('Failed to update useraddress');

        }
      } catch (error) {
        console.error('Update error:', error);
      }
    },


  });
  console.log(address, 'address');

  //Fetchaddress list api
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
  }, []); 
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

  return (
    <div className='flex flex-col items-start justify-start gap-6 mr-[40px] '>
      <div className='text-[18px] text-black fonr-[400]'>My Address</div>
      <button onClick={() => { setForm(true) }} className='w-[207px] h-[46px] border-[1px] border-black text-black bg-white hover:text-white hover:bg-black'>ADD A NEW ADDRESS</button>


      {form && (
        <form onSubmit={formik.handleSubmit} className='flex flex-col w-full gap-4'>
          <div className='text-black text-[19px]'>ADD A NEW ADDRESS</div>
          <div className='flex flex-col gap-2 w-full'>
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
          <button type='button' onClick={() => {

            formik.handleSubmit();
            setForm(false);

          }} className='bg-black h-[47px] w-[150px] text-white'>Add Address</button>
          <button onClick={() => { setForm(false) }} className='text-[white] text-[18px] font-[400]  bg-[#964233]  h-[47px] w-[150px]'>cancel</button>
          </div>
        </form>
      )}
      {/*to render address  */}
      {Array.isArray(getaddress) && getaddress.length > 0 ? (
        getaddress.map((item) => (
          <div key={item?.id} className="w-full p-4 border border-gray-300 rounded flex item-center justify-between gap-2">
            <div className='flex flex-col items-start justify-start text-[16px] font-[400]'>

              <p className='font-bold'> {item?.name} {item?.lastName}    {item?.phone}</p>
              <p>{item?.locality} ,{item?.city},{item?.country} ,{item?.zipcode}</p>

              <p>{item?.city},{item?.zipcode}</p>

            </div>
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
                      <button onClick={() => { handleDeleteAddress(item?.id) }} className='bg-red-700 text-white p-2 border-2  w-[100px] rounded-[8px]'>Delete</button>
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
          <button type="button"
            onClick={() => {

              editFormik.handleSubmit();
              setForm(false);
            }}
            className="bg-black h-[47px] w-[150px] text-white">
            Update Address
          </button>
          <button type="button"
            className="flex items-start justify-start text-red-500"
            onClick={() =>
              setEdit(false)} >
            Cancel
          </button>
        </form>
      )}
    </div>

  )
}

export default Address