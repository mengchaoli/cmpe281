import React, { Component } from 'react';
// logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header.js';
import { Main } from './Main.js';

class App extends Component {
  render() {
    return (
        // <header className="App-header">
        //   <span> {this.props.im} </span>
        //   <button onClick={this.change}>
        //     {this.state.hello}
        //   </button>
        // </header>
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Main/>
          </div>
        </BrowserRouter>    
    );
  }
}

export default App;
