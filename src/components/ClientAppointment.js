import React, { Component } from 'react';
import { Modal, Button, Image, Header, Icon, Card} from 'semantic-ui-react'




class ClientAppointment extends Component {


  render() {
    // console.log('this is props: ', this.props)
    return (
      <div>
        <Modal trigger={<Card
          image={this.props.worker.imgUrl}
          header={this.props.worker.first_name}
          meta={this.props.worker.last_name}
        />}>
           <Modal.Header>{this.props.worker.first_name} {this.props.worker.last_name}</Modal.Header>
           <Modal.Content image>
             <Modal.Description>
               <Header>Modal Header</Header>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed sagittis sapien.</p>
             </Modal.Description>
           </Modal.Content>
         </Modal>
      </div>
    )
  }
}



export default ClientAppointment
