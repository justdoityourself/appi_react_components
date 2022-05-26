import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline,useMediaQuery} from '@mui/material';

import {useState,useMemo,Fragment} from 'react';

export default function MailBase({children,primary,secondary}) {
  const shouldDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [dark, _setDark] = useState(window.localStorage.dark == "true" || shouldDark);

  const setDark = dark => {
    window.localStorage.dark = dark;
    _setDark(dark)
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: dark ? 'dark' : 'light',
          primary:{
            main:primary
            /*
              light?: string;
              main: string;
              dark?: string;
              contrastText?: string;
            */
          },
          secondary:{
            main:secondary
          }
          
          /*
          ...error
          ...warning
          ...info
          ...success
           */
        },
      }),
    [dark],
  );

  return ( 
  <ThemeProvider theme={theme}>
    <Fragment>
      <CssBaseline />
      {(children instanceof Function) ? children({dark,setDark}) : children}
    </Fragment>
  </ThemeProvider>);
}