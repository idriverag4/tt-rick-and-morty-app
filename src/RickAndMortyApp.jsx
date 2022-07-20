import { ApolloProvider } from '@apollo/client';
import { AppRouter } from "./router/AppRouter"
import { clientApollo } from "./apollo/clientApollo";

export const RickAndMortyApp = () => {
    return (
        <ApolloProvider client={clientApollo}>
            <AppRouter />
        </ApolloProvider>
    )
}



