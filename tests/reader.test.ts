import { describe, expect, it } from 'vitest'
import { createReader } from '../src/reader'

describe('reader', () => {
  it('createReaderShouldThrowErrorIfTypeIsUnknown', () => {
    expect(() => {
      createReader(new ArrayBuffer(0), 'unknown')
    }).toThrow()
  })
  it('createReaderShouldNotThrowErrorIfTypeIsKnown', () => {
    expect(() => {
      createReader(new ArrayBuffer(0), 'EDF')
    }).not.toThrow()
    expect(() => {
      createReader(new ArrayBuffer(0), 'BDF')
    }).not.toThrow()
    expect(() => {
      createReader(new ArrayBuffer(0), 'GDF')
    }).not.toThrow()
  })
})
