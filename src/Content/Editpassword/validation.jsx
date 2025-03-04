import * as yup from 'yup'

export const ForgetPasswordValidation= yup.object({
    email:yup.string().min(2).required("please enter your  email"),

  
 
});
export const NewPasswordValidation= yup.object({
 
    code:yup.number().required("please enter atleast 8 characters"),
    newPassword:yup.number().min(4).required("please enter new password"),

  
 
});