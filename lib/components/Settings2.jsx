import {Card,CardActions,CardContent,Button,Switch,TextField,InputAdornment,CardHeader,IconButton,Typography} from '@mui/material';
import { Person,Settings,SettingsBrightness} from '@mui/icons-material';

import { logout,useOptimistic } from 'appi_react'
import { CirclePicker } from 'react-color';
       
//This version uses the useOptimistic hook
export default function _Settings({dark, setDark,setAction}) {
    const {store:user,setStore:setUser,flush,dirty,clear} = useOptimistic("@user")

    return (
        <Card sx={{ minWidth: 320, maxWidth: 420 }}>
            <div className={'gvt'} style={{'marginLeft':'20px','--gr':'1fr','--gg':'8px','--gc':'auto auto 1fr'}}>
                <Settings />
                <h3>Settings</h3>
            </div>
            <CardContent>
                <div className={'gvt'} style={{'--gr':'repeat(5,auto)','--gg':'32px','--gc':'1fr'}}>

                    <TextField
                        label="User Name"
                        size="small"
                        value={user?.['~public']?.profile?.name}
                        style={{width:'100%'}}
                        onChange={e=>{setUser({"~public":{profile:{name:e.target.value}}})}}

                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Person />
                            </InputAdornment>
                            ),
                        }}
                    />

                    <div className={'gvt'} style={{padding:'0px 8px','--gr':'1fr','--gc':'auto auto 1fr auto','--gg':'8px'}}>
                        <SettingsBrightness />
                        <h5 style={{margin:'8px 0px'}}>Dark Mode</h5>
                        <span></span>
                        <Switch
                            checked={dark}
                            onChange={()=>setDark(!dark)}
                            label="Dark Mode"
                        />
                    </div>
                    <CirclePicker 
                        color={user?.['~public']?.profile?.color}
                        onChangeComplete={({hex})=>setUser({"~public":{profile:{color:hex}}})}
                    />
                    <Button style={{width:'100%'}} color='secondary' variant="outlined" size="small" onClick={() => logout()}>Logout</Button>
                </div>

            </CardContent>
            <CardActions>
            <div className={'gvt'} style={{'--gr':'1fr','--gc':'1fr auto auto'}}>
                <span></span>
                {
                    dirty ? <Button size="small" onClick={() => flush()}>Save</Button> : null
                }
                <Button size="small" onClick={() => {
                    clear();
                    setAction("")
                }}>Close</Button>
            </div>
            </CardActions>
        </Card>
    );
}