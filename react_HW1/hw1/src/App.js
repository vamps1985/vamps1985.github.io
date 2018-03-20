import React, { Component } from 'react';
import Header from "./components/header";
import Body from "./components/body";

import './styles/App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />

        <Body />


      </div>
    );
  }
}

export default App;
