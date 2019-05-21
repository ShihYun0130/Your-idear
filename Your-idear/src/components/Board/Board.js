import React, { Component } from 'react';
import './Board.css';
import Button from '../../containers/Button/Button';
import { Link } from 'react-router-dom'
import monster from './monster.png';
import axios from 'axios';
import cookie from 'react-cookies';


class Board extends Component{

  constructor(props){
    super(props);
    this.state = {
      wallInfo: [],
      wallDescription: String
    }
  }
  getWallInfo = () => {
    // console.log("setInterval");
    // console.log("serInterval cookie", cookie.loadAll());
    axios.get('https://your-idear.herokuapp.com/wall', {
        params: {
          wallName: cookie.load("wallName")
        }
      })
      .then(res =>{
          // console.log("setinterval axios get,", res.data);
          // console.log("getWall cookie", cookie.loadAll());
          // console.log("getWall res", res.data);
          let postList = [];
          if(res.data.posts !== undefined){
            postList = res.data.posts.map((item) => Object.values(item)[2]); 
            this.setState({wallInfo: postList});
          }
          if(res.data.wallDescription !== null){
            this.setState({wallDescription: res.data.wallDescription});
          }
      }).catch(err => {
          console.log(err);
      });
    }
  componentDidMount() {
    // console.log("state", this.props.userName, this.props.wallName, this.props.wallDescription);
    this.intervalId = setInterval(this.getWallInfo, 1000);
  }

  componentWillUnmount() {
    // console.log("clear");
    clearInterval(this.intervalId, 1000);
  }

  render(){
    const wallInfos = this.state.wallInfo;
    return <div className="board">
      <div className="boardBar">
        <div className="left">
          <Link to="/Self"><Button image={monster} text="" hint={cookie.load("wallName")}/></Link>
        </div>
        <div className="boardRight">
          <span className="wallDes wallTitle">{cookie.load("wallName")}</span>
          <span className="wallDes">{cookie.load("wallDescription")}</span>
        </div>
      </div>
      <div className="posts">
        { wallInfos.map( 
          e => <div className="onePost"> <textarea disabled className="postContent" value={e}></textarea>
          </div> ) 
        }
        
      </div>
    </div>;
  }
}

export default Board;