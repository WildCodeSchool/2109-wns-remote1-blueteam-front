import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import MyFirstPage from './components/firstpage/MyFirstPage';
// import routes from './config/routes';

const App: FC = () => (
  <>
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/myfirstpage">First Page</Link>
          </li>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/myfirstpage" element={<MyFirstPage />} />
        </Routes>
      </div>
    </Router>
  </>
);

export default App;
