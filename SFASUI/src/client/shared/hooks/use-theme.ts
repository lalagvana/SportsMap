import { useCallback, useContext } from 'react';

import { ThemeConfigContext, ThemeEnum } from 'src/client/shared/contexts/theme-config';

type UseThemeProps = {
    setLight(): void;
    setDark(): void;
    theme: ThemeEnum;
    isLight: boolean;
};

export const useTheme = (): UseThemeProps => {
    const { themeConfig, setThemeConfig } = useContext(ThemeConfigContext);

    const updateTheme = useCallback((currentTheme) => {
        localStorage.setItem('sportsmap_theme', currentTheme);
    }, []);

    const setLight = useCallback(() => {
        setThemeConfig(ThemeEnum.Light);
        updateTheme(ThemeEnum.Light);
    }, [setThemeConfig, updateTheme]);

    const setDark = useCallback(() => {
        setThemeConfig(ThemeEnum.Dark);
        updateTheme(ThemeEnum.Dark);
    }, [setThemeConfig, updateTheme]);

    const isLight = themeConfig === ThemeEnum.Light;

    return { setLight, setDark, theme: themeConfig, isLight };
};
