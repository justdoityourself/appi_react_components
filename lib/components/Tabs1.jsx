import {useState} from 'react'
import {Tabs,Tab} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';

export default function AppiTabs({tabs}) {
    const [tab, setTab] = useState(0);

    return (
        <div style={{width:'100%',maxWidth:'100%',height:'100%',overflowY:'auto'}}>

            <Tabs
                value={tab}
                onChange={(_, newValue) => { setTab(newValue); }}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                {tabs.map((t,i)=><Tab key={t.label} value={i} label={t.label} />)}
            </Tabs>
            
            <br />

            <SwipeableViews
                axis='x'
                index={tab}
                onChangeIndex={(index) => { setTab(index); }}
            >
                {tabs.map((t,i)=><div style={{overflow:'hidden'}} key={t.label} hidden={tab!=i}>{t.contents}</div>)}
            </SwipeableViews>
        </div>)
};
