import getDate from 'utilities/getDate'
import { describe, expect, it } from 'vitest'

const format = new Date()

describe('getDate', () => {
  it('should be a function', () => {
    expect(typeof getDate).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof getDate()).toBe('string')
  })

  it('should return a date in the format mm/dd/yyyy', () => {
    const date = getDate()
    const [month, day, year] = date.split('/')

    expect(month.length).toBe(2)
    expect(day.length).toBe(2)
    expect(year.length).toBe(4)
  })

  it('should return a date with a leading zero for single digit months', () => {
    const date = getDate()
    const [month] = date.split('/')

    expect(month).toBe(
      format.getMonth() + 1 < 10
        ? '0' + (format.getMonth() + 1)
        : format.getMonth() + 1
    )
  })

  it('should return a date with a leading zero for single digit days', () => {
    const date = getDate()
    const [, day] = date.split('/')

    expect(day).toBe(
      format.getDate() < 10 ? '0' + format.getDate() : format.getDate()
    )
  })
})
