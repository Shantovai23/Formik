import React from "react";
import {useFormik} from 'formik'

const SimpleForm = () => {

    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            city:''
        },
        onSubmit: (values)=>{
               alert(JSON.stringify(values))
        }
    })



  return (
    <>
      <div className="formDiv">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" onChange={formik.handleChange} value={formik.values.city}/>

          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default SimpleForm;
