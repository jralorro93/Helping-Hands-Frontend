import React, { Component } from 'react';
import ClientApptContainer from './ClientApptContainer';
import NewBookingContainer from './NewBookingContainer';
import ClientSettings from '../components/ClientSettings';
import { connect } from 'react-redux';

class ClientPageContainer extends Component {



  render() {
    let currentPage = null
    if(this.props.currentUser.id) {
      switch(this.props.selectedPage) {
        case 'Create a booking':
          currentPage = <NewBookingContainer />
          break;
        case 'Current bookings':
          currentPage = <ClientApptContainer />
          break;
        case 'Settings':
          currentPage = <ClientSettings />
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
export default connect(mapStateToProps)(ClientPageContainer)





// {/*used a ternary to check if there is a user */}
// {this.props.currentUser.id ? <ClientApptContainer /> : <h1>Loading!</h1>}
// <NewBookingContainer />
