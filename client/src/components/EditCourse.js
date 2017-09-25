import React, { Component } from 'react';
import {Link, Redirect}from 'react-router-dom';
import axios from 'axios';

class EditCourse extends Component {

    constructor(){
        super();
        this.state= {
            redirect: false,
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

    _handleChange =(event)=>{
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        const course = {...this.state.course};
        course[attributeName] = attributeValue;
   
        this.setState({course})
    }
    

    
    
    _handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)
        axios.put(`/api/course/${this.props.match.params.courseId}`, this.state.course).then((res) => {
          console.log("Success from submit");
          this.setState({redirect:true})          
        })
        .catch(err => console.log(err));
      };

      _handleDelete = (e) => {
        e.preventDefault();
            axios.delete(`/api/course/${this.state.match.params.course_id}`).then((res) => {
          console.log("Success!");
        })
        .catch(err => console.log(err));
      };
    
      
    render() {
        if (this.state.redirect){
            return <Redirect to='/Course/:id'/>
          } else
        return (
            <div>
               <div>
                   <h1>Edit This Course</h1>
               <form onSubmit={this._handleSubmit}>
               <label>
              Name:
              <input type="text" name="name" onChange={this._handleChange} value={this.state.course.name}/>
              <br/>
              Location:
              <input type="text" name="location" onChange={this._handleChange} value={this.state.course.location}/>
              <br/>
              Holes:
              <input type="text" name="holes" onChange={this._handleChange} value={this.state.course.holes}/>
              <br/>
              Image:
              <input type="text" name="image" onChange={this._handleChange} value={this.state.course.image}/>
              <br/>
              description:
              <input type="text" name="description"onChange={this._handleChange} value={this.state.course.description} />
              <input type="submit" value="Submit" />
               </label>
              </form>    
                 
               </div> 
               <Link to='/Course/:id'>Save Course</Link>
               <button onClick = {this._handleDelete}>Delete</button>
            </div>
        
        );
    }
}

export default EditCourse;