import FacebookIcon from '../assets/facebook.svg?react';
import InstagramIcon from '../assets/instagram.svg?react';
import LinkedIcon from '../assets/linkedin.svg?react';
import GithubIcon from '../assets/github.svg?react';
import { useState } from "react";

function Form() {  
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();  

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/mdkqdkdk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
    });

    if (res.ok) {
        setStatus("SUCCESS");
        e.target.reset();
    } else {
        setStatus("ERROR");
    }
    };
    
    return (  
        <div className="contact-form">
            <form onSubmit={handleSubmit} >
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required /> 
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />    
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>       
                <button type="submit">Send</button>

                {status === "SUCCESS" && <p className="success">Message sent!</p>}
                {status === "ERROR" && <p className="error">Something went wrong.</p>}

            </form>
            <div className="contact-socials">
                <a href="https://www.facebook.com/AkiMarqueses" className='social-buttons'>
                    <FacebookIcon className="icon-label"/>
                    <span className="text-label">Facebook</span>
                </a>
                <a href="https://www.instagram.com/achillesmarqueses/" className='social-buttons'>
                    <InstagramIcon className="icon-label"/>
                    <span className="text-label">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/achilles-marqueses/" className='social-buttons'>
                    <LinkedIcon className="icon-label"/>
                    <span className="text-label">LinkedIn</span>
                </a>
                <a href="https://github.com/akimarq" className='social-buttons'>
                    <GithubIcon className="icon-label"/>
                    <span className="text-label">GitHub</span>
                </a>
            </div>
        </div>
    );
}
export default Form;