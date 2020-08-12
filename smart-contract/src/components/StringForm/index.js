import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from "formik";
import PrimaryButton from '../Form/PrimaryButton'
import TextInput from '../Form/TextInput';

const StringForm = (props) => (
  <div className="w-1/2 mx-8 bg-white shadow-2xl rounded-md">
    <Formik
      initialValues={{
        string: ""
      }}
      validationSchema={props.contractValidation}
      onSubmit={ (values, {resetForm}) => {
        props.onSubmit({
          ...values,
          name: props.account.label
        })
        resetForm({values: ""})
      }}  
    >
      {({values, handleSubmit, errors, handleChange}) => (
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="p-4 w-full">
            <h1 className="text-xl text-center font-bold mb-4">User: <span className="text-teal-700">{props.account.label}</span></h1>
            <TextInput 
              placeholder=""
              name="string"
              labelname="Enter a String:"
              onChange={handleChange}
              value={values.string}
            />
          </div>
          <div className="text-right bg-gray-200 p-1 w-full">
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </div>
        </form>
      )}
    </Formik>
  </div>
)


StringForm.propTypes = {
  contractValidation: PropTypes.func.isRequired
}

export default StringForm