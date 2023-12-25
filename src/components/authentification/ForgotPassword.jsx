import * as React from 'react';
import {Avatar, Button, CssBaseline, Box, TextField, FormControlLabel, Checkbox, Link} from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailRequest from './EmailRequest';
import manasLogo from '../../assets/manas_logo.png';
import EmailCodeRequest from './EmailCodeRequest';
import ResetPassword from './ResetPassword';
import NewPasswordDone from './NewPasswordDone';

const defaultTheme = createTheme();

export function ForgotPassword(){
    const [component, setComponent] = React.useState('EmailRequest')
    return(
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src={manasLogo} alt='manas logo' sx={{ m: 1, bgcolor: 'secondary.main', height: 100, width:100 }} />           
          {component == 'EmailCodeRequest' && <EmailCodeRequest setComponent={setComponent}/>}
          {component == 'EmailRequest' && <EmailRequest setComponent={setComponent}/>} 
          {component == 'ResetPassword' && <ResetPassword setComponent={setComponent}/>}  
          {component == 'NewPasswordDone' && <NewPasswordDone setComponent={setComponent}/>}

        </Box>
      </Container>
    </ThemeProvider>
    )
}
