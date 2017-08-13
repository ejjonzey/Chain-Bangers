import React, { Component } from 'react';
import {Redirect, Link}from 'react-router-dom';
import styled from 'styled-components';

class Home extends Component {
    render() {
        const LoginDiv = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 50vh;
            p{
                color: red;
                font-size: 15px;
            }
        `
        if (this.props.loggedIn){
            return <Redirect to={`/user/${this.props.username}`} />
        }

        return (
            <div>
                <h1>Please <Link to ="/AddCourse">Add a Course</Link> or <Link to="/Course">Check Out the Saved Courses</Link></h1>
                <LoginDiv>
                {this.props.loginError ? <p>{this.props.loginError}</p> : null}
                <form onSubmit={this.props.handleLogin}>
                    <div>
                    <label htmlFor="username">Username: </label>
                    <input name="username" type="text" required/>  
                    </div>
                    <div>
                    <label htmlFor="password">Password: </label>
                     <input name="password" type="password" required/> 
                    </div>
                    <button>Log in</button>
                </form>
                </LoginDiv>
            </div>
        );
    }
}

export default Home;
