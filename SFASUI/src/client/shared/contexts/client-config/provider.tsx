import { PropsWithChildren, useState } from 'react';
import { ClientConfigContext } from '.';

type ClientConfigProviderProps = PropsWithChildren<object>;

export const ClientConfigProvider = ({ children }: ClientConfigProviderProps) => {
    const [clientConfig, setClientConfig] = useState({});

    return (
        <ClientConfigContext.Provider value={{ clientConfig, setClientConfig }}>
            {children}
        </ClientConfigContext.Provider>
    );
};
