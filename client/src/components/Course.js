import React, { Component } from 'react';
import {Link}from 'react-router-dom';



class Course extends Component {

    render(){
        return (
            <div>
                <div>
                <h1>These are your courses</h1>
                <Link to='/AddCourse'>Add Course</Link>
                </div>
                {this.state.courses.map((course, i)=>(
                    <div key={i}>
                        <Link to={`/course/${course._id}`}>
                        {course.user}'s Course
                        </Link>
                        </div>
                ))}
            </div>
        );
    }
}

export default Course;