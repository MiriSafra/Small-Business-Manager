

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

        <div className={new Date(meeting.dateTime) - 24 <= new Date() ? "red" : getWeekBeforDate(meeting.dateTime) <= new Date() ? "orange" : "green"} >

            <Box width={"300px"}>


                <p>מזהה פגישה:{meeting.id}</p>
                <p>סוג שירות:{meeting.serviceType}</p>
                <p>:תאריך פגישה<br />
                    {meeting.dateTime}</p>
                <p>שם לקוח:{meeting.clientName}</p>
                <p>טלפון:{meeting.clientPhone}</p>
                <p>:דוא"ל<br />
                    {meeting.clientEmail}</p>
            </Box>
        </div>

    )

}))

export default DisplayMeeting;

