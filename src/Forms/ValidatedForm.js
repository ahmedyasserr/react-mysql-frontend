import React from "react"
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";

const ValidatedForm = () => (
    <Formik
    initialValues={{Fname: "", Mname: "", Lname: "", Age: "", Section: ["English", "French"]}}
    onSubmit={(values,{ resetForm }) => {
        axios.post('http://localhost:4000/addstudent', values)
        .then(res => console.log(res.data));
        setTimeout(() =>{
            console.log("logging the values", values)
        }, 250);
        resetForm();
    }}
        validationSchema = {Yup.object().shape({
                Fname: Yup.string().required("First name is required").max(15,"Max name length is 15 characters"),
                Mname: Yup.string().required("Middle name is required").max(15,"Max name length is 15 characters"),
                Lname: Yup.string().required("Last name is required").max(15,"Max name length is 15 characters"),
                Age: Yup.number("You must enter a number as an input!").required("Age is required.")
                })
                
        }
    >
    {
        props => {
            const{
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return (
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                            <label htmlFor="Fname">First Name</label>
                            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.Fname} className="form-control" id="Fname" placeholder="Enter Your First Name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Mname">Middle Name</label>
                            <input type="text" className={errors.Mname && touched.Mname && "text-danger"} onChange={handleChange} onBlur={handleBlur} value={values.Mname} className="form-control" id="Mname" placeholder="Enter Your Middle Name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Lname">Last name</label>
                            <input type="text" className={errors.Lname && touched.Lname && "text-danger"} onChange={handleChange} onBlur={handleBlur} value={values.Lname} className="form-control" id="Lname" placeholder="Enter Your Last Name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Age">Age</label>
                            <input type="text" className={errors.Age && touched.Age && "text-danger"} onChange={handleChange} onBlur={handleBlur} className="form-control" value={values.Age} id="Age" placeholder="Enter Your Age"/>
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="Section">Section</label>
                            <select onChange={handleChange} onBlur={handleBlur} value={values.Section} name="Section" className="custom-select" id="Section" required>
                                <option defaultValue value="">Select section</option>
                                <option value="EN">English</option>
                                <option value="FR">French</option>
                           </select>
                        </div>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-outline-primary">Submit</button>
                        {errors.Section && touched.Section ? (
                        <div className="text-danger font-weight-bold">{errors.Section}</div>
                    ) : null}
                {errors.Age && touched.Age ? (
                        <div className="text-danger font-weight-bold">{errors.Age}</div>
                    ) : null}    
                {errors.Lname && touched.Lname ? (
                        <div className="text-danger font-weight-bold">{errors.Lname}</div>
                    ) : null}    
                {errors.Mname && touched.Mname ? (
                        <div className="text-danger font-weight-bold">{errors.Mname}</div>
                    ) : null}    
                {errors.Fname && touched.Fname ? (
                        <div className="text-danger font-weight-bold">{errors.Fname}</div>
                    ) : null}    
                </form>
            )
        }
    }        

    </Formik>
)

export default ValidatedForm