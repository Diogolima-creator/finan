import React from "react";
import { LoginArea, LoginFields, LoginTitle, LoginField, LoginButton } from "./styles"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";

export const Login = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return(
      <LoginArea>
        <LoginFields>
            <LoginTitle>
              Bem-Vindo, entre com sua conta!
            </LoginTitle>
            <LoginField>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <TextField id="outlined-basic" label="Username" variant="outlined" />
            </FormControl>
            </LoginField>
            <LoginField>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            </LoginField>
              <Button variant="contained">Entrar!</Button>
              <Button variant="text">Registar-se</Button>
        </LoginFields>
      </LoginArea>
  )
}