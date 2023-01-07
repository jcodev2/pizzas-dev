import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aroymlgjkmfbqdrnsjch.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

/* async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  })
} */
