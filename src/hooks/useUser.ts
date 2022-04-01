import { gql, useQuery } from '@apollo/client';
import { useContext } from 'react';
import userContext from '../context/userContext';
import { IUser } from '../interfaces/users';

const GET_USER = gql`
  query GetConnectedUser {
    getConnectedUser {
      id
      firstname
      lastname
      email
      job
      role
    }
  }
`;

const useUser = (): [IUser | undefined, boolean] => {
  const [, setUser] = useContext(userContext);

  const { data, loading } = useQuery(GET_USER);

  const user: IUser | undefined = data?.getConnectedUser || undefined;

  setUser(user);

  return [user, loading];
};

export default useUser;
