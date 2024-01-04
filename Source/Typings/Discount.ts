
export type { DiscountApplication , DiscountAllocation , Discount }


interface DiscountApplication {

    type : string | 'script'
    key : string
    title : string
    description : null | string
    created_at : string
    value : string
    value_type : 'percentage' | 'fixed_amount'
    allocation_method : string | 'across' 
    target_selection : string | 'all' | 'explicit'
    target_type : string | 'line_item'
    total_allocated_amount : number
}

interface DiscountAllocation {
    discount_application : DiscountApplication
    amount : number
}

interface Discount {
    amount : number
    title : string
}