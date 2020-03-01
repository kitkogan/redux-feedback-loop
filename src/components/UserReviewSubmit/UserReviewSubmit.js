//imports  
import React, { Component } from 'react';
import UserReview from '../UserReview/UserReview';
import {connect} from 'react-redux';

//final review page for submit
//user is asked to review their entries and click submit button, 
//which is housed in the UserReview component
class UserReviewSubmit extends Component {
    //sends user to previous page when 'Back' buttons is clicked
    handleBackClick = () => {
        const comment = this.comments;
        const action = {type: 'COMMENTS_UPDATE', payload: comment};
        this.props.dispatch(action);
        this.props.history.push('/Comments');
    }
    //when back button is clicked, the handlebackfunc will trigger
    render() {
        return (
            <div>
                <h2>Please review your answers and click submit.</h2>
                <UserReview />
                <button className="handleBackButton" onClick={this.handleBackClick}>BACK!</button>
            </div>
        )
    }
}

export default connect()(UserReviewSubmit);