import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';

const Layout: FC = ({ children }) => (
  <>
    <div style={{ display: 'flex' }}>
      <Navbar />
      <p>{children}</p>
    </div>
  </>
);

export default Layout;
