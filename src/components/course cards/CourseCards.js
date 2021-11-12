import React, { Component } from "react";
import "./css/CourseCards.css";
import SubjectCards from "./SubjectCards";

function Coursecards() {
  const Course= ["Matemáticas III", "Física", "AED"];
/*  
  function Cards() {
    return Course.map(() => (
     <SubjectCards
        career="Ingenieria en Computación"
        course={Course.map(()=>{for (let index = 0; index < Course.length; index++) {
            return Course[index]
          
        }})}
        group="2M1"
        semester="II"
        year="21"
      />
    )); *//* 
         for (let i = 0; i < 3; i++) {
         return <SubjectCards 
          carrer="Ingenieria en Computación"
          course={()=> {for (let i = 0; i < course.length; i++) {
            return course[i];
          }
          }}
          group="2M1"
          semester="II"
          year="21"/> 
          
        }  */

  return (
    <div>
      <section >
        <h2>Cursos a los que se ha accedido recientemente</h2>
        {/* <div className="container">{Cards()}</div> */}
         <div className="container">
          <SubjectCards
            career="Ingenieria en Computación"
            course="Física"
            group="2M1"
            semester="II"
            year="21"
          />
        </div>
        <div className="container" >
          <SubjectCards
            career="Ingenieria en Computación"
            course="AED"
            group="2M1"
            semester="II"
            year="21"
          />
        </div>
      </section>
    </div>
  );
}

export default Coursecards;
