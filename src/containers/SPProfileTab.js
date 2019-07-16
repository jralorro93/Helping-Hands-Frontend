import React, { Component } from 'react';
import { connect } from 'react-redux'

class SPProfileTab extends Component {
  render() {
    console.log('this is currentUser: ', this.props.currentUser)
    let fullName = this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name
    return (
      <div>
        <h1>{fullName}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.login.user }
}

export default connect(mapStateToProps)(SPProfileTab)
