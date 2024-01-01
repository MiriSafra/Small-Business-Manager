
import { useState } from 'react'
import GlobalState from '../store/GlobalState';
import { observer } from "mobx-react"
import './meeting'

const DisplayMeeting = (observer(({ appointment }) => {

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
            <div className={new Date(appointment.dateTime) - 24 <= new Date() ? "red" : getWeekBeforDate(appointment.dateTime) <= new Date() ? "orange" : "green"}>          
                <p>id:{appointment.id}</p>
                <p>serviceType:{appointment.serviceType}</p>
                <p>dateTime:{appointment.dateTime}</p>
                <p>clientName:{appointment.clientName}</p>
                <p>clientPhone:{appointment.clientPhone}</p>
                <p>clientEmail:{appointment.clientEmail}</p>
            </div>

    )

}))

export default DisplayMeeting

