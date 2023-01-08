import { PropsWithChildren, useState } from 'react';
import { ClientConfigContext } from '.';

type ClientConfigProviderProps = PropsWithChildren<{}>;

export const ClientConfigProvider = ({
    children,
}: ClientConfigProviderProps) => {
    const [clientConfig, setClientConfig] = useState({ token: '' });

    return (
        <ClientConfigContext.Provider value={{ clientConfig, setClientConfig }}>
            {children}
        </ClientConfigContext.Provider>
    );
};
