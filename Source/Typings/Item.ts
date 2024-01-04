
export type { Item }

import { 
    DiscountAllocation , QuantityRule , 
    WithThumbnail , WithUnitPrice , Discount 
} from './mod'


type Item = 
    & WithUnitPrice 
    & WithThumbnail 
    & ItemBase 


interface Option {
    value : string
    name : string
}


interface ItemBase {

    product_id : number
    variant_id : number
    handle : string
    key : string
    sku : string
    id : number

    properties : Record<string,string>

    title : string
    quantity : number
    
    price : number
    original_price : number
    discounted_price : number
    line_price : number
    original_line_price : number
    total_discount : number
    final_price : number
    final_line_price : number

    discounts : Array<Discount>

    grams : number

    product_description : string
    product_title : string
    product_type : string
    vendor : string
    
    product_has_only_default_variant : boolean
    requires_shipping : boolean
    has_components : boolean
    gift_card : boolean
    taxable : boolean

    url : string

    variant_title : string
    variant_options : Array<string>
    options_with_values : Array<Option>

    line_level_discount_allocations : Array<DiscountAllocation>
    line_level_total_discount : number

    quantity_rule : QuantityRule
}