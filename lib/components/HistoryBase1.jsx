import {Card,CardActions,CardContent,Button,TextField,Typography,Checkbox} from '@mui/material';
import {Page} from 'appi_react_components'

//ALL MAILBOX EVER
export default function MailBase({page}) {
  return (
    <Page page={page}>
      {({ currentBreakpoint }) => {
        switch (currentBreakpoint) {
          default:
          case 'mobile':
            return <Mobile />
          case 'tablet':
            return <Tablet />
          case 'laptop':
          case 'desktop':
            return <Desktop />
        }
      }}
    </Page>
  );
}