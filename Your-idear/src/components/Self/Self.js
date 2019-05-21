import React, { Component } from 'react';
import './Self.css';
import Toolbar from '../../containers/Toolbar/Toolbar';
import PostIt from '../../containers/PostIt/PostIt';
import axios from 'axios';
import cookie from 'react-cookies';
import { withRouter } from 'react-router-dom';

class Self extends Component {

  constructor(props) {
    super(props);
    this.state = {
      state: 'original',
      postTextContent: ''
    };
  }

  textState = () => {
    this.setState({state: 'text'});
  }

  drawState = () => {
    this.setState({state: 'draw'});
  }

  originalState = () => {
    this.setState({state: 'original'});
  }

  postText = (event) => {
    this.setState({postTextContent: event.target.value});
    // console.log(this.state.postTextContent);
  }

  postPostIt = () => {
    const time = new Date().valueOf();
    if(this.state.postTextContent !== ""){
      axios.post('https://your-idear.herokuapp.com/post', {
        wallName: this.props.wallName,
        postId: time,
        author: this.props.userName,
        content: this.state.postTextContent,
        time: time
      })
      .then((res, req) =>{
          // console.log("this is response of post postits,", res.data);
          // console.log("this is response of post postits req,", req.data);
      }).catch(err => {
          console.log(err);
      });
      this.setState({postTextContent: ''});
      alert("Successfully upload!\nYou can see your posts by tapping on the Upper left corner button.");
    }
    else{
      alert("Write down something first!");
    }
    
  }

  clearContent = () => {
    if(this.state.postTextContent === ''){
      alert("You can only clear post-it content after you write down something first!");
    }
    else{
      this.setState({postTextContent: ''});
    }
  }

  drawButton = () => {
    alert("Drawing function is not yet deployed.\nBut will be finished soon.");
  }
  leftAlignButton = () => {
    alert("left align function is not yet deployed.\nBut will be finished soon.");
  }
  centerAlignButton = () => {
    alert("center align function is not yet deployed.\nBut will be finished soon.");
  }
  rightAlignButton = () => {
    alert("right align function is not yet deployed.\nBut will be finished soon.");
  }

  render() {
    return (
      <div className="Self">
        <Toolbar textState={this.textState} drawState={this.drawState} originalState={this.originalState} 
        state={this.state.state} userName={this.props.userName} wallName={this.props.wallName} 
        postPostIt={this.postPostIt} clearContent={this.clearContent} logout={this.props.logout} 
        drawButton={this.drawButton} leftAlignButton={this.leftAlignButton} centerAlignButton={this.centerAlignButton}
        rightAlignButton={this.rightAlignButton} />
        <div className="selfContent-container">
          <div className="selfContent">
            <PostIt state={this.state.state} postText={this.postText} postTextContent={this.state.postTextContent}/>
            <div className="tutorial-container">
              <div className="tutorial">
                <h4>This is Tutorial</h4>
                <ul> 
                  <li>Tap on the button on the upper left corner, and you can see the posts in the wall.</li>
                  <li>Tap on "Type" button, and you can write down something on the post-it.</li>
                  <li>You can tap on other similar buttons to explore more functions.</li>
                  <li>To log out, tap on your user name on the upper right corner.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Self);