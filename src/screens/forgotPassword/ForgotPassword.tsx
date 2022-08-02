import * as React from "react";
import { FormEvent } from "react";
import { gql, useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/images/blue_logo.png";
import { useNavigate } from "react-router-dom";
import { IUserWithoutPassword } from "../../interfaces/users";
import { AlertColor, CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const theme = createTheme();

const FORGOTPASSWORD = gql`
    mutation Mutation($data: ForgotPasswordInput!) {
        forgotPassword(data: $data)
    }
`;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ForgotPasswordFunction = () => {
  let navigate = useNavigate();

  const initialMessage = "Le mail à bien été envoyé";
  const initialSeverity = "warning" as AlertColor | undefined;

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState(initialMessage);
  const [severity, setSeverity] = React.useState(initialSeverity);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (severity === "success") {
      if(reason === "clickaway"){
        navigate("/signin");
      }
      navigate("/signin");
    }
    setOpen(false);
    setMessage(initialMessage);
    setSeverity(initialSeverity);
  };

  const [forgotPassword, { loading }] = useMutation(FORGOTPASSWORD);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const UserWithoutPassword: IUserWithoutPassword = {
        email: (formData.get("email") as string) || ""
      };

      await forgotPassword({
        variables: { data: UserWithoutPassword }
      });
      setOpen(true);
      setSeverity("success");
    } catch ({ errors }) {
      setOpen(true);
      setSeverity("error");
      // @ts-ignore
      errors.map(element => setMessage(element.message));
    }
  };

  return loading ? (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <CircularProgress size="10rem" color="warning" />
        </Box>
      </Container>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div className="logo">
            <img src={logo} width="200" height="200" alt="Logo" />
          </div>
          <Typography component="h1" variant="h5">
            Forgot your password ?
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send to email
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/signin" variant="body2">
                  Sign in
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
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default ForgotPasswordFunction;



