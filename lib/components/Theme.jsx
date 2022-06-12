import { createTheme, ThemeProvider } from '@mui/material/styles';
import {CssBaseline/*,useMediaQuery*/} from '@mui/material';
import {useMemo} from 'react';
import { createGlobalState } from 'react-hooks-global-state';



const { useGlobalState } = createGlobalState({dark:window.localStorage.dark == "true"});

export default function Theme({children,primary,secondary}) {

  const [dark, _setDark] = useGlobalState('dark');
  //const shouldDark = useMediaQuery('(prefers-color-scheme: dark)');

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
    [dark,primary,secondary],
  );

  return ( 
  <ThemeProvider theme={theme}>
    <>
      <CssBaseline />
      {(children instanceof Function) ? children({dark,setDark,theme}) : children}
    </>
  </ThemeProvider>);
}