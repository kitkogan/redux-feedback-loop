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
            }).catch((err) => {
                console.log(err);
            })
    }

      // display current ratings entered at bottom of input pages
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
