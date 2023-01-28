import supabase from 'services/supabase'

// get the menu from the supbase database
const getMenu = async () => {
  const { data: menu, error } = await supabase.from('pizzas').select('*')

  return [menu, error]
}

export default getMenu
