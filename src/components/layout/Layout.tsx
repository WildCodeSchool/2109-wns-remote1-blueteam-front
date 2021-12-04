import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';

const Layout: FC = ({ children }) => (
  <>
    <Navbar />
    <p>{children}</p>
  </>
);

export default Layout;
