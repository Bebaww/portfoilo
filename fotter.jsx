import React from "react";
import './fotter.css'
import telephone from './telephone.png'
import email from './email.png'
export default function Fotter()
{
    return(
        <div className="fotter">
 <h1>contact information</h1>
 <div className="two">
 <div className="phone">
<img src={telephone} alt="" className="fimg" />
<a href="tel:+251967125826">0967125826</a>

<a href="tel:+251707328392">0707328392</a>
</div>
<div className="email">
    <img src={email}alt="" />
    <a href="mailto:bekerebtolera@gmail.com">bekerebtolera@gmail.com</a>
</div>
 </div>
 
        </div>
       

    )
}