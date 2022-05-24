import {useEffect,useState} from 'react'
import {registerEventHandler,removeEventHandler} from 'appi_react'

export default function LoginState({children,onLogin,onLogout,onNoAccount})
{
    const [login,setLogin] = useState("loading");

    useEffect(()=>{
        const id = registerEventHandler((type)=>{
            switch(type){
                case "login": 
                    if(onLogin)onLogin();
                    return setLogin(type);
                case "logout": 
                    if(onLogout)onLogout();
                    return setLogin(type);
                case "noAccount": 
                    if(onNoAccount)onNoAccount();
                    return setLogin(type);
                default: 
                    return;
            }
        });

        return ()=>removeEventHandler(id);
    },[]);

    return (children instanceof Function) ? children({login}) : children;
}
