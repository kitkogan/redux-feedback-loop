//imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import '../App/App.css';

class Comments extends Component {
    //sets initial state
    state = {
        comments: ''
    }
    //on 'Next' button click, rating sent to reducer
    //advance user to '/Comments' page
    //update comments input in redux-store
    handleClickNext = () => {
        const comment = this.state.comments;
        const action = {type: 'COMMENTS_UPDATE', payload: comment};
        this.props.dispatch(action);
        this.props.history.push('/UserReviewSubmit');
    }
    //sends user to previous page when 'Back' buttons is clicked
    handleBackClick = () => {
        const sup = this.state.support;
        const action = {type: 'SUPPORT_UPDATE', payload: sup};
        if(sup === 0) {
            alert('this field cannot be left blank');
        } else {
            this.props.dispatch(action);
            this.props.history.push('/Support');
        }
    }
    //user selected rating will be updated in local state
    handleOnChangeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    //comments section has a message letting user know this is an optional portion
    //'Next' button click will trigger 'handleClickNext' func
    //'Back button click triggers 'handleBackClick' func
    render () {
        return (
            <div>
                <Header />
                <h3>Questions, Comments, Concerns? We invite you to share if you feel called!</h3>
                <label className="dailyRating">(This section is optional)</label>
                <input feedback="Comments" onChange={this.handleOnChangeComments} />
                <button className="handleBackButton" onClick={this.handleBackClick}>BACK!</button>
                <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>
            </div>
        )
    }
}

export default connect()(Comments);