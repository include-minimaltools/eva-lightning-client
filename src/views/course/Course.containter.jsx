import React, { useEffect } from "react";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import CourseBackground from "../../images/svgs/CourseBackground";
import CourseAbout from "./about/CourseAbout.component";
import CourseActivity from "./activity/CourseActivity.component";
import CourseMenuBar from "./CourseMenuBar.component";
import CourseEvaluation from "./evaluation/CourseEvaluation.component";
import CourseLearning from "./learning/CourseLearning.component";
import CourseResource from "./resource/CourseResource.component";

export default function CourseContainer() {
  const { section, id } = useParams();
  useEffect(() => {
    console.log(id, section);
  }, [id, section]);

  return (
    <Col>
      <Row style={{ background:'white', borderRadius:'10px', padding:'8px 0 4px 8px', width:'max', justifyContent:'center'}}>
        <CourseBackground course="Asignatura" career="Carrer" width={null}/>
      </Row>
      <Row style={{ background:'white', borderRadius:'10px', width:'max', margin:'1rem 0 1rem 0'}}>
        <CourseMenuBar course={id} section={section} style={{backgroundColor:'transparent'}} />
      </Row>
      <Row style={{height:'750px', background:'white', borderRadius:'10px'}}>
        <Col flex='auto'>
          {section === "about" && <CourseAbout id={id}/>}
          {section === "activity" && <CourseActivity id={id}/>}
          {section === "learning" && <CourseLearning id={id}/>}
          {section === "resource" && <CourseResource id={id}/>}
          {section === "evaluation" && <CourseEvaluation id={id}/>}
        </Col>
      </Row>
    </Col>
  );
}
