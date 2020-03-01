import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class UserReview extends Component {
    //User feedback sent to redux-store
    //User advances to '/Success' if form submitted successfully
    postFeedback = () => {
        const feedback = this.props.reduxStore.feedbackReducer;
        axios.post('/api/feedback', feedback)
            .then((response) => {
                const action = { type: 'CLEAR_FEEDBACK' };
                this.props.dispatch(action);
                this.props.history.push('/Success');
            }).catch((err) => {
                alert('An error has occured, please try again later');
            })
    }
      //conditional rendering allows submitButton to show when the /UserReviewSubmit route is hit
      //provides temp storage for feedback in reducer until it is posted to the database on successful submit
      render() {
        let submitButton;
        if (this.props.location.pathname === '/UserReviewSubmit'){
            submitButton = <button onClick={this.postFeedback}>Submit</button>
         };
        
        const feedback = this.props.reduxStore.feedbackReducer;
        return (
            <div className="userReview">
                <p>Feelings: {feedback.Feelings} </p>
                <p>Understanding: {feedback.Understanding}</p>
                <p>Support: {feedback.Support}</p>
                <p>Comments: {feedback.Comments}</p>
                {submitButton}
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStoreToProps)(UserReview));
