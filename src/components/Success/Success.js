import React, { Component } from 'react';

class Success extends Component {

    handleClickNext = () => {
        this.props.history.push('/');
    }
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
