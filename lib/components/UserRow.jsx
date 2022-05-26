import {ListItem,ListItemText,ListItemAvatar,Avatar,ListItemButton} from '@mui/material';

export default function UserRow({profile,onUser,userId}) {
  return (
      <ListItem alignItems="flex-start" style={{position:'relative'}}>
          <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:profile.color,opacity:0.1}}></div>
         <ListItemButton onClick={()=>onUser(userId)}>
            <ListItemAvatar>
                <Avatar sx={{ width: 48, height: 48 }} crossOrigin="anonymous" alt={profile?.name} src={profile?.avatar} />
            </ListItemAvatar>
            <ListItemText
            primary={profile?.name || "No Username"}
            />
        </ListItemButton>
      </ListItem>
  );
}