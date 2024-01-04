
export { Cart }

import { DiscountApplication , Currencies , Item } from './mod'

interface Cart {

    cart_level_discount_applications : Array<DiscountApplication>

    requires_shipping : boolean

    attributes : Record<string,string>

    currency : Currencies

    token : string
    note : string

    original_total_price : number
    total_discount : number
    total_weight : number
    total_price : number

    item_subtotal_price : number
    item_count : number
    items : Array<Item>
}