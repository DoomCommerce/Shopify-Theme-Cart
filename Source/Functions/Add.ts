
export type { AddItem }
export { add }

import { request } from '../Request'
import { Add } from '../Requests'


interface AddItem {
    selling_plan ?: number
    properties ?: Record<string,string>
    quantity : number
    id : number
}

async function add ( items : FormData | Array<AddItem> ){
    return await request(Add,{ items })
}