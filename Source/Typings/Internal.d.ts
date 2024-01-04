
export { OneOf }


/**
 *  @see https://stackoverflow.com/a/52140738
 */

type OneOf<Type,Key extends keyof Type = keyof Type> =
    Key extends keyof Type 
        ? { [ Property in Key ] -?: Type[ Key ] } 
            & Partial<Record<Exclude<keyof Type,Key>,never>>
        : never


declare global {

    interface Window {

        Shopify : {
            routes : {
                root : string
            }
        }
    }
}