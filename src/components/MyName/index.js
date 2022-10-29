import React from "react";
import "./style.css";

function MyName(){
    return(
        <div className = "uk-container">
            <div className = "uk-text-center">
                <div className = "name-container">
                    <h1 id ="myName">Mike J Marin</h1>
                    <h5 id ="myDescription"> Full-Stack Web Developer</h5>
                </div>
            </div>
        </div>
    )
}

export default MyName