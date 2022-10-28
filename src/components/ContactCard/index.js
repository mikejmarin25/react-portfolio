/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./style.css";

function ContactCard(){
    return(
        <div className="uk-container">
            <div className = "uk-text-center">
                <p>You can reach out to me via social media, but the best way to contact me is through email me at <a id= "emailLink" href="mailto:mikejmarin25@gmail.com">mikejmarin25@gmail.com</a></p>
                <p>This form is another way to get in touch</p>
                <div className="uk-text-center uk-text-middle">
                    <a uk-icon="icon: github-alt" className="contact-icon contact-link-icon" href="https://github.com/mikejmarin25"  target="_blank"></a>
                    <a uk-icon="icon: linkedin" className="contact-icon contact-link-icon" href="https://www.linkedin.com/in/mikejmarin25/" target="_blank"></a>
                    <a uk-icon="icon: facebook" className="contact-icon contact-link-icon" href="https://www.facebook.com/mikejmarin25" target="_blank"></a>
                    <a uk-icon="icon: twitter" className="contact-icon contact-link-icon" href="https://twitter.com/mikejmarin25" target="_blank"></a>
                </div>

            </div>
        </div>

    )
}

export default ContactCard;