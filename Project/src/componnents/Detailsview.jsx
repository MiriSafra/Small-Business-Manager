
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import { Container, Typography, Button, Box, Paper, Grid, ThemeProvider, createTheme } from '@mui/material';
import GlobalState from '../store/GlobalState';

const DetailsView = observer(() => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [logo, setLogo] = useState('');
  const [description, setDescription] = useState('');

  const handleEdit = () => {
    GlobalState.sentToEdit(true);
  };

  const getBusinessData = () => {
    axios.get('http://localhost:8787/businessData').then((res) => {
      const businessData = res.data;
      GlobalState.business = res.data;
      setId(businessData.id);
      setName(businessData.name);
      setAddress(businessData.address);
      setPhone(businessData.phone);
      setLogo(businessData.logo);
      setDescription(businessData.description);
    });
  };

  useEffect(() => {
    getBusinessData();
  }, []);

  const theme = createTheme({
    palette: {
      background: {
        default: '#f2f2f2',
      },
    },
  });

  const fixedStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
  };

  const maxHeightPercentage = 2
  
  
  
  ; // שינוי הגובה כאן

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" style={{ marginTop: `${maxHeightPercentage}%` }}>
        <Paper style={{ padding: '10px', ...fixedStyle }}>
          <Grid container spacing={2}>
            <Grid item xs={20} md={40} >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    marginBottom: '20px',
                  }}
                >
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>
                <Typography variant="h2" gutterBottom>
              {description}
                </Typography>
                <div>
                  {/* תז: {id} <br /> */}
                 בבעלות: {name} <br />
                 כתובתינו: {address} <br />
                  ליצירת קשר: {phone} <br />
                  {GlobalState.isAdmin && <Button onClick={handleEdit}>עריכה</Button>}
                </div>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <div style={{ height: `${maxHeightPercentage}%` }} />
      </Container>
    </ThemeProvider>
  );
});

export default DetailsView;



