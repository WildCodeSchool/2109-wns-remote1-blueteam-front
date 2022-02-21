import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';

const Layout: FC = ({ children }) => (
  <>
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  </>
);

export default Layout;
