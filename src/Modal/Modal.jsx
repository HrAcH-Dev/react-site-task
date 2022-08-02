import React, { useState } from 'react'
import "./Modal.scss"
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { Formik } from 'formik'
import * as yup from "yup"



export default function Modal({ active, setactive, children }) {
    const validationSchema = yup.object().shape({
        name: yup.string().typeError("Должно быть строкой").required("Обязательно"),
        password: yup.string().typeError("Должно быть строкой").required("Обязательно"),
        
    })
    
    const [state,setState] = useState(false)
    
    const toogleBtn = () => {
        setState(prevstate => !prevstate)
    }
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setactive(false)}>
        <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
            <div className="Modal-content-forms">
                <h1>Registration</h1>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        emailrequired: "",
                        password: "",
                        passwordrequired: ""
                    }}
                    validateOnBlur
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                        <form onSubmit={e => e.preventDefault()}>
                        <div className="form-box">
                          <input 
                            type={"text"} 
                            name={"name"} 
                            placeholder='login' 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          {touched.name && errors.name && <p className={"errors"}>{errors.name}</p>}
                          <div className="eye-box">
                            <input 
                              type={state ? "text" : "password"} 
                              name={"password"} 
                              placeholder="password" 
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                            />
                            <span onClick={toogleBtn}>
                              {!state ? <FaEye /> : <FaEyeSlash />}
                            </span>
                          </div>
                          {touched.password && errors.password && <p className={"errors"}>{errors.password}</p>}

                          
                        </div>
                        
                        <input 
                          type={"submit"}
                          value={"Send a Request"}
                          disabled={!isValid && !dirty}
                          onClick={handleSubmit}
                        />
                      </form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
  )
}
