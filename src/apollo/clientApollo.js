import { ApolloClient, InMemoryCache } from '@apollo/client';

export const clientApollo = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});
