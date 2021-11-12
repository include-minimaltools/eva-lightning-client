import { InfoOutlined } from "@ant-design/icons";
import { Card } from "antd";

const CourseSection_About = () => {
  const divleft = { float: "left" };
  const divfont = { color: "black", fontSize: "1rem", fontFamily: "arial" };
  return (
    <div>
      <Card
        style={{
          width: 250,
          height: 80,
          backgroundColor: "lightblue",
          margin: 5,
          borderRadius: "10rem",
        }}
      >
        {/*  <div style={divleft}>
               <Card
                style={{ borderRadius: "1rem", width: "2.3rem", height: "2.3rem" ,padding:"0rem" }}
            }
             */}{" "}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "4rem",
            float: "left",
            height: "2rem",
            width: "2rem",
            marginRight: "0.4rem",
            padding: "0.3rem",
          }}
        >
          {" "}
          <InfoOutlined style={{ color: "black", fontSize: "1.3rem" }} />{" "}
        </div>
        {/*    */}
        <h3> Información del curso</h3>
      </Card>
      <div style={(divleft, divfont)}>
        Estimados estudiantes: Bienvenidos al curso FISICA I en su Entorno
        Virtual de Aprendizaje EVA, que la Universidad Nacional de Ingeniería
        pone a tu disposición en el proceso de aprendizaje con el
        aprovechamiento de las Tic. En el curso aprenderás… para dar
        cumplimientos de los objetivos…
      </div>
    </div>
  );
};

export default CourseSection_About;
