import * as yup  from 'yup'
export const SignupValidation= yup.object({
    email:yup.string().min(2).required("please enter your  email"),

   password:yup.string().min(8).required("please enter atleast 8 characters"),
   name:yup.string().min(2).max(15).required("please enter name")
 
});

