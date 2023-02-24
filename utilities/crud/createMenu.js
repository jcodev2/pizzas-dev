import { debounce } from 'lodash'
import supabase from 'services/supabase'

const createMenu = debounce(async (pizza) => {
  try {
    const { error } = await supabase.from('pizzas_cart').insert([pizza])
    if (error) throw error
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}, 1000)

export default createMenu
