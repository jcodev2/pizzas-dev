const addZero = (num) => {
  const numCheck = Number.isInteger(num) ? parseInt(num) : parseFloat(num)

  // check if the num is integer and less than 10
  if (Number.isInteger(numCheck) && num < 10) return `${num}.0`

  // check if the num is float and less than 10
  if (numCheck < 10) return `${num}`

  // check if the num is greater than 10
  if (numCheck > 10) return `${num}`
}

export default addZero
