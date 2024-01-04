
export type { ChangeProps }
export { change }

import { OneOf , Form } from '../Typings/Internal.ts'
import { WithSections } from '../mod.ts'
import { request } from '../Request.ts'
import { Change } from '../Requests.ts'


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
