  
import React, { Component } from 'react';
// import {connect} from 'react-redux';
import UserReview from '../UserReview/UserReview';

//final review page for submit
class UserReviewSubmit extends Component {
    render() {
        return (
            <div>
                <h2>Please review your answers and click submit.</h2>
                <UserReview />
            </div>
        )
    }
}

export default UserReviewSubmit;