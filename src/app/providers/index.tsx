'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ApolloProvider } from "@apollo/client"
import { client } from "./apollo-graphql/client"

const queryClient = new QueryClient()

export const ClientProviders = (
    { children }: { children: React.ReactNode}
) => {
    return <ApolloProvider client={client()}>
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </ApolloProvider>
}