
export type {
    Measurement as VolumeMeasurement ,
    Unit as VolumeUnit
}


interface Measurement {
    reference_unit : Unit
    quantity_unit : Unit
    measured_type : 'volume'
}


/**
 *  ｍｌ : Milliliters  
 *  ｃｌ : Centiliters  
 *  　Ｌ : Liters  
 *  ｍ３ : Meters Cubed
 */

type Unit = 'ml' | 'cl' | 'L' | 'm3'