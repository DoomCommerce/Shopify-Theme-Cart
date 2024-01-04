
export type {
    Measurement as AreaMeasurement ,
    Unit as AreaUnit
}


interface Measurement {
    reference_unit : Unit
    quantity_unit : Unit
    measured_type : 'area'
}


/**
 *  ｍ２ : Square Meters  
 */

type Unit = 'm2'