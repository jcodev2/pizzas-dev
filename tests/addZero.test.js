import addZero from 'utilities/addZero'
import { describe, expect, it } from 'vitest'

describe('addZero', () => {
  it('should be a function', () => {
    expect(typeof addZero).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof addZero(1)).toBe('string')
  })

  it('should return a string with a .0 if the number is less than 10', () => {
    expect(addZero(1)).toBe('1.0')
  })
})
