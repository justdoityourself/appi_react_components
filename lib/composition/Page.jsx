import {useEffect,useState,cloneElement} from 'react'

export default function Page({children,page,start,count,format})
{
    const [elements,setElements] = useState([]);
    
    if(!format) format = e=>e;

    useEffect(()=> {
        let _elements = [];

        if(!start && !count){
            for(const [idx,element] of Object.entries(page?.["$para"] || {}))
            {
                if(idx.startsWith('_'))
                    continue;
                if(format(element))
                    _elements.push(element);
            }
        }
        else{
            //TODO AUTO MAP $history and previous pages
        }

        setElements(_elements);
    },[page,start,count])

    return (children instanceof Function) ? children({elements}) : cloneElement(children, {elements});
}
