import { useRouter } from 'next/router'
import supabase from 'services/supabase'
import useSWR from 'swr'

const useUser = () => {
  const router = useRouter()

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

  const { data: user, error } = useSWR('user', async () => {
    try {
      const user = await supabase.auth.getUser()
      if (user.data?.user) {
        if (router.pathname === '/') {
          router.push('/home')
        }
        return user.data.user
      } else {
        router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  })

  return {
    user,
    signInWithGithub,
    signOut,
    isLoading: !error && !user,
    isError: error
  }
}

export default useUser
