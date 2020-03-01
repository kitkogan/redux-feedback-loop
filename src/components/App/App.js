import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import Feeling from './../Feeling/Feeling';
import Understanding from './../Understanding/Understanding';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <br/>
        <Router>
          <div>
            <Route exact path='/' component={Feeling} />
            <Route exact path='/Understanding' component={Understanding} />

          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
