import { debounce } from 'lodash'

const createDefaultArray = debounce(() => {
  const array = []
  const data = localStorage.getItem('cart')

  if (!data) {
    localStorage.setItem('cart', JSON.stringify(array))
  }
}, 500)

export default createDefaultArray
