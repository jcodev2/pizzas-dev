import { useEffect, useState } from 'react'
import { getMenu, getSixPizzas } from 'utilities/getMenu'

const useMenu = () => {
  const [menu, setMenu] = useState([])
  const [pizzasOfTheDay, setPizzasOfTheDay] = useState([])
  const [error, setError] = useState(null)

  const fetchMenu = async () => {
    const [menu, error] = await getMenu()

    if (error) {
      setError(error)
      return
    }

    setMenu(menu)
  }

  const fetchPizzasOfTheDay = async () => {
    const [pizzasOfTheDay, error] = await getSixPizzas()

    if (error) {
      setError(error)
      return
    }

    setPizzasOfTheDay(pizzasOfTheDay)
  }

  useEffect(() => {
    fetchMenu()
  }, [])

  useEffect(() => {
    fetchPizzasOfTheDay()
  }, [])

  return [menu, pizzasOfTheDay, error]
}

export default useMenu
