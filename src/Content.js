import React, {useState, useEffect} from "react";
import "./App.css";
import Details from "./Details"
import axios from "axios";

const Content = () => {
    const [pic, setPic] = useState([]);

    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ')
        .then(response =>{
            console.log(response.data);
            setPic([response.data]);
        })
        .catch(error =>{
            console.log("Data not returned", error);
        })

    }, []);
    return (
        <div className = "mainContent">
            {pic.map(photo =>{
                return (
                <Details 
                title = {photo.title} 
                date = {photo.date} 
                explanation = {photo.explanation} 
                image = {photo.hdurl}/>
                );
            })}     

    </div>
    )
}

export default Content;