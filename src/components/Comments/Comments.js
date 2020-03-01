import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';

import '../App/App.css';

import UserReview from '../UserReview/UserReview';

class Comments extends Component {

    //sets initial state
    state = {
        comments: ''
    }

    //on 'Next' button click, rating sent to reducer
    //advance user to '/Comments' page
    //update comments input in redux-store
    handleClickNext = (event) => {
        event.preventDefault();
        console.log('in handleclicknext', this.state.comments);
        const comment = this.state.comments;
        const action = {type: 'COMMENTS_UPDATE', payload: comment};
        this.props.dispatch(action);
        this.props.history.push('/UserReviewSubmit');
    }

    //user selected rating will be saved to local state
    handleOnChangeComments = (event) => {
        console.log('comments handlechange', event.target.value);
        this.setState({
            comments: event.target.value
        })
    }

    render () {
        console.log('comments render', this.state.comments);
        return (
            <div>
                <Header />
                <h3>Questions, Comments, Concerns? We invite you to share if you feel called!</h3>
                <label className="dailyRating">This section is optional</label>
                <input feedback="Comments" onChange={this.handleOnChangeComments} />
                <UserReview />
            
                <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>
            </div>
        )
    }
}

export default connect()(Comments);