import { debounce } from 'lodash'

const saveDataToLocalStorage = debounce((key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Error saving data to local storage:', error)
  }
}, 500)

export default saveDataToLocalStorage
