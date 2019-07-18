import React, { Component } from 'react';
import { Modal, Button, Image, Header, Icon, Card} from 'semantic-ui-react'

class SPCurrentBooking extends Component {

  state = {
    modalOpen: false
  }

  handleOpen = () => this.setState({ modalOpen: true }, () => console.log('this is modalOpen:', this.state.modalOpen))
  handleClose = () => this.setState({ modalOpen: false }, () => console.log('this is modalOpen:', this.state.modalOpen))

  handleDelete = () => {
    console.log('this is handleDelete')
  }

  render() {
    console.log('this is SPCurrentBooking!: ', this.props.client)
    let newDate = new Date(this.props.booking.date)
    let fullName = this.props.client.first_name + " " + this.props.client.last_name
    return (
      <div>
        <Modal
          trigger={<Card
            image={this.props.client.imgUrl}
            header={this.props.client.first_name}
            meta={this.props.client.last_name}
          />}>
           <Modal.Header id='modalHeader'>{fullName}</Modal.Header>
           <Modal.Content image>
            <Image wrapped size='small' src={this.props.client.imgUrl} />
             <Modal.Description>
               <Header>Contact Info: </Header>
               <p>{this.props.client.email}</p>
               <Header>Date and Time: </Header>
               <p>{newDate.toString().split('20:00:00')[0]}</p>
               <p>{this.props.booking.time.split(':', 2).join(':')}</p>
             </Modal.Description>
           </Modal.Content>
           <Modal.Actions id='modalHeader'>
             <Button color='blue'>Completed Booking</Button>
             <Button negative onClick={this.handleDelete}>Cancel Booking</Button>
           </Modal.Actions>
         </Modal>
      </div>
    )
  }
}

export default SPCurrentBooking
