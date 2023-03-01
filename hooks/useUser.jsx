import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import supabase from 'services/supabase'

const useUser = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  const getUserData = useMemo(async () => {
    try {
      const user = await supabase.auth.getUser()
      if (user.data?.user) {
        setUser(user.data.user)
        if (router.pathname === '/') {
          router.push('/home')
        }
      } else {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }, [router])

  const signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: getURL()
      }
    })
  }
  const signOut = async () => {
    await supabase.auth.signOut()
  }

  useEffect(() => {
    getUserData
  }, [getUserData])

  return {
    user,
    signInWithGithub,
    signOut
  }
}

export default useUser
