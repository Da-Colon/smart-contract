import React from 'react'
import io from 'socket.io-client'
import axios from 'axios'
import Component from '../../components/StringList'

class StringList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stringList: []
    }
    this.socket = null;
  }

  componentDidMount = () => {
    this._setSocket();
    this._getAllStrings();
    this._getNewStrings();
  }

  _getAllStrings = async () => {
    const response = await axios.get(`${process.env.REACT_APP_ENDPOINT}/strings/all`)
    this.setState({
      stringList: response.data
    })
  }

  _getNewStrings = () => {
    this.socket.on('newText', strings => {
      this.setState({
        stringList: strings
      })
    })
  }

  _setSocket = () => {
    this.socket = new io('http://localhost:5000')
  }


  render(){
    
    return (
      <>
        {this.props.showStringList && <Component stringList={this.state.stringList}/>}
      </>
    )
  }
}

export default StringList;