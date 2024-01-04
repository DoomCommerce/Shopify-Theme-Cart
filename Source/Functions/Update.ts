
export type { UpdateProps }
export { update }

import { request } from '../Request'
import { Update } from '../Requests'
import { OneOf } from '../Typings/Internal'


type UpdateProps = OneOf<{
    attributes ?: Record<string,string>
    updates ?: Record<number | string,number> | Array<number>
    note ?: string
}>

async function update ( props : UpdateProps ){
    return await request(Update,props)
}