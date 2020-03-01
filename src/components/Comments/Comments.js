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

    //user selected rating will be updated in local state
    handleOnChangeComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    //comments section has a message letting user know this is an optional portion
    //'Next' button click will trigger 'handleClickNext' func
    render () {
        return (
            <div>
                <Header />
                <h3>Questions, Comments, Concerns? We invite you to share if you feel called!</h3>
                <label className="dailyRating">(This section is optional)</label>
                <input feedback="Comments" onChange={this.handleOnChangeComments} />
                <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>
            </div>
        )
    }
}

export default connect()(Comments);