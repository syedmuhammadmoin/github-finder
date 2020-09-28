import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Useritems from "./components/users/Useritems";
import "./App.css";

class App extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <Useritems />
      </div>
    );
  }
}

export default App;
