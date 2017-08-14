import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';


class Course extends Component {
    constructor(){
        super();
        this.state = {
            user: {
                course: []
            }
        }
    }

    componentWillMount(){
        const id = this.props.match.params.courseId
        axios.get(`/api/course`)
        .then(res=>{
            this.setState({
                courses: res.data
            });
            console.log(res.data);
        })
    }
    render(){
        return (
            <div>
                <div>
                <h1>These are your courses: {this.props.course}</h1>
                <br/>
                <Link to='/AddCourse'>Add Course</Link>
                </div>
                 </div>
        )
    };
}

export default Course;