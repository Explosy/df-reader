import type { EdfHeaders, IReadStrategy, Signal } from './types'
import { EdfFile } from './files'

export class EdfStrategy implements IReadStrategy {
  async read(): Promise<EdfFile> {
    return new EdfFile({} as EdfHeaders, new Array<Signal>())
  }
}
export class BdfStrategy implements IReadStrategy {
  read(): Promise<any> {
    return Promise.resolve()
  }
}
export class GdfStrategy implements IReadStrategy {
  read(): Promise<any> {
    return Promise.resolve()
  }
}
