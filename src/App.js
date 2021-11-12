import React from "react";
import { Layout, Breadcrumb, Button, Col, Row, Collapse } from "antd";

import "./App.css";
import CourseCards from "./components/course cards/CourseCards";
import CourseSection_title from "./components/Course Section/CourseSection_title";
import CourseSection_About from "./components/Course Section/CourseSection_About";
import Interface from "./components/Interface.component";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { position } from "dom-helpers";
import { borderRadius, padding } from "@mui/system";

const { Content, Footer } = Layout;

function App() {
  return (
        <Interface>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 10,
              minHeight: 280,
              backgroundColor: "white",
              borderRadius: "0.8rem",
              float: "left",
            }}
          >{/* 
            {<CourseCards />} */}
            
        <CourseSection_title/>
       <CourseSection_About/> 
    
          </Content>
        </Interface>
  );
}

export default App;
