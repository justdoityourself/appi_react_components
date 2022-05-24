import {useAppi} from 'appi_react'

export default function Hook({children,hook})
{
    const [object,mutate] = useAppi(hook);

    return children([object,mutate]);
}
