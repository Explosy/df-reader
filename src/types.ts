export interface IReader {
  read(): Promise<any>
}

export interface IReadStrategy {
  read(): Promise<any>
}
