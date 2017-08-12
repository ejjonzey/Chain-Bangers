import React, { Component } from 'react';
import {Link}from 'react-router-dom';


class Course extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>Hello from Course</h1>
                <Link to='/AddCourse'>Add Course</Link>
                </div>
            </div>
        );
    }
}

export default Course;