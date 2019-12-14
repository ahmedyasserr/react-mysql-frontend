import React from "react"
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";

const EditStudent = () => (
    <Formik
    initialValues={{id: ""}}
    onSubmit={(values,{ resetForm }) => {
        axios.post('http://localhost:4000/delete', values)
        .then(res => console.log(res.data));
        setTimeout(() =>{
            console.log("logging the values", values)
        }, 250);
        resetForm();
    }}
        validationSchema = {Yup.object().shape({
                id: Yup.number("You must enter a number as an input!").required("Please enter an ID")
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
                            <label htmlFor="id">Enter Student ID</label>
                            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.id} className="form-control" id="id" placeholder="Enter an ID"/>
                        </div>
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-outline-primary">Delete</button>
                        {errors.id && touched.id ? (
                        <div className="text-danger font-weight-bold">{errors.id}</div>
                    ) : null}
                </form>
            )
        }
    }        

    </Formik>
)

export default EditStudent