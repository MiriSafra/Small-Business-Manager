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
    <ServicesMain/>
    </>
    )
}
export default AdminMain