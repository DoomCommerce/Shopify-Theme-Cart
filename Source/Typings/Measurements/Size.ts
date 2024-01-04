
export type {
    Measurement as SizeMeasurement ,
    Unit as SizeUnit
}


interface Measurement {
    reference_unit : Unit
    quantity_unit : Unit
    measured_type : 'size'
}


/**
 *  ｍｍ : Millimeters  
 *  ｃｍ : Centimeters  
 *  　ｍ : Meters  
 */

type Unit = 'mm' | 'cm' | 'm'