import React, { Component } from "react";
import "./css/SubjectCards.css";
import images from "./assets/images";

function Subjectcards(props){
    
    function GetRandomint (min, max){
        return Math.floor(Math.random() * ((max-min) + min))
    } 
     
    return (
      <div >
         <section>
          <article class="post">
            <img src={images[GetRandomint(1,5)].img} width="350" height="200"/>
            <p>{props.career}
            </p>
            <h2>{props.course} - {props.group} - {props.semester} - {props.year}</h2>
          </article>
        </section>
        </div>
    );
}
export default Subjectcards;
