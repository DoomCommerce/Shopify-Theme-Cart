
export { request }

import { withJSON } from './Requests.ts'
import { Cart } from './mod.ts'


const toJSON = ( response : Response ) => response.json()


async function request < Data extends FormData | object > ( 
    request : Request , 
    data ?: Data 
){

    if( data ){

        const isForm = ( data instanceof FormData )

        const body = ( isForm )
            ? data : JSON.stringify(data)

        if( ! isForm )
            request = new Request(request,withJSON)

        request = new Request(request,{ body })
    }

    return await fetch(request)
        .then(toJSON)
        .then(( data ) => data as Cart )
}