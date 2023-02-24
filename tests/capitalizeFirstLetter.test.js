import capitalizeFirstLetter from 'utilities/capitalizeFirstLetter'
import { describe, expect, it } from 'vitest'

describe('capitalizeFirstLetter', () => {
  it('should be a function', () => {
    expect(typeof capitalizeFirstLetter).toBe('function')
  })

  it('should throw an error if the argument is not a string', () => {
    expect(() => capitalizeFirstLetter(1)).toThrow(
      'The argument must be a string'
    )
  })

  it('should return a string', () => {
    expect(typeof capitalizeFirstLetter('test')).toBe('string')
  })

  it('should return a string with the first letter capitalized', () => {
    expect(capitalizeFirstLetter('test')).toBe('Test')
  })

  it('should throw an error if the argument is NaN', () => {
    expect(() => capitalizeFirstLetter(NaN)).toThrow(
      'The argument must be a string'
    )
  })
})
