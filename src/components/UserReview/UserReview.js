import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class UserReview extends Component {
    //User feedback sent to redux-store
    //User advances to 'Success' page
    postFeedback = (event) => {
        const feedback = this.props.reduxStore.feedbackReducer;
        console.log(feedback);
        event.preventDefault();
        axios.post('/api/feedback', feedback)
            .then((response) => {
                console.log(response);
                const action = { type: 'CLEAR_FEEDBACK' };
                this.props.dispatch(action);
                this.props.history.push('/Success');
            }).catch((error) => {
                console.log(error);
            })
    }

      // display current ratings entered at bottom of input pages
      render() {
        let toggleButton;
        if (this.props.location.pathname === '/FinalUserReview'){
            toggleButton = <button onClick={this.postFeedback}>Submit</button>
        } else {
            toggleButton = <button onClick={this.postFeedback}>Not Yet Completed</button>
        };
        
        const feedback = this.props.reduxStore.feedbackReducer;
        return (
            <div className="review">
                <h3>Review Your Feedback</h3>
                <p>Feelings: {feedback.Feelings} </p>
                <p>Understanding: {feedback.Understanding}</p>
                <p>Support: {feedback.Support}</p>
                <p>Comments: {feedback.Comments}</p>
                {toggleButton}
            </div>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStoreToProps)(UserReview));
