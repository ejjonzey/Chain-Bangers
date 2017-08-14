import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import axios from 'axios';


class EditCourse extends Component {
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
               </div> 
               <Link to='/EditCourse'>Edit course</Link>
            </div>
        );
    }
}

export default EditCourse;