import React, { FC, useState } from 'react';
import './App.css';

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import { BrowserRouter } from 'react-router-dom';
import userContext from './context/userContext';

import Router from './routes/Router';
import { IUser } from './interfaces/users';

const link = createHttpLink({
  // uri: 'http://localhost:5050/graphql',
  uri: process.env.REACT_APP_API_URL || '/graphql',
  credentials: 'include',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App: FC = () => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <userContext.Provider value={[user, setUser]}>
          <Router />
        </userContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
