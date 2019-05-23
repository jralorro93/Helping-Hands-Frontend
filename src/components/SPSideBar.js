import React, { Component } from 'react';

class SPSideBar extends Component {
  render() {
    return (
      <div>
        <div className="profileSideBar">
          SP Side SideBar
          Welcome to HH!
          Pic here
        </div>
        <div className="bookingOptions">
          <ul>
            <li>Current Jobs</li>
            <li>Edit Jobs</li>
            <li>Settings</li>
          </ul>
        </div>
        <div className='logout'>
          <button onClick={this.props.handleLogout}>Log Out</button>
        </div>
      </div>
    )
  }
}
export default SPSideBar
