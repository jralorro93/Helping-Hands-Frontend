import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'


class ClientSideBar extends Component{



  render() {
    return (
      <div>
        <div className="profileSideBar">
          Client Side SideBar
          Welcome to HH!
          Pic here
        </div>
        <div className="bookingOptions">
          <ul>
            <li onClick={this.props.handleClick}>Create a booking</li>
            <li onClick={this.props.handleClick}>Current bookings</li>
            <li onClick={this.props.handleClick}>Settings</li>
          </ul>
        </div>
        <div className='logout'>
          <button onClick={this.props.handleLogout}>Log Out</button>
        </div>
      </div>
    )
  }
}
export default ClientSideBar





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
//
