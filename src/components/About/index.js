/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";
import Mugshot from "../../assets/images/aboutMe.jpg"

function About(){
    return(
        <div className = "uk-container">
            <div className = "uk-text-center">
                <div className = "about-container">
                    <div className = "about-me">
                    <img id = "mugshot" src={Mugshot} alt="Me" style={{ width: 180 }} />
                        <h1 className="about-me-title uk-heading-divider">About Me</h1>
                        <div className = "about-text-container"> 
                            <p>
                            Hi. My name is Mike J Marin and I am a newly graduated front end web developer. I recently graduated from the Full Stack Web Developer program from The University of Miami and received certificate of completion

                            My journey through completing this course has taught me the necessity of hard work, discipline, and flexibility in order to be a proficient developer.
                            </p>
                            <br></br>
                            <p>
                                Currently, I work as a financial business banker for Truist Bank, the merged
                                bank of Suntrust and BB&T. Although I have enjoyed my time and experience as
                                a professional banker, my goal is to shift from banking to software development.
                                I am looking for an opportunity to exercise my new skills as a web developer and
                                hone my skills working with a team that I can support and learn from. I am not
                                only excellent with customers, but understand the importance of hard work and
                                dedication, especially when developing a new skill. I am both eager and excited
                                to begin my career as a developer.
                            </p>
                        </div>
                        <div className="uk-text-center uk-text-middle">
                            <a uk-icon="icon: github-alt ; ratio: 1.5" className="contact-icon contact-link-icon" href="https://github.com/mikejmarin25"  target="_blank"></a>
                            <a uk-icon="icon: mail ; ratio: 1.5" className="contact-icon contact-link-icon" href="mailto:mikejmarin25@gmail.com"></a>
                            <a uk-icon="icon: linkedin ; ratio: 1.5" className="contact-icon contact-link-icon" href="https://www.linkedin.com/in/mikemarin25" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About