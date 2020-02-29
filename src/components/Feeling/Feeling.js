import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header';
import '../App/App.css';
import RatingScore from './../RatingScore/RatingScore';

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
    handleClickNext = (event) => {
        console.log('in handleclicknext');
        const feels = this.state.feelings;
        const action = {type: 'FEELING_UPDATE', payload: feels};
        this.props.dispatch(action);
        this.props.history.push('/understanding');
    }

    //user selected rating will be saved to local state
    handleSelected = (ratingScore) => {
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
                <RatingScore handleSelected={this.handleSelected} />
                <button className="handleNextButton" onClick={this.handleClickNext}>NEXT!</button>
            </div>
        )
    }
}

export default connect()(Feeling);