import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../screens/signin/SignIn';
import SignUp from '../screens/signup/SignUp';
import Profile from '../screens/profile/Profile';
import TaskList from '../screens/tasklist/TaskList';
import Layout from '../components/layout/Layout';
import TaskDetails from '../screens/taskDetails/TaskDetails';

const Router: FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/taskdetails" element={<TaskDetails />} />
      <Route path="/tasklist" element={<TaskList />} />
    </Routes>
  </Layout>
);

export default Router;
