import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Canvas from './containers/Canvas/Canvas'
import './App.css';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
			<BrowserRouter>
        <div className="App">
          <Canvas />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
