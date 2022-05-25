import {loadAppi} from 'appi_react'
import {useEffect} from 'react'

export default function Plot({children,logging,format})
{
    //TODO
    useEffect(()=> {
        loadAppi({autoLogin:true,logging});
    },[])

    return (children instanceof Function) ? children({}) : children;
}
