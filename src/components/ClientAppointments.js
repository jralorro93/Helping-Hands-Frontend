import React, { Component } from 'react';
import { Modal, Button, Image, Header, Icon} from 'semantic-ui-react'




class ClientAppointments extends Component {


  render() {
    return (
      <div>
        <Modal trigger={<Button>{this.props.appointment.service_id}</Button>}>
           <Modal.Header>Profile Picture</Modal.Header>
           <Modal.Content image>
             <Image wrapped size='medium' src='/images/wireframe/image.png' />
             <Modal.Description>
               <Header>Modal Header</Header>
               <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
             </Modal.Description>
           </Modal.Content>
           <Modal.Actions>
             <Button primary>
               Proceed <Icon name='right chevron' />
             </Button>
           </Modal.Actions>
         </Modal>
      </div>
    )
  }
}



export default ClientAppointments
