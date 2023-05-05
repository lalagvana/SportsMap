import { useCallback } from 'react';

import { useTheme } from 'src/client/shared/hooks/use-theme';

import './ThemeSwitcher.css';

export const ThemeSwitcher = () => {
    const { setDark, setLight, isLight } = useTheme();

    const onThemeToggle = useCallback(() => {
        if (isLight) {
            setDark();
        } else {
            setLight();
        }
    }, [isLight, setLight, setDark]);

    return (
        <div>
            <input id="checkbox" type="checkbox" checked={!isLight} onChange={onThemeToggle} />
            <div className="container">
                <label htmlFor="checkbox" id="switch">
                    <div className="mode"></div>
                </label>
            </div>
        </div>
    );
};
