import React, { Component } from 'react';
import './App.css';
import Grid from './Components/Grid/Grid';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Courses />
        {/* <Grid /> */}

      </div>
    );
  }
}

export default App;
