import React from "react";
import {useFormik} from 'formik'
import * as Yup from 'yup'


const initialValues={
  name:'',
  email:'',
  city:''
}
const onSubmit=values=>{   //es6 function
  alert(JSON.stringify(values))
}

const validate=values=>{
  let errors={}

  if(!values.name){
    errors.name="Name can't  be empty"
  }
  if(!values.email){
    errors.email="Email can't  be empty"
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email='Invalid email format'
  }
  if(!values.city){
    errors.city="City can't  be empty"
  }

  return errors
}

const validationSchema=Yup.object({
  name:Yup.string().required('Enter your name!'),
  email:Yup.string()
  .email("Invalid Email format!")
  .required('Enter your email!'),
  city:Yup.string().required("Enter Your City")
})

const SimpleForm = () => {

    const formik=useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })

    console.log(formik.touched);
  return (
    <>
      <div className="formDiv">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
          {(formik.errors.name && formik.touched.name) && <p>{formik.errors.name}</p>}

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
          {(formik.errors.email && formik.touched.email)  && <p>{formik.errors.email}</p>}

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" onChange={formik.handleChange} value={formik.values.city} onBlur={formik.handleBlur}/>
          {(formik.errors.city && formik.touched.city)  && <p>{formik.errors.city}</p>}

          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default SimpleForm;
