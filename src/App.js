import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import Items from './items';
import Search from './search';
import Logins from './logins';

class App extends Component {
  render() {
    return (
      <div>
      <div className='App'>
        <header className="App-header">
        <Logins/>
        <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">ShopKart</h1>
              <Search/>
        </header> 

        
      </div>
      <div>
            <Items/>
       </div>
       </div>
    );
  }
}

export default App;
