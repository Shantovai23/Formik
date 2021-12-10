import React from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  city: "",
};
const onSubmit = (values) => {
  //es6 function
  alert(JSON.stringify(values));
};

const validationSchema = Yup.object({
  name: Yup.string().required("Enter your name!"),
  email: Yup.string()
    .email("Invalid Email format!")
    .required("Enter your email!"),
  city: Yup.string().required("Enter Your city!"),
});

const SimpleForm = () => {
 
  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
      <div className="formDiv">
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            
          />
          <ErrorMessage name='name'/>

          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
       
          />
          <ErrorMessage name='email'/>

          <label htmlFor="city">City</label>
          <Field
            type="text"
            id="city"
            name="city"
     
          />
          <ErrorMessage name='city'/>
          <button type="submit">SUBMIT</button>
        </Form>
      </div>
    </Formik>
  );
};

export default SimpleForm;
