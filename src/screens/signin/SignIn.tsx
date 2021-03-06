import { FC, FormEvent, useContext, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../assets/images/blue_logo.png';
import Copyright from '../../components/copyright/Copyright';
import { IUser, IUserLogin } from '../../interfaces/users';
import useUser from "../../hooks/useUser";

const theme = createTheme();

const LOGIN = gql`
  query Query($data: LoginInput!) {
    login(data: $data) {
      id
      firstname
      lastname
      email
      job
      role
    }
  }
`;

const SignIn: FC = () => {
  const [, setUser] = useUser();

  const [login, { data }] = useLazyQuery<
    { login: IUser },
    { data: IUserLogin }
  >(LOGIN);

  useEffect(() => {
    if (data) {
      setUser(data.login);
    }
  }, [data]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const UserLogin = {
      email: (formData.get('email') as string) || '',
      password: (formData.get('password') as string) || '',
    };

    await login({ variables: { data: UserLogin } });
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don&apos;t have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default SignIn;
