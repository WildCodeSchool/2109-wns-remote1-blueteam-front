import * as React from 'react';
import { gql, useMutation } from '@apollo/client';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IPage from '../../interfaces/pages';
import logo from '../../assets/images/blue_logo.png';
import Copyright from '../../components/copyright/Copyright';
import { IUserRegister } from '../../interfaces/users';

const theme = createTheme();

const REGISTER = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
    }
  }
`;

const SignUp = (props: IPage) => {
  const [register] = useMutation<
    { register: { _id: string } }, // server answer
    { data: IUserRegister } // data sent to server
  >(REGISTER);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newUser = {
      firstname: (data.get('firstName') as string) || '',
      lastname: (data.get('lastName') as string) || '',
      email: (data.get('email') as string) || '',
      job: (data.get('job') as string) || '',
      password: (data.get('password') as string) || '',
    };

    register({ variables: { data: newUser } });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="logo">
            <img src={logo} width="200" height="200" alt="Logo" />
          </div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  type="string"
                  autoFocus
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  type="string"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="job"
                  label="Your Job"
                  name="job"
                  autoComplete="job"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
export default SignUp;
