import {Card,CardActions,CardContent,Button,Switch,TextField,InputAdornment,CardHeader,IconButton,Typography} from '@mui/material';
import {Storage, Person,Dns,Settings,SettingsBrightness} from '@mui/icons-material';

import { logout,useAppi } from 'appi_react'
import { CirclePicker } from 'react-color';
import { useState/*,useEffect*/,useCallback } from 'react';
       
//This file uses a manual optimistic render pattern
export default function _Settings({dark, setDark,setAction}) {
    const [name,setName] = useState();
    const [color,setColor] = useState();
    const [saving,setSaving] = useState();
    const [user,setUser] = useAppi("@user",{},useCallback(()=>{
        setName();
        setColor();
        setSaving(false);
    }));

    //const [ip,setIp] = useState("0.0.0.0");
    //const userId = window.AppiClient.UserId();

    /*useEffect( () => {
        (async ()=>{
            const res = await fetch('https://geolocation-db.com/json/');
            const json = await res.json();
            console.log(json);
        })();
    
    }, [])*/

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
                        value={name || user?.['~public']?.profile?.name}
                        style={{width:'100%'}}
                        onChange={e=>{setName(e.target.value)}}

                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Person />
                            </InputAdornment>
                            ),
                        }}
                    />
                    {/*<TextField
                        label="APPI Primary"
                        size="small"
                        value={'localhost'}
                        disabled
                        style={{width:'100%'}}

                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Storage />
                            </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        label="APPI Secondary"
                        size="small"
                        disabled
                        value={'disabled'}
                        style={{width:'100%'}}

                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Dns />
                            </InputAdornment>
                            ),
                        }}
                    />*/}

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
                    <CirclePicker color={color || user?.['~public']?.profile?.color} onChangeComplete={({hex})=>setColor(hex)}/>{/*https://casesandberg.github.io/react-color/*/}
                    <Button style={{width:'100%'}} color='secondary' variant="outlined" size="small" onClick={() => logout()}>Logout</Button>
                    {/*<div>
                        <div style={{maxWidth:'100%',overflow:"hidden",display:"block"}}>
                            "User Id"
                            <Typography noWrap style={{fontSize:12}}>
                                {userId}
                            </Typography>
                        </div>
                        <div style={{maxWidth:'300px'}}>{user?.['~public']?.identity?.pub_key}</div>
                    </div>*/}

                </div>

            </CardContent>
            <CardActions>
            <div className={'gvt'} style={{'--gr':'1fr','--gc':'1fr auto auto'}}>
                <span></span>
                {
                    (color||name)&&!saving ? <Button size="small" onClick={() => {
                        setUser({'~public':{'profile':{color,name}}});
                        setSaving(true);
                    }}>Save</Button> : null
                }
                <Button size="small" onClick={() => {
                    setAction("")
                    }}>Close</Button>
            </div>
            </CardActions>
        </Card>
    );
}