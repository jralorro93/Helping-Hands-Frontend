import React, { Component } from 'react';
import { connect } from 'react-redux';
import {postBooking} from '../actions/actions';

class ServiceProviderCard extends Component {


  handleClick = (selectedSP) => {
    console.log("this is handleClick", selectedSP)
    {this.props.postBooking(selectedSP)}

  }

  render() {
    return (
      <div>
      <h1>{this.props.service.service_provider.first_name} {this.props.service.service_provider.last_name}</h1>
      <h3>{this.props.service.job}</h3>
      <h4>Availability: {this.props.service.availability}</h4>
      <button onClick={() => this.handleClick(this.props.service)}>Book Me!</button>
      </div>
    )
  }
}
export default connect(null, {postBooking})(ServiceProviderCard)
