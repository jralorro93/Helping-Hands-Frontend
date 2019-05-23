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
            <li onClick={this.props.handleClick}>Current Jobs</li>
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
export default SPSideBar
