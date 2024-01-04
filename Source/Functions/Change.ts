
export type { ChangeProps }
export { change }

import { OneOf , Form } from '../Typings/Internal'
import { WithSections } from '../mod'
import { request } from '../Request'
import { Change } from '../Requests'


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


type ChangeProps = Identifier & Options & WithSections

async function change ( props : Form | ChangeProps ){
    return await request(Change,props)
}
