import { createContext, Dispatch, SetStateAction } from 'react';
import { IUser } from '../interfaces/users';

const userContext = createContext<
  [IUser | undefined, Dispatch<SetStateAction<IUser | undefined>>]
>([undefined, () => undefined]);

export default userContext;
