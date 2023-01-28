import { useEffect, useState } from 'react'
import getMenu from 'utilities/getMenu'

const useMenu = () => {
  const [menu, setMenu] = useState([])
  const [error, setError] = useState(null)

  const fetchMenu = async () => {
    const [menu, error] = await getMenu()

    if (error) {
      setError(error)
      return
    }

    setMenu(menu)
  }

  useEffect(() => {
    fetchMenu()
  }, [])

  return [menu, error]
}

export default useMenu
