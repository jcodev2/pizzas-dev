import Router from 'next/router'
import { useEffect, useState } from 'react'
import supabase from 'services/supabase'

const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      await supabase.auth.getUser().then((user) => {
        if (user.data?.user) {
          // console.log('user', user.data.user)
          setUser(user.data.user)
        }
      })
    }
    getUserData()
  }, [])

  const checkUser = async () => {
    // check if user is logged in
    const user = supabase.auth.getUser()
    if (user) {
      // redirect to dashboard
      Router.push('/home')
    } else {
      // redirect to login
      Router.push('/')
    }
  }
  useEffect(() => {
    checkUser()
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
