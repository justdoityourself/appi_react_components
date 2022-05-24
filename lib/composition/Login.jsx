import {useEffect,useState} from 'react'
import {loggedIn,registerEventHandler,removeEventHandler} from 'appi_react'

export default function Login({children})
{
    const [login,setLogin] = useState(loggedIn);

    useEffect(()=>{
        const id = registerEventHandler((type)=>{
            switch(type){
                case "login": 
                    return setLogin(true);
                case "logout":
                case "noAccount":
                    return setLogin(false);
                default:
                    return;
            }
        });

        return ()=>removeEventHandler(id);
    },[]);

    return children({login});
}
