import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Button, Header, Image, Modal, Form, Icon } from 'semantic-ui-react';
import { patchImageUrl, patchUserInfo } from '../actions/actions'


class SPSettings extends Component {

  state = {
    imageUrl: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    modalOpen: false
  }

  //CLOSES THE MODAL
  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false }, () => console.log('this is modalOpen:', this.state.modalOpen))


  handleChange = (event) => {
    console.log("this is handleChange", event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handlePostUrl = (event) => {
    let newImage = this.state.imageUrl
    let currentUser = this.props.user.id
    console.log('this is current User', this.props.user.id)
    this.props.patchImageUrl(newImage, currentUser)
  }

  handleUserInfo = (event) => {
    let currentUser = this.props.user.id
    let currentFirst = this.state.first_name
    let currentLast = this.state.last_name
    let currentEmail = this.state.email
    let currentPass = this.state.password
    this.props.patchUserInfo(currentUser, currentFirst, currentLast, currentEmail, currentPass)
    this.handleClose(event)
  }


  render() {
    return (
      <div>
        <h1 className='Settings'>Settings</h1>
        <Divider />
        {/*Settings: Upload an image*/}
        <h3>Upload Profile Picture</h3>
        <Form>
          <Form.Input fluid label='Image URL' name='imageUrl' onChange={this.handleChange}/>
          <Form.Button color='green' onClick={this.handlePostUrl}>Upload Picture</Form.Button>
        </Form>

          <Divider />
        {/*Settings: Edit user info*/}
        <h3>Edit Personal Info</h3>
        <Modal className='userInfo' onClose={this.handleClose} open={this.state.modalOpen}
          trigger={<Button color='blue' onClick={() => this.handleOpen()}>Personal Info</Button>}>
          <Modal.Header>Personal Info:</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='small' src={this.props.user.imgUrl} />
            <Modal.Description>
              <Header>Anything to edit?</Header>
              <Form>
                <Form.Input  onChange={this.handleChange} label='First Name' name='first_name' placeholder={this.props.user.first_name}/>
                <Form.Input  onChange={this.handleChange} label='Last Name' name='last_name' placeholder={this.props.user.last_name}/>
                <Form.Input  onChange={this.handleChange} label='Email' name='email' placeholder={this.props.user.email}/>
                <Form.Input  onChange={this.handleChange} label='Password' name='password' placeholder='Password' type='password'/>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleUserInfo} inverted color='green'>Save</Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {user: state.login.user}
}


export default connect(mapStateToProps, { patchImageUrl, patchUserInfo })(SPSettings)


// <Modal className='imgInfo' onClose={this.handleClose} open={this.state.modalOpen}
//   trigger={<Button onClick={() => this.handleOpen()}>Upload Image</Button>}>
//   <Modal.Header>Current Image:</Modal.Header>
//   <Modal.Content image>
//     <Image wrapped size='small' src={this.props.user.imgUrl} />
//     <Modal.Description>
//       <Header>Would you like to change your profile picture?</Header>
//       <Form>
//         <Form.Input  onChange={this.handleChange} label='Image URL' name='imageUrl' placeholder='Image URL'/>
//       </Form>
//     </Modal.Description>
//   </Modal.Content>
//   <Modal.Actions>
//     <Button onClick={this.handlePostUrl} inverted color='green'>Save</Button>
//   </Modal.Actions>
// </Modal>
