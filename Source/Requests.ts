
export { withJSON , Change , Update , Query , Clear , Add }


const { root } = window.Shopify.routes


const withJSON = {
    headers : {
        'Content-Type' : 'application/json' as const
    }
}

const asPost = { method : 'POST' }


const Query = new Request
    ( root + `cart.js` )

const Clear = new Request
    ( root + `cart/clear.js` , asPost )

const Add = new Request
    ( root + `cart/add.js` , asPost )

const Update = new Request
    ( root + `cart/update.js` , asPost )

const Change = new Request
    ( root + `cart/change.js` , asPost )

