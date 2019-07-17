import React, { Component } from 'react';
import { Modal, Button, Image, Header, Icon, Card} from 'semantic-ui-react'

class SPCurrentBooking extends Component {
  render() {
    console.log('this is SPCurrentBooking!: ', this.props.client)
    let newDate = new Date(this.props.booking.date)
    return (
      <div>
        <Modal trigger={<Card
          image={this.props.client.imgUrl}
          header={this.props.client.first_name}
          meta={this.props.client.last_name}
          />}>
           <Modal.Header>{this.props.client.first_name} {this.props.client.last_name}</Modal.Header>
           <Modal.Content image>
            <Image wrapped size='small' src={this.props.client.imgUrl} />
             <Modal.Description>
               <Header>Date and Time: </Header>
               <h3>{newDate.toString().split('20:00:00')[0]}</h3>
               <h3>{this.props.booking.time.split(':', 2).join(':')}</h3>
             </Modal.Description>
           </Modal.Content>
         </Modal>
      </div>
    )
  }
}

export default SPCurrentBooking
