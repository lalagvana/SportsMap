import { createContext } from 'react';

import { CLIENT_CONFIG_INITIAL, ClientConfig } from './index';

export const ClientConfigContext = createContext<ClientConfig>(
    CLIENT_CONFIG_INITIAL
);
