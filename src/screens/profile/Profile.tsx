/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { gql, useMutation } from '@apollo/client';
import { stringToColor, stringAvatar } from '../../services/avatarServices';
import { IUser, IUserUpdate } from '../../interfaces/users';
import useUser from '../../hooks/useUser';

const theme = createTheme();

const Input = styled('input')({
  display: 'none',
});

const UPDATE_USER = gql`
  mutation UpdateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateUser(data: $data, where: $where) {
      avatar
      firstname
      lastname
      job
      email
    }
  }
`;

const Profile = (): ReactJSXElement => {
  const [pictureUrl, setPictureUrl] = useState('');

  const [contextUser, loadingUser] = useUser();

  const [userState, setUserState] = useState(contextUser as Partial<IUser>);

  const [updateUser, { data, loading, error }] = useMutation<
    { updatedUser: { _id: string } }, // server answer
    { data: IUserUpdate; where: { id: string } } // data sent to server
  >(UPDATE_USER);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userUpdateInput = {
      firstname: { set: formData.get('firstName') as string },
      lastname: { set: formData.get('lastName') as string },
      email: { set: formData.get('email') as string },
      job: { set: formData.get('job') as string },
      // password: (data.get('password') as string) || '',
    };

    console.log(userUpdateInput);

    if (userState.id) {
      updateUser({
        variables: {
          data: userUpdateInput,
          where: {
            id: userState.id,
          },
        },
      });
      console.log(contextUser);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Typography
          component="h1"
          variant="h5"
          sx={{ alignSelf: 'flex-start' }}
        >
          Profile :
        </Typography>
        <Container
          maxWidth="xs"
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Stack
              direction="row"
              alignItems="flex-end"
              justifyContent="space-evenly"
              spacing="2"
            >
              <Avatar
                alt={`${userState.firstname} ${userState.lastname}`}
                src={pictureUrl || '.'}
                sx={{
                  width: 100,
                  height: 100,
                  minWidth: 50,
                  minHeight: 50,
                  border: 2,
                  borderColor: '#1565c0',
                  bgcolor: stringToColor(
                    `${userState.firstname} ${userState.lastname}`
                  ),
                }}
              >
                {stringAvatar(`${userState.firstname} ${userState.lastname}`)}
              </Avatar>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={(e) => {
                    const targetFile = e.target.files
                      ? e.target.files[0]
                      : false;
                    if (targetFile) {
                      setPictureUrl(URL.createObjectURL(targetFile));
                    }
                  }}
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </Stack>
            <TextField
              margin="normal"
              fullWidth
              id="firstName"
              label="Firstname"
              name="firstName"
              autoComplete="firstname"
              value={userState.firstname}
              placeholder=""
              onChange={(e) => {
                const newUserState = {
                  ...userState,
                  firstname: e.target.value,
                };
                setUserState(newUserState);
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="lastName"
              label="Lastname"
              name="lastName"
              autoComplete="lastname"
              value={userState.lastname}
              placeholder=""
              onChange={(e) => {
                const newUserState = {
                  ...userState,
                  lastname: e.target.value,
                };
                setUserState(newUserState);
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="job"
              label="Job"
              name="job"
              autoComplete="organization-title"
              value={userState.job}
              placeholder=""
              onChange={(e) => {
                const newUserState = {
                  ...userState,
                  job: e.target.value,
                };
                setUserState(newUserState);
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={userState.email}
              placeholder=""
              onChange={(e) => {
                const newUserState = {
                  ...userState,
                  email: e.target.value,
                };
                setUserState(newUserState);
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              name="current_password"
              label="Current Password"
              type="password"
              id="current_password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              fullWidth
              name="new_password"
              label="New Password"
              type="password"
              id="new_password"
              autoComplete="new-password"
            />
            <TextField
              margin="normal"
              fullWidth
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="confirm_password"
              autoComplete="new-password"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: 1 }}
            >
              Confirm
            </Button>
          </Box>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;
