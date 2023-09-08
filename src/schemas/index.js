import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactSchema = yup.object().shape({
  fullName: yup
    .string()
    .max(30, "Please do not exceed 15 caracter")
    .required("Required"),
  companyName: yup.string().max(30, "Please do not exceed 15 caracter"),
  email: yup.string().email("Email is not valid").required("Required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  message: yup.string().required("*Required"),
});
