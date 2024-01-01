import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import GlobalState from "../store/GlobalState";
import Detailsview from "./Detailsview";
import ServiceView from "./ServiceView";

const User=observer((store)=>{
    return(
<>

<div style={{position: 'fixed', top: '4px',marginLeft: '300px',zIndex:"1000"}}>
    <Detailsview/>
    </div>
<div  style={{ position: 'relative', top: '50%', marginTop:"300px", zIndex:"999"}}>
    <ServiceView/>
</div>
</>)
})
export default User