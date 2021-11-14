import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import StaticDatePickerLandscape from "./Calendar.componet";

export default function AcorddionCalendar(){
    return(
        <div>
         <Accordion 
        style={{backgroundColor: 'transparent', color:'white', textAlign:'left'}}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography >Calendario</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <StaticDatePickerLandscape/>
        </AccordionDetails>
      </Accordion>
        </div>

    )
}