import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Footer from '../components/garcia/garciaFooter';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { Stack } from '@mui/system';
import { Button, TextField } from '@mui/material';

function HomeApp() {
  return (
    <div className="App">
        <ResponsiveAppBar/>
        <h1>Reserve a Seat</h1>
        <h4 style={{fontWeight:100}}>SakayTa Bus Reservation System is a system that reserves a bus and is a wonderful system with handsome</h4>
          <div className="Bus-input" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Stack direction="row" spacing={2}>
              <TextField id="outlined-basic" label="Location" variant="outlined" />
              <TextField id="outlined-basic" label="Destination" variant="outlined" />
              <TextField id="outlined-basic" label="Date" variant="outlined" />
              <Button variant="contained" style={{backgroundColor:'#F79110', fontWeight:"600"}}>Search</Button>
              </Stack>
          </div>
        <Footer name="Victor Emmanuel F. Garcia" course="BSCS" section="F1"/>
    </div>
  );
}

export default HomeApp;