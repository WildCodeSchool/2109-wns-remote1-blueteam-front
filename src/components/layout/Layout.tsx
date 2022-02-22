import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';

const Layout: FC = ({ children }) => (
  <>
    <div>
      <Navbar>
        {children}
      </Navbar>
    </div>
  </>
);

export default Layout;
