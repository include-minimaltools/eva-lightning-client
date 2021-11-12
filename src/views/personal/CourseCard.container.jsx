import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { ExpandMoreOutlined, MenuOutlined } from "@mui/icons-material";
import CourseCard from "./CourseCard.component";
import { Col, Row } from "antd";

export default function CourseCardContainer() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (<Accordion
    expanded={expanded === "panel1"}
    onChange={handleChange("panel1")}
    style={{ height: '100%'}}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreOutlined />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <MenuOutlined/>
      <Typography variant="h5" style={{marginInlineStart:'1rem'}}>
        Cursos a los que se ha accedido recientemente
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Row gutter={[20,20]} justify='center'>
        <Col>
          <CourseCard title="Ing. Computación" text='Matemáticas III para la computación' alt='Imagen' maxWidth={300} src='https://s3-us-west-2.amazonaws.com/s3.laprensa.com.ni-bq/wp-content/uploads/2019/10/mate.jpg'/>
        </Col>
        <Col>
          <CourseCard title="Ing. Computación" text='Matemáticas III para la computación' alt='Imagen' maxWidth={300} src='https://s3-us-west-2.amazonaws.com/s3.laprensa.com.ni-bq/wp-content/uploads/2019/10/mate.jpg'/>
        </Col>
        <Col>
          <CourseCard title="Ing. Computación" text='Matemáticas III para la computación' alt='Imagen' maxWidth={300} src='https://s3-us-west-2.amazonaws.com/s3.laprensa.com.ni-bq/wp-content/uploads/2019/10/mate.jpg'/>
        </Col>
        <Col>
          <CourseCard title="Ing. Computación" text='Matemáticas III para la computación' alt='Imagen' maxWidth={300} src='https://s3-us-west-2.amazonaws.com/s3.laprensa.com.ni-bq/wp-content/uploads/2019/10/mate.jpg'/>
        </Col>
        <Col>
          <CourseCard title="Ing. Computación" text='Matemáticas III para la computación' alt='Imagen' maxWidth={300} src='https://s3-us-west-2.amazonaws.com/s3.laprensa.com.ni-bq/wp-content/uploads/2019/10/mate.jpg'/>
        </Col>
      </Row>
    </AccordionDetails>
  </Accordion>);
}
