
export { clear }

import { WithSections } from '../mod'
import { request } from '../Request'
import { Clear } from '../Requests'


type ClearProps = {} | WithSections

async function clear ( props : ClearProps ){
    return await request(Clear,props ?? {})
}