import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function AcorddionRecentBadges(){
    return(
        <div>
         <Accordion 
        style={{backgroundColor: 'transparent', color:'white', textAlign:'left'}}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography >Insignias recientes</Typography>
        </AccordionSummary>
        <AccordionDetails>
        </AccordionDetails>
      </Accordion>
        </div>

    )
}