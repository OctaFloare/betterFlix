'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const ClientProviders = (
    { children }: { children: React.ReactNode}
) => {
    return <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
}