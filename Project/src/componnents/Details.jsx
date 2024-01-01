import {useState} from 'react'
import GlobalState from '../store/GlobalState';
import DetailsDesign from './DetailsDesign';
import Detailsview from './Detailsview';
import { observer } from "mobx-react"
const Details=(observer(()=>
{
return(
    <>
    {GlobalState.edit&&<DetailsDesign  />}
    {!GlobalState.edit&&<Detailsview/>}

   
    </>
    
)

}))
export default Details