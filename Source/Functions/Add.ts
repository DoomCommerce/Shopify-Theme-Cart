
export type { AddProps , AddItem }
export { add }

import { WithSections } from '../mod.ts'
import { request } from '../Request.ts'
import { Form } from '../Typings/Internal.ts'
import { Add } from '../Requests.ts'


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