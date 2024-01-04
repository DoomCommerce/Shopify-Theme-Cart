
export { query }

import { request } from '../Request'
import { Query } from '../Requests'


async function query (){
    return await request(Query)
}