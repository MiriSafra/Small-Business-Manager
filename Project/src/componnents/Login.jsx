
import { useState } from 'react';
import GlobalState from '../store/GlobalState';
import { observer } from 'mobx-react';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button'; // ייבוא של כפתור

const Login = observer(() => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorAlert, setErrorAlert] = useState(null);

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const NameChange = (e) => {
    setName(e.target.value);
  };

  const saveIsLogin = async (name, password) => {
    const res = await fetch('http://localhost:8787/login', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      GlobalState.isLogin = true;
    } else {
      setName('');
      setPassword('');
      setErrorAlert('name or password is not correct!');
      GlobalState.isLogin = false;
    }
  };

  const handleCloseAlert = () => {
    setErrorAlert(null);
  };

  const handeleLogin = () => {
    saveIsLogin(name, password);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={NameChange}
        value={name}
        color=""
      />
      <br />
      <br />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={passwordChange}
        color=""
      />
      <br />
      <br />
      <Button variant="contained" onClick={handeleLogin} color="primary">login</Button> {/* שינוי כאן */}
      
      {errorAlert && (
        <Alert severity="warning" onClose={handleCloseAlert}>
          {errorAlert}
        </Alert>
      )}
    </>
  );
});

export default Login;
