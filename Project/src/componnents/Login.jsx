
import { useState } from 'react';
import GlobalState from '../store/GlobalState';
import { observer } from 'mobx-react';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = observer(() => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorAlert, setErrorAlert] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
        sx={{ width: '100%', mb: 2 }} // הוספת סגנון להגדלת גודל השדה
      />
      <br />
      <br />
      <TextField
        type={showPassword ? 'text' : 'password'}
        label="Password"
        value={password}
        onChange={passwordChange}
        color=""
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ width: '100%', mb: 2 }} // הוספת סגנון להגדלת גודל השדה
      />
      <br />
      <br />
      <Button variant="contained" onClick={handeleLogin} color="primary">
        Login
      </Button>

      {errorAlert && (
        <Alert severity="warning" onClose={handleCloseAlert}>
          {errorAlert}
        </Alert>
      )}
    </>
  );
});

export default Login;

