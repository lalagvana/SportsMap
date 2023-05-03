import { ToastContainer } from 'react-toastify';
import React, { PropsWithChildren } from 'react';

import { Footer } from 'src/client/shared/components/Footer';
import { Header } from 'src/client/shared/components/Header';

export type AppLayoutProps = PropsWithChildren<{
    className?: string;
}>;

export const AppLayout = ({ children, className }: AppLayoutProps) => {
    return (
        <div className={className}>
            <Header />
            {children}
            <Footer />
            <ToastContainer />
        </div>
    );
};

export const appLayoutRenderer = (className?: string) => (page: JSX.Element) =>
    <AppLayout className={className}>{page}</AppLayout>;
