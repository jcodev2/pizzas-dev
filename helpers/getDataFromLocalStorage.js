const getDataFromLocalStorage = (key) => {
  try {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error('Error getting data from local storage:', error)
  }
}

export default getDataFromLocalStorage
