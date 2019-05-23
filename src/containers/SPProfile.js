import React, { Component} from 'react';
import SPSideBar from '../components/SPSideBar';
import SPPageContainer from './SPPageContainer';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/actions'

class SPProfile extends Component {

  state = {
    currentPage: 'Current Jobs'
  }

  handleClick = (event) => {
    console.log('this is handleClick', event.target.innerText)
    this.setState({
      currentPage: event.target.innerText
    })
  }

  handleLogout = event => {
    localStorage.removeItem('token')
    this.props.logoutUser()
  }

  render() {
    return (
      <div>
        Hi from SP side
        <SPSideBar currentPage={this.state.currentPage} handleLogout={this.handleLogout} handleClick={this.handleClick}/>
        <SPPageContainer selectedPage={this.state.currentPage}/>
      </div>
    )
  }
}
export default connect(null, {logoutUser})(SPProfile)
