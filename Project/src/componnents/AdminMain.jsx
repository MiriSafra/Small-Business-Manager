import {useState} from 'react'
import GlobalState from '../store/GlobalState'
import Details from './Details'
import Login from './Login'
import ServicesMain from './ServicesMain'
function AdminMain()
{   
    GlobalState.setIsAdmin(true);
    return(
    <>   
    <Details/>
    <div  style={{ position: 'relative', top: '50%', marginTop:"300px", zIndex:"999"}}>
    <ServicesMain/>
    </div>
    </>
    )
}
export default AdminMain