import {useAppi} from 'appi_react'


// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
// https://dev.to/bhupendra1011/composition-vs-context-in-react-5cmb
export default function Hooks(props)
{
    let objects = {};
    let mutate = {};

    /* eslint-disable */
    for(const [k,v] of Object.entries(props||{}))
    {
        if(k=="children")
            continue;
        const [d,s] = useAppi(v);
        objects[k] = d;
        mutate['set' + k[0].toUpperCase() + k.slice(1)] = s;
    }
    /* eslint-enable */

    return props.children([objects,mutate]);
}
