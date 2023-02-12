export type ClientConfig = object;

export type ClientConfigContextType = {
    clientConfig: ClientConfig;
    setClientConfig: (cfg: ClientConfig) => void;
};
