
export type { AddProps , AddItem }
export { add }

import { request } from '../Request'
import { Add } from '../Requests'


interface AddItem {
    selling_plan ?: number
    properties ?: Record<string,string>
    quantity : number
    id : number
}


interface AddProps {
    section_url ?: string
    sections ?: Array<string>
    items : Array<AddItem>
}


async function add ( props : FormData | AddProps ){
    return await request(Add,props)
}