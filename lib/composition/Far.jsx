import {serialize} from 'appi_react'
import {useState,useEffect} from 'react'

export default function Far({children,id,type,access})
{
    const [far,setFar] = useState({});

    if(!type)
        type = "user";

    if(!access)
        access = "public";

    useEffect(()=>{
        (async ()=>{
            const _id = await serialize(()=>window.AppiClient.LookupId(type,id,access))
            const result = await serialize(()=>window.AppiClient.Far(_id));
            setFar(JSON.parse(result));
        })();
    },[]);

    return (children instanceof Function) ? children(far) : cloneElement(children, far);
}
