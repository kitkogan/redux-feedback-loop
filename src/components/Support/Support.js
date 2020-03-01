//imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Rating from '../Rating/Rating';
import '../App/App.css';

class Support extends Component {
    //sets initial state
    state = {
        support: 0
    }
    //on 'Next' button click, rating sent to reducer
    //advance user to '/Comments' page
    //update support rating in redux-store
    handleClickNext = () => {
        const support = this.state.support;
        const action = {type: 'SUPPORT_UPDATE', payload: support};
        if(support === 0) {
            alert('This field cannot be left blank')
        } else {
            this.props.dispatch(action);
            this.props.history.push('/Comments');
        }
    }
    //when back button is clicked, this function will bring user to prev page
    handleBackClick = () => {
        const under = this.state.understand;
        const action = {type: 'UNDERSTAND_UPDATE', payload: under};
        if(under === 0) {
            alert('this field cannot be left blank');
        } else {
            this.props.dispatch(action);
            this.props.history.push('/Understanding');
        }
    }
    //user selected rating will be updated in local state
    handleSelectedSupport = (ratingScore) => {
        this.setState({
            support: ratingScore
        })
    }
    //user is shown a dropdown menu to select their 'Support' rating
    //when a rating is selected and the 'Next' or 'Back' buttons are clicked,
    //the above functions will be triggered
    render () {
        return (
            <div>
                <Header />
                <h3>How well were you supported today?</h3>
                <label className="dailyRating">Please select a number from 1-5 that corresponds with how supported you felt today</label>
                <Rating feedback="Support" onChange={this.handleSelectedSupport} />
                <button className="handleBackButton" onClick={this.handleBackClick}>BACK!</button>
                <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>

            </div>
        )
    }
}

export default connect()(Support);
