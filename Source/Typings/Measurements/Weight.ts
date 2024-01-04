
export type {
    Measurement as WeightMeasurement ,
    Unit as WeightUnit
}


interface Measurement {
    reference_unit : Unit
    quantity_unit : Unit
    measured_type : 'weight'
}


/**
 *  ｍｇ : Milligram  
 *  　ｇ : Grams  
 *  ｋｇ : Kilograms
 */

type Unit = 'mg' | 'g' | 'kg'