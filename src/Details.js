import React from "react";

import "./App.css";

const Details = props => {
    return (
    <div class = "mainContent">
        <div>
            <h3>{props.title}</h3>
        </div>
        <div className = "mainImage">
            <img src = {props.image} alt = "cool spacey pic"></img>
        </div>
        <div>
            <p>Date: {props.date} </p>
        </div>
        <div>
            <p>About: {props.explanation}</p>
        </div>

    </div>
    )
}

export default Details;