import {Page,TypedEvent} from 'appi_react_components'
import {useAppi} from 'appi_react'
import {List} from '@mui/material';

export default function EventBase({topics}) {
  const [user] = useAppi("@user");

  return (
    <Page page={user?.["~mail"]} format={e=>!topics ? e : ((e?.type in topics) ? e : undefined)}>
      {({elements}) => {
        return (      
          <div className={'gvt'} style={{'--gr':'minmax(0px,1fr)','--gc':'minmax(0px,1fr)'}}>
            <List sx={{ overflowY: "scroll", width: '100%', height:'100%', bgcolor: 'background.paper' }}>
              {elements.map((e,i)=><TypedEvent key={i} event={e} />)}
            </List>
          </div>
      )}}
    </Page>
  );
}