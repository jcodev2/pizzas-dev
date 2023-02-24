const addZero = (num) => {
  if (typeof num !== 'number') throw new Error('The argument must be a number')
  if (Number.isNaN(num)) throw new Error('The argument must be a number')

  return num < 10 ? `${num}.0` : num
}

export default addZero
