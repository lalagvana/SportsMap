import { NextPage } from 'next';

export type ExtendedNextPage<P = {}, IP = P> = NextPage<P, IP> & {
    layoutRenderer?: (content: JSX.Element) => JSX.Element;
};
