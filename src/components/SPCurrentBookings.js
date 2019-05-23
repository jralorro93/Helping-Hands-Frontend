import React, { Component } from 'react';
import { Modal, Button, Image, Header, Icon, Card} from 'semantic-ui-react'

class SPCurrentBookings extends Component {
  render() {
    console.log('this is props: ', this.props)
    return (
      <div>
        {/*Semantic Card: Check card to upload image*/}
        <Modal trigger={<Card
          header={this.props.client.first_name}
          meta={this.props.client.last_name}
          />}>
           <Modal.Header>{this.props.client.first_name} {this.props.client.last_name}</Modal.Header>
           <Modal.Content image>
             <Modal.Description>
               <Header>Date and Time: </Header>
               <h3>{this.props.booking.date}</h3>
               <h3>{this.props.booking.time}</h3>
             </Modal.Description>
           </Modal.Content>
         </Modal>
      </div>
    )
  }
}
export default SPCurrentBookings
