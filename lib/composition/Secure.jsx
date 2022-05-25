import {useSecure} from 'appi_react'

export default function Secure({children,hook,authenticate})
{
    //TODO
    const [object,mutate] = useSecure(hook,authenticate);

    return children([object,mutate]);
}
