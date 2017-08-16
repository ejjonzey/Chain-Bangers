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
        const id = this.props.match.params.courseId;
        axios.get(`/api/course/${id}`)
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
              <div>
                <Link to={`/EditCourse/${this.props.match.params.courseId}`}>Edit Course{this.props.match.params.courseId}</Link>
              </div> })}
               </h1>
            </div>
        );
    }
}

export default CoursePage;