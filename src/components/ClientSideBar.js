import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import ClientPageContainer from '../containers/ClientPageContainer'


class ClientSideBar extends Component{
  state = {
    currentPage: 'Create a booking'
  }

  handleClick = (event) => {
    this.setState({
      currentPage: event.target.id
    })
  }

  render() {
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='slide along'
          icon='labeled'
          inverted
          vertical
          visible
          width='thin'
        >
          <Menu.Item as='a' id='Create a booking' onClick={this.handleClick}>
            <Icon name='pencil' id='Create a booking' onClick={this.handleClick}/>
            Create a booking
          </Menu.Item>
          <Menu.Item as='a' id='Current bookings' onClick={this.handleClick}>
            <Icon name='book' id='Current bookings'onClick={this.handleClick}/>
            Current bookings
          </Menu.Item>
          <Menu.Item as='a' id='Settings'onClick={this.handleClick}>
            <Icon name='settings' id='Settings'onClick={this.handleClick}/>
            Settings
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <ClientPageContainer selectedPage={this.state.currentPage}/>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
export default ClientSideBar

// <div>
//   <div className="profileSideBar">
//     Client Side SideBar
//     Welcome to HH!
//     Pic here
//   </div>
//   <div className="bookingOptions">
//     <ul>
//       <li onClick={this.props.handleClick}>Create a booking</li>
//       <li onClick={this.props.handleClick}>Current bookings</li>
//       <li onClick={this.props.handleClick}>Settings</li>
//     </ul>
//   </div>
//   <div className='logout'>
//     <button onClick={this.props.handleLogout}>Log Out</button>
//   </div>
// </div>




// <Sidebar.Pushable as={Segment}>
//   <Sidebar
//     as={Menu}
//     animation='slide along'
//     icon='labeled'
//     inverted
//     vertical
//     visible
//     width='thin'
//   >
//     <Menu.Item as='a'>
//       <Icon name='pencil' />
//       Create a booking
//     </Menu.Item>
//     <Menu.Item as='a'>
//       <Icon name='book' />
//       Current bookings
//     </Menu.Item>
//     <Menu.Item as='a'>
//       <Icon name='settings' />
//       Settings
//     </Menu.Item>
//   </Sidebar>
//
//   <Sidebar.Pusher>
//     <Segment basic>
//       <Header as='h3'>Application Content</Header>
//       <Image src='/images/wireframe/paragraph.png' />
//     </Segment>
//   </Sidebar.Pusher>
// </Sidebar.Pushable>
