//imports
import React, {Component} from 'react';

//page header provides user with info about what the form is
class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">Daily Feedback:</h1>
                <h4><i>...And don't you forget it!</i></h4>
            </header>
        )
    }
}

export default Header;