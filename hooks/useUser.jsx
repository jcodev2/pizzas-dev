import { useEffect, useState } from 'react'
import supabase from 'services/supabase'

const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      try {
        await supabase.auth.getUser().then((user) => {
          if (user.data?.user) {
            setUser(user.data.user)
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
    getUserData()
  }, [])

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
  }
  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return {
    user,
    signInWithGithub,
    signOut
  }
}

export default useUser
