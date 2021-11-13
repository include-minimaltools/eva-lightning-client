import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Avatar, Col, Divider, Row } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

export default function CalendarBlock() {
  const [value, setValue] = useState(new Date());
  return (
    <Accordion>
      <AccordionSummary>
        <Divider orientation="left" >
          <CalendarOutlined style={{ marginRight: "10px" }} />
          Calendario
        </Divider>
      </AccordionSummary>
      <AccordionDetails>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          style={{ background: "transparent" }}
        >
          <StaticDatePicker
            style={{ background: "transparent" }}
            displayStaticWrapperAs="desktop"
            openTo="year"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </AccordionDetails>
    </Accordion>
  );
}
