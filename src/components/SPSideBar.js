import React, { Component } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Divider } from 'semantic-ui-react';
import SPPageContainer from '../containers/SPPageContainer';
import { connect } from 'react-redux';

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
        <h3 className="SideWelcome">Welcome to HH!</h3>
        {this.props.currentUser.imgUrl ? <Image circular src={this.props.currentUser.imgUrl} /> : <Image circular src='/assets/images/default-profile2.png' alt='Default Pic'/> }

        <Divider/>
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
const mapStateToProps = state => {
  return {currentUser: state.login.user}
}


export default connect(mapStateToProps)(SPSideBar)

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
