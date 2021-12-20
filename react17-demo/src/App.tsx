import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "@material-ui/core"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button color="primary" variant="contained" onClick={sayHello}>Material Button</Button>

      </header>
    </div>
  );
}


function sayHello():void{
  console.log("hello react.");
}

export default App;
