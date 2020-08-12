import React from 'react';
import axios from 'axios'
import * as Yup from 'yup'
import Web3 from 'web3'
import abi from './abis/StringContract.json'
import Home from './components/Home';
import Form from './components/StringForm'
import io from 'socket.io-client'
import StringList from './components/StringList/stringList';
import '@fortawesome/fontawesome-free/css/all.min.css'
import Loading from './components/Loading';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: true,
      accounts: [],
      account: "",
      stringList: []
    }
    this.socket = null;
    this.web3 = new Web3('http://localhost:7545')
  }

  componentDidMount = () => {
    this._setSocket();
    this._setAccounts()
    this._getNewStrings();
    setTimeout(() => this.setState({loading: false}), 1000)
  }

  _setSocket = () => {
    this.socket = new io('http://localhost:5000')
  }

  _setAccounts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}/accounts/all`)
    this.setState({accounts: response.data})
  }

  _handleAccountSubmit = (user) => {
    this.setState({loading: true})
    this.setState({ account: user.account})
    setTimeout(() => this.setState({loading: false}), 1000)
  }

  _contractValidation = () => {
    return Yup.object().shape({
      string: Yup.string().required('String Field is Required')
    })
  }

  _getNewStrings = () => {
    this.socket.on('newText', strings => {
      this.setState({
        stringList: strings
      })
    })
  }

  _handleFormSubmit = async (values) => {
    const Contract = new this.web3.eth.Contract(abi.abi, process.env.REACT_APP_CONTRACT_ADDRESS)
    const contract = await Contract.methods
    await contract.saveText(values.string, this.state.account.label).send({from: this.state.account.value})
  }

  render = () => {
    const {loading, account, stringList} = this.state
    return (
      <div className="w-full h-screen flex flex-col">
        <div className="p-6 bg-teal-900 w-full">
          <h1 className="text-white text-xl">
            <a href="/">Smart Contract</a>
          </h1>
        </div>
        <div className={account === "" && stringList === [] ? "w-full h-full flex justify-center items-center bg-gray-600" : "w-full h-full flex justify-around items-center bg-gray-600"}>
          {loading && <Loading />}
          {!loading && account === "" && <Home isLoading={loading} onSubmit={this._handleAccountSubmit} accounts={this.state.accounts} />}
          {!loading && account !== "" && <Form contractValidation={this._contractValidation} onSubmit={this._handleFormSubmit} account={this.state.account} /> }
          {!loading && account !== "" && stringList !== [] && <StringList stringList={this.state.stringList} />}
        </div>
      </div>
    );
  }
}
export default App;
