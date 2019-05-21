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
  handleSubmit = (selectedSP, dateAndTime) => {
    console.log("this is handleSubmit", this.props.service.id )
    console.log("this is state ", this.state)
    {this.props.postBooking(selectedSP, dateAndTime)}
  }


  render() {

    return (
      <div>
        <Modal trigger={<Card
          header={this.props.service.service_provider.first_name}
          meta={this.props.service.job}
          description={this.props.service.availability}
        /> }>

         <Modal.Header>{this.props.service.job}</Modal.Header>
         <Modal.Content>
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
export default connect(null, {postBooking})(ServiceProviderCard)

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


// <DateInput
//   name="date"
//   placeholder="Date"
//   value={this.state.date}
//   iconPosition="left"
//   onChange={this.handleChange}
// />
// <TimeInput
//   name="time"
//   placeholder="Time"
//   value={this.state.time}
//   iconPosition="left"
//   onChange={this.handleChange}
// />
// <DateTimeInput
//   name="dateTime"
//   placeholder="Date Time"
//   value={this.state.dateTime}
//   iconPosition="left"
//   onChange={this.handleChange}
// />
// <DatesRangeInput
//   name="datesRange"
//   placeholder="From - To"
//   value={this.state.datesRange}
//   iconPosition="left"
//   onChange={this.handleChange}
// />

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
