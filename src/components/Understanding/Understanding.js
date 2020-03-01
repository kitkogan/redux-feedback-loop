import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Rating from '../Rating/Rating';
import '../App/App.css';
// import UserReview from '../UserReview/UserReview';

class Understanding extends Component {

    //sets initial state
    state = {
        understanding: 0
    }

    //on 'Next' button click, rating sent to reducer
    //advance user to '/support' page
    //update understanding rating in redux-store
    handleClickNext = (event) => {
        event.preventDefault();
        console.log('in handleclicknext', this.state.understanding);
        const under = this.state.understanding;
        const action = {type: 'UNDERSTAND_UPDATE', payload: under};
        this.props.dispatch(action);
        this.props.history.push('/Support');
    }

    //user selected rating will be saved to local state
    handleSelectedUnderstanding = (ratingScore) => {
        console.log('understanding handleselected', ratingScore);
        this.setState({
            understanding: ratingScore
        })
    }

    render () {
        console.log('understanding render', this.state.understanding);
        return (
            <div>
                <Header />
                <h3>How well did you understand today's material?</h3>
                <label className="dailyRating">Please select a number from 1-5 that corresponds with your understanding of today's material</label>
                <Rating feedback="Understanding" onChange={this.handleSelectedUnderstanding} />
                {/* <UserReview /> */}
            
                <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>
            </div>
        )
    }
}

export default connect()(Understanding);
