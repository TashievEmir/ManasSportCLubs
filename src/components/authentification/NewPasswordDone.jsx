import * as React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function ResetPassword(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    return(
    <div>
            <Typography component="h1" variant="h5">
              Сиздин паролуңуз ийгиликтүү жаңыланды!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                
              <Link to="/signin">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Тастыктоо
                </Button>
              </Link>
            </Box>
    </div>
    )
}
