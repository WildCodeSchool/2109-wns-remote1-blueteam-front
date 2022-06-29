import { gql, useMutation, useApolloClient } from '@apollo/client';

const LOGOUT = gql`
    mutation Mutation {
        logout
    }
`;

const useLogoutMutation = () => {
  const apolloClient = useApolloClient();
  const [ mutation, mutationResults ] = useMutation( LOGOUT );

  const logoutMutation = async () => {
    // Remove all data from the store since we are now logged out.

    await mutation();
    await apolloClient.clearStore();
  };

  return { logoutMutation, results: mutationResults };
};

export default useLogoutMutation;

