

import { observer } from "mobx-react"
import './Meeting.css'
import { useState } from 'react'
import GlobalState from '../store/GlobalState';
import { Box } from "@mui/material";
import { KitesurfingSharp } from "@mui/icons-material";


const DisplayMeeting = (observer(({ meeting }) => {

    console.log(new Date())

    function getWeekBeforDate(date) {
        const myDate = new Date(date);
        return new Date(
            myDate.getFullYear(),
            myDate.getMonth(),
            myDate.getDate() - 7,
        );
    }

    return (
        <Box width={"300px"}>
 
        <div className={(new Date(meeting.dateTime).getFullYear() == new Date().getFullYear()&&new Date(meeting.dateTime).getMonth()==new Date().getMonth()&&new Date(meeting.dateTime).getDay()==new Date().getDay() )? "red": new Date(meeting.dateTime) < new Date()?"":
          getWeekBeforDate(meeting.dateTime) <= new Date()
          ? "orange" : "green"} >

          


                <p>מזהה פגישה:
                {meeting.id}</p>
                <p>:סוג שירות<br />
                {meeting.serviceType}</p>
                <p>:תאריך פגישה<br />
                    {meeting.dateTime}</p>
                <p>:שם לקוח<br />
                {meeting.clientName}</p>
                <p>:טלפון<br />
                {meeting.clientPhone}</p>
                <p>:דוא"ל<br />
                    {meeting.clientEmail}</p>
          
        </div>
        </Box>
    )

}))

export default DisplayMeeting;

