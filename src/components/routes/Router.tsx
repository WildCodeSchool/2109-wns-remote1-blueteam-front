import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import MyFirstPage from '../firstpage/MyFirstPage';
import SignIn from '../signin/SignIn';
import SignUp from '../signup/SignUp';


import Layout from '../layout/Layout';

const Router: FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        {/* <Route path="/" element={Home} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myfirstpage" element={<MyFirstPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
