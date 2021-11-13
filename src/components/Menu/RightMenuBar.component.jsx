import React from "react";
import { Divider, Tree, Layout } from "antd";
import MicrosoftBlock from "./RightMenuBar/MicrosoftBlock.component";
import NextEventsBlock from "./RightMenuBar/NextEventsBlock.component";
import CalendarBlock from "./RightMenuBar/CalendarBlock.component";
import NavigationBlock from "./RightMenuBar/NavigationBlock.component";

const { Sider } = Layout;


export default function RightMenuBar(props) {
  const colorFont = "white";

  return (
    <Sider
      width={"350px"}
      height={"100%"}
      style={{
        backgroundColor: "#003792",
        // backgroundImage: `url(${background2})`,
        // backgroundImage: `url(https://lalupa.press/wp-content/uploads/2020/05/UNI.jpeg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      // className="site-layout-background"
      collapsedWidth={0}
      {...props}
    >
      <MicrosoftBlock />
      <NavigationBlock colorFont={colorFont} />
      <Divider orientation="left" style={{ color: colorFont }}>
        Línea de Tiempo
      </Divider>
      <Divider orientation="left" style={{ color: colorFont }}>
        Archivos Privados
      </Divider>
      <Divider orientation="left" style={{ color: colorFont }}>
        Usuarios en línea
      </Divider>
      <Divider orientation="left" style={{ color: colorFont }}>
        Insigneas recientes
      </Divider>
      <Divider orientation="left" style={{ color: colorFont }}>
        Calendario
      </Divider>
      <CalendarBlock />
      <NextEventsBlock />
    </Sider>
  );
}

