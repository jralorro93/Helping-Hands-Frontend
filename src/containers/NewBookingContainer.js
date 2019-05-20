import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getServices } from '../actions/actions';
import ServiceProviderCard from '../components/ServiceProviderCard';

class NewBookingContainer extends Component {


  state = {
    services: []
  }

  componentDidMount() {
    this.props.getServices()
      .then(servicesJSON => {
        this.setState({
          services: servicesJSON.payload
        })
      })
  }



  render() {
    {console.log(this.state.services)}
    return (
      <div>
        <h1>Make an appointment today!</h1>
        <h3>Services: </h3>
        <ul>
          {this.state.services.map(service => <li>{service.job} - {service.service_provider.first_name} {service.service_provider.last_name} <ServiceProviderCard key={service.service_provider.name} service={service}/></li>)}
        </ul>
      </div>
    )
  }
}

//2nd argument: gets the 'getServies' thunk method
export default connect(null, {getServices} )(NewBookingContainer)
