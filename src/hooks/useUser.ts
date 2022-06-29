import { gql, useQuery } from '@apollo/client';
import { useContext } from 'react';
import userContext from '../context/userContext';
import { IUser } from '../interfaces/users';


const useUser = (): [IUser | undefined, (value:any)=>void] => {
  const [user, setUser] = useContext(userContext);

  return [user, setUser];
};

export default useUser;
