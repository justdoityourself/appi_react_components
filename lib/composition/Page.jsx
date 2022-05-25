import {loadAppi} from 'appi_react'
import {useEffect,useState} from 'react'

export default function Page({children,page,start,count,format})
{
    const [elements,setElements] = useState([]);
    
    

    useEffect(()=> {
        //TODO AUTO MAP $history and previous pages
        let _elements = [];

        //for()

    },[page,start,count])

    return (children instanceof Function) ? children({elements}) : React.cloneElement(children, {elements});
}
