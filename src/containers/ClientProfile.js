import React, { Component } from 'react';
import ClientApptContainer from './ClientApptContainer';
import ClientSideBar from '../components/ClientSideBar';
import NewBookingContainer from './NewBookingContainer'
import { connect } from 'react-redux'
import ClientPageContainer from './ClientPageContainer'
import { logoutUser } from '../actions/actions'

class ClientSide extends Component {

  state = {
    currentPage: 'Create a booking'
  }

  handleClick = (event) => {
    console.log("this is handleClick", event.target.innerText)
    this.setState({
      currentPage: event.target.innerText
    })
  }

  handleLogout = event => {
    localStorage.removeItem("token")
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        Hi from Client Side
        <ClientSideBar currentPage={this.state.currentPage} handleClick={this.handleClick} handleLogout={this.handleLogout}/>
        <ClientPageContainer selectedPage={this.state.currentPage}/>
      </div>
    )
  }
}


export default connect(null, {logoutUser})(ClientSide)
