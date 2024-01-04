
export type { ChangeProps }
export { change }

import { request } from '../Request'
import { Change } from '../Requests'
import { OneOf } from '../Typings/Internal'


type Identifier = {
    line : number
} | {
    id : number
}

type Options = OneOf<{
    selling_plan ?: null | number
    properties ?: Record<string,number | boolean | string>
    quantity ?: number
}>


type ChangeProps = Identifier & Options

async function change ( props : FormData | ChangeProps ){
    return await request(Change,props)
}
