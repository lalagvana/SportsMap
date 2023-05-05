import { ToastContainer } from 'react-toastify';
import React, { PropsWithChildren } from 'react';
import { ConfigProvider } from 'antd';

import { Footer } from 'src/client/shared/components/Footer';
import { Header } from 'src/client/shared/components/Header';
import { useTheme } from 'src/client/shared/hooks/use-theme';

export type AppLayoutProps = PropsWithChildren<{
    className?: string;
}>;

export const AppLayout = ({ children, className }: AppLayoutProps) => {
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
                },
            }}
        >
            <div className={className} data-color-mode={isLight ? 'light' : 'dark'}>
                <Header />
                {children}
                <Footer />
                <ToastContainer />
            </div>
        </ConfigProvider>
    );
};

export const appLayoutRenderer = (className?: string) => (page: JSX.Element) =>
    <AppLayout className={className}>{page}</AppLayout>;
