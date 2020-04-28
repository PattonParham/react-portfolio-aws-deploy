import React from "react";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "../components/Grid/Grid";
import "./Portfolio.css";

const Portfolio = () => {

    return(
        <div>
            <div className="portfoliocardtop">
                <Row className="topRow">
                    <Col size="sm">
                    <a href = "https://serene-ravine-67154.herokuapp.com/" className="employeeDirectoryLink">Employee Directory</a>
                <div className="employeeDirectory gif"></div>
                
                </Col>

                </Row>
                <div className="middle">
                <Row className="middleRowLink">
                    
                <Container> 
                <a href = "https://immense-hamlet-86412.herokuapp.com/" className="InnerJoinLink">InnerJoin</a>
                <a href="https://github.com/PattonParham/Employee-Tracker" className="employeeTrackerLink">EmployeeTracker</a>
                </Container>  
               
                </Row>

                <Row className="middleRow">
                    <Col size="sm">
                    
                <div className="InnerJoin middlegif"></div>
               
                </Col>
                <Col size="sm">
                
                <div className="employeeTracker middlegif"></div>
                
                </Col>

                </Row>
                <div className="Links">
                    <Col size="lg">
                <Row>
                    
                   <Container>
                <a href = "https://jackjewell.github.io/TakeAHike//" className="TakeAHikeLink">TakeAHike</a>
            
                <a href = "https://pattonparham.github.io/Weather-Dashboard/" className="WeatherLink">WeatherDashboard</a>
              
                <a href = "https://pattonparham.github.io/Password-Generator/" className="PassGenLink">PasswordGenerator</a>
                </Container>
                </Row>
                </Col>
                </div>
                <Row className="bottomRow">
                    <Col size="sm">
                    
                <div className="TakeAHike bottomgif"></div>
                
                </Col>
                <Col size="sm">
                
                <div className="Weather bottomgif"></div>
                
                </Col>
                <Col size="sm">
                
                <div className="PassGen bottomgif"></div>
                
                </Col>
                </Row>
                
                </div>
                


            </div>

            <Row>
                    <button  className="buttonRow linkedin"><a href="https://www.linkedin.com/in/patton-parham-016b851a5/" className="buttontext">LinkedIn</a></button>
                    <button  className="buttonRow github"><a href="https://github.com/PattonParham" className="buttontext">GitHub</a></button>
                    <button  className="buttonRow resume"><a href = "https://peaceful-river-21360.herokuapp.com/2020PattonJParhamResume.pdf" className="buttontext">Resume</a></button>
            </Row>
        </div>
    );


};

export default Portfolio;