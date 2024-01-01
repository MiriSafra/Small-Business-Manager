
import {useState, useEffect} from 'react'
import GlobalState from '../store/GlobalState'
import DisplayMeeting from './DisplayMeeting'
import { observer } from 'mobx-react';
import axios from 'axios'; 
import { Box } from '@mui/material';


const meeting = observer(() => 
  {
  function getappointments() {
    axios.get(`http://localhost:8787/appointments`).then((res) => {
      GlobalState.appointments=res.data;
      sortArr(GlobalState.appointments);

    });
  }
  function sortArr(arrCopy2) {
    return arrCopy2?.sort(function (a, b) {
      return new Date(a.dateTime) - new Date(b.dateTime);
    });
  }
  useEffect(() => {
    getappointments();
  }, []);
  return (
        <>
              <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#e0e0e0" p={2} marginTop={"300px"}></Box>
          {GlobalState.appointments.map((appointment, index) => (
            <DisplayMeeting key={index} appointment={appointment} />))}
            <Box/>
      </>

  );
});
export default meeting
