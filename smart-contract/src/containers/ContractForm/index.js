import React from 'react'
import * as Yup from 'yup'
import Form from '../../components/ContractForm'

class ContractForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      success: false,
    }
  }

  _contractValidation = () => {
    return Yup.object().shape({
      name: Yup.string().required('Name is Required')
    })
  }

  _onSubmit = (values) => {
    console.log(values)
    return
  }

  render = () => (
    <div className="w-full h-full flex justify-center items-center bg-gray-600">
      <Form 
        contractValidation={this._contractValidation}
        onSubmit={this._onSubmit}
      />
    </div>
  )
}

export default ContractForm;