import { useEffect, useState } from 'react';
import {appiKeys} from 'appi_react'


// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
// https://dev.to/bhupendra1011/composition-vs-context-in-react-5cmb
export default function Walk({children,object,path,parse})
{
    let [objects,setObjects] = useState({});

    useEffect(()=>{
        (async ()=>{
            let resolve = object;

            if(path)
            {
              for(const step of path.split('/'))
                resolve = resolve[step];
            }

            let walk = {};
            for(const key of appiKeys(resolve))
            {
                const resource = parse ? parse(key) : key;

                const far = await handler.Far(resource);

                const[key] = JSON.parse(far||"{}");
            }

            setObjects(walk);
        })();
    },[object])

    return children([objects,setObjects]);
}
