import React, { Component } from 'react';
import {Link}from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';



class Home extends Component {
    render() {

        const fadeAnimation = keyframes`${fadeInDown}`;
        
                const TitleDiv = styled.div`
                    display: flex;
                    flex-direction: column;
                    height: 95vh;
                    justify-content: center;
                    align-items: center;
                    color: red;
                    background-image: url("http://www.innovadiscs.com/wp-content/uploads/2015/06/course-target-featured.jpg");
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-position: center;
                    h1{
                        color: blue;
                        text-align: center;
                        font-size: 70px;
                        font-family: Acme, cursive;
                    }
                    a{
                        color: red;
                        font-size: 35px;
                        border-radius: 20px;
                        text-decoration: none;
                        background-color: yellow;
                        opacity: 0.7;
                        padding: 20px 30px;
                    }
                `
                const FadeInDiv = styled.div`
                    animation: 2s {fadeAnimation};
                ` 
        
        return (
            <div>
               <TitleDiv>
                <FadeInDiv><h1>Welcome To Chain Bangers</h1></FadeInDiv>

                <FadeInDiv><h2><Link to ="/AddCourse">Add a Course</Link></h2></FadeInDiv>

                <FadeInDiv><h2><Link to="/Course"> Check Out the Saved Course</Link></h2></FadeInDiv>
                
                </TitleDiv>
            </div>
        );
    }
}

export default Home;
