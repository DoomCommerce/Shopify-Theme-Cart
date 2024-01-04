
export type { UpdateProps }
export { update }

import { OneOf , Form } from '../Typings/Internal.ts'
import { WithSections } from '../mod.ts'
import { request } from '../Request.ts'
import { Update } from '../Requests.ts'


type UpdateProps = WithSections & OneOf<{
    attributes ?: Record<string,string>
    updates ?: Record<number | string,number> | Array<number>
    note ?: string
}>

async function update ( props : Form | UpdateProps ){
    return await request(Update,props)
}