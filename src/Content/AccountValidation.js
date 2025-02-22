import * as yup from 'yup'

export const AccountValidation= yup.object({
    username:yup.string().min(2).required("please enter your  email"),

   password:yup.string().min(8).required("please enter atleast 8 characters"),
 
});