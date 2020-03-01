//imports
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Rating extends Component {
    
    state = {}


//user selected rating will be saved to local state
    handleSelectedRating = (event) => {
        const rating = event.target.value;
        console.log('feelings handleselected', rating);
        event.preventDefault();
        
        this.setState({
            rating: event.target.value
        });
        this.props.onChange(rating);
    }

    render() {
        return (
            <div className="custom-select" width="200px">
                    <label className="dailyRating">Please select a number from 1-5 that corresponds with your feelings today</label>
                    <select id="dailyRatingSelect" value={this.state.rating} onChange={this.handleSelectedRating}>
                        <option value="0">Please select a number</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>       
        )
    }
}

export default connect()(Rating);
