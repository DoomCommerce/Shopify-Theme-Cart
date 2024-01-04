
export { UnitMeasurement }

export * from './Volume'
export * from './Weight'
export * from './Size'
export * from './Area'

import { VolumeMeasurement } from './Volume'
import { WeightMeasurement } from './Weight'
import { SizeMeasurement } from './Size'
import { AreaMeasurement } from './Area'


type UnitMeasurement = 
    | VolumeMeasurement
    | WeightMeasurement
    | SizeMeasurement 
    | AreaMeasurement

