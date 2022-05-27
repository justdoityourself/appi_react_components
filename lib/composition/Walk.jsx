import { useEffect, useState } from 'react';
import {appiKeys,serialize} from 'appi_react'


// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
// https://dev.to/bhupendra1011/composition-vs-context-in-react-5cmb
export default function Walk({children,object,path,parse,format, type,access})
{
    const client = window.AppiClient;
    let [objects,setObjects] = useState({});

    if(!type)
        type = "user";

    if(!access)
        access = "public";

    if(!parse)
        parse = (id)=>serialize(()=>client.LookupId(type,id,access));

    useEffect(()=>{
        (async ()=>{
            let resolve = object || {};

            if(path)
            {
              for(const step of path.split('/'))
                resolve = resolve[step] || {};
            }

            let walk = {};
            for(const key of appiKeys(resolve))
            {
                const resource = parse ? await parse(key) : key;

                const _far = await serialize(()=>client.Far(resource));
                const far = JSON.parse(_far||"{}");

                walk[key] = format ? format(far) : far;
            }

            setObjects(walk);
        })();
    },[object])

    return children([objects,setObjects]);
}
