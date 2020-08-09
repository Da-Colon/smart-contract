import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from "formik";
import PrimaryButton from '../Form/PrimaryButton'
import TextInput from '../Form/TextInput';

const ContractForm = (props) => (
  <div className="w-1/2 h-1/2 bg-white shadow-2xl rounded-md">
    <Formik
      initialValues={{
        name: ""
      }}
      validationSchema={props.contractValidation}
      onSubmit={ values => {
        props.onSubmit({...values})
      }}  
    >
      {({values, handleSubmit, errors, handleChange}) => (
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="p-8 w-full">
            <h1 className="text-xl font-bold my-4">Smart Contract</h1>
            <TextInput 
              placeholder="Enter name..."
              name="name"
              labelname="Name"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className="text-right bg-gray-200 p-2 w-full">
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </div>
        </form>
      )}
    </Formik>
  </div>
)


ContractForm.propTypes = {
  contractValidation: PropTypes.func.isRequired
}

export default ContractForm