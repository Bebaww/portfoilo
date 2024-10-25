import React from "react";
import './main.css'
import html from './html.png'
import rea from './rea.jpg'
import js from './js.jpg'
import tail from './tailwind.png'
import cs from './cs.jpg'
import mongo from './mongo.png'
import mysql from './mysql.jpg'
import php from './php.png'
import pyh from './pyh.png'
import nod from './nod.png'
export default function Main()

{
    return(
<div className="main">
    <div className="front">
<h2>FRONT-END</h2>
<a href=""><img src={html} alt="" /></a>
<a href=""><img src={rea} alt="" /></a>
<a href=""><img src={js} alt="" /></a>
<a href=""><img src={cs} alt="" /></a>
<a href=""><img src={tail} alt="" /></a>
    </div>
    <div className="back">
        <h2>BACK-END</h2>
<a href=""><img src={php} alt="" /></a>
<a href=""><img src={mysql} alt="" /></a>
<a href=""><img src={mongo} alt="" /></a>
<a href=""><img src={pyh} alt="" /></a>
<a href=""><img src={nod} alt=""   className="nod"/></a>



    </div>
    

</div>
    )
}