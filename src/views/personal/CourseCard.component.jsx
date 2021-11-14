import React, { Component } from "react";
import "./css/SubjectCards.css";
import images from "../../views/personal/assets/images";

export default function CourseCard({
  career,
  course,
  group,
  semester,
  year, ...props
}) {
  function GetRandomint (min, max){
    return Math.floor(Math.random() * ((max-min) + min))
  } 

  return (
    <div style={{ width:'385px'}} {...props}>
      <section>
        <article class="post">
          <img src={images[GetRandomint(1, 5)].img} width="350" height="200" />
          <p>{career}</p>
          <h2>
            {course} - {group} - {semester} - {year}
          </h2>
        </article>
      </section>
    </div>
  );
}
