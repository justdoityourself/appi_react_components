import {AvatarGroup,Avatar} from '@mui/material';
import {appiKeys} from 'appi_react'
import {Walk} from 'appi_react_components'

export default function UserStack({userIds,onUser}) {
  return (
    <Walk object={userIds}>{([publicView])=> {return(
      <AvatarGroup max={6}>
        {appiKeys(publicView).map(k=>
          <Avatar onClick={()=>onUser(k)} key={k} sx={{ width: 56, height: 56 }} alt={publicView?.[k]?.profile?.name} src={publicView?.[k]?.profile?.avatar} />
        )}
      </AvatarGroup>
    )}}</Walk>
)};