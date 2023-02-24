const capitalizeFirstLetter = (string) => {
  if (typeof string !== 'string') {
    throw new Error('The argument must be a string')
  }
  if (Number.isNaN(string)) {
    throw new Error('The argument must be a string')
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter
