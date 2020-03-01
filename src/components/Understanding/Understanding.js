//imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Rating from '../Rating/Rating';
import '../App/App.css';

class Understanding extends Component {

    //sets initial state
    state = {
        understanding: 0
    }

    //on 'Next' button click, rating sent to reducer
    //advance user to '/Support' page
    //updates understanding rating in redux-store
    handleClickNext = () => {
        const under = this.state.understanding;
        const action = {type: 'UNDERSTAND_UPDATE', payload: under};
        if(under === 0) {
            alert('This field cannot be left blank')
        } else {
            this.props.dispatch(action);
            this.props.history.push('/Support');
        }
    }

    handleBackClick = () => {
        const feel = this.state.feeling;
        const action = {type: 'FEELING_UPDATE', payload: feel};
        if(feel === 0) {
            alert('this field cannot be left blank');
        } else {
            this.props.dispatch(action);
            this.props.history.push('/');
        }
    }
  
    //user selected rating will be updated in local state
    handleSelectedUnderstanding = (ratingScore) => {
        this.setState({
            understanding: ratingScore
        })
    }

    //rating dropdown will allow user to select their 'unsertanding' rating
    //when user selects rating number and clicks the 'Next' button,
    //the above functions will be triggered
    render () {
        console.log('understanding render', this.state.understanding);
        return (
            <div>
                <Header />
                <h3>How well did you understand today's material?</h3>
                <label className="dailyRating">Please select a number from 1-5 that corresponds with your understanding of today's material</label>
                <Rating feedback="Understanding" onChange={this.handleSelectedUnderstanding} />
                <button className="handleBackButton" onClick={this.handleBackClick}>BACK!</button>
                <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>
            </div>
        )
    }
}

export default connect()(Understanding);
