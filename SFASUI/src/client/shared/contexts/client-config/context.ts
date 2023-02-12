import { createContext } from 'react';

import { ClientConfigContextType } from '.';

export const ClientConfigContext = createContext<ClientConfigContextType>({
    clientConfig: {},
    setClientConfig: () => {},
});
