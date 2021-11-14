import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FilterListIcon from '@mui/icons-material/FilterList';



export default function TimeLine() {
  const colorFont = 'white'
  return (
    <div style={{ color: colorFont }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel htmlFor="grouped-select" style={{ color: colorFont }}>
          <EventNoteIcon style={{ color: colorFont }}/>Tareas
        </InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>Todos</em>
            </MenuItem>
          <MenuItem>
           <em>Atrasados</em> 
          </MenuItem>
          <ListSubheader>Fechas de vencimiento</ListSubheader>
          <MenuItem value={1}>Proximos 3 dias</MenuItem>
          <MenuItem value={2}>Proximos 7 dias</MenuItem>
          <MenuItem value={3}>Proximos 3 meses</MenuItem>
          <MenuItem value={4}>Proximos 6 meses</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select" style={{ color: colorFont }}> 
         <FilterListIcon style={{ color: colorFont, fontSize: '20,0 px'}}/>Grouping
        </InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value={1}>Ordenar por fecha</MenuItem>
          <MenuItem value={2}>Ordenar por curso</MenuItem>
        </Select>
      </FormControl>
    </div>


  );
}