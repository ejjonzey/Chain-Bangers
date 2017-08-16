import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';


class CoursePage extends Component {
    constructor(){
        super();
        this.state = {
            course:{}
        }
    }

    componentWillMount(){
        axios.get(`/api/course/${this.props.match.params.courseId}`)
        .then(res=>{
            this.setState({
                course: res.data
            });
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
               <h1>
                   hello from course page
               </h1>
            </div>
        );
    }
}

export default CoursePage;