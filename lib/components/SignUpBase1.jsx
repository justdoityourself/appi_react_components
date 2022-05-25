import {Card,CardActions,CardContent,Button,TextField,Typography,Checkbox} from '@mui/material';
import {signup,login} from 'appi_react'
import {useState} from 'react';
import {gvt} from 'grid-variable-template'

/*
Callback: onSignUp, called when a sign up completes and after login.
Callback: onWaiting(true, false or string), call when a long background event is pending.
Callback: toLogin, called to indicate switch to login view.
Component: Logo, controls the logo graphic.
Boolean: basic, controls if the appi account type will be basic or advanced. ( Advanced takes a few seconds to generate a private key ).
*/

export default function SignUpBase({onSignUp,onWaiting,toLogin,Logo, basic}) {
  const [username, setUser] = useState("");
  const [userError, setUserError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [checked, setChecked] = useState(true);
  

  const createAccount = async ()=>{
    if(!username || username.length < 5)
    {
      setUserError(true);
      return;
    }

    if(!pw1 || pw1 !== pw2 || pw1.length < 5)
    {
      setPwError(true);
      return;
    }

    onWaiting("Generating a secure identity. This will take a second...");

    const error = await signup(username,pw1, basic); 

    if(error) {
      onWaiting(false);
      setUserError(true);
    }
    else {
      await login(username,pw1,"", checked); 
      onWaiting(false);
      if(onSignUp) onSignUp();
    }
  }

  return (
    <div className={'gvt'} style={{'--gr':'1fr auto 1fr','--gc':'1fr'}}>
      <div></div>
      <Card sx={{ minWidth: 320, maxWidth: 420 }}>
        <CardContent>
          <div className={'gvt'} style={{'--gr':'1fr','--gc':'1fr','marginBottom':'24px','textAlign':'center'}}>
           <Typography variant="h5"> Welcome to  </Typography>
          <Logo />
           <br/>
           <Typography variant="subtitle2">To start enter a user name and password</Typography>
          </div>
          <div className={'gvt'} style={{'--gr':'1fr 1fr','--gg':'16px','--gc':'1fr'}}>
            <TextField value={username} onChange={(e)=>{setUser(e.target.value);setUserError(false);setPwError(false);}}
              error={userError}
              helperText={userError?"Invalid Username":""}
              label="Username"
              size="small"
              style={{width:'100%'}}
            />
            <TextField value={pw1} onChange={(e)=>{setPw1(e.target.value);setPwError(false);setUserError(false);}}
              error={pwError}
              helperText={pwError?"Password invalid or doesn't match":""}
              label="Password"
              size="small"
              type="password"
              style={{width:'100%'}}
            />
            <TextField value={pw2} onChange={(e)=>{setPw2(e.target.value);setPwError(false);setUserError(false);}}
              label="Confirm Password"
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
            <Button size="small" onClick={createAccount}>Create Account</Button>
          </div>
        </CardActions>
      </Card>
      <div className={'gvt'} style={{'--gr':'1fr auto','--gc':'1fr'}}>
        <div></div>
        <span style={{marginBottom:'16px'}}>Already have an account? <Button onClick={()=>toLogin()} color="secondary" variant="text">Login</Button></span>
      </div>
    </div>
  );
}