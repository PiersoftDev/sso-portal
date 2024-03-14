import React, { useEffect, useState } from 'react'
import { BsGlobe2 } from 'react-icons/bs'
import { Formik } from 'formik'
import * as Yup from 'yup'

import LogInWrapper from './styles'

const Login = ({ setMobileNumber }) => {
  return (
    <LogInWrapper>
      <div className="card-header">
        <span className="globe-icon">
          <BsGlobe2 />
        </span>

        <div className="title-container">
          <div className="header-title">Enter you Phone number</div>
          <div className="header-subtitle">
            we will send you a verification code
          </div>
        </div>
      </div>
      <div className="card-body">
        <Formik
          initialValues={{ phoneNumber: '' }}
          validationSchema={Yup.object({
            phoneNumber: Yup.string()
              .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
              .required('Mobile number is required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setMobileNumber(values.phoneNumber)
            setSubmitting(false)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="field-container">
                <div className="input-label">Mobile number</div>
                <div className="input-container">
                  <input
                    placeholder="Enter your mobile number"
                    type="text"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="error-message">
                  {errors.phoneNumber &&
                    touched.phoneNumber &&
                    errors.phoneNumber}
                </div>
              </div>
              <button
                className="sign-in-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Log in
              </button>
            </form>
          )}
        </Formik>
      </div>
    </LogInWrapper>
  )
}
export default Login
