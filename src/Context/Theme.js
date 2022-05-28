import { useState, createContext } from 'react';

!localStorage.getItem('Theme') && localStorage.setItem(
    'Theme', 
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light': 'dark'
);

export const Theme = createContext();

const ThemeStore = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('Theme'));
    return <Theme.Provider value={[theme, setTheme]}>{children}</Theme.Provider>;
};

export default ThemeStore;