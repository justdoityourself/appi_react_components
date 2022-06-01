import {ListItem,ListItemText,ListItemAvatar,ListItemButton} from '@mui/material';

export default function Event({color,icon,onEvent,title,subtitle}) {
  return (
      <ListItem alignItems="flex-start" style={{position:'relative'}}>
          <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:color||"",opacity:0.1}}></div>
         <ListItemButton onClick={()=>onEvent()}>
            <ListItemAvatar>
                {icon}
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={subtitle}
            />
        </ListItemButton>
      </ListItem>
  );
}