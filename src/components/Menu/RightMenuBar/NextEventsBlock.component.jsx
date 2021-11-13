import React from "react";
import { Divider, Tree, Layout } from "antd";

const colorFont = "white";

export default function NextEventsBlock() {
  return (
    <div>
      <Divider orientation="left" style={{ color: colorFont }}>
        ≡ Próximos eventos
      </Divider>
      <ul style={{ color: "white"}}>
        <li><h1 style={{ color: "white"}}>No hay eventos proximos</h1></li>
      </ul>
    </div>
  );
}
