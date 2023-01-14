export type ClientConfig = {
    token: string,
    refreshToken: string,
    expiresIn: number,
}

export type ClientConfigContextType = {
    clientConfig: ClientConfig;
    setClientConfig: Function;
};
