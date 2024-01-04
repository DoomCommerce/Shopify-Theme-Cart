
export { query }

import { request } from '../Request.ts'
import { Query } from '../Requests.ts'


async function query (){
    return await request(Query)
}