import React, { Component } from 'react';
import { Modal, Button, Image, Header, Icon, Card} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deleteBookingRequest, deleteBooking } from '../actions/actions';



class ClientAppointment extends Component {

  handleCancel = () => {
    console.log('this is handleCancel')
  }

  handleEdit = (event, appt) => {
    console.log('this is handleEdit', appt)
  }

  handleDelete = (appt) => {
    this.props.deleteBookingRequest(appt)
  }



  render() {
    console.log('this is props from store: ', this.props.appointment.id)
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
           <Modal.Actions>
             <Button onClick={(event) => this.handleEdit(event)}>Edit Appointment</Button>
             <Button negative onClick={() => this.handleDelete(this.props.appointment)}>Cancel Appointment</Button>
           </Modal.Actions>
         </Modal>
      </div>
    )
  }
}



export default connect(null, { deleteBookingRequest })(ClientAppointment)
