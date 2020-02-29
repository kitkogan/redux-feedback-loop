import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
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
        this.props.dispatch(action);
        this.props.history.push('/understanding');
    }

    //user selected rating will be saved to local state
    handleSelected = (event) => {
        let ratingScore = event.target.value;
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
                <div className="custom-select" width="200px">
                <label className="dailyRating">Please select a number from 1-5 that corresponds with your feelings today</label>
                <select id="dailyRating" onChange={this.handleSelected}>
                    <option value="0">Please select a number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>                
            <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>
            </div>
        )
    }
}

export default connect()(Feeling);