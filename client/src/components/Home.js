import React, { Component } from 'react';
import {Redirect, Link}from 'react-router-dom';
import styled from 'styled-components';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Please <Link to ="/AddCourse">Add a Course</Link> or  
                <Link to="/Course"> Check Out the Saved Courses </Link></h1>
            </div>
        );
    }
}

export default Home;
