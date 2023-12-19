export interface IReader {
  read(): Promise<any>
}

export interface IReadStrategy {
  read(): Promise<any>
}

export interface EdfHeaders {
  version: string
  localPatientIdentification: string
  localRecordingIdentification: string
  startDateRecording: string
  startTimeRecording: string
  numberOfBytesInHeader: number
  numberOfDataRecords: number
  durationOfDataRecords: number
  numberOfSignals: number
  labels: Array<string>
  transducerTypes: Array<string>
  physicalDimensions: Array<string>
  physicalMinimums: Array<number>
  physicalMaximums: Array<number>
  prefilterings: Array<string>
}

export interface GdfHeaders {

}

export interface BdfHeaders {

}

export interface Signal {
  values: Array<number>
}
