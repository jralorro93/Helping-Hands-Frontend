import React, { Component } from 'react';
import { Modal, Button, Image, Header, Icon} from 'semantic-ui-react'




class ClientAppointment extends Component {


  render() {
    console.log('this is props: ', this.props)
    return (
      <div>
        <Modal trigger={<Button>{this.props.worker.first_name} {this.props.worker.last_name}</Button>}>
           <Modal.Header>{this.props.worker.first_name} {this.props.worker.last_name}</Modal.Header>
           <Modal.Content image>
             <Modal.Description>
               <Header>Modal Header</Header>
               <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
             </Modal.Description>
           </Modal.Content>
         </Modal>
      </div>
    )
  }
}



export default ClientAppointment
