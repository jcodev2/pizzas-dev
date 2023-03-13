import useSWR from 'swr'
import { readMenu, readSixPizzas } from 'utilities/crud/readMenu'

const useMenu = () => {
  const { data: menu, error } = useSWR('menu', async () => {
    try {
      const menu = await readMenu()
      return menu
    } catch (error) {
      console.log(error)
    }
  })
  const { data: sixPizzas, error: sixPizzasError } = useSWR(
    'sixPizzas',
    async () => {
      try {
        const sixPizzas = await readSixPizzas()
        return sixPizzas
      } catch (error) {
        console.log(error)
      }
    }
  )

  return {
    menu,
    sixPizzas,
    isLoading: !error && !menu,
    isError: error,
    isSixPizzasLoading: !sixPizzasError && !sixPizzas,
    isSixPizzasError: sixPizzasError,
    insertMenu
  }
}

export default useMenu
