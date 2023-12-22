import * as React from 'react';
import {Avatar, Button, CssBaseline, Box, TextField, FormControlLabel, Checkbox, Link} from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmailRequest from './EmailRequest';
import manasLogo from '../../assets/manas_logo.png';
import EmailCodeRequest from './EmailCodeRequest';

const defaultTheme = createTheme();

export function ForgotPassword(){
    const [submitted, setSubmitted] = React.useState(false)
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
          <Avatar src={manasLogo} alt='manas logo' sx={{ m: 1, bgcolor: 'secondary.main' }} />
          
          {
            submitted ?
            <EmailCodeRequest/> :
            <EmailRequest setSubmitted={setSubmitted}/>
          }

        </Box>
      </Container>
    </ThemeProvider>
    )
}
