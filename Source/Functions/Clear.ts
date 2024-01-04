
export { clear }

import { request } from '../Request'
import { Clear } from '../Requests'


async function clear (){
    return await request(Clear,{})
}