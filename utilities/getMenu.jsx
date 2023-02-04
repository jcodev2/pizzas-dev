import supabase from 'services/supabase'

// get the menu from the supbase database
const getMenu = async () => {
  try {
    const { data: menu, error } = await supabase.from('pizzas').select('*')

    return [menu, error]
  } catch (error) {
    console.log(error)
  }
}

const getSixPizzas = async () => {
  try {
    const { data: menu, error } = await supabase
      .from('pizzas')
      .select('*')
      .limit(6)

    return [menu, error]
  } catch (error) {
    console.log(error)
  }
}

export { getMenu, getSixPizzas }
