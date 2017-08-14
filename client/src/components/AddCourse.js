import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';



class AddCourse extends Component {


  _handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/course", this.state).then((res) => {
      console.log("Success!");
    })
    .catch(err => console.log(err));
  };

    render() {
        return (
            <div>
               <div>
                   <h1>Add A Course</h1>
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
               </div> 
               <Link to='/EditCourse'>Edit course</Link>
            </div>
        );
    }
}

export default AddCourse;
