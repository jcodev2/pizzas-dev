const addZero = (num) => {
  if (typeof num !== 'number') throw new Error('The argument must be a number')

  return num < 10 ? `${num}.0` : num
}

export default addZero
