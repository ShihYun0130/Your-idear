import React, { Component } from 'react';
import '../../containers/LoginPostIt/LoginPostIt';
import Button from '../../containers/Button/Button';
import { Link, Route } from 'react-router-dom'
import WallName from '../WallName/WallName';

class UserName extends Component{

  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return <div className="loginPage">
        <div className="nameContent">
          <div className="name"> What's Your Name? </div>
          <input className="nameInput" placeholder="Guest" value={this.props.userName} onChange={this.props.handleUserName}/>
        </div>
        <div className="button start">
          <Link to="/WallName"><button>Start</button></Link>
          {/* onClick={this.props.inputWall} */}
        </div>
    </div>;
  }
}

export default UserName;