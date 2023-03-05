import supabase from 'services/supabase'

// get the menu from the supbase database
const readMenu = async () => {
  try {
    const { data: menu, error } = await supabase.from('pizzas').select('*')

    return [menu, error]
  } catch (error) {
    console.log(error)
  }
}

const readSixPizzas = async () => {
  try {
    const { data: menu, error } = await supabase
      .from('pizzas')
      .select('*')
      .limit(6)
      .order('id', { ascending: true })

    return [menu, error]
  } catch (error) {
    console.log(error)
  }
}

export { readMenu, readSixPizzas }
