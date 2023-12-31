import type { IReadStrategy, IReader } from './types'
import { BdfStrategy, EdfStrategy, GdfStrategy } from './strategies'

export function createReader(buffer: ArrayBufferLike, fileType: string): IReader {
  return new Reader(buffer, fileType)
}

class Reader implements IReader {
  private data: Uint8Array
  private readStrategy: IReadStrategy
  constructor(buffer: ArrayBufferLike, fileType: string) {
    this.data = new Uint8Array(buffer)
    switch (fileType) {
      case 'EDF':
        this.readStrategy = new EdfStrategy()
        break
      case 'BDF':
        this.readStrategy = new BdfStrategy()
        break
      case 'GDF':
        this.readStrategy = new GdfStrategy()
        break
      default:
        throw new Error(`Unknown file type: ${fileType}`)
    }
  }

  async read(): Promise<any> {
    return this.readStrategy.read()
  }
}
