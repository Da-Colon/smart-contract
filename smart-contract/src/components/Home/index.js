import React from 'react'
import {Formik} from 'formik'
import Select from 'react-select'
import * as Yup from 'yup'
import PrimaryButton from '../Form/PrimaryButton'
import { userOptions } from '../../utils/accountUtils'


const Home = (props) => (
  <div className="w-1/2 h-1/2 bg-white shadow-2xl rounded-md">
    <Formik
      initialValues={{account: ""}}
      validationSchema={Yup.object().shape({
        account: Yup.object().required('Select an account')
      })}
      onSubmit={ values => {
        props.onSubmit({...values})
      }}  
    >
      {({values, handleSubmit, errors, handleChange, setFieldValue}) => (
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="p-8 w-full">
            <h1 className="text-xl font-bold my-1">Select a User</h1>
              <Select 
                name="account"
                options={userOptions(props.accounts)}
                onChange={selected => setFieldValue('account', selected)}
                value={values.account}
                placeholder="User accounts..."
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

export default Home;