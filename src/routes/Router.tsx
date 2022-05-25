import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from '../screens/signin/SignIn';
import SignUp from '../screens/signup/SignUp';
import Profile from '../screens/profile/Profile';
import TaskList from '../screens/tasklist/TaskList';
import Layout from '../components/layout/Layout';
import TaskDetails from '../screens/taskDetails/TaskDetails';
import TeamView from '../screens/teamview/TeamView';

import useUser from '../hooks/useUser';

const Router: FC = () => {
  const [user] = useUser();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={user ? <Profile /> : <SignIn />} />
        <Route
          path="/taskdetails"
          element={user ? <TaskDetails /> : <SignIn />}
        />
        <Route path="/tasklist" element={user ? <TaskList /> : <SignIn />} />
        <Route path="/teamview" element={user ? <TeamView /> : <SignIn />} />
      </Routes>
    </Layout>
  );
};

export default Router;
