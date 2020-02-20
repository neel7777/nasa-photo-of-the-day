import React from "react";
import { Jumbotron, Badge, Spinner } from "reactstrap";
import styled from "styled-components";

import "./App.css";

const SpaceImage = styled.img`
  width: 600px;
  height: 600px;
  object-fit: scale;
  flex-shrink: 2;
`;
const Info = styled.div `
color: white;
background-color: darkgreen;
`

const Details = props => {
    return (
        <container>
        
            
        <div class = "mainContent">
            <Jumbotron>
        
            <div>
            <div>
            <h3>{props.title}</h3>
        </div>
        <div className = "mainImage">
            <SpaceImage src = {props.image} alt = "cool spacey pic"></SpaceImage>
        </div>
        <Spinner color="info" />
            </div>
        <div>
        <div>
        <Badge color="primary">Date: {props.date}</Badge>
            
        </div>
        <Info>
            <p>About: {props.explanation}</p>
        </Info>
        </div>
        
        </Jumbotron>
        
        </div>
        
    </container>
    )
}

export default Details;