import {List,Divider} from '@mui/material';
import {appiKeys} from 'appi_react'
import {Walk, UserRow} from 'appi_react_components'

export default function UserList({userIds,onUser}) {
  return (
    <Walk object={userIds}>{([publicView])=> {return(
        <div className={'gvt'} style={{'--gr':'minmax(0px,1fr)','--gc':'minmax(0px,1fr)'}}>
            <List sx={{ overflowY: "scroll", width: '100%', height:'100%', bgcolor: 'background.paper' }}>
                {appiKeys(publicView).map(k=><UserRow key={k} onUser={onUser} userId={k} profile={publicView?.[k]?.profile} />)}
                <Divider variant="inset" component="li" />
            </List>
        </div>)}}
    </Walk>
)};

