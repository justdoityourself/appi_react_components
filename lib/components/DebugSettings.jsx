import {Card,CardActions,CardContent,Typography,Slider,TextField,InputAdornment,Button} from '@mui/material';
import { AccountTree, Adb} from '@mui/icons-material';
import {useState} from 'react'

const logLevels = [
    {
      value: 0,
      label: 'Errors',
    },
    {
      value: 1,
      label: 'Info',
    },
    {
      value: 2,
      label: 'Debug',
    },
  ];
       
export default function DebugSettings({useApp}) {

    const {logging,setLogging} = useApp();
    //const [dirty,setDirty] = useState("");
    const [qid,setQid] = useState("");
    //const [tsx,setTsx] = useState("");
    //const [delta,setDelta] = useState("");

    return (
        <Card sx={{ minWidth: 320, maxWidth: 420 }}>
            <div className={'gvt'} style={{'marginLeft':'20px','--gr':'1fr','--gg':'8px','--gc':'auto auto 1fr'}}>
                <Adb />
                <h3>Debug</h3>
            </div>
            <CardContent>
                <div className={'gvt'} style={{'--gr':'repeat(5,auto)','--gg':'32px','--gc':'1fr'}}>
                    <div style={{width:"100%",padding:16}}>
                        <Typography gutterBottom>
                            Logging
                        </Typography>                    
                        <Slider
                            style={{marginTop:32}}
                            aria-label="Always visible"
                            value={logging}
                            onChange={(e,v)=>setLogging(v)}
                            step={1}
                            marks={logLevels}
                            max={2}
                            valueLabelDisplay="on"
                        />
                    </div>

                    <div style={{width:"100%"}}>
                        <TextField
                            label="qid"
                            size="small"
                            value={qid}
                            style={{width:'100%'}}
                            onChange={e=>setQid(e.target.value)}
                        />                
                        <Button onClick={async ()=>{console.log(await window.AppiClient.NetTsx(qid),await window.AppiClient.Delta(qid))}}>Delta</Button>
                        <Button onClick={async ()=>{console.log(await window.AppiClient.Get(qid))}}>Get</Button>
                        <Button onClick={async ()=>{console.log(await window.AppiClient.Dirty())}}>Dirty</Button>
                        <Button onClick={async ()=>{console.log(await window.AppiClient.Push(qid))}}>Push</Button>
                    </div>
                </div>

            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}