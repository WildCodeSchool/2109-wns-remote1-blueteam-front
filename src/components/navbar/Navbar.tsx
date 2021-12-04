import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/myfirstpage">My First Component</Link>
    </nav>
  </div>
);

export default Navbar;
