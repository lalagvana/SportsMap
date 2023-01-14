import { createContext } from 'react'

import { ClientConfigContextType } from '.'

export const ClientConfigContext = createContext<ClientConfigContextType>(
    {
        clientConfig: { token: '', refreshToken: '', expiresIn: 0 },
        setClientConfig: () => {
        },
    },
)
