import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';



class Course extends Component {
    constructor(){
        super();
        this.state = {
            courses: []  
        }
    }

    componentWillMount(){
        axios.get(`/api/course`)
        .then(res=>{
            this.setState({
                courses: res.data
            });
            console.log(res.data);
        })
    }

_newCourse = () => {
    axios.post(`/api/course/${this.state.course}`).then((res)=>{
        console.log("success")
    });
};



    render(){
        
        return (
            <div>
                <div>
                <h1>These are your courses: 
                    <div>
                        <div>
                    {this.state.courses.map((course, index) => {
                       return <Link to={`/CoursePage/${course._id}`}><li key ={index}>{course.name}</li> </Link>})}
                       </div>
                       </div>
                    </h1>
                <br/>
                <Link to='/AddCourse'>Add Course</Link>
                
                </div>
                 </div>
        )
    };
}

export default Course;