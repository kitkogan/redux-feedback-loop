//imports  
import React, { Component } from 'react';
import UserReview from '../UserReview/UserReview';

//final review page for submit
//user is asked to review their entries and click submit button, 
//which is housed in the UserReview component
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