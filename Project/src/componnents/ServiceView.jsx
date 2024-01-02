

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalState from '../store/GlobalState';
import Service from './Service';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { observer } from 'mobx-react';
import Box from '@mui/material/Box';

const ServiceView = observer(() => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [open, setOpen] = React.useState(false);

  const postService = async (data) => {
    await fetch('http://localhost:8787/service', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  };

  const addService = async (data) => {
    postService(data);
    GlobalState.addService(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id, name, description, duration, price };
    addService(data);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getServices() {
    axios.get(`http://localhost:8787/services`).then((res) => {
      GlobalState.services = res.data;
    });
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      <Box
        position="fixed"
        bottom={0}
        left={0}
        width="100%"
        bgcolor="#e0e0e0"
        p={2}
        textAlign="left"
      >
        {GlobalState.isAdmin && (
          <Button variant="outlined" onClick={handleClickOpen}>
            הוסף שירות
          </Button>
        )}
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>הוסף שירות</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <form>
              <Box marginBottom={2}>
                <TextField
                  id="filled-basic"
                  label="קוד"
                  variant="filled"
                  value={id}
                  onChange={(event) => setId(event.target.value)}
                />
              </Box>
              <Box marginBottom={2}>
                <TextField
                  id="filled-basic"
                  label="שם"
                  variant="filled"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Box>
              <Box marginBottom={2}>
                <TextField
                  id="filled-basic"
                  label="תיאור"
                  variant="filled"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Box>
              <Box marginBottom={2}>
                <TextField
                  id="filled-basic"
                  label="מחיר"
                  variant="filled"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </Box>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ביטול</Button>
          <Button onClick={handleSubmit}>שמור</Button>
        </DialogActions>
      </Dialog>

      <Box display="inline-table" flexDirection="column" alignItems="center" bgcolor="#e0e0e0" p={2}>
        {GlobalState.services.map((service, index) => (
          <Box key={index} bgcolor="white" p={2} mb={2}>
            <Service service={service} />
          </Box>
        ))}
      </Box>
    </>
  );
});

export default ServiceView;
