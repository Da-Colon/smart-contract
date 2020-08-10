import React from 'react'
import * as Yup from 'yup'
import Web3 from 'web3'
import io from "socket.io-client";
import Form from '../../components/ContractForm'

class ContractForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      success: false,
      account: ''
    }
  }


  componentDidMount = () => {
    this._loadBlockchainData();
    this.socket = io(process.env.REACT_APP_SOCKET_ENDPOINT)
    this._activeListeners();
  }

  _activeListeners = () => {
    this.socket.on('handshake', info => {
      console.log(info)
    })
  }

  _loadBlockchainData = async () => {
    const web3 = new Web3("http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0]})
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
        account={this.state.account}
      />
    </div>
  )
}

export default ContractForm;