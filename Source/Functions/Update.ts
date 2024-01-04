
export type { UpdateProps }
export { update }

import { OneOf , Form } from '../Typings/Internal'
import { WithSections } from '../mod'
import { request } from '../Request'
import { Update } from '../Requests'


type UpdateProps = WithSections & OneOf<{
    attributes ?: Record<string,string>
    updates ?: Record<number | string,number> | Array<number>
    note ?: string
}>

async function update ( props : Form | UpdateProps ){
    return await request(Update,props)
}