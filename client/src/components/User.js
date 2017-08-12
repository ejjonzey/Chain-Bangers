
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class UserPage extends Component {
    render() {
        if (!this.props.loggedIn){
            return <Redirect to={`/`} />
        } else {
        return (
            <div>
                <p>This is your page!</p>
            </div>
        );}
    }
}

export default UserPage;