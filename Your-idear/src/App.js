import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Self from './components/Self/Self';
import Board from './components/Board/Board';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import cookie from 'react-cookies';
// import WallName from './components/WallName/WallName';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: cookie.load("userName"),
      wallName: cookie.load("wallName"),
      userInputWall: cookie.load("userInputWall"),
      checkInput: '',
      checkCreate: '',
      wallDescription: cookie.load("wallDescription")
    };
  }

  componentDidMount() {
    this.setState({"userName": "Guest"});
  }
  handleWallDes = (event) => {
    this.setState({wallDescription: event.target.value});
  }

  // record user input name
  handleUserName = (event) => {
    cookie.remove('userName', { path: '/' });
    this.setState({"userName": "Guest"});
    cookie.remove('wallName', { path: '/' });
    this.setState({"wallName": ""});
    cookie.remove('wallDescription', { path: '/' });
    this.setState({"wallDescription": ""});
    console.log("nameState cookieAll", cookie.loadAll());
    this.setState({userName: event.target.value});
    // console.log("user", this.state.userName);
  }

  // check input wall name
  inputWallName = (event) => {
    this.setState({userInputWall: event.target.value});
    cookie.save("userInputWall", event.target.value, {path:"/"});
    // check if there is existing wall name
    axios.get('https://your-idear.herokuapp.com/wall', {
      params: {
        wallName: event.target.value
      }
    })
    .then(res => {
        // console.log("this is inputwallnameresponse,", res.data);
        if (res.data === ""){
          this.setState({checkInput: 'Not exist'});
        }
        else
          this.setState({checkInput: ''});

    }).catch(err => {
        console.log(err);
    });

    // console.log("wall", this.state.wallName);
  }

  // record input wall name
  enterWall = () => {
    this.setState({wallName: this.state.userInputWall});
    cookie.save("userInputWall", this.state.userInputWall, {path:"/"});
    // check if there is existing wall name
    axios.get('https://your-idear.herokuapp.com/wall', {
      params: {
        wallName: this.state.userInputWall
      }
    })
    .then(res => {
        this.setState({wallDescription: res.data.wallDescription});
        cookie.save('userName', this.state.userName, {path:"/"});
        cookie.save('wallName', this.state.wallName, {path:"/"});
        cookie.save('wallDescription', this.state.wallDescription, {path:"/"});
        // console.log("cookieAll", cookie.loadAll());
    }).catch(err => {
        console.log(err);
    });

    // console.log("wall", this.state.wallName);
  }

  // check user create wall name
  createWallName = (event) => {
    // this.setState({wallName: event.target.value});

    if(event.target.value !== ""){
      // check if there is existing wall name
      axios.get('https://your-idear.herokuapp.com/wall', {
        params: {
          wallName: event.target.value
        }
      })
      .then(res => {
          // console.log("this is createwallname response,", res.data);
          if (res.data !== ""){
            this.setState({checkCreate: 'The wall is existed.'});
          }
          else{
            this.setState({checkCreate: 'Valid wall name.'});
            cookie.save('wallName', event.target.value, {path:"/"});
          }

      }).catch(err => {
          console.log(err);
      });
    }
    else{
      this.setState({checkCreate: 'Invalid wall name.'})
    }
    // console.log("wall", this.state.wallName);
  }

  // create wall name
  postWallName = () => {
    // console.log("postwallname");
    // console.log(this.state.wallName);
    if(this.state.checkCreate === 'Valid wall name.' && this.state.wallName !== ""){
      axios.post('https://your-idear.herokuapp.com/wall', {
        wallName: this.state.wallName,
        wallDescription: this.state.wallDescription
      })
      .then(res =>{
          // console.log("this is postwall response,", res.data);
          // console.log("wall description in post wall name", this.state.wallDescription);
          this.setState({wallDescription: this.state.wallDescription});
          cookie.save('userName', this.state.userName, {path:"/"});
          cookie.save("wallName", this.state.wallName, {path:"/"});
          cookie.save("wallDescription", this.state.wallDescription, {path:"/"});
      }).catch(err => {
          console.log(err);
      });
    }
  }

  logout = () => {
    console.log("logout");
    cookie.save('userName', "Guest", { path: '/' });
    this.setState({userName: cookie.load("userName")});
    cookie.remove('wallName', { path: '/' });
    this.setState({wallName: cookie.load("wallName")});
    cookie.remove('wallDescription', { path: '/' });
    this.setState({wallDescription: cookie.load("wallDescription")});
    this.setState({userInputWall: ''});
    this.setState({checkInput: ''});
    this.setState({checkCreate: ''});
    // console.log("loagout loadAll", cookie.loadAll());
  }

  render() {
    return (
      <Router>
        <div className="App">
            <div>
              <switch>
              {/* <Redirect exact from="/" to="some"/> */}
              <Route exact path="/" render={() => <Redirect to="/Login/userName" />} />

              <Route path="/Login" render={props => <Login userName={this.state.userName} 
              wallName={cookie.load("wallName")} handleUserName={this.handleUserName} 
              inputWallName={this.inputWallName} createWallName={this.createWallName} 
              checkInput={this.state.checkInput} checkCreate={this.state.checkCreate}
              postWallName={this.postWallName} userInputWall={this.state.userInputWall}
              enterWall={this.enterWall} getWallInfo={this.state.getWallInfo} 
              wallDescription={this.state.wallDescription} handleWallDes={this.handleWallDes} />} />

              {/* <Route path="/Self"  render={props => <Self userName={cookie.load("userName")} 
              wallName={cookie.load("wallName")} logout={this.logout}/>} /> */}
             
              <Route path="/Self"  render={(props)=>
                (cookie.load("wallName") === "" || this.state.checkInput === 'Not exist' || this.state.userInputWall === '')?
                    (<Redirect  to="/Login/wallName" />):
                (this.state.checkCreate === 'Invalid wall name.' || this.state.checkCreate === 'The wall is existed.')?
                    (<Redirect  to="/Login/CreateWall" />):
                (<Self userName={cookie.load("userName")} 
                wallName={this.state.wallName} logout={this.logout}/>)
              } />
              
              <Route path="/Board"  render={props => <Board userName={cookie.load("userName")} 
              wallName={cookie.load("wallName")} getWallInfo={this.state.getWallInfo}/>} />
              </switch>
              
            </div>
        </div>
      </Router>
      
    );
  }
}

export default App;
