import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import Rating from '../Rating/Rating';
import '../App/App.css';


class Feeling extends Component {

    //sets initial state
    state = {
        feelings: 0
    }

    //on 'Next' button click, rating sent to reducer
    //advance user to '/understanding' page
    //update feelings rating in redux-store
    handleClickNext = (event) => {
        event.preventDefault();
        console.log('in handleclicknext', this.state.feelings);
        const feel = this.state.feelings;
        const action = {type: 'FEELING_UPDATE', payload: feel};
        if(feel === 0) {
            alert('This field cannot be left blank')
        } else {
            this.props.dispatch(action);
            this.props.history.push('/Understanding');
        }
        
    }

    //user selected rating will be saved to local state
    handleSelectedFeeling = (ratingScore) => {
        console.log('feelings handleselected', ratingScore);
        this.setState({
            feelings: ratingScore
        })
    }

    render () {
        console.log('feelings render', this.state.feelings);
        return (
            <div>
                <Header />
                <h3>How are you feeling today?</h3>
                <label className="dailyRating">Please select a number from 1-5 that corresponds with your feelings today</label>
                <Rating feedback="Feelings" onChange={this.handleSelectedFeeling} />
                
            
            <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>
            </div>
        )
    }
}

export default connect()(Feeling);