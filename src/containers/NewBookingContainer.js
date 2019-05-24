import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getServices } from '../actions/actions';
import ServiceProviderCard from '../components/ServiceProviderCard';
import { Grid } from 'semantic-ui-react';

class NewBookingContainer extends Component {


  state = {
    services: []
  }
  //Renders Service Providers on page
  componentDidMount() {
    this.props.getServices()
      .then(servicesJSON => {
        this.setState({
          services: servicesJSON.payload
        })
      })
  }



  render() {
    // {console.log(this.state.services)}
    return (
      <div>
        <h1>Make an appointment today!</h1>
        <h3>Services: </h3>
        {this.state.services.map(service => <ServiceProviderCard key={service.service_provider.name} service={service}/>)}
      </div>
    )
  }
}

//2nd argument: gets the 'getServies' thunk method
export default connect(null, {getServices} )(NewBookingContainer)
