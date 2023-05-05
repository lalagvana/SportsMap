import { createContext } from 'react';

import { ThemeConfig, ThemeEnum } from '.';

export const ThemeConfigContext = createContext<ThemeConfig>({
    themeConfig: ThemeEnum.Light,
    setThemeConfig: () => {},
});
