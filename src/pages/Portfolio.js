import React from "react";
import {Link} from "react-router-dom";
import {Col, Row, Container} from "../components/Grid/Grid";
import "./Portfolio.css";

const Portfolio = () => {

    return(
        <div>
            <div className="portfoliocardtop nonmobilecard">
                <Row className="topRow">
                    <Col size="sm">
                    <a href = "https://serene-ravine-67154.herokuapp.com/" className="employeeDirectoryLink">Employee Directory</a>
                <div className="employeeDirectory gif"></div>
                
                </Col>

                </Row>
                <div className="middle">
                <Row className="middleRowLink">
                    
              
                    <Col size="sm-6">
                    
                <a href = "https://immense-hamlet-86412.herokuapp.com/" className="InnerJoinLink"> <button className="placeholder">Inner-Join</button></a>
                
                </Col>
                <Col size="sm-6">
                
                <a href="https://github.com/PattonParham/Employee-Tracker" className="employeeTrackerLink"><button className="placeholder">Employee Tracker</button></a>
                
                </Col>
                
               
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
                    
                <a href = "https://jackjewell.github.io/TakeAHike//" className="TakeAHikeLink"><button className="placeholder">Take A Hike</button></a>
                <a href = "https://pattonparham.github.io/Weather-Dashboard/" className="WeatherLink"><button className="placeholder">Weather Dashboard</button></a>
                <a href = "https://pattonparham.github.io/Password-Generator/" className=""><button className="placeholder PassGenLink">Password Generator</button></a>
                

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
                    <button  className="buttonRow linkedin nonmobilecard"><a href="https://www.linkedin.com/in/patton-parham-016b851a5/" className="buttontext">LinkedIn</a></button>
                    <button  className="buttonRow github nonmobilecard" ><a href="https://github.com/PattonParham" className="buttontext">GitHub</a></button>
                    <button  className="buttonRow resume nonmobilecard"><a href = "https://peaceful-river-21360.herokuapp.com/2020PattonJParhamResume.pdf" className="buttontext">Resume</a></button>
            </Row>



            <div className="portfoliocardtop mobilecard">
            <Row className="middleRowLink">
                    
                    <Col size="sm-6">
                        
                        <a href = "https://serene-ravine-67154.herokuapp.com/" className="employeeDirectoryLink"> <button className="placeholder">Employee Directory</button></a>
                        
                        </Col>
                        <Col size="sm-6">
                        
                        <a href="https://pattonparham.github.io/Password-Generator/"  className="PassGenLink"><button className="placeholder">Password Generator</button></a>
                        
                        </Col>  
                   
                    </Row>    
            <Row className="middleRow">
                    <Col size="sm-6">
                    
                <div className="employeeDirectory middlegif"></div>
               
                </Col>
                <Col size="sm-6">
                
                <div className="PassGen middlegif"></div>
                
                </Col>

                </Row>
                <div className="middle">
                <Row className="middleRowLink">
                    
                <Col size="sm-6">
                    
                    <a href = "https://immense-hamlet-86412.herokuapp.com/" className="InnerJoinLink"> <button className="placeholder">Inner-Join</button></a>
                    
                    </Col>
                    <Col size="sm-6">
                    
                    <a href="https://github.com/PattonParham/Employee-Tracker" className="employeeTrackerLink"><button className="placeholder">Employee Tracker</button></a>
                    
                    </Col>  
               
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
                   <a href = "https://jackjewell.github.io/TakeAHike//" className="TakeAHikeLink"><button className="placeholder">Take A Hike</button></a>
                <a href = "https://pattonparham.github.io/Weather-Dashboard/" className="WeatherLink"><button className="placeholder">Weather Dashboard</button></a>
               
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
 
                </Row>
                
                </div>
                


            </div>

            <Row className="mobilecard">
                    <button  className="buttonRow linkedin mobilecard"><a href="https://www.linkedin.com/in/patton-parham-016b851a5/" className="buttontext">LinkedIn</a></button>
                    <button  className="buttonRow github mobilecard"><a href="https://github.com/PattonParham" className="buttontext">GitHub</a></button>
                    <button  className="buttonRow resume mobilecard"><a href = "https://peaceful-river-21360.herokuapp.com/2020PattonJParhamResume.pdf" className="buttontext">Resume</a></button>
            </Row>
        </div>
    );


};

export default Portfolio;