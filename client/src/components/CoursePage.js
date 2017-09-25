import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';



class CoursePage extends Component {
    constructor(){
        super();
        this.state = {
            course:{
                name: "",
                location: "",
                holes: "",
                image: "",
                description: ""
            }
        }
    }

    componentWillMount(){
        const courseId = this.props.match.params.courseId;
        axios.get(`/api/course/${courseId}`)
        .then((res)=>{
            this.setState({
                course: res.data.course,
                name: res.data.name,
                location: res.data.location,
                holes: res.data.holes,
                image: res.data.image,
                description: res.data.description
            });
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
               <h1>
              <div>
                <h3>{this.state.name}</h3>
                <h3>{this.state.location}</h3>
                <h3>{this.state.holes}</h3>
                <h3>{this.state.image}</h3>
                <h3>{this.state.description}</h3>  
              </div>
               </h1>
               <Link to={`/EditCourse/${this.props.match.params.courseId}`}>Edit Course</Link>

            </div>
        );
    }
}

export default CoursePage;