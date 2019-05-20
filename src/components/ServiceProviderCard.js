import React, { Component } from 'react';

class ServiceProviderCard extends Component {

  state = {
    clickedSP: ''
  }

  handleClick = (selectedSP) => {
    console.log("this is handleClick", selectedSP)
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
export default ServiceProviderCard
