import {useState} from 'react'
import GlobalState from '../store/GlobalState'
import AdminMain from './AdminMain'
import Login from './Login'
import { observer } from "mobx-react"
import { useEffect } from 'react'
const Admin=(observer(()=>
{   
    useEffect(()=>{
        GlobalState.initBusiness();
    },)
    return(
    <>
    {
    !GlobalState.isLogin?
    <Login/>:
    <AdminMain/>
    }
    </>
    )
}))
export default Admin