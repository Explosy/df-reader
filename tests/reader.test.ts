import { describe, expect, it } from 'vitest'
import { createReader } from '../src/reader'
import { BdfFile, EdfFile, GdfFile } from '../src/files'

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
  it('readMethodShouldReturnEdfFileIfTypeIsEdf', () => {
    const reader = createReader(new ArrayBuffer(0), 'EDF')
    expect(reader.read()).resolves.toBeInstanceOf(EdfFile)
  })
  it('readMethodShouldReturnBdfFileIfTypeIsBdf', () => {
    const reader = createReader(new ArrayBuffer(0), 'BDF')
    expect(reader.read()).resolves.toBeInstanceOf(BdfFile)
  })
  it('readMethodShouldReturnGdfFileIfTypeIsGdf', () => {
    const reader = createReader(new ArrayBuffer(0), 'GDF')
    expect(reader.read()).resolves.toBeInstanceOf(GdfFile)
  })
})
