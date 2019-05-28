import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import SPPageContainer from '../containers/SPPageContainer';

class SPSideBar extends Component {

  state = {
    currentPage: 'Current Jobs'
  }

  handleClick = (event) => {
    console.log('this is handleClick', event.target.id)
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
          <Menu.Item as='a' id='Current Jobs' onClick={this.handleClick}>
            <Icon name='book' id='Current Jobs'onClick={this.handleClick}/>
            Current Jobs
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
            <SPPageContainer selectedPage={this.state.currentPage}/>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}
export default SPSideBar


// <div>
//   <div className="profileSideBar">
//     SP Side SideBar
//     Welcome to HH!
//     Pic here
//   </div>
//   <div className="bookingOptions">
//     <ul>
//       <li onClick={this.props.handleClick}>Current Jobs</li>
//       <li onClick={this.props.handleClick}>Settings</li>
//     </ul>
//   </div>
//   <div className='logout'>
//     <button onClick={this.props.handleLogout}>Log Out</button>
//   </div>
// </div>
//
