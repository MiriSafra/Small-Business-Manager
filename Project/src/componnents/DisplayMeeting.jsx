

import { observer } from "mobx-react"
import './Meeting.css'
import { useState } from 'react'
import GlobalState from '../store/GlobalState';


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
            <div className={new Date(meeting.dateTime) - 24 <= new Date() ? "red" : getWeekBeforDate(meeting.dateTime) <= new Date() ? "orange" : "green"}>          
                <p>id:{meeting.id}</p>
                <p>serviceType:{meeting.serviceType}</p>
                <p>dateTime:{meeting.dateTime}</p>
                <p>clientName:{meeting.clientName}</p>
                <p>clientPhone:{meeting.clientPhone}</p>
                <p>clientEmail:{meeting.clientEmail}</p>
            </div>

    )

}))

export default DisplayMeeting;

