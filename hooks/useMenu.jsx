import { useEffect, useMemo, useState } from 'react'
import { readMenu, readSixPizzas } from 'utilities/crud/readMenu'

const useMenu = () => {
  const [menu, setMenu] = useState([])
  const [pizzasOfTheDay, setPizzasOfTheDay] = useState([])
  const [error, setError] = useState(null)

  const fetchMenu = async () => {
    const [menu, error] = await readMenu()

    if (error) {
      setError(error)
      return
    }

    setMenu(menu)
  }

  const fetchPizzasOfTheDay = async () => {
    const [pizzasOfTheDay, error] = await readSixPizzas()

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

  const memorizedMenu = useMemo(() => menu, [menu])

  const memorizedPizzasOfTheDay = useMemo(
    () => pizzasOfTheDay,
    [pizzasOfTheDay]
  )

  return [memorizedMenu, memorizedPizzasOfTheDay, error]
}

export default useMenu
