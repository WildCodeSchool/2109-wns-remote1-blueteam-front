import { FC } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Typography } from '@mui/material';
import Layout from '../components/layout/Layout';
import SignIn from '../screens/signin/SignIn';
import SignUp from '../screens/signup/SignUp';
import Profile from '../screens/profile/Profile';
import ProjectList from '../screens/projectList/ProjectList';
import TaskList from '../screens/taskList/TaskList';
import TaskDetails from '../screens/taskDetails/TaskDetails';
import TeamView from '../screens/teamview/TeamView';

import useUser from '../hooks/useUser';

const Router: FC = () => {
  const [user] = useUser();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={user ? <TaskList /> : <SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="profile" element={user ? <Profile /> : <SignIn />} />
        <Route path="projects" element={user ? <Outlet /> : <SignIn />}>
          <Route index element={user ? <ProjectList /> : <SignIn />} />
        </Route>
        <Route
          path="taskdetails"
          element={user ? <TaskDetails /> : <SignIn />}
        />
        <Route path="tasklist" element={user ? <TaskList /> : <SignIn />} />
        <Route path="teamview" element={user ? <TeamView /> : <SignIn />} />
        <Route
          path="*"
          element={
            user ? (
              <Typography
                align="center"
                py="1em"
                component="h1"
                fontWeight="bold"
              >
                No route found
              </Typography>
            ) : (
              <SignIn />
            )
          }
        />
      </Routes>
    </Layout>
  );
};

export default Router;
