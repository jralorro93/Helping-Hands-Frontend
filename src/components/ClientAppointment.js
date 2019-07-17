import React from 'react';
import { Modal, Button, Image, Header, Icon, Card, Form, Divider, Dimmer, Loader, Segment} from 'semantic-ui-react'
import { connect } from 'react-redux';
import { deleteBookingRequest, deleteBooking, patchAppt} from '../actions/actions';
import { DateInput, TimeInput } from 'semantic-ui-calendar-react';


class ClientAppointment extends React.Component {

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

  handleLoaded = () => {
    this.setState({
      loaded: !this.state.loaded
    })
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
    let fullName = this.props.serviceProvider.first_name + " " + this.props.serviceProvider.last_name
    console.log('this is props from ClientAppointment: ', this.props)
    return (
      <div>
      { this.props.serviceProvider ? <Modal onClose={this.handleClose} open={this.state.modalOpen}
                trigger={<Card
                  onClick={() => this.handleOpen() }
                  image={this.props.serviceProvider.imgUrl}
                  header={this.props.serviceProvider.first_name}
                  meta={this.props.appointment.service.job}
              />}>
                 <Modal.Header>{fullName}</Modal.Header>
                 <Modal.Content image>
                   <Image wrapped size='small' src={this.props.serviceProvider.imgUrl} />
                   <Modal.Description>
                     <Header>About {fullName}:</Header>
                     <p>{this.props.appointment.service.description}</p>
                     <Header>Contact Info:</Header>
                     <p>{this.props.serviceProvider.email}</p>
                     <Header>Date and Time:</Header>
                     <p>{this.props.appointment.date} at {this.props.appointment.time}</p>
                       {/*Shows form if clicked on Edit Appointment*/}
                         {this.state.showForm ? <Form>
                          <h3>Editting Date and Time:</h3>
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
                            <Form.Button onClick={this.handleEdit}color='blue'>Submit</Form.Button>
                          </Form> : null}
                   </Modal.Description>
                 </Modal.Content>
                 <Modal.Actions>
                   <Button onClick={this.handleShow}>Edit Appointment</Button>
                   <Button negative onClick={() => this.handleDelete(this.props.appointment)}>Cancel Appointment</Button>
                 </Modal.Actions>
               </Modal> : <Segment>
                 <Dimmer active>
                   <Loader content='Loading' />
                 </Dimmer>
              </Segment>
             }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {currentUser: state}
}

export default connect(mapStateToProps, { deleteBookingRequest, patchAppt})(ClientAppointment)
