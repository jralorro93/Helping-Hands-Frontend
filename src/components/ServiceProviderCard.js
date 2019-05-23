import React, { Component } from 'react';
import { connect } from 'react-redux';
import {postBooking} from '../actions/actions';
import { Card, Icon, Grid, Image, Modal, Button, Header, Form, Input, TextArea, Select } from 'semantic-ui-react';
import { DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react';




class ServiceProviderCard extends Component {

  state = {
    date: '',
    time: ''
  };


  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
  }
}
  handleSubmit = () => {
    let currentSP = this.props.service.id
    let currentState = this.state
    // console.log('this is currentSP', currentSP, this.props.service)
    // console.log("this is from store", this.props.currentUser)
    // console.log('this is currentSTate', currentState)
    let userId = this.props.currentUser.id
    this.props.postBooking(currentSP, currentState, userId)
  }


  render() {
    return (
      <div>
        <Modal trigger={<Card
          image={this.props.service.service_provider.imgUrl}
          header={this.props.service.service_provider.first_name}
          meta={this.props.service.job}
          description={this.props.service.availability}
        /> }>

         <Modal.Header>{this.props.service.job}</Modal.Header>
         <Modal.Content image>
           <Image wrapped size='medium' src={this.props.service.service_provider.imgUrl} />
           <Modal.Description>
             <Header>{this.props.service.service_provider.first_name} {this.props.service.service_provider.last_name}</Header>
             <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
           </Modal.Description>
           <Form>
            <Form.Group>
              <DateInput
                name="date"
                placeholder="Date"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
              />
              <TimeInput
                name="time"
                placeholder="Time"
                value={this.state.time}
                iconPosition="left"
                onChange={this.handleChange}
              />
             </Form.Group>
           </Form>
         </Modal.Content>
         <Modal.Actions>
           <Button type="submit" content="Save" onClick={this.handleSubmit}>
             Book Now! <Icon name='right chevron' />
           </Button>
         </Modal.Actions>
       </Modal>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state.login.user}
}

export default connect(mapStateToProps, {postBooking})(ServiceProviderCard)

// //////////////////////////
// <Form.Group>
//   <Form.Field
//     control={Select}
//     options={timeOptions}
//     label={{ children: 'Time', htmlFor: 'form-select-control-time' }}
//     placeholder='Time'
//     onChange={(event, time) => this.handleChange(event, time)}
//   />
// </Form.Group>

/////////////////////////////
// <DateTimeInput
//    fluid
//    label='Time and Date'
//    name="dateTime"
//    placeholder="Date Time"
//    value={this.state.dateTime}
//    iconPosition="left"
//    onChange={this.handleChange} />
////////////////////////////



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
