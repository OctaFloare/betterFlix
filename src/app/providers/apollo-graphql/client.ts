import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = () => {return new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
})}
