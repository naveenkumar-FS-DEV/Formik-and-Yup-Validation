import * as Yup from 'yup';

const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

export const registerSchema = Yup.object().shape({
    name: Yup.string().min(5, "Name must be at least 5 characters long").required("Please enter your name."),
    email: Yup.string().email("Please enter a valid email").required("Please enter the email."),
    password: Yup.string()
        .matches(passwordRegex, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.")
        .required("Please enter your password."),
    cpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password.")
});