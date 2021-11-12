import {Card } from "antd";
import { QuestionOutlined} from "@ant-design/icons";


const CourseSection = () => {
  return (
    <div>
      <Card style={{ width: 900, height: 200, bordarRadius: "0.8rem" }}>
        <nav>
          <QuestionOutlined style={{ padding: 10 }} />

          <icon type="QuestionOutlined" />
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Avisos y novedades generales
          </a>
        </nav>
        <p>Aqui va la imagen que no sé cómo se pone</p>
      </Card>
    </div>
  );
};

export default CourseSection;
