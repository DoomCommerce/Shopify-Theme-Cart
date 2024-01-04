
export { UnitMeasurement }

export * from './Volume.ts'
export * from './Weight.ts'
export * from './Size.ts'
export * from './Area.ts'

import { VolumeMeasurement } from './Volume.ts'
import { WeightMeasurement } from './Weight.ts'
import { SizeMeasurement } from './Size.ts'
import { AreaMeasurement } from './Area.ts'


type UnitMeasurement = 
    | VolumeMeasurement
    | WeightMeasurement
    | SizeMeasurement 
    | AreaMeasurement

