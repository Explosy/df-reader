import type { BdfHeaders, EdfHeaders, GdfHeaders, IReadStrategy, Signal } from './types'
import { BdfFile, EdfFile, GdfFile } from './files'

export class EdfStrategy implements IReadStrategy {
  async read(): Promise<EdfFile> {
    return new EdfFile({} as EdfHeaders, new Array<Signal>())
  }
}
export class BdfStrategy implements IReadStrategy {
  async read(): Promise<BdfFile> {
    return new BdfFile({} as BdfHeaders, new Array<Signal>())
  }
}
export class GdfStrategy implements IReadStrategy {
  async read(): Promise<GdfFile> {
    return new GdfFile({} as GdfHeaders, new Array<Signal>())
  }
}
