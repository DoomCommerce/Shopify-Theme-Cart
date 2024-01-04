
export type { AddProps , AddItem }
export { add }

import { WithSections } from '../mod'
import { request } from '../Request'
import { Form } from '../Typings/Internal'
import { Add } from '../Requests'


interface AddItem {
    selling_plan ?: number
    properties ?: Record<string,string>
    quantity : number
    id : number
}


type AddProps = WithSections & {
    items : Array<AddItem>
}


async function add ( props : Form | AddProps ){
    return await request(Add,props)
}