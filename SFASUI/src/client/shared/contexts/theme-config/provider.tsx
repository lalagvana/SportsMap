import { PropsWithChildren, useEffect, useState } from 'react';
import { ThemeConfigContext, ThemeEnum } from '.';

type ClientConfigProviderProps = PropsWithChildren<{
    initialTheme?: ThemeEnum;
}>;

export const ThemeConfigProvider = ({ children, initialTheme }: ClientConfigProviderProps) => {
    const [themeConfig, setThemeConfig] = useState<ThemeEnum>(initialTheme ?? ThemeEnum.Light);

    useEffect(() => {
        const storageTheme = (localStorage.getItem('sportsmap_theme') as ThemeEnum) ?? themeConfig;
        if (storageTheme) {
            setThemeConfig(storageTheme);
        }

        const darkClass = 'dark_theme';
        const lightClass = 'light_theme';

        if (storageTheme === ThemeEnum.Dark) {
            document.body.classList.remove(lightClass);
            document.body.classList.add(darkClass);
        } else {
            document.body.classList.remove(darkClass);
            document.body.classList.add(lightClass);
        }
    }, [themeConfig]);

    return (
        <ThemeConfigContext.Provider value={{ themeConfig, setThemeConfig }}>{children}</ThemeConfigContext.Provider>
    );
};
