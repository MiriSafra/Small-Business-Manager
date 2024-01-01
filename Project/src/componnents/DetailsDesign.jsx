


import { useState,useEffect } from 'react';
import GlobalState from '../store/GlobalState';
import TextField from '@mui/material/TextField';
import { observer } from 'mobx-react';
const DetailsDesign = observer(() => {
  const [id, setId] = useState(GlobalState.business.id);
  const [name, setName] = useState(GlobalState.business.name);
  const [address, setAddress] = useState(GlobalState.business.address);
  const [phone, setPhone] = useState(GlobalState.business.phone);
  const [logo, setLogo] = useState(GlobalState.business.logo);
  const [description, setDescription] = useState(GlobalState.business.description);

  const postDetails=async(data)=> {
    await fetch('http://localhost:8787/businessData', {
     method: 'POST',
     headers:
     {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
   })
 }
  const toShow = () => {
    const data = {id: id, name: name, address: address, phone: phone, logo: logo, description: description  };
    postDetails(data)
    GlobalState.business=data
    GlobalState.sentToEdit(false);
  }
 
 
  return (
    <>
      <h2>עידכון פרטי עסק</h2>    
      <TextField value={id} onChange={(e) => setId(e.target.value)} label="תז" variant="standard" fullWidth margin="normal" />
      <br />     
      <TextField value={name} onChange={(e) => setName(e.target.value)} label="שם" variant="standard" fullWidth margin="normal" />
      <br />      
      <TextField value={address} onChange={(e) => setAddress(e.target.value)} label="כתובת" variant="standard" fullWidth margin="normal" />
      <br />
      <TextField value={phone} onChange={(e) => setPhone(e.target.value)} label="טלפון" variant="standard" fullWidth margin="normal" />
      <br />  
      <TextField value={logo} onChange={(e) => setLogo(e.target.value)} label="לוגו" variant="standard" fullWidth margin="normal" />
      <br />    
      <TextField value={description} onChange={(e) => setDescription(e.target.value)} label="תיאור" variant="standard" fullWidth margin="normal" />
      <br />
      <button onClick={toShow} >אישור</button>
    </>
  );
});


export default DetailsDesign;




