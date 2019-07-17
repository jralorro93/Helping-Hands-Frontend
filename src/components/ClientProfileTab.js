import React, { Component } from 'react';
import { connect } from 'react-redux'

class ClientProfileTab extends Component {
  render() {
    return (
      <div>
        <h2>Hi from ClientProfileTab! </h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.user}
}

export default connect(mapStateToProps)(ClientProfileTab)
