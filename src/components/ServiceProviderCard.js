import React, { Component } from 'react';
import { connect } from 'react-redux';
import {postBooking} from '../actions/actions';
import { Card, Icon, Grid, Image, Modal, Button, Header } from 'semantic-ui-react';


class ServiceProviderCard extends Component {


  handleClick = (selectedSP) => {
    console.log("this is handleClick", selectedSP)
    // {this.props.postBooking(selectedSP)}


 }

  render() {
    return (
      <div>
        <Modal trigger={<Card
          header={this.props.service.service_provider.first_name}
          meta={this.props.service.job}
          description={this.props.service.availability}
        />}>

         <Modal.Header>{this.props.service.job}</Modal.Header>
         <Modal.Content>
           <Modal.Description>
             <Header>{this.props.service.service_provider.first_name}</Header>
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
export default connect(null, {postBooking})(ServiceProviderCard)

// <button onClick={() => this.handleClick(this.props.service)}>Book Me!</button>


// Part of card?
// <Modal trigger={<Button>Long Modal</Button>}>
//    <Modal.Header>Profile Picture</Modal.Header>
//    <Modal.Content image>
//      <Image wrapped size='medium' src='/images/wireframe/image.png' />
//      <Modal.Description>
//        <Header>Modal Header</Header>
//        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
//        <Image src='/images/wireframe/paragraph.png' />
//        <Image src='/images/wireframe/paragraph.png' />
//        <Image src='/images/wireframe/paragraph.png' />
//        <Image src='/images/wireframe/paragraph.png' />
//        <Image src='/images/wireframe/paragraph.png' />
//        <Image src='/images/wireframe/paragraph.png' />
//        <Image src='/images/wireframe/paragraph.png' />
//        <Image src='/images/wireframe/paragraph.png' />
//      </Modal.Description>
//    </Modal.Content>
//    <Modal.Actions>
//      <Button primary>
//        Proceed <Icon name='right chevron' />
//      </Button>
//    </Modal.Actions>
//  </Modal>
