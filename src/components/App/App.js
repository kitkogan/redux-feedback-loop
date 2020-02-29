import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import Feeling from './../Feeling/Feeling.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <br/>
        <Router>
          <div>
            <Route exact path='/' component={Feeling} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
