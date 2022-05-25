import {loadBasic} from 'appi_react'
import {useEffect} from 'react'

export default function Basic({children,logging})
{
    useEffect(()=> {
      loadBasic({autoLogin:true,logging});
    },[])

    return (children instanceof Function) ? children({}) : children;
}
