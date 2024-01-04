
export { clear }

import { WithSections } from '../mod.ts'
import { request } from '../Request.ts'
import { Clear } from '../Requests.ts'


type ClearProps = {} | WithSections

async function clear ( props : ClearProps ){
    return await request(Clear,props ?? {})
}