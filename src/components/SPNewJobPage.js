import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Divider } from 'semantic-ui-react';
import { postJob } from '../actions/actions'

class SPNewJobPage extends Component {

  state = {
    job: '',
    availability: '',
    description: ''
  }

  handleChange = (event) => {
    console.log('this is change', event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let currentUser = this.props.currentUser.user.id
    let newService = {
      job: this.state.job,
      availability: this.state.availability,
      description: this.state.description
    }
    this.props.postJob(currentUser, newService, this.props.history)
  }

  render() {
    console.log('this is props: ', this.props)
    return (
      <div className='newJobPage'>
        <div className="addingNewJobForm">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input label='Profession' placeholder='Profession' type='text' name='job' value={this.state.job} onChange={this.handleChange}/>
              <Form.Input label='Availability' placeholder='Availability' type='text' name='availability' value={this.state.availability} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.TextArea label='Description' placeholder='Tell us about yourself!' type='text' name='description' value={this.state.description} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Button color='green'>Submit</Form.Button>
          </Form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.login
  }
}

export default connect(mapStateToProps, {postJob})(SPNewJobPage)
