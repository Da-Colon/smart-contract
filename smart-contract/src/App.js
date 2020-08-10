import React from 'react';
import axios from 'axios'
import * as Yup from 'yup'
import Home from './components/Home';
import Form from './components/ContractForm'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      accounts: [],
      account: ""
    }
  }

  componentDidMount = () => {
    this._setAccounts()
  }

  _setAccounts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}/accounts/all`)
    this.setState({accounts: response.data})
  }

  _handleAccountSubmit = (user) => {
    this.setState({ account: user.account})
  }

  _contractValidation = () => {
    return Yup.object().shape({
      name: Yup.string().required('Name is Required')
    })
  }

  _handleContractSubmit = (values) => {
    console.log(values)
    return
  }

  render = () => {
    const {loading, account} = this.state
    return (
      <div className="w-full h-screen flex flex-col">
        <div className="p-6 bg-teal-900 w-full">
          <h1 className="text-white text-xl">Smart Contract</h1>
        </div>
        <div className="w-full h-full flex justify-center items-center bg-gray-600">
          {!loading && account === "" && <Home isLoading={loading} onSubmit={this._handleAccountSubmit} accounts={this.state.accounts} />}
          {!loading && account !== "" && <Form contractValidation={this._contractValidation} onSubmit={this._handleContractSubmit} account={this.state.account} /> }
        </div>
      </div>
    );
  }
}
export default App;
