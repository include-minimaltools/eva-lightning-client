import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Perfil from '../../../images/Perfil.jpg'
import Gmail from '../../../images/Gmail.jpg'
import OneDrive from '../../../images/OneDrive.png'
import { Fragment } from 'react';
import { Avatar, Divider } from 'antd';
import Stack from '@mui/material/Stack';

const colorFont = 'white'

export default function MicrosoftBlock() {
  return (
    <Fragment>
      <Divider orientation="left" style={{ color: colorFont }}>≡ Microsoft</Divider>

      <div>
        <Accordion 
          style={{backgroundColor: 'transparent', color:'white', textAlign:'left'}}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Stack>
              <Avatar alt="Perfil" src={Perfil}/>
            </Stack>
            <Typography>Obed Miguel You are currently CONNECTED to Microsoft 365</Typography>
          </AccordionSummary>
        </Accordion>

        <div>
          <img src={Gmail} alt="" style={{width:35, height:30}}/>
          <a target='_blank' href={'https://mail.google.com/mail/u/0'} style={{color:'white', position:'relative', left:10}}> My Email</a>
        </div>

        <div>
        <h1></h1><h1></h1>
        <img src={OneDrive} alt="" style={{width:35, height:30}}/>
          <a target='_blank' href={'https://onedrive.live.com/about/en-us/signin/'} style={{color:'white', position:'relative', left:10}}> My OneDrive</a>
        </div>
      </div>
    </Fragment>
    );
}