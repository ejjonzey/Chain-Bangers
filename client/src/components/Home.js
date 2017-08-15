import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import styled from 'styled-components';



class Home extends Component {
    render() {
        return (
            <div>
               <div>
                <h1> Please <Link to ="/AddCourse">Add a Course</Link></h1>
                </div> or  
                <div>
                <h1><Link to="/Course"> Check Out the Saved Courses </Link></h1>
                </div>
            </div>
        );
    }
}

export default Home;
