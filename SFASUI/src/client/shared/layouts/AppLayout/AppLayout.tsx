import { ToastContainer } from 'react-toastify';
import React, { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';

import { Footer } from 'src/client/shared/components/Footer';
import { Header } from 'src/client/shared/components/Header';
import { useTheme } from 'src/client/shared/hooks/use-theme';

import styles from './AppLayout.module.css';

export type AppLayoutProps = PropsWithChildren<{
    className?: string;
    hasFooter?: boolean;
}>;

export const AppLayout = ({ children, className, hasFooter = true }: AppLayoutProps) => {
    const { isLight } = useTheme();

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: isLight ? '#59C2E7' : '#5F85DB',
                    colorBgElevated: isLight ? '#fafafa' : '#3D4351',
                    colorBgContainer: isLight ? '#fff' : '#3D4351',
                    colorSplit: isLight ? '#c2ccd6' : '#4E5C78',
                    colorBorder: isLight ? '#c2ccd6' : '#4E5C78',
                    controlHeightSM: 34,
                },
            }}
        >
            <div className={[styles['AppLayout'],className].join(' ')} data-color-mode={isLight ? 'light' : 'dark'}>
                <Header />
                {children}
                {hasFooter && <Footer />}
                <ToastContainer autoClose={5000} closeButton={() => <></>} hideProgressBar/>
            </div>
        </ConfigProvider>
    );
};

export const appLayoutRenderer = (className?: string, hasFooter?: boolean) => (page: JSX.Element) =>
    (
        <AppLayout className={className} hasFooter={hasFooter}>
            {page}
        </AppLayout>
    );
