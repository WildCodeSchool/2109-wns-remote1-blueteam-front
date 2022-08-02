import React, { ChangeEvent, FormEvent, useState } from "react";
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
import { AlertColor, CircularProgress, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IPasswordInput from "../../interfaces/passwordInput";
import { IUserChangePassword } from "../../interfaces/users";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";

const theme = createTheme();

const CHANGEPASSWORD = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
        changePassword(data: $data)
    }
`;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ChangePassword = () => {
  let navigate = useNavigate();

  const initialMessage = "Votre mot de passe a bien été mis à jour !";
  const initialSeverity = "warning" as AlertColor | undefined;

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(initialMessage);
  const [severity, setSeverity] = useState(initialSeverity);
  const [values, setValues] = useState<IPasswordInput>({
    password: "",
    showPassword: false
  });

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

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleChange =
    (prop: keyof IPasswordInput) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const [changePassword, { loading }] = useMutation(CHANGEPASSWORD);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const queryParams = new URLSearchParams(window.location.search);
      const token = queryParams.get("token");

      const formData = new FormData(event.currentTarget);

      const UserChangePassword: IUserChangePassword = {
        token: token as string,
        password: (formData.get("password") as string) || ""
      };

      setOpen(true);
      setSeverity("success");
      await changePassword({ variables: { data: UserChangePassword } });
    } catch ({error}) {
      setOpen(true);
      setSeverity("error");
      // @ts-ignore
      errors.map(element => setMessage(element.message));
    }

  };

  return loading ?(
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
            Change your password
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
              name="password"
              label="Password"
              type={values.showPassword ? "text" : "password"}
              id="password"
              autoComplete="new-password"
              onChange={handleChange("password")}
              value={values.password}
              autoFocus
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change your password
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

export default ChangePassword;
