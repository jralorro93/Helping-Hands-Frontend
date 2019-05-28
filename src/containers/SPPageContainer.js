import React, { Component } from 'react';
import SPApptContainer from './SPApptContainer';
import SPSettings from '../components/SPSettings';
import { connect } from 'react-redux'

class SPPageContainer extends Component {
  render() {
    console.log('this is currentUser: ', this.props.currentUser.id)
    let currentPage = null
    if(this.props.currentUser.id) {
      switch(this.props.selectedPage) {
        case 'Current Jobs':
          currentPage = <SPApptContainer />
          break;
        case 'Settings':
          currentPage = <SPSettings />
          break;
      }
    } else {
      currentPage = <h1> Loading... </h1>
    }
    return (
      <div>
        {currentPage}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.login.user}
}

export default connect(mapStateToProps)(SPPageContainer)
