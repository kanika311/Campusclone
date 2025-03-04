import * as yup  from 'yup'
export const SignupValidation= yup.object({
    email:yup.string().min(2).required("please enter your  email"),

   password:yup.string().min(8).required("please enter atleast 8 characters"),
   name:yup.string().min(2).max(15).required("please enter name")
 
});
export const UserValidation= yup.object({
    
   name:yup.string().min(2).max(15).required("please enter name"),
   lastName:yup.string().min(2).max(15).required("please enter name"),
   phone:yup.number().min(10).required("please enter your correct phone number"),
   locality:yup.string().min(4).max(25).required("please enter address"),
   country:yup.string("India"),
   zipcode: yup.string()
        .matches(/^\d{5,8}$/, "Zipcode must be between 5 to 8 digits")  // ✅ Fix Length Range
        .required("Zipcode is required"),

 city:yup.string().min(2).max(15).required("please enter city"),
});
export const editValidation= yup.object({
 
   name:yup.string().min(2).max(15).required("please enter name"),
   lastName:yup.string().min(2).max(15).required("please enter name"),
   phone:yup.number().min(10).required("please enter your correct phone number"),
   locality:yup.string().min(4).max(100).required("please enter address"),
   country:yup.string("India"),
   zipcode: yup.string()
        .matches(/^\d{5,8}$/, "Zipcode must be between 5 to 8 digits")  // ✅ Fix Length Range
        .required("Zipcode is required"),

 city:yup.string().min(2).max(15).required("please enter city"),
});
