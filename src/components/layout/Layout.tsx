import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';
import Copyright from '../copyright/Copyright';

const Layout: FC = ({ children }) => (
  <>
    <div>
      <Navbar>
        {children}
        <Copyright />
      </Navbar>
    </div>
  </>
);

export default Layout;
