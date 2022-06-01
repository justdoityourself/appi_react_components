import {Event,Far} from "appi_react_components"
import {Avatar} from '@mui/material';

export default function TypedEvent({event}) {
    switch(event?.contents?.type){
        case "friend_request":
            return (
                <Far id={event.from}>{(user)=> 
                    <Event onEvent={()=>console.log("click")} icon={
                        <Avatar sx={{ width: 48, height: 48 }} alt={user?.profile?.name} src={user?.profile?.avatar} />
                    } title={"Friend Request from " + user?.profile?.name} subtitle={"Sent " + new Date(event._created).toLocaleString().split(',')[1]} />
                }</Far>
            );
        default:
            return <Event />
    }
}