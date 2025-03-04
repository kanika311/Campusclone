import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserValidation } from '../Content/SignUp/SignupValidation'
import { updateUser } from '../reduxs/slices/auth';


const EditProfile = ({ userdetail }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const id = userdetail?.id ;
  console.log(id,"useridhere")

  const initialValues = {
   
    lastName: userdetail?.name || '',
    phone: userdetail?.phone || '',
    email: userdetail?.email || '',
    id:userdetail?.id || '',
    name:userdetail?.name || ''
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true, // This allows initialValues to update when userdetail changes
    validationSchema: UserValidation,
    onSubmit: async (data) => {
      try {
       const id=initialValues.id;
        const result = await dispatch(updateUser(id,data));
        console.log(id,"userid")
        if (result) {
          console.log('userdetail updated successfully', result);
        } else {
          alert('Failed to update userdetail details');
        
        }
      } catch (error) {
        console.error('Update error:', error);
      }
    },
  });
  console.log(user,"userdetail");

  return (
    <div className='flex flex-col items-start justify-start gap-10 mr-[40px]'>
      <div className='bg-[#f9f9f9] h-[160px] w-full p-[15px]'>
        <div className='text-[black] text-[22px] font-[400]'>{userdetail?.name}</div>
        <div className='text-[#787A7C] text-[14px] font-[400] mt-[20px]'>{userdetail?.phone}</div>

        <div className='text-[#787A7C] text-[14px] font-[400] mt-[20px]'>{userdetail?.email}</div>
      </div>

      <div className='flex flex-col items-start justify-start gap-4 w-full'>
        <div className='text-[13px] font-[400] text-black'>Edit Your Account</div>
        <form className='flex flex-col items-start justify-start gap-4 mt-[10px] w-full' onSubmit={formik.handleSubmit}>
          
          <div className='flex gap-6 w-full'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-[14px] text-[#787A7C] font-[400]'>First Name</label>
              <input 
                name='name' 
                value={formik.values.name}
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1] hover:border-black rounded-[2px] p-2' 
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <span className="text-red-500 text-sm">{formik.errors.firstName}</span>
              )}
            </div>

            <div className='flex flex-col gap-2 w-full'>
              <label className='text-[14px] text-[#787A7C] font-[400]'>Last Name</label>
              <input 
                name='lastName' 
                value={formik.values.lastName}
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1] hover:border-black rounded-[2px] p-2' 
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <span className="text-red-500 text-sm">{formik.errors.lastName}</span>
              )}
            </div>
          </div>

          <div className='flex w-[100%] gap-6'>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-[14px] text-[#787A7C] font-[400]'>Phone number</label>
              <input 
                name='phone' 
                value={formik.values.phone}
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                type='number' 
                className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1] hover:border-black rounded-[2px] p-2' 
              />
              {formik.errors.phone && formik.touched.phone && (
                <span className="text-red-500 text-sm">{formik.errors.phone}</span>
              )}
            </div>

            <div className='flex flex-col gap-2 w-full'>
              <label className='text-[14px] text-[#787A7C] font-[400]'>Email</label>
              <input 
                name='email' 
                value={formik.values.email}
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                type='email' 
                className='w-[100%] h-[51px] border-[1px] border-[#d8d1d1] hover:border-black rounded-[2px] p-2' 
              />
              {formik.errors.email && formik.touched.email && (
                <span className="text-red-500 text-sm">{formik.errors.email}</span>
              )}
            </div>
          </div>

          <button type='submit' className='bg-black h-[37px] w-[118px] text-white'>UPDATE</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
