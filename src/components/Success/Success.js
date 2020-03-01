//imports
import React, { Component } from 'react';

class Success extends Component {
    //when button is clicked, the user will be routed back to new blank survey
    handleClickNext = () => {
        this.props.history.push('/');
    }
    //adds a message for user and button to return to beginning of survey
    render() {
        return (
            <div>
                <h1>Your feedback has been submitted sucessfully</h1>
                <button onClick={this.handleClickNext}>Start New Feedback Form</button>
            </div>
        )
    }
}

export default Success;
