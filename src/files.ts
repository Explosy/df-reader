import type { BdfHeaders, EdfHeaders, GdfHeaders, Signal } from './types'

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
export class BdfFile {
  private headers: BdfHeaders
  private signals: Array<Signal>
  constructor(headers: BdfHeaders, signals: Array<Signal>) {
    this.headers = headers
    this.signals = signals
  }

  public getHeaders(): BdfHeaders {
    return this.headers
  }

  public getSignals(): Array<Signal> {
    return this.signals
  }
}
export class GdfFile {
  private headers: GdfHeaders
  private signals: Array<Signal>
  constructor(headers: GdfHeaders, signals: Array<Signal>) {
    this.headers = headers
    this.signals = signals
  }

  public getHeaders(): GdfHeaders {
    return this.headers
  }

  public getSignals(): Array<Signal> {
    return this.signals
  }
}
