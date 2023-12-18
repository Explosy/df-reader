export interface IReader {
  read(): Promise<any>
}

export interface IReadStrategy {
  read(): Promise<any>
}

export class EdfFile {
  private headers: EdfHeaders
  private signals: Array<Signal>
  constructor(headers: EdfHeaders, signals: Array<Signal>) {
    this.headers = headers
    this.signals = signals
  }

  public getHeaders(): EdfHeaders {
    return this.headers
  }

  public getSignals(): Array<Signal> {
    return this.signals
  }
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
export interface Signal {
  values: Array<number>
}
