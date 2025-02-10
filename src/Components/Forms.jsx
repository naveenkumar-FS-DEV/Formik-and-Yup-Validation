import { Formik, Form, Field } from "formik";
import { registerSchema } from "../Schemas";
import { toast, ToastContainer } from "react-toastify";

const Forms = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        cpassword: ""
    };

    const onSubmit = (values, actions) => {
        console.log(values);
        toast.success("Registration successfull!");
        actions.resetForm();
    };

    return (
        <div>
            <ToastContainer />
            <section>
                <div>
                    <h2>REGISTER</h2>
                </div>
                <div className="form-container">
                    <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={onSubmit}>
                        {({ errors, touched }) => (
                            <Form>
                                <Field type="text" placeholder="Name" name="name" />
                                {errors.name && touched.name && <p>{errors.name}</p>}
                                
                                <Field type="email" placeholder="Email" name="email" />
                                {errors.email && touched.email && <p>{errors.email}</p>}
                                
                                <Field type="password" placeholder="Password" name="password" />
                                {errors.password && touched.password && <p>{errors.password}</p>}
                                
                                <Field type="password" placeholder="Confirm password" name="cpassword" />
                                {errors.cpassword && touched.cpassword && <p>{errors.cpassword}</p>}
                                
                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </div>
    );
};

export default Forms;