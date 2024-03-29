import React from "react";
import { Col, Row, Typography, Layout, Avatar } from "antd";
import { UserOutlined, MessageFilled, BellFilled } from "@ant-design/icons";

import logo from '../../images/logoUNI.png';
import background from '../../images/RLP-background.png';

const { Header } = Layout;
const { Text } = Typography;

const leftElementsStyle = { 
  height: "40px", 
  alignItems: "center", 
  display: "flex" 
}

export default function TopMenuBar() {
  return (
    <Header
      className="header"
      style={{ backgroundColor: "#003792", 
      backgroundImage: `url(${background})`, 
      height: "74px" }}
    >
      <Row>
        <Col>
          <div className="logo" style={{ margin: "5px" }}>
            <img src={logo}></img>
          </div>
        </Col>
        <Col flex="auto" style={{ justifyContent: "end", display: "flex" }}>
          <Row
            justify="end"
            align="top"
            gutter={[15, 0]}
          >
            <Col style={leftElementsStyle}>
              <MessageFilled style={{ fontSize: "18px", color: "white" }} />
            </Col>
            <Col style={leftElementsStyle}>
              <BellFilled style={{ fontSize: "20px", color: "white" }} />
            </Col>
            <Col style={leftElementsStyle}>
              <Text style={{ color: "white" }}>Obed Miguel Reyes Amador</Text>
            </Col>
            <Avatar icon={<UserOutlined />} style={{ margin: "5px" }} />
          </Row>
        </Col>
      </Row>
    </Header>
  );
}