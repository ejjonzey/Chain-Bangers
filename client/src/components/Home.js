import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import styled from 'styled-components';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Chain Bangers</h1>
                </div>
                
                <Link to='/AddCourse'>Add Course</Link>
                
            </div>
        );
    }
}

export default Home;