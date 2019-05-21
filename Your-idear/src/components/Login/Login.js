import React, { Component } from 'react';
import './Login.css';
import LoginPostIt from '../../containers/LoginPostIt/LoginPostIt';
import UserName from '../UserName/UserName';
import WallName from '../WallName/WallName';
import { Link, Route, Redirect } from 'react-router-dom'
import Board from '../Board/Board';
import cookie from 'react-cookies';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      wallState: 'name'
    };
  }

  nameState = () => {
    this.setState({wallState: 'name'});
  }

  inputWallState = () => {
    this.setState({wallState: 'inputWall'});
  }

  createWallState = () => {
    this.setState({wallState: 'createWall'});
  }

  render() {

    return (
      <div className="login">
        <div className="welcome">
          Welcome To Idear
        </div>
        <Route path="/Login/userName" exact render={(props)=>(
          <LoginPostIt wallState={this.state.wallState} userName={this.props.userName} 
          userName={this.props.userName} handleUserName={this.props.handleUserName}/>
        )} />
        <Route path="/Login/wallName" exact render={(props)=>
          <LoginPostIt wallState="inputWall" userName={this.props.userName} 
          inputWallName={this.props.inputWallName} userInputWall={this.props.userInputWall}
          createWall={this.createWallState} checkInput={this.props.checkInput} enterWall={this.props.enterWall}
          />} />
        <Route path="/Login/createWall" exact render={(props)=>(
          <LoginPostIt wallState="createWall" userName={this.props.userName} 
          postWallName={this.props.postWallName} createWallName={this.props.createWallName} 
          checkCreate={this.props.checkCreate} wallDescription={this.props.wallDescription} 
          handleWallDes={this.props.handleWallDes} />
        )} />
      </div>
    );
  }
}

export default Login;
