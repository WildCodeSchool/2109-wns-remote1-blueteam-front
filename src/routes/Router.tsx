import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import MyFirstPage from '../screens/firstpage/MyFirstPage';
import SignIn from '../screens/signin/SignIn';
import SignUp from '../screens/signup/SignUp';
import Profile from '../screens/profile/Profile';


import Layout from '../components/layout/Layout';

const Router: FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        {/* <Route path="/" element={Home} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myfirstpage" element={<MyFirstPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
