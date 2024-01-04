
export type { UnitPriceMeasurement , WithUnitPrice }

import { UnitMeasurement } from './mod'


type WithUnitPrice = {} | {
    unit_price_measurement : UnitPriceMeasurement
    unit_price : number
}

type UnitPriceMeasurement = UnitMeasurement & {
    quantity_value : string
    reference_value : number
}