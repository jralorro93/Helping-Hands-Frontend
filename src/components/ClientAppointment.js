import React, { Component } from 'react';
import { Modal, Button, Image, Header, Icon, Card} from 'semantic-ui-react'




class ClientAppointment extends Component {


  render() {
    console.log('this is props from ClientAppointment: ', this.props.serviceProvider)
    return (
      <div>
        <Modal trigger={<Card
          image={this.props.serviceProvider.imgUrl}
          header={this.props.serviceProvider.first_name}
          meta={this.props.serviceProvider.last_name}
        />}>
           <Modal.Header>{this.props.serviceProvider.first_name} {this.props.serviceProvider.last_name}</Modal.Header>
           <Modal.Content image>
             <Image wrapped size='small' src={this.props.serviceProvider.imgUrl} />
             <Modal.Description>
               <Header>Date and Time:</Header>
               <p>{this.props.appointment.date} at {this.props.appointment.time}</p>
             </Modal.Description>
           </Modal.Content>
         </Modal>
      </div>
    )
  }
}



export default ClientAppointment
