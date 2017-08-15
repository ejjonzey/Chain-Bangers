import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';

class EditCourse extends Component {

    _handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/course", this.state).then((res) => {
          console.log("Success!");
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
                <input type="text" name="name" />
                <br/>
                Location:
                <input type="text" name="location" />
                <br/>
                Holes:
                <input type="text" name="holes" />
                <br/>
                Image:
                <input type="text" name="image" />
                <br/>
                description:
                <input type="text" name="description" />
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