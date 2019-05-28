import React, { Component } from 'react';
import { Modal, Button, Image, Header, Icon, Card, Form, Divider} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deleteBookingRequest, deleteBooking, patchAppt} from '../actions/actions';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';


class ClientAppointment extends Component {

  state = {
    modalOpen: false,
    showForm: false,
    date: '',
    time: ''
  }

  handleOpen = () => this.setState({ modalOpen: true }, () => console.log('this is modalOpen:', this.state.modalOpen))
  handleClose = () => this.setState({ modalOpen: false }, () => console.log('this is modalOpen:', this.state.modalOpen))


  handleShow = (event) => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleDelete = (appt) => {
    this.props.deleteBookingRequest(appt)
    this.handleClose()
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  handleEdit = (event) => {
    event.preventDefault()
    console.log('this is handleEdit', this.props)
    let currentDate = this.state.date
    let currenTime = this.state.time
    let currentSP = this.props.appointment.id
    this.props.patchAppt(currentSP, currentDate, currenTime)
    this.handleClose()
  }





  render() {
    return (
      <div>
        <Modal onClose={this.handleClose} open={this.state.modalOpen}
          trigger={<Card
            onClick={() => this.handleOpen() }
            image={this.props.serviceProvider.imgUrl}
            header={this.props.serviceProvider.first_name}
            meta={this.props.appointment.service.job}
        />}>
           <Modal.Header>{this.props.serviceProvider.first_name} {this.props.serviceProvider.last_name}</Modal.Header>
           <Modal.Content image>
             <Image wrapped size='small' src={this.props.serviceProvider.imgUrl} />
             <Modal.Description>
               <Header>Date and Time:</Header>
               <p>{this.props.appointment.date} at {this.props.appointment.time}</p>
             </Modal.Description>
             {/*Shows form if clicked on Edit Appointment*/}

             <Divider/>
             {this.state.showForm ? <Form>
               <Form.Group>
                 <h3>Editting Date and Time:</h3>
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
                <Form.Button onClick={this.handleEdit}color='blue'>Submit</Form.Button>
              </Form> : null}
           </Modal.Content>
           <Modal.Actions>
             <Button onClick={this.handleShow}>Edit Appointment</Button>
             <Button negative onClick={() => this.handleDelete(this.props.appointment)}>Cancel Appointment</Button>
           </Modal.Actions>
         </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state}
}

export default connect(mapStateToProps, { deleteBookingRequest, patchAppt})(ClientAppointment)
