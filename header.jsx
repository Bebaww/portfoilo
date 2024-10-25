
import React from "react"
import insta from './Untitled.png'
import tele from './tele.png'
import git from './git.png'
import './header.css'
export default function Header()
{
    return(
        <div className="header">
            <div className="social">
<a href="http://instagram.com/bebaw.t"><img src={insta} alt="" className="ins" /></a>
<a href="https://t.me/bebaw_t"><img src={tele} alt=""  className="tel"/></a>
<a href="http://github.com/bebaww"><img src={git} alt=""  className="github"/></a>
            </div>

            <div className="about">
                <h1>About Me</h1>
       
        <p>I am passionate FULL STACK Web Developer with over 3 years of experience in building responsive and dynamic websites.</p> 
        <p>I specialize in HTML5, CSS3,React, JavaScript, a Node.js,Php  and I love creating intuitive, user-friendly applications. With a strong background in both  front and back-end development, I'm always excited to work on projects that challenge me to learn and grow. </p>
       
            </div>

           
        </div>
    )
}
    
