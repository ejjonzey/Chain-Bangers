import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';

class EditCourse extends Component {

    constructor(){
        super();
        this.state= {
            course:{
                name: "",
                location: "",
                holes: "",
                image: "",
                description: ""
            },
        };
    }
   
    
    componentWillMount(){
        const courseId = this.props.match.params.courseId;
        axios.get(`/api/course/${courseId}`)
        .then(res=>{
            this.setState({
                course: res.data
            });
            console.log(res.data);
        })
    }

    _handleInputChange = (event)=>{
        const attribute = event.target.name;
        let value = event.target.value;
    }

    
    
    _handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/Course", this.state).then((res) => {
          console.log("Success from submit");
        })
        .catch(err => console.log(err));
      };

      _handleDelete = (e) => {
        e.preventDefault();
        const courseId = this.props.match.params.courseId;
            axios.delete(`/api/course/${courseId}`).then((res) => {
          console.log("Success!");
        })
        .catch(err => console.log(err));
      };
    
      
    render() {
        return (
            <div>
               <div>
                   <h1>Edit This Course</h1>
               <form onSubmit={this._handleSubmit}>
                 <label>
                Name:
                <input type="text" name="name" value={this.state.course.name}/>
                <br/>
                Location:
                <input type="text" name="location" value={this.state.course.location}/>
                <br/>
                Holes:
                <input type="text" name="holes" value={this.state.course.holes}/>
                <br/>
                Image:
                <input type="text" name="image" value={this.state.course.image}/>
                <br/>
                description:
                <input type="text" name="description" value={this.state.course.description}/>
                <input type="submit" value="Submit" />
                 </label>
                </form>  
                <button onClick = {this._handleDelete}>Delete</button> 
               </div> 
               <Link to='/Course'>Save Course</Link>
            </div>
        
        );
    }
}

export default EditCourse;