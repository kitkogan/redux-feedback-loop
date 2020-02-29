import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import '../App/App.css';

class Feeling extends Component {

    //sets initial state
    state = {
        feelings: 0
    }

    
    // //when page loads, feedback stored in reducer will be cleared
    // componentDidMount = () => {
    //     console.log('mounted');
    //     this.props.dispatch({type: 'CLEAR_FEEDBACK'})
    // }

    //on 'Next' button click, rating sent to reducer
    //advance user to '/understanding' page
    handleClickNext = () => {
        console.log('in handleclicknext');
        // const feels = this.state.feelings;
        const action = {type: 'FEELING_UPDATE', payload: this.state.feelings};
        this.props.dispatch(action);
        this.props.history.push('/understanding');
    }

    //user selected rating will be saved to local state
    handleSelected = (ratingScore) => {
        console.log('feelings', ratingScore)
        this.setState({
            feelings: ratingScore
        })
    }
    render () {
        console.log('feelings', this.state.feelings);
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