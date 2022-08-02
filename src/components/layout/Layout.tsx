import React, { FC } from 'react';
import Navbar from '../navbar/Navbar';

const Layout: FC = ({ children }) => <Navbar>{children}</Navbar>;

export default Layout;
