export enum ThemeEnum {
    Light= 'light',
    Dark ='dark'
}

export type ThemeConfig = {
    themeConfig: ThemeEnum;
    setThemeConfig: (cfg: ThemeEnum) => void;
};
