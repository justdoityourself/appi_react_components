import {ListItemAvatar,Avatar,ListItemButton} from '@mui/material';

export default function UserTile({profile,onUser,userId}) {
  return (
      <div style={{height:72,width:72,position:'relative'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:profile.color,opacity:0.1}}></div>
        <ListItemButton style={{padding:0,height:"100%",width:"100%"}} onClick={()=>onUser(userId)}>
            <ListItemAvatar style={{padding:8,height:"100%",width:"100%"}}>
                <Avatar sx={{ width: 56, height: 56 }} crossOrigin="anonymous" alt={profile?.name} src={profile?.avatar} />
            </ListItemAvatar>
        </ListItemButton>
      </div>
  );
}