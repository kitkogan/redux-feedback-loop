import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Rating from '../Rating/Rating';
import '../App/App.css';
import UserReview from '../UserReview/UserReview';

class Support extends Component {

    //sets initial state
    state = {
        support: 0
    }

    //on 'Next' button click, rating sent to reducer
    //advance user to '/Comments' page
    //update support rating in redux-store
    handleClickNext = (event) => {
        event.preventDefault();
        console.log('in handleclicknext', this.state.support);
        const support = this.state.support;
        const action = {type: 'SUPPORT_UPDATE', payload: support};
        this.props.dispatch(action);
        this.props.history.push('/Comments');
    }

    //user selected rating will be saved to local state
    handleSelectedSupport = (ratingScore) => {
        console.log('support handleselected', ratingScore);
        this.setState({
            support: ratingScore
        })
    }

    render () {
        console.log('support render', this.state.support);
        return (
            <div>
                <Header />
                <h3>How well were you supported today?</h3>
                <label className="dailyRating">Please select a number from 1-5 that corresponds with how supported you felt today</label>
                <Rating feedback="Support" onChange={this.handleSelectedSupport} />
                <UserReview />
            
                <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>
            </div>
        )
    }
}

export default connect()(Support);
