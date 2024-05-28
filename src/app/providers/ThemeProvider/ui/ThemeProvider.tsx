import { FC, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeProvider: FC = (props) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? Theme.LIGHT) as Theme,
  );

  const toggleTheme = () =>
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
    );

  const themeProps = useMemo(() => ({ theme, setTheme: toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeProps}>
      {props.children}
    </ThemeContext.Provider>
  );
};
