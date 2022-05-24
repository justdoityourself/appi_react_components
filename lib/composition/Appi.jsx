import {loadAppi} from 'appi_react'
import {useEffect} from 'react'

export default function Appi({children})
{
    useEffect(()=> {
        loadAppi({autoLogin:true});
      },[])

    return (children instanceof Function) ? children({}) : children;
}
