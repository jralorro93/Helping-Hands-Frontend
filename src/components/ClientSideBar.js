import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Divider } from 'semantic-ui-react'
import ClientPageContainer from '../containers/ClientPageContainer'
import { connect } from 'react-redux';
import DefaultPic from '../assets/images/default-pic.png'

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
    console.log('this is from store', this.props.currentUser.imgUrl)
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
          <h3 className="SideWelcome">Welcome to HH!</h3>
          {this.props.currentUser.imgUrl ? <Image circular src={this.props.currentUser.imgUrl} /> : <Image circular src={DefaultPic} alt='Default Pic'/> }

          <Divider/>
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
          <Menu.Item as='a' id='Log out' onClick={this.props.handleLogout}>
            <Icon name='log out' id='Log out' onClick={this.props.handleLogout}/>
            Log out
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <ClientPageContainer selectedPage={this.state.currentPage}/>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}



const mapStateToProps = state => {
  return {currentUser: state.login.user}
}


export default connect(mapStateToProps)(ClientSideBar)


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
