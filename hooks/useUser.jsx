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
  }, [])

  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      'http://localhost:3000/home'

    url = url.includes('http') ? url : `https://${url}`

    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`

    return url
  }

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
  }, [])

  return {
    user,
    signInWithGithub,
    signOut
  }
}

export default useUser
