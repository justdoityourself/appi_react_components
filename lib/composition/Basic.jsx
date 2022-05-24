import {loadBasic} from 'appi_react'
import {useEffect} from 'react'

export default function Appi({children,logging})
{
    useEffect(()=> {
      loadAppi({autoLogin:true,logging});
    },[])

    return (children instanceof Function) ? children({}) : children;
}
