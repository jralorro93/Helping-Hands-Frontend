import React, { Component} from 'react';
import SPSideBar from '../components/SPSideBar';
// import SPPageContainer from './SPPageContainer';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/actions'

class SPProfile extends Component {



  handleLogout = event => {
    localStorage.removeItem('token')
    this.props.logoutUser()
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <SPSideBar handleLogout={this.handleLogout} />
      </div>
    )
  }
}
export default connect(null, {logoutUser})(SPProfile)
