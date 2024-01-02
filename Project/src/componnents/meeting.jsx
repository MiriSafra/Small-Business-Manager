
import {useState, useEffect} from 'react'
import GlobalState from '../store/GlobalState'
import DisplayMeeting from './DisplayMeeting'
import { observer } from 'mobx-react';
import axios from 'axios'; 
import { Box } from '@mui/material';



const Meeting = observer(() => 
  {
  function getMeeting() {
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
    getMeeting();
  }, []);
  return (
        <>
              <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#e0e0e0" p={2} marginTop={"150px"}>
          {GlobalState.appointments.map((meeting, index) => (
            <DisplayMeeting key={index} meeting={meeting} />))
            }
          </Box>
      </>

  );
});
export default Meeting;
