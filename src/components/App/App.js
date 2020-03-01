//imports
import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import Feeling from './../Feeling/Feeling';
import Understanding from './../Understanding/Understanding';
import Support from './../Support/Support';
import Comments from './../Comments/Comments';
import UserReviewSubmit from './../UserReviewSubmit/UserReviewSubmit';
import Success from './../Success/Success';

//sets up page routes/paths for components
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Feeling} />
            <Route exact path='/Understanding' component={Understanding} />
            <Route exact path='/Support' component={Support} />
            <Route exact path='/Comments' component={Comments} />
            <Route exact path='/UserReviewSubmit' component={UserReviewSubmit} />
            <Route exact path='/Success' component={Success} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
