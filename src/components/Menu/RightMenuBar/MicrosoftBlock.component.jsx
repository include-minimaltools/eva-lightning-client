import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Perfil from "../../../images/Perfil.jpg";
import Gmail from "../../../images/Gmail.jpg";
import OneDrive from "../../../images/OneDrive.png";
import { Fragment } from "react";
import { Avatar, Col, Divider, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const colorFont = "white";

export default function MicrosoftBlock() {
  return (
    <Fragment>
      <div>
        <Accordion
          style={{
            backgroundColor: "transparent",
            color: "white",
            textAlign: "left",
          }}
        >
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Divider orientation="left" style={{ color: colorFont }}>
              <MenuOutlined style={{ marginRight: "10px" }} />
              Microsoft
            </Divider>
          </AccordionSummary>

          <AccordionDetails>
            <Row justify="center">
              <Avatar alt="Perfil" src={Perfil} size={100} />
            </Row>
            <Row style={{ marginBottom:'30px'}}>
              <Typography>
                Obed Miguel You are currently CONNECTED to Microsoft 365
              </Typography>
            </Row>

            <Row style={{ marginBottom:'10px'}}>
              <Link
                target="_blank"
                to="https://mail.google.com/mail/u/0"
                style={{ color: "white", position: "relative", left: 10}}
              ><Avatar shape="square" alt="Logo gmail" icon={<img src={Gmail}/>} size={30} style={imageStyle}/>My Email</Link>
            </Row>
            <Row>
              <Link
                target="_blank"
                to="https://onedrive.live.com/about/en-us/signin/"
                style={{ color: "white", position: "relative", left: 10 }}
              >
              <Avatar shape="square" alt="Logo gmail" icon={<img src={OneDrive}/>} size={30} style={imageStyle}/>
                My OneDrive
              </Link>
            </Row>
          </AccordionDetails>
        </Accordion>
      </div>
    </Fragment>
  );
}

const imageStyle = {padding:'2.5px', background:'white', marginRight:'10px'};