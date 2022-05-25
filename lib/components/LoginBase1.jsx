import {Card,CardActions,CardContent,Checkbox,Button,TextField,Snackbar,Alert} from '@mui/material';
import {gvt} from 'grid-variable-template'

import {login} from 'appi_react' 
import {useState} from 'react';

export default function LoginBase({onLogin,toSignUp,onWaiting, Logo}) {
  const [checked, setChecked] = useState(true);
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [sb, setSb] = useState(false);

  const tryLogin = async ()=>{
    onWaiting(true);
    const result = await login(username,password,"", checked); 
    onWaiting(false);

    if(!result)
      setSb(true)
    else if (onLogin)
      onLogin();
  };

  return (
    <div className={'gvt'} style={{'--gr':'1fr auto 1fr','--gc':'1fr'}}>
      <Snackbar
        anchorOrigin={{ vertical:"top", horizontal:"center" }}
        open={sb}
        autoHideDuration={3000}
        onClose={()=>setSb(!sb)}>
          <Alert onClose={()=>setSb(!sb)} severity="error" sx={{ width: '100%' }}>
           Invalid Login Details
          </Alert>
      </Snackbar>
      <div></div>
      <Card sx={{ minWidth: 320, maxWidth: 420 }}>
        <CardContent>
          <div className={'gvt'} style={{'--gr':'1fr','--gc':'1fr','marginBottom':'24px'}}>
            <Logo />
          </div>
          <div className={'gvt'} style={{'--gr':'1fr 1fr','--gg':'16px','--gc':'1fr'}}>
            <TextField value={username} onChange={(e)=>setUser(e.target.value)}
              label="Username"
              size="small"
              style={{width:'100%'}}
            />
            <TextField value={password} onChange={(e)=>setPassword(e.target.value)}
              label="Password"
              size="small"
              type="password"
              style={{width:'100%'}}
            />
          </div>
        </CardContent>
        <CardActions>
          <div className={'gvt'} style={{'--gr':'1fr','--gc':'auto 1fr auto'}}>
            <span style={{fontSize:"14px"}}><Checkbox size="small" checked={checked} onChange={()=>setChecked(!checked)}/> Stay Logged</span>
            <span></span>
            <Button size="small" onClick={tryLogin}>Continue</Button>
          </div>
        </CardActions>
      </Card>
      <div className={'gvt'} style={{'--gr':'1fr auto','--gc':'1fr'}}>
        <div></div>
        <span style={{fontSize:'16px',marginBottom:'16px'}}>Don't have an account? <Button onClick={()=>toSignUp()} color="secondary" variant="text">Sign Up</Button></span>
      </div>
    </div>
  );
}