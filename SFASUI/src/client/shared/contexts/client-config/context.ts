import { createContext } from 'react'

import { ClientConfig } from '.'

export const ClientConfigContext = createContext<ClientConfig>(
    {
        clientConfig: { token: '' },
        setClientConfig: () => {
        },
    },
)
